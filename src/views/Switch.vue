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
      <h2>代码展示</h2>
      <!-- 代码展示 -->
      <div class="card" v-for="(item, index) in cartList" :key="index">
        <h3>{{ item.title }}</h3>
        <p v-html="item.desc">
        </p>
        <div v-highlight>
          <pre v-if="item.code"><code class="language-html" v-text="item.code"></code></pre>
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
    </section>
   
  </div>
</template>
<script>
  export default {
    data() {
      return {

        importCode: `import Vue from 'vue'; \nimport { Switch } from 'vue-sun-ui'; \n \nVue.use(Switch);`,
        propsList: [{
            propName: 'v-model',
            desc: '开关选中状态',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'loading',
            desc: '	是否为加载状态	',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'disabled',
            desc: '是否为禁用状态',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'size',
            desc: '开关尺寸，默认单位为<code>px</code>',
            type: 'number | string',
            default: '30px',
          },
          {
            propName: 'active-color',
            desc: '打开时的背景色	',
            type: 'string',
            default: '#1989fa',
          },
          {
            propName: 'inactive-color',
            desc: '关闭时的背景色',
            type: 'string',
            default: 'white',
          }
        ],
        eventsList: [{
          eventName: 'change',
          desc: '开关状态切换时触发',
          callParams: 'value: boolean',
        }, {
          eventName: 'click',
          desc: '点击时触发',
          callParams: 'event: Event',
        }],
        cartList: [{
            title: '基础用法',
            desc: '通过 <code>v-model</code> 绑定开关的选中状态，<code>true</code> 表示开，<code>false</code> 表示关。',
            code: `<sun-switch v-model="checked" />`,
            jsCode: `export default {
  data() {
    return {
      checked: true,
    };
  },
};`
          },
          {
            title: '禁用状态',
            desc: '通过 <code>disabled</code> 属性来禁用开关，禁用状态下开关不可点击。',
            code: `<sun-switch v-model="checked" disabled />`,
          },
          {
            title: '加载状态',
            desc: '通过 <code>loading</code> 属性设置开关为加载状态，加载状态下开关不可点击。',
            code: `<sun-switch v-model="checked" loading />`,
          },

          {
            title: '自定义大小',
            desc: '通过 <code>size</code> 属性自定义开关的大小。',
            code: `<sun-switch v-model="checked" size="24px" />`,
          },

          {
            title: '自定义颜色',
            desc: '<code>active-color</code> 属性表示打开时的背景色，<code>inactive-color</code> 表示关闭时的背景色。',
            code: `<sun-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />`,
          }
        ],
      }
    },
  }
</script>

<style lang="less">
  .sun-doc-mobile-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: blue;
  }
</style>