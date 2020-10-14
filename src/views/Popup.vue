<template>
  <div class="sun-doc-popup sun-doc-content">
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
      <h2>代码展示</h2>
      <!-- 代码展示 -->
      <div class="card" v-for="(item, index) in cartList" :key="index">
        <h3>{{ item.title }}</h3>
        <p v-html="item.desc">
        </p>
        <div v-highlight>
          <pre>
            <code class="language-html" v-text="item.code"></code>
            <code v-if="item.jsCode" class="language-js" v-text="item.jsCode"></code>
          </pre>
        </div>
      </div>

      <!-- API介绍 -->
      <h2>API</h2>
      <div class="card">
        <h3>Props</h3>
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
            <tr v-for="(item, index) in propsList" :key="index">
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
        ...data.popupData
      }
    },
  }
</script>

<style lang="less">
</style>