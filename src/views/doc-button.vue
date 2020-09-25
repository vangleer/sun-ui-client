<template>
  <div class="sun-doc-content sun-doc-content-button">
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
      <div class="card" v-for="(item,index) in cartList" :key="index">
        <h3>{{item.title}}</h3>
        <p>
          {{item.desc}}
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
            <tr>
              <td>type</td>
              <td>类型，可选值为 <code>primary</code> info warning danger</td>
              <td>string</td>
              <td>default</td>
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
            <tr>
              <td>click</td>
              <td>点击按钮，且按钮状态不为加载或禁用时触发</td>
              <td><span class="info-string">event: Event</span></td>
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
            <tr>
              <td>default</td>
              <td>按钮内容</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div class="sun-doc-mobile">

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        importCode: `import Vue from 'vue';\n\nimport { Button } from 'vue-sun-ui';\n\n\nVue.use(Button);`,
        cartList: [{
            title: '代码展示',
            desc: ' 按钮支持 default、primary、info、warning、danger 五种类型，默认为 default。',
            code: `<sun-button type="primary">主要按钮</sun-button>\n\n<sun-button type="info">信息按钮</sun-button>\n\n<sun-button type="default">默认按钮</sun-button>\n\n<sun-button type="warning">警告按钮</sun-button>\n\n<sun-button type="danger">危险按钮</sun-button>`
          }, {
            title: '禁用状态',
            desc: '通过 plain 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。',
            code: `<sun-button plain type="primary">朴素按钮</sun-button>\n\n<sun-button plain type="info">朴素按钮</sun-button>`
          },
          {
            title: '朴素按钮',
            desc: '通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。',
            code: `<sun-button disabled type="primary">禁用状态</sun-button>\n\n<sun-button disabled type="info">禁用状态</sun-button>`
          },
          {
            title: '按钮形状',
            desc: '通过 square 设置方形按钮，通过 round 设置圆形按钮。',
            code: `<sun-button square type="primary">方形按钮</sun-button>\n\n<sun-button round type="info">圆形按钮</sun-button>`
          },
          {
            title: '图标按钮',
            desc: '通过 icon 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。',
            code: `<sun-button icon="plus" type="primary" />\n\n<sun-button icon="plus" type="primary">按钮</sun-button>\n\n<sun-button icon="https://img.yzcdn.cn/sunt/user-active.png" type="info">按钮</sun-button>`
          },
          {
            title: '按钮尺寸',
            desc: '支持 large、 normal、 small、 mini 四种尺寸， 默认为 normal。',
            code: `<sun-button type="primary" size="large">大号按钮</sun-button>\n\n<sun-button type="primary" size="normal">普通按钮</sun-button>\n\n<sun-button type="primary" size="small">小型按钮</sun-button>\n\n<sun-button type="primary" size="mini">迷你按钮</sun-button>`
          },
          {
            title: '自定义颜色',
            desc: '通过 color 属性可以自定义按钮的颜色。',
            code: `<sun-button color="#7232dd">单色按钮</sun-button>\n\n<sun-button color="#7232dd" plain>单色按钮</sun-button>\n\n<sun-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</sun-button>`
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