<template>
  <div class="sun-doc-rate sun-doc-content">
    <section>
      <h1>{{data.rateData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.rateData.importCode"></code></pre>
        </div>
      </div>
    
      <!-- 代码展示 -->
      <show-code :cart-list="data.rateData.cartList"/>

      <!-- 属性列表 -->
      <props-list :props-list="data.rateData.propsList"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.rateData.eventsList"/>
    </section>

  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['data'])
    },
  }
</script>
