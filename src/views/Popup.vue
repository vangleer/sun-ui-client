<template>
  <div class="sun-doc-popup sun-doc-content">
    <section>
      <h1>Popup 弹出层</h1>
      <div class="card">
        <h3>介绍</h3>
        <div>
          弹出层容器，用于展示弹窗、信息提示等内容。
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
        importCode: `import Vue from 'vue';\nimport { Popup } from 'vue-sun-ui';\n\nVue.use(Popup);`,
        propsList: [{
            propName: 'v-model (value)',
            desc: '是否显示弹出层',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'overlay',
            desc: '是否显示遮罩层	',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'position',
            desc: '弹出位置，可选值为 <code>top</code> <code>bottom</code> <code>right</code> <code>left</code>',
            type: 'string',
            default: 'center',
          },
          {
            propName: 'overlay-class',
            desc: '自定义遮罩层类名',
            type: 'string',
            default: '-',
          },
          {
            propName: 'overlay-style',
            desc: '自定义遮罩层样式',
            type: 'object',
            default: '-',
          },
          {
            propName: 'duration',
            desc: '动画时长，单位秒',
            type: 'number | string',
            default: '0.3',
          },

          {
            propName: 'closeable',
            desc: '是否显示关闭图标',
            type: 'boolean',
            default: 'false',
          },

          {
            propName: 'close-icon',
            desc: '关闭图标名称或图片链接',
            type: 'string',
            default: 'cross',
          },

          {
            propName: 'close-icon-position',
            desc: '关闭图标位置，可选值为<code>top-left</code> <code>bottom-left</code> <code>bottom-right</code>',
            type: 'string',
            default: 'top-right',
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
          desc: '点击弹出层时触发',
          callParams: 'event: Event',
        }, {
          eventName: 'open',
          desc: '打开弹出层时触发',
          callParams: '-',
        }, {
          eventName: 'close',
          desc: '关闭弹出层时触发	',
          callParams: '-',
        }, {
          eventName: 'opened',
          desc: '打开弹出层且动画结束后触发',
          callParams: '-',
        }, {
          eventName: 'closed',
          desc: '关闭弹出层且动画结束后触发',
          callParams: '-',
        }, {
          eventName: 'click-overlay',
          desc: '点击遮罩层时触发',
          callParams: '-',
        }],
        cartList: [{
            title: '基础用法',
            desc: '通过 <code>v-model</code> 控制弹出层是否展示。',
            code: `<sun-cell is-link bg-cffect @click="showPopup">展示弹出层</sun-cell>\n<sun-popup v-model="show" >内容</sun-popup>`,
            jsCode: `export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
};`
          },
          {
            title: '弹出位置',
            desc: '通过 <code>position</code> 属性设置弹出位置，默认居中弹出，可以设置为 <code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code>。',
            code: `<sun-popup v-model="show" position="top" :style="{ height: '30%' }" />`,
          },
          {
            title: '关闭图标',
            desc: '设置 <code>closeable</code> 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 <code>close-icon</code> 属性自定义图标，使用 <code>close-icon-position</code> 属性可以自定义图标位置。',
            code: `<sun-popup 
  v-model="show" 
  position="bottom" 
  closeable 
/>
<!-- 自定义图标 -->
<sun-popup 
  v-model="show" 
  position="bottom" 
  closeable 
  close-icon="plus" 
/>
<!-- 图标位置 -->
<sun-popup 
  v-model="show" 
  position="bottom" 
  closeable 
  close-icon-position="top-left" 
/>`,
          },
          {
            title: '圆角弹窗',
            desc: '设置 <code>round</code> 属性后，弹窗会根据弹出位置添加不同的圆角样式。',
            code: `<sun-popup v-model="showRound" position="bottom" round />`,
          }
        ],
      }
    },
  }
</script>

<style lang="less">
</style>