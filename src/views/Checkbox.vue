<template>
  <div class="sun-demo-checkbox sun-doc-content">
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

      <!-- API 介绍 -->
      
      <!-- Checkbox 属性列表 -->
      <props-list :propsList="childPropsList" title="Checkbox Props"/>

      <!-- CheckboxGroup 属性列表 -->
      <props-list :propsList="parentPropsList" title="CheckboxGroup Props" :is-show-title="false"/>

      <div class="card">
        <h3>Checkbox Events</h3>
        <table>
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in childEventsList" :key="index">
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
        <h3>CheckboxGroup Events</h3>
        <table>
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in parentEventsList" :key="index">
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
            <tr v-for="(item, index) in childSlotsList" :key="index">
              <td>{{ item.slotName }}</td>
              <td>{{ item.desc }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card">
        <h3>CheckboxGroup 方法</h3>
        <p>通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法</p>
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
            <tr v-for="(item, index) in parentMethodsList" :key="index">
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
    </section>

  </div>
</template>

<script>
  import data from '../assets/data/index'
  export default {
    data() {
      return {
       ...data.checkBoxData
      }
    },
  }
</script>

<style lang="less"></style>