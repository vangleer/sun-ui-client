<template>
  <div class="sun-doc-cell sun-doc-content">
    <section>
      <h1>{{data.paginationData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.paginationData.importCode"></code></pre>
        </div>
      </div>
      <!-- 代码展示 -->
     <show-code :cart-list="data.paginationData.cartList"/>

      <!-- 属性列表 -->
      <props-list :props-list="data.paginationData.propsList"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.paginationData.eventsList"/>

      <!-- 插槽列表 -->
      <slots-list :slots-list="data.paginationData.slotsList"/>
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
