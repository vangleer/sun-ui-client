<template>
  <div class="sun-doc-switch sun-doc-content">
    <section>
      <h1>Switch 开关</h1>
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
    </section>
   
  </div>
</template>
<script>
  import data from '../assets/data/index'
  export default {
    data() {
      return {
        ...data.switchData
      }
    },
  }
</script>
