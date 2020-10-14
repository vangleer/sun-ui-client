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
      <h2>代码展示</h2>
      <!-- 代码展示 -->
      <div class="card" v-for="(item, index) in cartList" :key="index">
        <h3>{{ item.title }}</h3>
        <p v-html="item.desc"></p>
        <div v-highlight>
          <pre v-if="item.code"><code  class="language-html" v-text="item.code"></code></pre>
          <pre v-if="item.jsCode"><code class="language-js" v-text="item.jsCode"></code></pre>
        </div>
      </div>

      <!-- API介绍 -->
      <h2>API</h2>
      <div class="card">
        <h3>Checkbox Props</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in childPropsList" :key="index">
              <td>{{ item.propName }}</td>
              <td v-html="item.desc"></td>
              <td>
                <span class="info-string">{{ item.type }}</span>
              </td>
              <td>
                <span v-if="item.default === '-'">{{ item.default }}</span>
                <code v-else>{{ item.default }}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card">
        <h3>CheckboxGroup Props</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in parentPropsList" :key="index">
              <td>{{ item.propName }}</td>
              <td v-html="item.desc"></td>
              <td>
                <span class="info-string">{{ item.type }}</span>
              </td>
              <td>
                <span v-if="item.default === '-'">{{ item.default }}</span>
                <code v-else>{{ item.default }}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

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