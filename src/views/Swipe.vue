<template>
  <div class="sun-doc-stepper sun-doc-content">
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
      <props-list :propsList="propsList" title="Swipe Props"/>
      <div class="card">
        <h3>Swipe Events</h3>
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
        <h3>Swipe 方法</h3>
        <p>通过 ref 可以获取到 Swipe 实例并调用实例方法。</p>
        <table>
          <thead>
            <tr>
              <th>方法名</th>
              <th>说明</th>
              <th>参数</th>
              <th>返回值</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in methodList" :key="index">
              <td>{{ item.eventName }}</td>
              <td v-html="item.desc"></td>
              <td>
                <span class="info-string">{{ item.callParams }}</span>
              </td>
              <td>
                {{ item.callReturns }}
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
            <tr v-for="(item, index) in slotList" :key="index">
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
        ...data.swipeData
      }
    },
  }
</script>

<style lang="less">
</style>