<template>
  <div class="sun-doc-content sun-doc-tab-bar">
    <section>
      <h1>{{data.tabbarData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.tabbarData.importCode"></code></pre>
        </div>
      </div>
     
      <!-- 代码展示 -->
     <show-code :cart-list="data.tabbarData.cartList"/>

      <!-- Tabbar 属性列表 -->
      <props-list :props-list="data.tabbarData.propsList" title="Tabbar Props"/>

      <!-- TabbarItem 属性列表 -->
      <props-list :props-list="data.tabbarData.itemPropsList" title="TabbarItem Props" :is-show-title="false"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.tabbarData.eventsList" title="TabbarItem Events"/>

      <!-- TabbarItem 插槽列表 -->
      <slots-list :slots-list="data.tabbarData.itemSlotsList" title="TabbarItem Slots"/>
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
