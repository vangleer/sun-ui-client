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
        <input type="text" :placeholder="$t('common.searchPlaceholder')" />
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
            {{ $i18n.locale==='zh'?'中文':$i18n.locale }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showVersionBox: false,
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
        this.$i18n.locale = this.$i18n.locale==='zh'?'en':'zh'
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
