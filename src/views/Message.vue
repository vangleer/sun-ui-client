<template>
  <div class="sun-doc-message sun-doc-content">
    <section>
      <h1>Message 消息提示</h1>
      <div class="card">
        <h3>介绍</h3>
        <div>
          在页面顶部展示消息提示，支持函数调用。
        </div>
      </div>
      <div class="card">
        <h3>引入</h3>
        <p>
          引入<code>Message</code>可以使用<code>Vue.use(Message)</code>在所有实例添加<code>$message</code>方法，也可以单独使用<code>Message</code>方法。
        </p>
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
        importCode: `import Vue from 'vue';\nimport { Message } from 'vue-sun-ui';\n\nVue.use(Message);\nthis.$message('提示消息')`,
        methodList: [{
            propName: 'Message',
            desc: '展示提示	',
            type: 'options | message',
            default: 'message 实例',
          },
          {
            propName: 'Message.success',
            desc: '展示成功消息',
            type: 'options | message',
            default: 'message 实例',
          },
          {
            propName: 'Message.error',
            desc: '展示错误消息',
            type: 'options | message',
            default: 'message 实例',
          },
          {
            propName: 'Message.info',
            desc: '展示信息提示',
            type: 'options | message',
            default: 'message 实例',
          },
          {
            propName: 'Message.warning',
            desc: '展示警告消息',
            type: 'options | message',
            default: 'message 实例',
          },
          {
            propName: 'Message.loading',
            desc: '展示加载消息',
            type: 'options | message',
            default: 'message 实例',
          },
          {
            propName: 'Message.clear',
            desc: '关闭消息',
            type: '-',
            default: 'void',
          },
        ],
        optionList: [{
            propName: 'type',
            desc: '类型，可选值为 <code>success</code> <code>error</code> <code>info</code><code>warning</code><code>loading</code>',
            type: 'string',
            default: 'success',
          },
          {
            propName: 'message',
            desc: '展示文案，支持通过 \\n 换行',
            type: 'string',
            default: 'center',
          },
          {
            propName: 'duration',
            desc: '展示时长(ms)',
            type: 'number | string',
            default: '1500',
          },
          {
            propName: 'color',
            desc: '字体和图标的颜色',
            type: 'string',
            default: '-',
          },
          {
            propName: 'icon',
            desc: '之定义图标',
            type: 'string',
            default: '-',
          },
          {
            propName: 'border',
            desc: '是否显示边框',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'position',
            desc: '展示的位置，可选值有 <code>center</code>、<code>bottom</code>',
            type: 'string',
            default: 'top',
          },
          {
            propName: 'onClick',
            desc: '点击时的回调函数',
            type: 'Function',
            default: '-',
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
            title: '基础用法',
            code: `Message('通知内容');`,
          },
          {
            title: '消息类型',
            desc: '支持 <code>success</code>、<code>error</code>、<code>info</code>、<code>warning</code>、<code>loading</code> 五种通知类型，默认为 success。',
            code: `// 成功消息
Message({ type: 'success', message: '通知内容' });

// 危险消息
Message({ type: 'error', message: '通知内容' });

// 信息消息
Message({ type: 'info', message: '通知内容' });

// 警告消息
Message({ type: 'warning', message: '通知内容' });

// 加载消息
Message({ type: 'loading', message: '通知内容' });`,
          },
          {
            title: '自定义配置',
            desc: '自定义消息通知的展示颜色、时长和图标。',
            code: `// 自定义颜色
Message({
  message: '自定义颜色',
  color: 'pink',
});

// 自定义时长
Message({
  message: '自定义时长',
  duration: 3000,
});

// 自定义图标
Message({
  message: '自定义图标',
  icon: 'plus',
});`,
          },

        ],
      }
    },
  }
</script>

<style lang="less">
</style>