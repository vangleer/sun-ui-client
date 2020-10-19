<template>
  <div class="sun-doc-content sun-doc-nav-bar">
    <section>
      <h1>{{data.navBarData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.navBarData.importCode"></code></pre>
        </div>
      </div>
     
      <!-- 代码展示 -->
      <show-code :cart-list="data.navBarData.cartList"/>
      
      <!-- 属性列表 -->
      <props-list :props-list="data.navBarData.propsList"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.navBarData.eventsList"/>

      <!-- 插槽列表 -->
      <slots-list :slots-list="data.navBarData.slotsList"/>
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