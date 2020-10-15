<template>
  <div class="sun-doc-cell sun-doc-content">
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
      <!-- 属性列表 -->
      <props-list :props-list="propsList"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="eventsList"/>

      <div class="card">
        <h3>Slots</h3>
        <table>
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in slotsList" :key="index">
              <td>{{ item.slotName }}</td>
              <td>{{ item.desc }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
import data from '../assets/data/index'
  export default {
    data() {
      return {
        ...data.cellData
      }
    },
  }
</script>
