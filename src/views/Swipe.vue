<template>
  <div class="sun-doc-stepper sun-doc-content">
    <section>
      <h1>Swipe 轮播</h1>
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
        <h3>Swipe Props</h3>
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
        <h3>Swipe Events</h3>
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
        <h3>Swipe 方法</h3>
        <p>通过 ref 可以获取到 Swipe 实例并调用实例方法。</p>
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
              <td>{{ item.eventName }}</td>
              <td v-html="item.desc"></td>
              <td>
                <span class="info-string">{{ item.callParams }}</span>
              </td>
              <td>
                {{ item.callReturns }}
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
            <tr v-for="(item, index) in slotList" :key="index">
              <td>{{ item.slotName }}</td>
              <td>{{ item.desc }}</td>
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
        importCode: `import Vue from 'vue'; \nimport { Swipe, SwipeItem } from 'vue-sun-ui'; \n \nVue.use(Swipe);\nVue.use(SwipeItem);`,
        propsList: [{
            propName: 'autoplay',
            desc: '自动轮播间隔，单位为 ms',
            type: 'number | string',
            default: '-',
          },
          {
            propName: 'duration',
            desc: '动画时长，单位为 ms',
            type: 'number | string',
            default: '500',
          },
          {
            propName: 'initial-swipe',
            desc: '初始位置索引值',
            type: 'number | string',
            default: '-',
          },
          {
            propName: 'width',
            desc: '滑块宽度，单位为<code>px</code>',
            type: 'number | string',
            default: 'auto',
          },
          {
            propName: 'height',
            desc: '滑块高度，单位为<code>px</code>',
            type: 'number | string',
            default: 'auto',
          },
          {
            propName: 'show-indicators',
            desc: '是否显示指示器',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'vertical',
            desc: '是否为纵向滚动',
            type: 'boolean',
            default: 'false'
          },
          {
            propName: 'touchable',
            desc: '是否可以通过手势滑动',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'stop-propagation',
            desc: '是否阻止滑动事件冒泡',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'indicator-color',
            desc: '指示器颜色',
            type: 'string',
            default: '#1989fa',
          }
        ],
        eventsList: [{
          eventName: 'change',
          desc: '每一页轮播结束后触发',
          callParams: 'index, 当前页的索引',
        }],
        methodList: [{
          eventName: 'prev',
          desc: '切换到上一轮播',
          callParams: '-',
          callReturns: '-',
        }, {
          eventName: 'next',
          desc: '切换到下一轮播',
          callParams: '-',
          callReturns: '-',
        }, {
          eventName: 'swipeTo',
          desc: '切换到指定位置',
          callParams: 'index: number',
          callReturns: 'void',
        }],
        slotList: [{
            slotName: 'default',
            desc: '轮播内容',
          },
          {
            slotName: 'indicator',
            desc: '自定义指示器',
          },
        ],
        cartList: [{
            title: '基础用法',
            desc: '每个 SwipeItem 代表一张轮播卡片，可以通过 <code>autoplay</code> 属性设置自动轮播的间隔。',
            code: `<sun-swipe class="my-swipe" :autoplay="3000">
  <sun-swipe-item>1</sun-swipe-item>
  <sun-swipe-item>2</sun-swipe-item>
  <sun-swipe-item>3</sun-swipe-item>
  <sun-swipe-item>4</sun-swipe-item>
</sun-swipe>

<style>
  .my-swipe .sun-swipe-item {
      color: #fff;
      font-size: 20px;
      height: 200px;
      text-align: center;
      background-color: #2bde9d;
  }
</style>`,
          },
          {
            title: '监听 change 事件',
            code: `<van-swipe @change="onChange">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>`,
            jsCode: `import { Toast } from 'vue-sun-ui';

export default {
  methods: {
    onChange(index) {
      Toast('当前 Swipe 索引：' + index);
    },
  },
};`,
          },
          {
            title: '纵向滚动',
            desc: '设置 <code>vertical</code> 属性后滑块会纵向排列，此时需要指定滑块容器的高度。',
            code: `<sun-swipe class="my-swipe" vertical>
  <sun-swipe-item>1</sun-swipe-item>
  <sun-swipe-item>2</sun-swipe-item>
  <sun-swipe-item>3</sun-swipe-item>
  <sun-swipe-item>4</sun-swipe-item>
</sun-swipe>`,
          },

          {
            title: '自定义指示器',
            desc: '通过 <code>indicator</code> 插槽可以自定义指示器的样式。',
            code: `<sun-swipe class="my-swipe" @change="onChange">
  <sun-swipe-item>1</sun-swipe-item>
  <sun-swipe-item>2</sun-swipe-item>
  <sun-swipe-item>3</sun-swipe-item>
  <sun-swipe-item>4</sun-swipe-item>

  <template #indicator>
    <div class="custom-indicator">
      {{ current + 1 }}/4
    </div>
  </template>
</sun-swipe>

<style>
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
  }
</style>`,
            jsCode: `export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};`
          },
        ],
      }
    },
  }
</script>

<style lang="less">
</style>