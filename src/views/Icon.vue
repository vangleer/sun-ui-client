<template>
  <div class="sun-doc-icon sun-doc-content">

    <section>
      <h1>Icon 图标</h1>
      <div class="card">
        <h3>介绍</h3>
        <div>
          基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过icon属性引用
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
        importCode: `import Vue from 'vue'; \nimport { Icon } from 'vue-sun-ui'; \n \nVue.use(Icon);`,
        propsList: [{
            propName: 'name',
            desc: '图标名称或图片链接	',
            type: 'string',
            default: '-',
          },
          {
            propName: 'dot',
            desc: '	是否显示图标右上角小红点	',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'badge',
            desc: '图标右上角徽标的内容	',
            type: 'number | string',
            default: '-',
          },
          {
            propName: 'color',
            desc: '图标颜色	',
            type: 'string',
            default: 'inherit',
          },
          {
            propName: 'size',
            desc: '图标大小，如 <code>20px</code> <code>2em</code>，默认单位为<code>px</code>',
            type: 'number | string',
            default: 'inherit',
          },
          {
            propName: 'dot-color',
            desc: '徽标的颜色',
            type: 'string',
            default: '#f10',
          },
          {
            propName: 'tag',
            desc: 'HTML 标签',
            type: 'string',
            default: 'i',
          },

        ],
        eventsList: [{
          eventName: 'click',
          desc: '点击图标时触发',
          callParams: 'event: Event',
        }],
        cartList: [{
            title: '基础用法',
            desc: '<code>Icon</code>的<code>name</code>属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例',
            code: `<sun-icon name="message-o" />\n<sun-icon name="star-o" />`,
          },
          {
            title: '徽标提示',
            desc: '设置<code>dot</code>属性后，会在图标右上角展示一个小红点。设置<code>badge</code>属性后，会在图标右上角展示相应的徽标',
            code: `<sun-icon name="message-o" dot />\n<sun-icon name="message-o" badge="8" />\n<sun-icon name="message-o" badge="88+" />`,
          },
          {
            title: '图标颜色',
            desc: '<code>Icon</code>的<code>color</code>属性用来设置图标的颜色',
            code: `<sun-icon name="message-o" color="#1989fa" />\n<sun-icon name="message-o" color="#07c160" />`,
          },

          {
            title: '图标大小',
            desc: '<code>Icon</code>的<code>size</code>属性用来设置图标的尺寸大小，默认单位为px',
            code: `<sun-icon name="message-o" size="40" />\n<sun-icon name="message-o" size="3rem" />`,
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