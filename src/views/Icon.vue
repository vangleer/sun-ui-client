<template>
  <div class="sun-doc-icon sun-doc-content">

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
      <!-- 属性列表 -->
      <props-list :propsList="propsList"/>
      <div class="card">
        <h3>Events</h3>
        <table>
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in eventsList" :key="index">
              <td>{{ item.eventName }}</td>
              <td>{{ item.desc }}</td>
              <td>
                <span class="info-string">{{ item.callParams }}</span>
              </td>
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
        ...data.iconData
      }
    },
  }
</script>
