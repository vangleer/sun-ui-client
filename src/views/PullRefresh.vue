<template>
  <div class="sun-doc-pull-refresh sun-doc-content">
    <section>
      <h1>{{data.pullRefreshData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.pullRefreshData.importCode"></code></pre>
        </div>
      </div>
      
      <!-- 代码展示 -->
     <show-code :cart-list="data.pullRefreshData.cartList"/>

       <!-- 属性列表 -->
      <props-list :props-list="data.pullRefreshData.propsList"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.pullRefreshData.eventsList"/>
      <!-- 插槽列表 -->
      <slots-list :slots-list="data.pullRefreshData.slotsList"/>
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
