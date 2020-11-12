<template>
  <div class="sun-doc-stepper sun-doc-content">
    <section>
      <h1>{{data.collapseData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.collapseData.importCode"></code></pre>
        </div>
      </div>
     
      <!-- 代码展示 -->
     <show-code :cart-list="data.collapseData.cartList"/>

      <!-- 属性列表 -->
      <props-list :props-list="data.collapseData.parentPropsList" title="Collapse Props"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.collapseData.eventsList" title="Collapse Events"/>

      <props-list :props-list="data.collapseData.childPropsList" title="CollapseItem Props"/>
      
      <!-- 插槽列表 -->
      <slots-list :slots-list="data.collapseData.slotsList" title="CollapseItem Slots"/>

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
