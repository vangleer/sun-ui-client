<template>
  <!-- <div class="sun-doc-nav" :class="{'sun-doc-nav-fiexd':isFiexd}"> -->
  <div class="sun-doc-nav" :style="{top:scrollTop+'px'}">
    <div class="sun-doc-nav-group" v-for="(item,index) in navList" :key="index">
      <div class="sun-doc-nav-title">{{item.desc}}</div>
      <div class="sun-doc-nav-item" :class="{active:activeNav.groupIndex==index&&activeNav.navIndex===index2}"
        v-for="(navItem,index2) in item.group" :key="index2" @click="handleNavClick(navItem,index,index2)">
        <a href="javascript:;">
          {{navItem.text}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../assets/data/index.js'
  export default {
    data() {
      return {
        activeNav: {
          groupIndex: 0,
          navIndex: 0,

        },
        isFiexd: false,
        navList: data.navList,
        scrollTop: 60
      }
    },
    mounted() {
      document.addEventListener('scroll', (e) => {
        let top = document.documentElement.scrollTop
        this.scrollTop = 60 - top
        // if (top > 61) return
        if (top >= 60) {
          this.scrollTop = 0
        }
        console.log(this.scrollTop)
      })
    },
    methods: {
      handleNavClick(item, index, index2) {
        this.activeNav.groupIndex = index
        this.activeNav.navIndex = index2

        this.$router.push(item.path)
      }
    }
  }
</script>

<style lang="less" scoped>
  .sun-doc-nav {
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    z-index: 1;
    min-width: 220px;
    max-width: 220px;
    padding: 24px 0 72px;
    overflow-y: scroll;
    background-color: #fff;
    box-shadow: 0 8px 12px #ebedf0;
  }

  .sun-doc-nav-fiexd {
    top: 0;
  }

  .sun-doc-nav-group {
    margin-bottom: 16px;
  }

  .sun-doc-nav-title {
    padding: 8px 0 8px 30px;
    color: #455a64;
    font-weight: 500;
    font-size: 15px;
    line-height: 28px;
  }

  .sun-doc-nav-item a {
    display: block;
    margin: 0;
    padding: 8px 0 8px 30px;
    color: #455a64;
    font-size: 14px;
    line-height: 28px;
    -webkit-transition: color 0.2s;
    transition: color 0.2s;
  }

  .sun-doc-nav-item a:hover,
  .sun-doc-nav-item.active a {
    color: #4fc08d;
  }
</style>