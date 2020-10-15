<template>
  <div class="sun-doc">
    <sun-doc-header />
    <sun-doc-nav ref="navRef"/>
    <div class="sun-doc-container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
        <!-- 移动端页面 -->
        <div class="sun-doc-mobile">
          <!-- <iframe src="https://java0088.github.io/sun/dist/#/button" frameborder="0"></iframe> -->
          <!-- <iframe :src="childtPath" frameborder="0"></iframe> -->
        </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Nav from './components/Nav'
  export default {
    components: {
      'sun-doc-header': Header,
      'sun-doc-nav': Nav,
    },
    data() {
      return {
        childtPath:''
      }
    },
     watch:{
      $route(to,from){
        this.$refs.navRef.changeRouter()
        // this.childtPath = 'https://java0088.github.io/sun/dist/#'+to.path // 线上
        this.childtPath = 'http://localhost:8080/#'+to.path // 测试
      }
    },
    activated() {
      console.log('切换页面了')
    },
    mounted() {
      this.childtPath = 'http://localhost:8080/#/'
    },
  }
</script>

<style lang="less">
  .sun-doc {
    width: 100%;
  }

  .sun-doc-container {
    padding-left: 220px;
    overflow: hidden;
    width: 100%;
    height: 100%;

    pre {
      margin-bottom: 0px;
    }
  }

  .sun-doc-content {
    max-width: 66%;
    min-width: 500px;

    [class^=language-],
    .hljs.clean {
      background-color: #fafafa;
      border-radius: 10px;
      padding: 16px;
    }
  }

  .sun-doc-content section {
    padding: 30px;
    overflow: hidden;
  }

  .sun-doc-content h1 {
    margin: 0 0 30px;
    font-size: 30px;
    cursor: default;
  }

  .sun-doc-content h2 {
    margin: 45px 0 20px;
    font-size: 22px;
  }

  .sun-doc-content h3 {
    margin-bottom: 16px;
  }

  .sun-doc-content h1,
  .sun-doc-content h2,
  .sun-doc-content h3,
  .sun-doc-content h4,
  .sun-doc-content h5,
  .sun-doc-content h6 {
    color: #323233;
    line-height: 1.5;
    cursor: pointer;
  }

  .sun-doc-content .card {
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 12px #ebedf0;
  }

  .hljs-built_in,
  .hljs-attribute,
  .hljs-keyword,
  .hljs-name,
  .hljs-attr {
    color: #8080ff !important;
  }

  .hljs-string {
    color: #4fc08d !important;
  }

  .info-string {
    color: #4fc08d;
  }

  .info-attr {
    color: #8080ff;
  }

  .hljs {
    color: #58727e !important;
  }

  .hljs-number,
  .hljs-literal {
    color: #eb6f6f !important;
  }

  // 表格样式
  .sun-doc-content table {
    width: 100%;
    margin-top: 12px;
    color: #34495e;
    font-size: 13px;
    line-height: 1.5;
    border-collapse: collapse;

    thead {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
    }

    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;

      th {
        padding: 8px 10px;
        font-weight: 500;
        text-align: left;
      }
    }

    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;

      td {
        padding: 8px;
        border-top: 1px solid #f1f4f8;
      }
    }
  }

  code {
    position: relative;
    display: block;
    overflow-x: auto;
    color: #58727e;
    font-weight: 400;
    font-size: 13.4px;
    font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
    line-height: 26px;
    white-space: pre-wrap;
    word-wrap: break-word;
    -webkit-font-smoothing: auto;

  }
  // 移动手机样式
  .sun-doc-mobile {
    position: fixed;
    top: 90px;
    right: 30px;
    z-index: 1;
    box-sizing: border-box;
    width: 360px;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: #ebedf0 0 4px 12px;
    background-attachment: scroll;
    // background-color: #fff;
    iframe {
      width: 100%;
      height: 600px;
      overflow: hidden; 
      &::-webkit-scrollbar {
        width: 0;
        background: transparent;
      }
    }
  }

  p,
  td {
    code {
      display: inline;
      margin: 2px 3px;
      padding: 0px 5px 4px;
      font-size: 13px;
      font-family: inherit;
      word-break: keep-all;
      background-color: #f0f2f5;
      border-radius: 4px;
      -webkit-font-smoothing: antialiased;
    }
  }
</style>
