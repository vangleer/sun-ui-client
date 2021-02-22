<template>
  <div class="sun-doc-content sun-doc-home">
    <section>
      <!-- 代码展示 -->
      <div class="card">
        <div class="home-card">
          <div class="logo">
            <img src="../assets/imgs/logo.png" alt="sun-ui">
          </div>
          <h1>Sun</h1>
          <p class="home-tip">{{$t('common.sunDesc')}}</p>
          <div class="erweima">
            <img src="../assets/imgs/erweima.png" alt="sun-ui">
          </div>
        </div>
      </div>
    </section>

    <!-- 移动端页面
    <div class="sun-doc-mobile">
      <iframe src="https://java0088.github.io/sun/dist/#/" frameborder="0"></iframe>
      <iframe src="http://localhost:8081/#/" frameborder="0"></iframe>
    </div> -->
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">
  .home-card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: center;

    h1 {
      margin: 10px 0;
    }
  }
  .erweima {
    img {
      width: 120px;
      height: 120px;
    }
  }
  .home-tip {
    margin-bottom: 20px;
  }
</style>