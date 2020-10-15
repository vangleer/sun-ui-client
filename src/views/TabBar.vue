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
      <props-list :propsList="propsList" title="Tabbar Props"/>

      <!-- TabbarItem 属性列表 -->
      <props-list :propsList="itemPropsList" title="TabbarItem Props" :is-show-title="false"/>

      <div class="card">
        <h3>TabbarItem Slots</h3>
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
            <tr v-for="(item, index) in itemSlotsList" :key="index">
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
        ...data.tabbarData
      }
    },
  }
</script>

<style lang="less">
</style>