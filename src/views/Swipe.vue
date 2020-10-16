<template>
  <div class="sun-doc-stepper sun-doc-content">
    <section>
      <h1>{{title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="importCode"></code></pre>
        </div>
      </div>
     
      <!-- 代码展示 -->
     <show-code :cart-list="cartList"/>

      <!-- 属性列表 -->
      <props-list :props-list="propsList" title="Swipe Props"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="eventsList" title="Swipe Events"/>

      <!-- 方法列表 -->
      <methods-list 
        :methods-list="methodsList" 
        title="Swipe 方法" 
        desc="通过 ref 可以获取到 Swipe 实例并调用实例方法。"
      />

      <!-- 插槽列表 -->
      <slots-list :slots-list="slotsList"/>

    </section>
   
  </div>
</template>
<script>
  import data from '../assets/data/index'
  export default {
    data() {
      return {
        ...data.swipeData
      }
    },
  }
</script>

<style lang="less">
</style>