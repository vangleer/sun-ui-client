<template>
  <div class="sun-doc-content sun-doc-tab-bar">
    <section>
      <h1>Tabbar 标签栏</h1>
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
        <h3>Tabbar Props</h3>
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
        <h3>TabbarItem Props</h3>
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
            <tr v-for="(item, index) in itemPropsList" :key="index">
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
        <h3>TabbarItem Slots</h3>
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
            <tr v-for="(item, index) in itemSlotsList" :key="index">
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
        importCode: `import Vue from 'vue';\nimport { Tabbar, TabbarItem } from 'vue-sun-ui';\n\nVue.use(Tabbar);\nVue.use(TabbarItem);`,
        propsList: [{
            propName: 'v-model',
            desc: '当前选中标签的索引值',
            type: 'number | string',
            default: '0',
          },
          {
            propName: 'fixed',
            desc: '是否固定在底部',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'border',
            desc: '是否显示外边框',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'z-index',
            desc: '元素 z-index',
            type: 'number | string',
            default: '1',
          },
          {
            propName: 'active-color',
            desc: '选中标签的颜色',
            type: 'string',
            default: '#1989fa',
          },
          {
            propName: 'inactive-color',
            desc: '未选中标签的颜色',
            type: 'string',
            default: '#7d7e80',
          }
        ],
        itemPropsList: [{
          propName: 'icon',
          desc: '图标名称或图片链接',
          type: 'string',
          default: '-',
        }, {
          propName: 'icon-prefix',
          desc: '图标类名前缀',
          type: 'string',
          default: 'sun-icon',
        }, {
          propName: 'dot',
          desc: '是否显示图标右上角小红点',
          type: 'boolean',
          default: 'false',
        }, {
          propName: 'badge',
          desc: '图标右上角徽标的内容',
          type: 'number | string',
          default: '-',
        }, {
          propName: 'url',
          desc: '点击后跳转的链接地址',
          type: 'string',
          default: '-',
        }, {
          propName: 'to',
          desc: '点击后跳转的目标路由对象，同 vue-router 的 to 属性',
          type: 'string | object',
          default: '-',
        }, {
          propName: 'replace',
          desc: '是否在跳转时替换当前页面历史',
          type: 'boolean',
          default: 'false',
        }, ],
        eventsList: [{
          eventName: 'change',
          desc: '切换标签时触发',
          callParams: 'active: 当前选中标签的索引值',
        }, ],
        itemSlotsList: [{
          slotName: 'icon',
          desc: '自定义图标'
        }],
        cartList: [{
            title: '基础用法',
            desc: `<code>v-model</code> 默认绑定选中标签的索引值，通过修改 <code>v-model</code> 即可切换选中的标签。`,
            code: `<sun-tabbar v-model="active">
  <sun-tabbar-item icon="home">标签</sun-tabbar-item>
  <sun-tabbar-item icon="category">标签</sun-tabbar-item>
  <sun-tabbar-item icon="friends">标签</sun-tabbar-item>
  <sun-tabbar-item icon="settings">标签</sun-tabbar-item>
</sun-tabbar>`,
            jsCode: `export default {
  data() {
    return {
      active: 0,
    };
  },
};`
          },
          {
            title: '徽标提示',
            desc: '设置 <code>dot</code> 属性后，会在图标右上角展示一个小红点；设置 <code>badge</code> 属性后，会在图标右上角展示相应的徽标。',
            code: `<sun-tabbar v-model="active">
    <sun-tabbar-item icon="home">标签</sun-tabbar-item>
    <sun-tabbar-item icon="category" dot>标签</sun-tabbar-item>
    <sun-tabbar-item icon="friends" badge="20">标签</sun-tabbar-item>
    <sun-tabbar-item icon="settings" badge="5">标签</sun-tabbar-item>
  </sun-tabbar>
</div>`,
          },
          {
            title: '自定义图标',
            desc: '通过 icon 插槽自定义图标',
            code: `<sun-tabbar v-model="active">
  <sun-tabbar-item icon="home">
    <span>自定义</span>
    <template #icon>
      <sun-icon name="star-f" />
    </template>
  </sun-tabbar-item>
  <sun-tabbar-item icon="category">标签</sun-tabbar-item>
  <sun-tabbar-item icon="friends">标签</sun-tabbar-item>
</sun-tabbar>`,
          },
          {
            title: '自定义颜色',
            desc: '通过 <code>active-color</code>属性设置选中标签的颜色，<code>inactive-color</code>属性设置未选中标签的颜色。',
            code: `<sun-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
  <sun-tabbar-item icon="home">标签</sun-tabbar-item>
  <sun-tabbar-item icon="category">标签</sun-tabbar-item>
  <sun-tabbar-item icon="friends">标签</sun-tabbar-item>
  <sun-tabbar-item icon="settings">标签</sun-tabbar-item>
</sun-tabbar>`,
          },
          {
            title: '监听切换事件',
            desc: '通过 <code>change</code> 事件监听当前标签改变，接收当前标签的索引。',
            code: `<sun-tabbar v-model="active" @change="onChange">
  <sun-tabbar-item icon="home">标签1</sun-tabbar-item>
  <sun-tabbar-item icon="category">标签2</sun-tabbar-item>
  <sun-tabbar-item icon="friends">标签3</sun-tabbar-item>
  <sun-tabbar-item icon="settings">标签4</sun-tabbar-item>
</sun-tabbar>`,
            jsCode: `import { Message } from 'vant';

export default {
  methods: {
    onChange(index) {
      Message({ type: 'primary', message: index });
    },
  },
};`
          }
        ],
      }
    },
  }
</script>

<style lang="less">
</style>