<template>
  <div class="sun-doc-pull-refresh sun-doc-content">
    <section>
      <h1>PullRefresh 下拉刷新</h1>
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
          <pre v-if="item.code"><code  class="language-html" v-text="item.code"></code></pre>
          <pre v-if="item.jsCode"><code class="language-js" v-text="item.jsCode"></code></pre>
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
  export default {
    data() {
      return {
        importCode: `import Vue from 'vue'; \nimport { PullRefresh } from 'vue-sun-ui'; \n \nVue.use(PullRefresh);`,
        propsList: [{
            propName: 'v-model',
            desc: '是否处于加载中状态',
            type: 'boolean',
            default: '-',
          },
          {
            propName: 'pulling-text',
            desc: '	下拉过程提示文案',
            type: 'string',
            default: '下拉即可刷新...',
          },
          {
            propName: 'loosing-text',
            desc: '释放过程提示文案',
            type: 'string',
            default: '释放即可刷新...',
          },
          {
            propName: 'loading-text',
            desc: '加载过程提示文案',
            type: 'string',
            default: '加载中...',
          },
          {
            propName: 'success-text',
            desc: '刷新成功提示文案',
            type: 'string',
            default: '-',
          },
          {
            propName: 'success-duration',
            desc: '刷新成功提示展示时长(ms)',
            type: 'number | string',
            default: '500',
          },
          {
            propName: 'head-height',
            desc: '顶部内容高度',
            type: 'number | string',
            default: '50',
          },
        ],
        eventsList: [{
          eventName: 'refresh',
          desc: '下拉刷新时触发',
          callParams: '-',
        }],
        slotsList: [{
            slotName: 'default',
            desc: '自定义内容'
          },
          {
            slotName: 'pulling',
            desc: '下拉过程中顶部内容'
          },
          {
            slotName: 'loosing',
            desc: '释放过程中顶部内容'
          },
          {
            slotName: 'loading',
            desc: '加载过程中顶部内容'
          },
          {
            slotName: 'success',
            desc: '刷新成功提示内容'
          },
        ],
        cartList: [{
            title: '基础用法',
            desc: '下拉刷新时会触发 <code>refresh</code> 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 <code>v-model</code> 设置为 <code>false</code>，表示加载完成。',
            code: `<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>`,
            jsCode: `import { Toast } from 'vue-sun-ui';

export default {
  data() {
    return {
      count: 0,
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
     console.log('刷新完成回调')
    },
  },
};`
          },
          {
            title: '成功提示',
            desc: '通过 <code>success-text</code> 可以设置刷新成功后的顶部提示文案。',
            code: `<van-pull-refresh
  v-model="isLoading"
  success-text="刷新成功"
  @refresh="onRefresh"
>
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>`,
          },
          {
            title: '自定义提示',
            desc: '通过插槽可以自定义下拉刷新过程中的提示内容。',
            code: `<van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
  <!-- 释放提示 -->
  <template #loosing>
    <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
  </template>

  <!-- 加载提示 -->
  <template #loading>
    <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
  </template>
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>

<style>
  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
</style>`,
          }
        ],
      }
    },
  }
</script>

<style lang="less">
</style>