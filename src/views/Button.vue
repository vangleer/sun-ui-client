<template>
  <div class="sun-doc-content sun-doc-button">
    <section>
      <h1>{{data.buttonData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.buttonData.importCode"></code></pre>
        </div>
      </div>
      <!-- 代码展示 -->
     <show-code :cart-list="data.buttonData.cartList"/>

      <!-- 属性列表 -->
      <props-list :props-list="data.buttonData.propsList"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.buttonData.eventsList"/>
      <!-- 插槽列表 -->
      <slots-list :slots-list="data.buttonData.slotsList"/>  
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