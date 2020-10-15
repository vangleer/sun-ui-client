<template>
  <div class="sun-doc-layout sun-doc-content">

    <section>
      <h1>{{title}}</h1>
      <div class="card">
        <h3>介绍</h3>
        <div>
          {{desc}}
        </div>
      </div>
      <div class="card">
        <h3>引入</h3>
        <div v-highlight>
          <pre><code v-html="importCode"></code></pre>
        </div>
      </div>
      <!-- 代码展示 -->
      <show-code :cart-list="cartList"/>

      <!-- API介绍 -->

      <!-- Row 属性列表 -->
      <props-list :props-list="parentPropsList" title="Row Props"/>

      <!-- Col 属性列表 -->
      <props-list :props-list="childPropsList" title="Col Props"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="eventsList"/>
    </section>
  
  </div>
</template>

<script>
  import data from '../assets/data/index'
  export default {
    data() {
      return {
        ...data.layoutData
      }
    },
  }
</script>

<style lang="less">
</style>