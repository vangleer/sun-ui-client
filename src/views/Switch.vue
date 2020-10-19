<template>
  <div class="sun-doc-switch sun-doc-content">
    <section>
      <h1>{{data.switchData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.switchData.importCode"></code></pre>
        </div>
      </div>
      
      <!-- 代码展示 -->
      <show-code :cart-list="data.switchData.cartList"/>

      <!-- 属性列表 -->
      <props-list :props-list="data.switchData.propsList"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.switchData.eventsList"/>
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
