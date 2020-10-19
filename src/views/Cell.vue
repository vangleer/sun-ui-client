<template>
  <div class="sun-doc-cell sun-doc-content">
    <section>
      <h1>{{data.cellData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.cellData.importCode"></code></pre>
        </div>
      </div>
      <!-- 代码展示 -->
     <show-code :cart-list="data.cellData.cartList"/>

      <!-- 属性列表 -->
      <props-list :props-list="data.cellData.propsList"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.cellData.eventsList"/>

      <!-- 插槽列表 -->
      <slots-list :slots-list="data.cellData.slotsList"/>
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
