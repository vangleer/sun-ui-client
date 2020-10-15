<template>
  <div class="sun-doc-content sun-doc-nav-bar">
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
      
      <!-- 属性列表 -->
      <props-list :props-list="propsList"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="eventsList"/>

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
        ...data.navBarData
      }
    },
  }
</script>