<template>
  <div class="sun-doc-toast sun-doc-content">
    <section>
      <h1>Toast 轻提示</h1>
      <div class="card">
        <h3>介绍</h3>
        <div>
          在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。
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
          <pre><code class="language-js" v-text="item.code"></code></pre>
        </div>
      </div>

      <!-- API介绍 -->
      <h2>API</h2>
      <div class="card">
        <h3>方法</h3>
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
            <tr v-for="(item, index) in methodList" :key="index">
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
        <h3>Options</h3>
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
            <tr v-for="(item, index) in optionList" :key="index">
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

    </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        importCode: `import Vue from 'vue';\nimport { Toast } from 'vue-sun-ui';\n\nVue.use(Toast);`,
        methodList: [{
            propName: 'Toast',
            desc: '展示提示	',
            type: 'options | message',
            default: 'toast 实例',
          },
          {
            propName: 'Toast.loading',
            desc: '展示加载提示	',
            type: 'options | message',
            default: 'toast 实例',
          },
          {
            propName: 'Toast.success',
            desc: '展示成功提示',
            type: 'options | message',
            default: 'toast 实例',
          },
          {
            propName: 'Toast.fail',
            desc: '展示失败提示	',
            type: 'options | message',
            default: 'toast 实例',
          },
          {
            propName: 'Toast.clear',
            desc: '关闭提示',
            type: '-',
            default: 'void',
          },
        ],
        optionList: [{
            propName: 'type',
            desc: '提示类型，可选值为 <code>loading</code> <code>success</code> <code>fail</code>',
            type: 'string',
            default: 'text',
          },
          {
            propName: 'position',
            desc: '位置，可选值为 <code>top</code> <code>bottom</code>	',
            type: 'string',
            default: 'center',
          },
          {
            propName: 'message',
            desc: '文本内容',
            type: 'string',
            default: '"',
          },
          {
            propName: 'icon',
            desc: '自定义图标，支持传入<a href="#/icon">图标名称</a>或图片链接',
            type: 'string',
            default: '"',
          },
          {
            propName: 'iconPrefix',
            desc: '图标类名前缀',
            type: 'string',
            default: 'sun-icon',
          },
          {
            propName: 'overlay',
            desc: '是否显示背景遮罩层',
            type: 'boolean',
            default: 'false',
          },

          {
            propName: 'closeOnClick',
            desc: '是否在点击后关闭',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'duration',
            desc: '展示时长(ms)',
            type: 'number',
            default: '1500',
          },
          {
            propName: 'className',
            desc: '自定义类名',
            type: 'string',
            default: 'sun-toast',
          },
          {
            propName: 'onOpened',
            desc: '完全展示后的回调函数',
            type: 'Function',
            default: '-',
          },
          {
            propName: 'onClose',
            desc: '关闭时的回调函数',
            type: 'Function',
            default: '-',
          },
        ],
        cartList: [{
            title: '文字提示',
            desc: 'Layout 组件提供了<code>24列栅格</code>，通过在<code>Col</code>上添加<code>span</code>属性设置列所占的宽度百分比此外，添加<code>offset</code>属性可以设置列的偏移宽度，计算方式与 span 相同',
            code: `Toast('提示内容');`,
          },

          {
            title: '加载提示',
            desc: '使用 <code>Toast.loading</code> 方法展示加载提示。',
            code: `Toast.loading({
  message: '加载中...'
});`,
          },
          {
            title: '成功/失败提示',
            desc: '使用 <code>Toast.success</code> 方法展示成功提示，使用 <code>Toast.fail</code> 方法展示失败提示。',
            code: `Toast.success('成功提示');\nToast.fail('失败提示');`,
          },
          {
            title: '自定义图标',
            desc: '通过<code>icon</code>选项可以自定义图标，支持传入图标名称或图片链接，如果在loading方法中使用<code>icon</code>属性可以自定义加载图标。',
            code: `Toast({
  message: '自定义图标',
  icon: 'like-o',
});

Toast({
  message: '自定义图片',
  icon: 'https://img.yzcdn.cn/vant/logo.png',
});

// 自定义加载图标
Toast.loading({
  message: '加载中...',
  icon:'loading2'
});`,
          },
          {
            title: '自定义位置',
            desc: 'Toast 默认渲染在屏幕正中位置，通过<code>position</code>属性可以控制 Toast 展示的位置。',
            code: `Toast({
  message: '顶部展示',
  position: 'top',
});

Toast({
  message: '底部展示',
  position: 'bottom',
});`,
          },
          {
            title: '全局方法',
            desc: '引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载<code>$toast</code>方法，便于在组件内调用。',
            code: `export default {
  mounted() {
    this.$toast('提示文案');
  },
};`,
          },
          {
            title: '单例模式',
            desc: 'Toast 采用单例模式，即同一时间只会存在一个 Toast，可以像下面这样手动关闭 Toast',
            code: `const toast1 = Toast('第一个 Toast');
const toast2 = Toast.success('第二个 Toast');

toast1.clear();
toast2.clear();`,
          },
        ],
      }
    },
  }
</script>

<style lang="less">
</style>