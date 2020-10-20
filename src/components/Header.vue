<template>
  <div class="sun-doc-header">
    <!-- 左侧logo -->
    <div class="sun-doc-header-left">
      <!-- logo -->
      <a href="javascript:;" class="sun-doc-header-logo">
        <!-- logo图片 -->
        <img src="../assets/imgs/logo-green.png" alt="" />
        <!-- 标题 -->
        <span>sun-ui</span>
      </a>
      <!-- search -->
      <div class="sun-doc-search">
        <input v-model="searchValue" type="text" :placeholder="$t('common.searchPlaceholder')" @input="handleSearch"/>
        <div v-show="showSearchBox" class="sun-doc-search-box">
          <div class="title">Documentation</div>
          <div class="search-list">
            <div class="search-item" v-for="(item,index) in searchArr" :key="index" @click="handleSearchClick(item)">
              <div class="left">{{item.title}}</div>
              <div class="right" :class="{active:currentSearch===index}">
                <span v-if="item.subTitle">{{item.subTitle}}</span>
                <p>{{item.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧导航 -->
    <div class="sun-doc-header-right">
      <ul class="sun-doc-header-nav">
        <li>
          <a href="javascript:;"><img class="weapp-logo" src="../assets/imgs/weapp.png" alt="" /></a>
        </li>
        <li>
          <a href="javascript:;"><img class="github-logo" src="../assets/imgs/github-logo.png" alt="" /></a>
        </li>
        <li class="version" @click="showVersionBox=!showVersionBox">
          <a href="javascript:;">
            0.1.1 >
          </a>
          <transition name="sun">
            <div v-show="showVersionBox" class="version-list">
              <p v-for="item in versionList" :key="item.id">{{item.text}}</p>
            </div>
          </transition>
        </li>
        <li class="lang" @click="changeLanguage">
          <a href="javascript:;">
            {{ $i18n.locale==='zh-CN'?'中文':'En' }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['data'])
    },
    data() {
      return {
        searchValue:'',
        showVersionBox: false,
        showSearchBox:false,
        currentSearch:1,
        searchArr:[],
        timerId:'',
        versionList: [{
            id: 0,
            text: '0.1.0'
          },
          {
            id: 1,
            text: '0.1.1'
          },
        ]
      }
    },
    methods: {
      changeLanguage() {
        this.$i18n.locale = this.$i18n.locale==='zh-CN'?'en-US':'zh-CN'
        this.$store.commit('changeLanguage',this.$i18n.locale)
        localStorage.setItem('lang',this.$i18n.locale)
        location.hash = this.$i18n.locale+'/button'
        location.reload()
      },
      handleSearchClick(item) {
        let path = '/'+this.$i18n.locale+item.path
        this.$router.push(path)
        // 关闭弹框
        this.showSearchBox = false
        // 清空数据
        this.searchValue = ''
      },
      handleSearch() {
        if(this.timerId) {
          clearTimeout(this.timerId)
        }
        if(this.searchValue.trim().length>0) {
            let arr = []
            let navList = this.data.navList
              this.timerId = setTimeout(()=>{
                navList.forEach(item=>{
                item.group.forEach(navItem=>{
                  if(navItem.text.toLowerCase().indexOf(this.searchValue.toLowerCase())!==-1||navItem.desc.indexOf(this.searchValue)!==-1) {
                    let obj = {title:navItem.text,desc:navItem.desc,path:navItem.path}
                    arr.push(obj)
                  }
                })
              })
              // 搜索
              this.showSearchBox = true
              this.searchArr = arr
              console.log(arr)
            },800)
        }else {
           this.showSearchBox = false
        }
      }
    }
  }
</script>

<style lang="less">
  .sun-doc-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 800px;
    height: 60px;
    padding: 0 30px;
    background-color: #001938;
  }

  // 左侧
  .sun-doc-header-left {
    display: flex;
    align-items: center;
  }

  // logo
  .sun-doc-header-logo {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      margin-right: 6px;
    }

    span {
      font-size: 22px;
      color: #fff;
    }
  }

  // 搜索
  .sun-doc-search {
    position: relative;
    input {
      width: 200px;
      height: 60px;
      margin-left: 140px;
      color: #fff;
      font-size: 14px;
      background-color: transparent;
      border: none;

      &::placeholder {
        color: #aaafb8;
      }
    }
    .sun-doc-search-box {
      position: absolute;
      top: 50px;
      border-radius: 4px;
      margin: 6px 0 0;
      padding: 10px;
      text-align: left;
      background: #fff;
      border: none;
      z-index: 999;
      max-width: 600px;
      min-width: 500px;
      box-shadow: 0 4px 12px #ebedf0;
      cursor: pointer;
      .title {
        border-bottom: 1px solid #eee;
        height: 28px;
      }
      .search-item {
        margin-top: 10px;
        display: flex;
        .left {
          width: 30%;
          color: #58727e;
          text-align: right;
          padding: 5px 10px;
          font-size: 16px;
        }
        .right {
          width: 70%;
          padding: 5px 10px;
          border-left: 1px solid #4994df;
          span {
            color: #02060c;
            font-size: 16px;
            font-weight: 700;
          }
          p {
            color: #63676d;
          }
        }
        .active,
        .right:hover {
          background-color: #f6f9fd;
        }
      }
    }
  }

  // nav
  .sun-doc-header-nav {
    display: flex;
    align-items: center;

    li {
      margin-left: 20px;

      .weapp-logo {
        width: 26px;
        height: 26px;
        margin-top: 1px;
        transition: transform 0.2s;
      }

      .github-logo {
        width: 29px;
        height: 29px;
        transition: transform 0.2s;
      }

      img:hover {
        transform: scale(1.2);
      }
    }
  }

  .version,
  .lang {
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.7);
    padding: 3px 14px;
    border-radius: 12px;

    a {
      color: #fff;
    }
  }

  .version {
    .version-list {
      position: absolute;
      top: 120%;
      left: 0;
      padding-left: 10px;
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 12px #ebedf0;
      transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      color: #333;
      line-height: 36px;
      z-index: 10;
    }
  }

  .sun-enter,
  .sun-leave-to {
    opacity: 0;
  }

  .sun-enter-active,
  .sun-leave-active {
    transition: opacity 0.6;
  }
</style>
