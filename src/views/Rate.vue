<template>
  <div class="sun-doc-rate sun-doc-content">
    <section>
      <h1>Cell 单元格</h1>
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

        importCode: `import Vue from 'vue'; \nimport { Rate } from 'vue-sun-ui'; \n \nVue.use(Rate);`,
        propsList: [{
            propName: 'v-model',
            desc: '当前分值',
            type: 'number',
            default: '-',
          },
          {
            propName: 'count',
            desc: '	图标总数',
            type: 'number | string',
            default: '5',
          },
          {
            propName: 'size',
            desc: '图标大小，默认单位为<code>px</code>',
            type: 'number | string',
            default: '20px',
          },
          {
            propName: 'gutter',
            desc: '图标间距，默认单位为<code>px</code>',
            type: 'number | string',
            default: '4px',
          },
          {
            propName: 'color',
            desc: '选中的颜色	',
            type: 'string',
            default: '#ee0a24',
          },
          {
            propName: 'void-color',
            desc: '未选中时的颜色',
            type: 'string',
            default: '#c8c9cc',
          },
          {
            propName: 'disabled-color',
            desc: '禁用时的颜色',
            type: 'string',
            default: '#c8c9cc',
          },
          {
            propName: 'icon',
            desc: '选中时的<a href="#/icon">图标名称</a>',
            type: 'string',
            default: 'star-f'
          },
          {
            propName: 'readonly',
            desc: '是否为只读状态',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'disabled',
            desc: '是否禁用评分',
            type: 'boolean	',
            default: 'false',
          }
        ],
        eventsList: [{
          eventName: 'change',
          desc: '当前分值变化时触发的事件',
          callParams: 'value: 当前分值',
        }],
        cartList: [{
            title: '基础用法',
            desc: '使用<code>v-model</code>初始化选中的个数',
            code: `<sun-rate v-model="value" />`,
            jsCode: `export default {
  data() {
    return {
      value: 3,
    };
  },
};`
          },
          {
            title: '自定义图标',
            desc: '通过<code>icon</code>属性设置选中的图标，<code>void-icon</code>设置未选中的图标',
            code: `<sun-rate v-model="value" icon="like" void-icon="like-o" />`,
          },
          {
            title: '自定义样式',
            desc: '通过<code>size</code>属性设置大小，<code>color</code>设置选中的颜色，<code>void-color</code>设置未选中的颜色',
            code: `<sun-rate v-model="value" :size="25" color="#ffd21e" void-icon="star-f" void-color="#eee" />`,
          },

          {
            title: '自定义数量',
            desc: '通过 <code>count</code>设置图标的个数',
            code: `<sun-rate v-model="value" :count="6" />`,
          },

          {
            title: '禁用状态',
            desc: '通过<code>disabled</code>属性设置禁止选择',
            code: `<sun-rate v-model="value" disabled />`,
          },
          {
            title: '只读状态',
            desc: '通过<code>readonly</code>属性设置只读状态，效果和<code>disabled</code>一样，不过颜色不会变',
            code: `<sun-rate v-model="value" readonly />`,
          },
          {
            title: '监听 change 事件',
            code: `<sun-rate v-model="value7" @change="onChange" />`,
            jsCode: `export default {
  method: {
    onChange(value) {
      this.$toast('当前值：' + value);
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
  .sun-doc-mobile-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: blue;
  }
</style>