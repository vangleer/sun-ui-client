<template>
  <div class="sun-doc-content sun-doc-nav-bar">
    <section>
      <h1>NavBar 导航栏</h1>
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
        importCode: `import Vue from 'vue';\nimport { NavBar } from 'vue-sun-ui';\n\nVue.use(NavBar);`,
        propsList: [{
            propName: 'title',
            desc: '标题',
            type: 'string',
            default: '"',
          },
          {
            propName: 'left-text',
            desc: '左侧文案',
            type: 'string',
            default: '"',
          },
          {
            propName: 'right-text',
            desc: '右侧文案',
            type: 'string',
            default: '"',
          },
          {
            propName: 'left-arrow',
            desc: '是否显示左侧箭头',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'border',
            desc: '是否显示下边框',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'fixed',
            desc: '是否固定在顶部	',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'z-index',
            desc: '元素 z-index',
            type: 'number | string',
            default: '1',
          },
        ],
        eventsList: [{
            eventName: 'click-left',
            desc: '点击左侧按钮时触发	',
            callParams: '-',
          },
          {
            eventName: 'click-right',
            desc: '点击右侧按钮时触发',
            callParams: '-',
          },
        ],
        slotsList: [{
          slotName: 'title',
          desc: '自定义标题'
        }, {
          slotName: 'left',
          desc: '自定义左侧区域内容'
        }, {
          slotName: 'right',
          desc: '自定义右侧区域内容'
        }],
        cartList: [{
            title: '基础用法',
            code: `<sun-nav-bar 
    title="标题" 
    left-text="返回" 
    right-text="按钮" 
    left-arrow 
    @click-left="onClickLeft" 
    @click-right="onClickRight" 
/>`,
            jsCode: `import { Toast } from 'vue-sun-ui';

export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};`
          },
          {
            title: '使用插槽',
            desc: '通过插槽自定义导航栏两侧的内容。',
            code: `<sun-nav-bar title="标题" left-text="返回" left-arrow>
  <template #right>
    <sun-icon name="plus" size="18" />
  </template>
</sun-nav-bar>`,
          }
        ],
      }
    },
  }
</script>

<style lang="less">
</style>