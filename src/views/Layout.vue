<template>
  <div class="sun-doc-layout sun-doc-content">

    <section>
      <h1>Layout 布局</h1>
      <div class="card">
        <h3>介绍</h3>
        <div>
          Layout 提供了 van-row 和 van-col 两个组件来进行行列布局。
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
          <pre><code class="language-html" v-text="item.code"></code></pre>
        </div>
      </div>

      <!-- API介绍 -->
      <h2>API</h2>
      <div class="card">
        <h3>Row Props</h3>
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
            <tr v-for="(item, index) in rowPropsList" :key="index">
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
        <h3>Col Props</h3>
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
            <tr v-for="(item, index) in colPropsList" :key="index">
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
    <!-- <div class="sun-doc-mobile">
      <sun-button type="primary" @click="$toast({message:'啦啦啦',position:'bottom'})">点我呀</sun-button>
      <sun-button type="info">点我呀</sun-button>
      <sun-button type="danger">点我呀</sun-button>
      
    </div> -->
    <!-- <iframe src="https://java0088.github.io/sun-ui-client/mobile/button.html" frameborder="0"></iframe> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        importCode: `import Vue from 'vue';\nimport { Col, Row } from 'vue-sun-ui';\n\nVue.use(Col);\nVue.use(Row);`,
        rowPropsList: [{
            propName: 'type',
            desc: '布局方式，可选值为<code>flex</code>',
            type: 'string',
            default: '-',
          },
          {
            propName: 'gutter',
            desc: '	列元素之间的间距（单位为 px）',
            type: 'number | string',
            default: '-',
          },
          {
            propName: 'justify',
            desc: 'Flex 主轴对齐方式，可选值为 <code>end</code> <code>center</code> <code>space-around</code> <code>space-between</code>',
            type: 'string',
            default: 'start',
          },
          {
            propName: 'align',
            desc: 'Flex 交叉轴对齐方式，可选值为 <code>center</code> <code>bottom</code>	',
            type: 'string',
            default: 'inherit',
          },
          {
            propName: 'tag',
            desc: 'HTML 标签',
            type: 'string',
            default: 'div',
          },

        ],
        colPropsList: [{
            propName: 'span',
            desc: '列元素宽度',
            type: 'number | string',
            default: '-',
          },
          {
            propName: 'offset',
            desc: '列元素偏移距离	',
            type: 'number | string',
            default: '-',
          },
          {
            propName: 'tag',
            desc: 'HTML 标签',
            type: 'string',
            default: 'div',
          },
        ],
        eventsList: [{
          eventName: 'click',
          desc: '点击图标时触发',
          callParams: 'event: Event',
        }],
        cartList: [{
            title: '基础展示',
            desc: 'Layout 组件提供了<code>24列栅格</code>，通过在<code>Col</code>上添加<code>span</code>属性设置列所占的宽度百分比此外，添加<code>offset</code>属性可以设置列的偏移宽度，计算方式与 span 相同',
            code: `<sun-row>
  <sun-col span="8">span: 8</sun-col>
  <sun-col span="8">span: 8</sun-col>
  <sun-col span="8">span: 8</sun-col>
</sun-row>

<sun-row>
  <sun-col span="4">span: 4</sun-col>
  <sun-col span="10" offset="4">offset: 4, span: 10</sun-col>
</sun-row>

<sun-row>
  <sun-col offset="12" span="12">offset: 12, span: 12</sun-col>
</sun-row>
`,
          },

          {
            title: '设置列元素间距',
            desc: '通过<code>gutter</code>属性可以设置列元素之间的间距，默认间距为 0',
            code: `<sun-row gutter="20">
  <sun-col span="8">span: 8</sun-col>
  <sun-col span="8">span: 8</sun-col>
  <sun-col span="8">span: 8</sun-col>
</sun-row>`,
          },
          {
            title: 'Flex 布局',
            desc: '将 <code>type</code> 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐',
            code: `<!-- 左对齐 -->
<sun-row type="flex">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>

<!-- 居中 -->
<sun-row type="flex" justify="center">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>

<!-- 右对齐 -->
<sun-row type="flex" justify="end">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>

<!-- 两端对齐 -->
<sun-row type="flex" justify="space-between">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>

<!-- 每个元素的两侧间隔相等 -->
<sun-row type="flex" justify="space-around">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>`,
          },
        ],
      }
    },
  }
</script>

<style lang="less">
</style>