<template>
  <div class="sun-doc-content sun-doc-content-cell">
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

        importCode: `import Vue from 'vue'; \nimport { Cell }from 'vue-sun-ui'; \n \nVue.use(Cell);`,
        propsList: [{
            propName: 'title',
            desc: '左侧标题',
            type: 'number | string',
            default: '-',
          },
          {
            propName: 'value',
            desc: '	右侧内容',
            type: 'number | string',
            default: '-',
          },
          {
            propName: 'label',
            desc: '标题下方的描述信息',
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
            propName: 'border',
            desc: '是否显示内边框	',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'is-link',
            desc: '是否展示右侧箭头',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'arrow-direction',
            desc: '箭头方向，可选值为 <code>left</code> <code>up</code> <code>down</code>',
            type: 'string',
            default: 'right',
          },
          {
            propName: 'title-style',
            desc: '左侧标题额外样式',
            type: 'any',
            default: '-'
          },
          {
            propName: 'title-class',
            desc: '左侧标题额外类名',
            type: 'any',
            default: '-',
          },
          {
            propName: 'value-class	',
            desc: '右侧内容额外类名',
            type: 'any',
            default: '-',
          },
          {
            propName: 'label-class',
            desc: '是否开起点击边框效果',
            type: 'any',
            default: '-',
          }
        ],
        eventsList: [{
          eventName: 'click',
          desc: '点击单元格时触发',
          callParams: 'event: Event',
        }],
        slotsList: [{
            slotName: 'default',
            desc: '自定义右侧 value 的内容'
          },
          {
            slotName: 'title',
            desc: '自定义左侧 title 的内容'
          },
          {
            slotName: 'icon',
            desc: '自定义左侧图标'
          }
        ],
        cartList: [{
            title: '基础展示',
            desc: '使用<code>Cell</code>自带下边框',
            code: `<sun-cell title="单元格" value="内容" />\n<sun-cell title="单元格" value="内容" label="描述信息" />`,
          },


          {
            title: '图标展示',
            desc: '通过<code>icon</code>属性在标题左侧展示图标。',
            code: `<sun-cell icon="friends" title="单元格" value="内容" />`,
          },
          {
            title: '展示箭头',
            desc: '设置 <code>is-link</code> 属性后会在单元格右侧显示箭头，并且可以通过 <code>arrow-direction</code> 属性控制箭头方向。',
            code: `<sun-cell title="单元格" is-link />\n<sun-cell title="单元格" is-link value="内容" />\n<sun-cell title="单元格" is-link arrow-direction="down" value="内容" />`,
          },

          {
            title: '点击背景效果',
            desc: '通过 <code>bgEffect</code>设置点击单元格背景效果，默认为false',
            code: `<sun-cell title="单元格" :bgEffect="true" />\n<sun-cell title="单元格" :bgEffect="false" value="内容" />`,
          },

          {
            title: '使用插槽',
            desc: '如以上用法不能满足你的需求，可以使用插槽来自定义内容。',
            code: `<sun-cell>\n <template #title>\n   <span>这是单元格</span>\n   <sun-button size="mini" type="danger">按钮</sun-button>\n </template>\n</sun-cell>`,
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