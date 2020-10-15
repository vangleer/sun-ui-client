<template>
  <div class="sun-doc-content sun-doc-tab-bar">
    <section>
      <h1>{{title}}</h1>
      <div class="card">
        <h3>引入</h3>
        <div v-highlight>
          <pre><code v-html="importCode"></code></pre>
        </div>
      </div>
     
      <!-- 代码展示 -->
     <show-code :cart-list="cartList"/>

      <!-- API介绍 -->

      <!-- Tabbar 属性列表 -->
      <props-list :props-list="propsList" title="Tabbar Props"/>

      <!-- TabbarItem 属性列表 -->
      <props-list :props-list="itemPropsList" title="TabbarItem Props" :is-show-title="false"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="eventsList" title="TabbarItem Events"/>

      <!-- TabbarItem 插槽列表 -->
      <slots-list :slots-list="itemSlotsList" title="TabbarItem Slots"/>
    </section>

  </div>
</template>
<script>
  import data from '../assets/data/index'
  export default {
    data() {
      return {
        ...data.tabbarData
      }
    },
  }
</script>

<style lang="less">
</style>