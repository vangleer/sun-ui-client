<template>
  <div class="sun-demo-checkbox sun-doc-content">
    <section>
      <h1>Checkbox 复选框</h1>
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
        <p v-html="item.desc"></p>
        <div v-highlight>
          <pre v-if="item.code"><code  class="language-html" v-text="item.code"></code></pre>
          <pre v-if="item.jsCode"><code class="language-js" v-text="item.jsCode"></code></pre>
        </div>
      </div>

      <!-- API介绍 -->
      <h2>API</h2>
      <div class="card">
        <h3>Checkbox Props</h3>
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
            <tr v-for="(item, index) in boxPropsList" :key="index">
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
        <h3>CheckboxGroup Props</h3>
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
            <tr v-for="(item, index) in groupPropsList" :key="index">
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
        <h3>Checkbox Events</h3>
        <table>
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in boxEventsList" :key="index">
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
        <h3>CheckboxGroup Events</h3>
        <table>
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in groupEventsList" :key="index">
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
            <tr v-for="(item, index) in boxSlotList" :key="index">
              <td>{{ item.slotName }}</td>
              <td>{{ item.desc }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card">
        <h3>CheckboxGroup 方法</h3>
        <p>通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法</p>
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
            <tr v-for="(item, index) in groupMethodsList" :key="index">
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
    </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        importCode: `import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'sun';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);`,
        groupPropsList: [{
            propName: 'v-model (value)',
            desc: '所有选中项的标识符',
            type: 'any[]',
            default: '-',
          },
          {
            propName: 'disabled',
            desc: '是否禁用所有复选框',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'max',
            desc: '最大可选数，<code>0</code>为无限制',
            type: 'number | string',
            default: '0',
          },
          {
            propName: 'direction',
            desc: '排列方向，可选值为<code>horizontal</code>',
            type: 'string',
            default: 'vertical',
          },
          {
            propName: 'icon-size',
            desc: '所有复选框的图标大小，默认单位为<code>px</code>',
            type: 'number | string',
            default: '16px',
          },
          {
            propName: 'checked-color',
            desc: '所有复选框的选中状态颜色',
            type: 'string',
            default: '#1989fa',
          },
        ],
        boxPropsList: [{
            propName: 'v-model (value)',
            desc: '是否为选中状态',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'name',
            desc: '标识符',
            type: 'any',
            default: '-',
          },
          {
            propName: 'shape',
            desc: '形状，可选值为 <code>square</code>',
            type: 'string',
            default: 'round',
          },
          {
            propName: 'disabled',
            desc: '是否禁用复选框',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'label-disabled',
            desc: '是否禁用复选框文本点击',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'label-position',
            desc: '文本位置，可选值为 <code>left</code>',
            type: 'string',
            default: 'right',
          },
          {
            propName: 'icon-size',
            desc: '图标大小，默认单位为<code>px</code>',
            type: 'number | string',
            default: '16px',
          },
          {
            propName: 'checked-color',
            desc: '选中状态颜色',
            type: 'string',
            default: '#1989fa',
          },
        ],
        boxEventsList: [{
            eventName: 'change',
            desc: '当绑定值变化时触发的事件',
            callParams: 'checked: boolean',
          },
          {
            eventName: 'click',
            desc: '点击图标时触发',
            callParams: 'event: Event',
          },
        ],
        groupEventsList: [{
          eventName: 'change',
          desc: '当绑定值变化时触发的事件',
          callParams: 'names: any[]',
        }, ],
        groupMethodsList: [{
          eventName: 'toggleAll',
          desc: '切换选中状态，传<code>true</code>为选中，<code>false</code>为取消选中，不传参为取反',
          callParams: 'checked?: boolean',
          callReturns: '-',
        }, ],
        boxSlotList: [{
            slotName: 'default',
            desc: '自定义文本',
          },
          {
            slotName: 'icon',
            desc: '自定义图标',
          },
        ],
        groupSlotList: [],
        cartList: [{
            title: '基础用法',
            desc: '通过 <code>v-model</code> 绑定复选框的勾选状态。',
            code: `<sun-checkbox v-model="checked">复选框</sun-checkbox>`,
            jsCode: `export default {
  data() {
    return {
      checked: true
    };
  },
};`,
          },
          {
            title: '禁用状态',
            desc: '通过设置 <code>disabled</code> 属性可以禁用复选框。',
            code: `<sun-checkbox v-model="checked" disabled>复选框</sun-checkbox>`,
          },
          {
            title: '自定义形状',
            desc: '将 <code>shape</code> 属性设置为 <code>square</code>，复选框的形状会变成方形。',
            code: `<sun-checkbox v-model="checked" shape="square">复选框</sun-checkbox>`,
          },
          {
            title: '自定义颜色',
            desc: '通过 <code>checked-color</code> 属性设置选中状态的图标颜色。',
            code: `<sun-checkbox v-model="checked" checked-color="#07c160">复选框</sun-checkbox>`,
          },
          {
            title: '自定义大小',
            desc: '通过 <code>icon-size</code> 属性可以自定义图标的大小。',
            code: `<sun-checkbox v-model="checked" icon-size="22px">复选框</sun-checkbox>`,
          },
          {
            title: '自定义图标',
            desc: '通过 <code>icon</code> 插槽自定义图标',
            code: ` <sun-checkbox v-model="checked">
  自定义图标
  <template #icon>
    <sun-icon name="plus" />
  </template>
</sun-checkbox>`,
          },
          {
            title: '禁用文本点击',
            desc: '设置 <code>label-disabled</code> 属性后，点击图标以外的内容不会触发复选框切换。',
            code: `<sun-checkbox v-model="checked" label-disabled>复选框</sun-checkbox>`,
          },
          {
            title: '复选框组',
            desc: '复选框可以与复选框组一起使用，复选框组通过 <code>v-model</code> 数组绑定复选框的勾选状态。',
            code: `<sun-checkbox-group v-model="result">
  <sun-checkbox name="a">复选框 a</sun-checkbox>
  <sun-checkbox name="b">复选框 b</sun-checkbox>
  <sun-checkbox name="c">复选框 c</sun-checkbox>
</sun-checkbox-group>`,
            jsCode: `export default {
  data() {
    return {
      result: ['a', 'b'],
    };
  },
};`,
          },
          {
            title: '水平排列',
            desc: '将 <code>direction</code> 属性设置为 <code>horizontal</code> 后，复选框组会变成水平排列。',
            code: `<sun-checkbox-group v-model="result" direction="horizontal">
  <sun-checkbox name="a">复选框 a</sun-checkbox>
  <sun-checkbox name="b">复选框 b</sun-checkbox>
  <sun-checkbox name="c">复选框 c</sun-checkbox>
</sun-checkbox-group>`,
            jsCode: `export default {
  data() {
    return {
      result: [],
    };
  },
};`,
          },
          {
            title: '限制最大可选数',
            desc: '通过 <code>max</code> 属性可以限制复选框组的最大可选数。',
            code: `<sun-checkbox-group v-model="result" :max="2">
  <sun-checkbox name="a">复选框 a</sun-checkbox>
  <sun-checkbox name="b">复选框 b</sun-checkbox>
  <sun-checkbox name="c">复选框 c</sun-checkbox>
</sun-checkbox-group>`,
          },
          {
            title: '限制最大可选数',
            desc: '通过 <code>CheckboxGroup</code> 实例上的 <code>toggleAll</code> 方法可以实现全选与反选。',
            code: `<sun-checkbox-group v-model="result4" ref="checkboxGroup">
  <sun-checkbox name="a">复选框 a</sun-checkbox>
  <sun-checkbox name="b">复选框 b</sun-checkbox>
  <sun-checkbox name="c">复选框 c</sun-checkbox>
</sun-checkbox-group>

<sun-button type="primary" @click="checkAll">全选</sun-button>
<sun-button type="info" @click="toggleAll">反选</sun-button>`,
            jsCode: `export default {
  data() {
    return {
      result: [],
    };
  },
  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
  },
};`,
          },
        ],
      }
    },
  }
</script>

<style lang="less"></style>