<template>
  <div class="sun-doc-content sun-doc-button">
    <section>
      <h1>Button 按钮</h1>
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
          <pre><code class="language-html" v-text="item.code"></code></pre>
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
        importCode: `import Vue from 'vue';\nimport { Button } from 'vue-sun-ui';\n\nVue.use(Button);`,
        propsList: [{
            propName: 'type',
            desc: '类型，可选值为<code>primary</code><code>info</code><code>warning</code><code>danger</code>',
            type: 'string',
            default: 'default',
          },
          {
            propName: 'size',
            desc: '尺寸，可选值为<code>large</code><code>small</code><code>mini</code>',
            type: 'string',
            default: 'normal',
          },
          {
            propName: 'color',
            desc: '按钮颜色，支持传入 <code>linear-gradient</code> 渐变色',
            type: 'string',
            default: '-',
          },
          {
            propName: 'icon',
            desc: '左侧图标名称或图片链接',
            type: 'string',
            default: 'sun-icon',
          },
          {
            propName: 'tag',
            desc: '按钮根节点的 HTML 标签',
            type: 'string',
            default: 'button',
          },
          {
            propName: 'block',
            desc: '是否为块级元素',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'plain',
            desc: '是否为朴素按钮',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'text',
            desc: '按钮文字	',
            type: 'string',
            default: '-'
          },
          {
            propName: 'round',
            desc: '是否为圆形按钮',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'disabled	',
            desc: '是否禁用按钮',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'isExtra',
            desc: '是否开起点击边框效果',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'effectWidth',
            desc: '边框效果的宽度	',
            type: 'string | number',
            default: '6px',
          },
        ],
        eventsList: [{
            eventName: 'click',
            desc: '点击按钮，且按钮状态不为加载或禁用时触发',
            callParams: 'event: Event',
          },
          {
            eventName: 'touchstart',
            desc: '开始触摸按钮时触发',
            callParams: 'event: TouchEvent',
          },
        ],
        slotsList: [{
          slotName: 'default',
          desc: '按钮内容'
        }],
        cartList: [{
            title: '按钮类型',
            desc: ' 按钮支持 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>danger</code> 五种类型，默认为 <code>default</code>。',
            code: `<sun-button type="primary">主要按钮</sun-button>\n<sun-button type="info">信息按钮</sun-button>\n<sun-button type="default">默认按钮</sun-button>\n<sun-button type="danger">危险按钮</sun-button>\n<sun-button type="warning">警告按钮</sun-button>`,
          },
          {
            title: '禁用状态',
            desc: '通过 <code>disabled</code> 属性来禁用按钮，禁用状态下按钮不可点击。',
            code: `<sun-button disabled type="primary">禁用状态</sun-button>\n<sun-button disabled type="info">禁用状态</sun-button>`,
          },
          {
            title: '朴素按钮',
            desc: '通过 <code>plain</code> 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。',
            code: `<sun-button type="primary" plain>朴素按钮</sun-button>\n<sun-button type="info" plain>朴素按钮</sun-button>`,
          },
          {
            title: '按钮形状',
            desc: '通过 <code>square</code> 设置方形按钮，通过 <code>round</code> 设置圆形按钮。',
            code: `<sun-button type="primary">方形按钮</sun-button>\n<sun-button type="info" round>圆形按钮</sun-button>`,
          },

          {
            title: '图标按钮',
            desc: '通过 <code>icon</code> 属性设置按钮图标，支持 <code>Icon</code> 组件里的所有图标，也可以传入图标 URL。',
            code: `<sun-button type="primary" icon="plus"></sun-button>\n<sun-button type="primary" icon="plus">按钮</sun-button>\n<sun-button type="info" plain icon="friends">按钮</sun-button>`,
          },
          {
            title: '按钮边框效果',
            desc: '通过 <code>isExtra</code> 属性设置按钮点击外边框的效果',
            code: `<sun-button type="primary" :isExtra="false">关闭效果</sun-button>\n<sun-button type="info" effectWidth="10px">调整效果大小</sun-button>`,
          },
          {
            title: '按钮尺寸',
            desc: '支持 <code>large</code>、 <code>normal</code>、 <code>small</code>、 <code>mini</code> 四种尺寸， 默认为 <code>normal</code>。',
            code: `<sun-button type="primary" size="large">大号按钮</sun-button>\n<sun-button type="primary" size="normal">普通按钮</sun-button>\n<sun-button type="info" size="small">小型按钮</sun-button>\n<sun-button type="danger" size="mini">迷你按钮</sun-button>`,
          },
          {
            title: '自定义颜色',
            desc: '通过 <code>color</code> 属性可以自定义按钮的颜色。',
            code: `<sun-button color="#7232dd">单色按钮</sun-button>\n<sun-button color="#7232dd" plain>单色按钮</sun-button>\n<sun-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变按钮</sun-button>`,
          },
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