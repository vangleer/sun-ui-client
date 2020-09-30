<template>
  <div class="sun-doc-swipe sun-doc-content">
    <section>
      <h1>Stepper 步进器</h1>
      <div class="card">
        <h3>介绍</h3>
        <p>步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。</p>
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
        importCode: `import Vue from 'vue'; \nimport { Stepper } from 'vue-sun-ui'; \n \nVue.use(Stepper);`,
        propsList: [{
            propName: 'v-model',
            desc: '当前分值',
            type: 'number | string',
            default: '-',
          },
          {
            propName: 'min',
            desc: '最小值',
            type: 'number | string',
            default: '1',
          },
          {
            propName: 'max',
            desc: '最大值',
            type: 'number | string',
            default: '-',
          },
          {
            propName: 'step',
            desc: '步长，每次点击时改变的值',
            type: 'number | string',
            default: '1',
          },
          {
            propName: 'input-width',
            desc: '输入框宽度，默认单位为<code>px</code>',
            type: 'number | string',
            default: '32px',
          },
          {
            propName: 'button-size',
            desc: '按钮大小以及输入框高度，默认单位为<code>px</code>',
            type: 'number | string',
            default: '28px',
          },
          {
            propName: 'theme',
            desc: '样式风格，可选值为 <code>round</code>',
            type: 'string',
            default: '-',
          },
          {
            propName: 'disabled',
            desc: '是否禁用步进器',
            type: 'boolean',
            default: 'false'
          },
          {
            propName: 'disable-plus',
            desc: '是否禁用增加按钮',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'disable-minus',
            desc: '是否禁用减少按钮',
            type: 'boolean	',
            default: 'false',
          },
          {
            propName: 'disable-input',
            desc: '是否禁用输入框',
            type: 'boolean	',
            default: 'false',
          },
          {
            propName: 'show-plus',
            desc: '是否显示增加按钮	',
            type: 'boolean	',
            default: 'true',
          },
          {
            propName: 'show-minus',
            desc: '是否显示减少按钮	',
            type: 'boolean	',
            default: 'true',
          }
        ],
        eventsList: [{
          eventName: 'change',
          desc: '当绑定值变化时触发的事件',
          callParams: 'value: string',
        }, {
          eventName: 'overlimit',
          desc: '点击不可用的按钮时触发',
          callParams: '-',
        }, {
          eventName: 'plus',
          desc: '点击增加按钮时触发',
          callParams: '-',
        }, {
          eventName: 'minus',
          desc: '点击减少按钮时触发',
          callParams: '-',
        }, {
          eventName: 'focus',
          desc: '输入框聚焦时触发',
          callParams: 'event: Event',
        }, {
          eventName: 'blur',
          desc: '输入框失焦时触发',
          callParams: 'event: Event',
        }],
        cartList: [{
            title: '基础用法',
            desc: '通过 <code>v-model</code> 绑定输入值，可以通过 <code>change</code> 事件监听到输入值的变化。',
            code: `<sun-stepper v-model="value" />`,
            jsCode: `export default {
  data() {
    return {
      value: 1,
    };
  },
};`
          },
          {
            title: '步长设置',
            desc: '通过 <code>step</code> 属性设置每次点击增加或减少按钮时变化的值，默认为 <code>1</code>。',
            code: `<sun-stepper v-model="value" step="2" />`,
          },
          {
            title: '限制输入范围',
            desc: '通过 <code>min</code> 和 <code>max</code> 属性限制输入值的范围。',
            code: `<sun-stepper v-model="value" min="5" max="8" />`,
          },

          {
            title: '禁用状态',
            desc: '通过设置 <code>disabled</code> 属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。',
            code: `<sun-stepper v-model="value" disabled />`,
          },

          {
            title: '禁用输入框',
            desc: '通过设置 <code>disable-input</code> 属性来禁用输入框，此时按钮仍然可以点击。',
            code: `<sun-stepper v-model="value" disable-input />`,
          },
          {
            title: '自定义大小',
            desc: '通过 <code>input-width</code> 属性设置输入框宽度，通过 <code>button-size</code> 属性设置按钮大小和输入框高度。',
            code: `<sun-stepper v-model="value" input-width="40px" button-size="32px" />`,
          },
          {
            title: '圆角风格',
            desc: `将 <code>theme</code> 设置为 <code>round</code> 来展示圆角风格的步进器。`,
            code: `<sun-stepper v-model="value" theme="round" button-size="22" disable-input />`
          }
        ],
      }
    },
  }
</script>

<style lang="less">
</style>