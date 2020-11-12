let data = {
  navList: [{
      desc: '开发指南',
      group: [{
        text: '介绍',
        path: '/',
        desc:'轻量、可靠的移动端 Vue 组件库',
      }]
    }, {
      desc: '基础组件',
      group: [{
        text: 'Button 按钮',
        desc:'按钮支持 default、primary、info、warning、danger 五种类型，默认为 default。',
        path: '/button'
      }, {
        text: 'Cell 单元格',
        desc:'使用 Cell 单元格列表展示',
        path: '/cell'
      }, {
        text: 'Icon 图标',
        desc:'Icon 图标组件，支持图片链接',
        path: '/icon'
      }, {
        text: 'Layout 布局',
        desc:'Layout 组件提供了24列栅格，通过在Col上添加span属性设置列所占的宽度百分比此外，添加offset属性可以设置列的偏移宽度，计算方式与 span 相同',
        path: '/layout'
      }, {
        text: 'Popup 弹出层',
        desc:'弹出层容器，用于展示弹窗、信息提示等内容。',
        path: '/popup'
      }, {
        text: 'Toast 轻提示',
        desc:'在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。',
        path: '/toast'
      },{
        text: 'Dialog 弹出框',
        desc:'弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。弹出框组件支持函数调用和组件调用两种方式。',
        path: '/dialog'
      }]
    },
    {
      desc: '表单组件',
      group: [{
          text: 'Checkbox 复选框',
          desc:'通过 v-model 绑定复选框的勾选状态。',
          path: '/checkbox'
        }, {
          text: 'Rate 评分',
          desc:'评分组件，支持自定义图标。',
          path: '/rate'
        }, {
          text: 'Switch 开关',
          desc:'通过 v-model 绑定开关的选中状态，true 表示开，false 表示关。',
          path: '/switch'
        }, {
          text: 'Message 消息提示',
          desc:'在页面顶部展示消息提示，支持函数调用。',
          path: '/message'
        }, {
          text: 'PullRefresh 下拉刷新',
          desc:'下拉刷新时会触发 refresh 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 v-model 设置为 false，表示加载完成。',
          path: '/pullRefresh'
        },
        {
          text: 'Stepper 进步器',
          desc:'步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。',
          path: '/stepper'
        }
      ]
    },
    {
      desc: '展示组件',
      group: [{
        text: 'Swipe 轮播图',
        desc:'每个 SwipeItem 代表一张轮播卡片，可以通过 autoplay 属性设置自动轮播的间隔。',
        path: '/swipe'
      },{
        text:'Collapse 折叠面板',
        path: '/collapse',
      },{
        text:'Pagination 分页',
        path: '/pagination',
      }]
    },
    {
      desc: '导航组件',
      group: [{
        text: 'NavBar 导航栏',
        desc:'通过插槽自定义导航栏两侧的内容。',
        path: '/navBar'
      }, {
        text: 'TabBar 标签栏',
        desc:'v-model 默认绑定选中标签的索引值，通过修改 v-model 即可切换选中的标签。',
        path: '/tabBar'
      }]
    }
  ],
  buttonData:{ // Button 按钮
    title:'Button 按钮',
    desc:'',
    importCode: `import Vue from 'vue';\nimport { Button } from 'vue-sun-ui';\n\nVue.use(Button);`,
    propsList: [{
        propName: 'type',
        desc: '类型，可选值为<code>primary</code><code>info</code><code>warning</code><code>danger</code>',
        type: 'string',
        default: 'default',
      },
      {
        propName: 'size',
        desc: '尺寸，可选值为<code>large</code><code>small</code><code>mini</code>',
        type: 'string',
        default: 'normal',
      },
      {
        propName: 'color',
        desc: '按钮颜色，支持传入 <code>linear-gradient</code> 渐变色',
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
        propName: 'tag',
        desc: '按钮根节点的 HTML 标签',
        type: 'string',
        default: 'button',
      },
      {
        propName: 'block',
        desc: '是否为块级元素',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'plain',
        desc: '是否为朴素按钮',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'text',
        desc: '按钮文字	',
        type: 'string',
        default: '-'
      },
      {
        propName: 'round',
        desc: '是否为圆形按钮',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'disabled	',
        desc: '是否禁用按钮',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'isExtra',
        desc: '是否开起点击边框效果',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'effectWidth',
        desc: '边框效果的宽度	',
        type: 'string | number',
        default: '6px',
      },
    ],
    eventsList: [{
        eventName: 'click',
        desc: '点击按钮，且按钮状态不为加载或禁用时触发',
        callParams: 'event: Event',
      },
      {
        eventName: 'touchstart',
        desc: '开始触摸按钮时触发',
        callParams: 'event: TouchEvent',
      },
    ],
    slotsList: [{
      slotName: 'default',
      desc: '按钮内容'
    }],
    cartList: [{
        title: '按钮类型',
        desc: ' 按钮支持 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>danger</code> 五种类型，默认为 <code>default</code>。',
        code: `<sun-button type="primary">主要按钮</sun-button>\n<sun-button type="info">信息按钮</sun-button>\n<sun-button type="default">默认按钮</sun-button>\n<sun-button type="danger">危险按钮</sun-button>\n<sun-button type="warning">警告按钮</sun-button>`,
      },
      {
        title: '禁用状态',
        desc: '通过 <code>disabled</code> 属性来禁用按钮，禁用状态下按钮不可点击。',
        code: `<sun-button disabled type="primary">禁用状态</sun-button>\n<sun-button disabled type="info">禁用状态</sun-button>`,
      },
      {
        title: '朴素按钮',
        desc: '通过 <code>plain</code> 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。',
        code: `<sun-button type="primary" plain>朴素按钮</sun-button>\n<sun-button type="info" plain>朴素按钮</sun-button>`,
      },
      {
        title: '按钮形状',
        desc: '通过 <code>square</code> 设置方形按钮，通过 <code>round</code> 设置圆形按钮。',
        code: `<sun-button type="primary">方形按钮</sun-button>\n<sun-button type="info" round>圆形按钮</sun-button>`,
      },

      {
        title: '图标按钮',
        desc: '通过 <code>icon</code> 属性设置按钮图标，支持 <code>Icon</code> 组件里的所有图标，也可以传入图标 URL。',
        code: `<sun-button type="primary" icon="plus"></sun-button>\n<sun-button type="primary" icon="plus">按钮</sun-button>\n<sun-button type="info" plain icon="friends">按钮</sun-button>`,
      },
      {
        title: '按钮边框效果',
        desc: '通过 <code>isExtra</code> 属性设置按钮点击外边框的效果',
        code: `<sun-button type="primary" :isExtra="false">关闭效果</sun-button>\n<sun-button type="info" effectWidth="10px">调整效果大小</sun-button>`,
      },
      {
        title: '按钮尺寸',
        desc: '支持 <code>large</code>、 <code>normal</code>、 <code>small</code>、 <code>mini</code> 四种尺寸， 默认为 <code>normal</code>。',
        code: `<sun-button type="primary" size="large">大号按钮</sun-button>\n<sun-button type="primary" size="normal">普通按钮</sun-button>\n<sun-button type="info" size="small">小型按钮</sun-button>\n<sun-button type="danger" size="mini">迷你按钮</sun-button>`,
      },
      {
        title: '自定义颜色',
        desc: '通过 <code>color</code> 属性可以自定义按钮的颜色。',
        code: `<sun-button color="#7232dd">单色按钮</sun-button>\n<sun-button color="#7232dd" plain>单色按钮</sun-button>\n<sun-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变按钮</sun-button>`,
      },
    ],
  },
  cellData:{ // Cell 单元格
    title:'Cell 单元格',
    desc:'',
    importCode: `import Vue from 'vue'; \nimport { Cell } from 'vue-sun-ui'; \n \nVue.use(Cell);`,
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
  },
  checkBoxData:{ // Checkbox 复选框
        title:'Checkbox 复选框',
        desc:'',
        importCode: `import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'sun';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);`,
        parentPropsList: [{
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
        childPropsList: [{
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
        childEventsList: [{
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
        parentEventsList: [{
          eventName: 'change',
          desc: '当绑定值变化时触发的事件',
          callParams: 'names: any[]',
        }, ],
        parentMethodsList: [{
          methodName: 'toggleAll',
          desc: '切换选中状态，传<code>true</code>为选中，<code>false</code>为取消选中，不传参为取反',
          callParams: 'checked?: boolean',
          callReturns: '-',
        }, ],
        childSlotsList: [{
            slotName: 'default',
            desc: '自定义文本',
          },
          {
            slotName: 'icon',
            desc: '自定义图标',
          },
        ],
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
  },
  iconData:{ // Icon 图标
    title:'Icon 图标',
    desc:'基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过icon属性引用',
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
  },
  layoutData:{ // Layout 布局
    title:'Layout 布局',
    desc:'Layout 提供了 van-row 和 van-col 两个组件来进行行列布局。',
    importCode: `import Vue from 'vue';\nimport { Col, Row } from 'vue-sun-ui';\n\nVue.use(Col);\nVue.use(Row);`,
    parentPropsList: [{
        propName: 'type',
        desc: '布局方式，可选值为<code>flex</code>',
        type: 'string',
        default: '-',
      },
      {
        propName: 'gutter',
        desc: '	列元素之间的间距（单位为 px）',
        type: 'number | string',
        default: '-',
      },
      {
        propName: 'justify',
        desc: 'Flex 主轴对齐方式，可选值为 <code>end</code> <code>center</code> <code>space-around</code> <code>space-between</code>',
        type: 'string',
        default: 'start',
      },
      {
        propName: 'align',
        desc: 'Flex 交叉轴对齐方式，可选值为 <code>center</code> <code>bottom</code>	',
        type: 'string',
        default: 'inherit',
      },
      {
        propName: 'tag',
        desc: 'HTML 标签',
        type: 'string',
        default: 'div',
      },

    ],
    childPropsList: [{
        propName: 'span',
        desc: '列元素宽度',
        type: 'number | string',
        default: '-',
      },
      {
        propName: 'offset',
        desc: '列元素偏移距离	',
        type: 'number | string',
        default: '-',
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
      desc: '点击图标时触发',
      callParams: 'event: Event',
    }],
    cartList: [{
        title: '基础展示',
        desc: 'Layout 组件提供了<code>24列栅格</code>，通过在<code>Col</code>上添加<code>span</code>属性设置列所占的宽度百分比此外，添加<code>offset</code>属性可以设置列的偏移宽度，计算方式与 span 相同',
        code: `<sun-row>
  <sun-col span="8">span: 8</sun-col>
  <sun-col span="8">span: 8</sun-col>
  <sun-col span="8">span: 8</sun-col>
</sun-row>

<sun-row>
  <sun-col span="4">span: 4</sun-col>
  <sun-col span="10" offset="4">offset: 4, span: 10</sun-col>
</sun-row>

<sun-row>
  <sun-col offset="12" span="12">offset: 12, span: 12</sun-col> 
</sun-row>
`,
      },

      {
        title: '设置列元素间距',
        desc: '通过<code>gutter</code>属性可以设置列元素之间的间距，默认间距为 0',
        code: `<sun-row gutter="20">
  <sun-col span="8">span: 8</sun-col>
  <sun-col span="8">span: 8</sun-col>
  <sun-col span="8">span: 8</sun-col>
</sun-row>`,
      },
      {
        title: 'Flex 布局',
        desc: '将 <code>type</code> 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐',
        code: `<!-- 左对齐 -->
<sun-row type="flex">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>

<!-- 居中 -->
<sun-row type="flex" justify="center">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>

<!-- 右对齐 -->
<sun-row type="flex" justify="end">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>

<!-- 两端对齐 -->
<sun-row type="flex" justify="space-between">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>

<!-- 每个元素的两侧间隔相等 -->
<sun-row type="flex" justify="space-around">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>`,
      },
    ],
  },
  messageData:{ // Message 消息提示
    title:'Message 消息提示',
    desc:'在页面顶部展示消息提示，支持函数调用。',
    importCode: `import Vue from 'vue';\nimport { Message } from 'vue-sun-ui';\n\nVue.use(Message);\nthis.$message('提示消息')`,
    methodsList: [{
        methodName: 'Message',
        desc: '展示提示	',
        callParams: 'options | message',
        callReturns: 'message 实例',
      },
      {
        methodName: 'Message.success',
        desc: '展示成功消息',
        callParams: 'options | message',
        callReturns: 'message 实例',
      },
      {
        methodName: 'Message.error',
        desc: '展示错误消息',
        callParams: 'options | message',
        callReturns: 'message 实例',
      },
      {
        methodName: 'Message.info',
        desc: '展示信息提示',
        callParams: 'options | message',
        callReturns: 'message 实例',
      },
      {
        methodName: 'Message.warning',
        desc: '展示警告消息',
        callParams: 'options | message',
        callReturns: 'message 实例',
      },
      {
        methodName: 'Message.loading',
        desc: '展示加载消息',
        callParams: 'options | message',
        callReturns: 'message 实例',
      },
      {
        methodName: 'Message.clear',
        desc: '关闭消息',
        callParams: '-',
        callReturns: 'void',
      },
    ],
    optionsList: [{
        optionName: 'type',
        desc: '类型，可选值为 <code>success</code> <code>error</code> <code>info</code><code>warning</code><code>loading</code>',
        type: 'string',
        default: 'success',
      },
      {
        optionName: 'message',
        desc: '展示文案，支持通过 \\n 换行',
        type: 'string',
        default: 'center',
      },
      {
        optionName: 'duration',
        desc: '展示时长(ms)',
        type: 'number | string',
        default: '1500',
      },
      {
        optionName: 'color',
        desc: '字体和图标的颜色',
        type: 'string',
        default: '-',
      },
      {
        optionName: 'icon',
        desc: '之定义图标',
        type: 'string',
        default: '-',
      },
      {
        optionName: 'border',
        desc: '是否显示边框',
        type: 'boolean',
        default: 'false',
      },
      {
        optionName: 'position',
        desc: '展示的位置，可选值有 <code>center</code>、<code>bottom</code>',
        type: 'string',
        default: 'top',
      },
      {
        optionName: 'onClick',
        desc: '点击时的回调函数',
        type: 'Function',
        default: '-',
      },
      {
        optionName: 'onOpened',
        desc: '完全展示后的回调函数',
        type: 'Function',
        default: '-',
      },
      {
        optionName: 'onClose',
        desc: '关闭时的回调函数',
        type: 'Function',
        default: '-',
      },

    ],
    cartList: [{
        title: '基础用法',
        jsCode: `Message('通知内容');`,
      },
      {
        title: '消息类型',
        desc: '支持 <code>success</code>、<code>error</code>、<code>info</code>、<code>warning</code>、<code>loading</code> 五种通知类型，默认为 success。',
        jsCode: `// 成功消息
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
        jsCode: `// 自定义颜色
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
  },
  navBarData:{ // NavBar 导航栏
    title:'NavBar 导航栏',
    desc:'',
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
  },
  popupData:{ // Popup 弹出层
    title:'Popup 弹出层',
    desc:'弹出层容器，用于展示弹窗、信息提示等内容。',
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
  },
  pullRefreshData:{ // PullRefresh 下拉刷新
    title:'PullRefresh 下拉刷新',
    desc:'',
    importCode: `import Vue from 'vue'; \nimport { PullRefresh } from 'vue-sun-ui'; \n \nVue.use(PullRefresh);`,
        propsList: [{
            propName: 'v-model',
            desc: '是否处于加载中状态',
            type: 'boolean',
            default: '-',
          },
          {
            propName: 'pulling-text',
            desc: '	下拉过程提示文案',
            type: 'string',
            default: '下拉即可刷新...',
          },
          {
            propName: 'loosing-text',
            desc: '释放过程提示文案',
            type: 'string',
            default: '释放即可刷新...',
          },
          {
            propName: 'loading-text',
            desc: '加载过程提示文案',
            type: 'string',
            default: '加载中...',
          },
          {
            propName: 'success-text',
            desc: '刷新成功提示文案',
            type: 'string',
            default: '-',
          },
          {
            propName: 'success-duration',
            desc: '刷新成功提示展示时长(ms)',
            type: 'number | string',
            default: '500',
          },
          {
            propName: 'head-height',
            desc: '顶部内容高度',
            type: 'number | string',
            default: '50',
          },
        ],
        eventsList: [{
          eventName: 'refresh',
          desc: '下拉刷新时触发',
          callParams: '-',
        }],
        slotsList: [{
            slotName: 'default',
            desc: '自定义内容'
          },
          {
            slotName: 'pulling',
            desc: '下拉过程中顶部内容'
          },
          {
            slotName: 'loosing',
            desc: '释放过程中顶部内容'
          },
          {
            slotName: 'loading',
            desc: '加载过程中顶部内容'
          },
          {
            slotName: 'success',
            desc: '刷新成功提示内容'
          },
        ],
        cartList: [{
            title: '基础用法',
            desc: '下拉刷新时会触发 <code>refresh</code> 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 <code>v-model</code> 设置为 <code>false</code>，表示加载完成。',
            code: `<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>`,
            jsCode: `import { Toast } from 'vue-sun-ui';

export default {
  data() {
    return {
      count: 0,
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
     console.log('刷新完成回调')
    },
  },
};`
          },
          {
            title: '成功提示',
            desc: '通过 <code>success-text</code> 可以设置刷新成功后的顶部提示文案。',
            code: `<van-pull-refresh
  v-model="isLoading"
  success-text="刷新成功"
  @refresh="onRefresh"
>
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>`,
          },
          {
            title: '自定义提示',
            desc: '通过插槽可以自定义下拉刷新过程中的提示内容。',
            code: `<van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
  <!-- 释放提示 -->
  <template #loosing>
    <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
  </template>

  <!-- 加载提示 -->
  <template #loading>
    <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
  </template>
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>

<style>
  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
</style>`,
          }
        ],
  },
  rateData:{ // Rate 评分
    title:'Rate 评分',
    desc:'',
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
  },
  stepperData:{ // Stepper 步进器
    title:'Stepper 步进器',
    desc:'步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。',
    importCode: `import Vue from 'vue'; \nimport { Stepper } from 'vue-sun-ui'; \n \nVue.use(Stepper);`,
    propsList: [{
        propName: 'v-model',
        desc: '当前分值',
        type: 'number | string',
        default: '-',
      },
      {
        propName: 'min',
        desc: '最小值',
        type: 'number | string',
        default: '1',
      },
      {
        propName: 'max',
        desc: '最大值',
        type: 'number | string',
        default: '-',
      },
      {
        propName: 'step',
        desc: '步长，每次点击时改变的值',
        type: 'number | string',
        default: '1',
      },
      {
        propName: 'input-width',
        desc: '输入框宽度，默认单位为<code>px</code>',
        type: 'number | string',
        default: '32px',
      },
      {
        propName: 'button-size',
        desc: '按钮大小以及输入框高度，默认单位为<code>px</code>',
        type: 'number | string',
        default: '28px',
      },
      {
        propName: 'theme',
        desc: '样式风格，可选值为 <code>round</code>',
        type: 'string',
        default: '-',
      },
      {
        propName: 'disabled',
        desc: '是否禁用步进器',
        type: 'boolean',
        default: 'false'
      },
      {
        propName: 'disable-plus',
        desc: '是否禁用增加按钮',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'disable-minus',
        desc: '是否禁用减少按钮',
        type: 'boolean	',
        default: 'false',
      },
      {
        propName: 'disable-input',
        desc: '是否禁用输入框',
        type: 'boolean	',
        default: 'false',
      },
      {
        propName: 'show-plus',
        desc: '是否显示增加按钮	',
        type: 'boolean	',
        default: 'true',
      },
      {
        propName: 'show-minus',
        desc: '是否显示减少按钮	',
        type: 'boolean	',
        default: 'true',
      }
    ],
    eventsList: [{
      eventName: 'change',
      desc: '当绑定值变化时触发的事件',
      callParams: 'value: string',
    }, {
      eventName: 'overlimit',
      desc: '点击不可用的按钮时触发',
      callParams: '-',
    }, {
      eventName: 'plus',
      desc: '点击增加按钮时触发',
      callParams: '-',
    }, {
      eventName: 'minus',
      desc: '点击减少按钮时触发',
      callParams: '-',
    }, {
      eventName: 'focus',
      desc: '输入框聚焦时触发',
      callParams: 'event: Event',
    }, {
      eventName: 'blur',
      desc: '输入框失焦时触发',
      callParams: 'event: Event',
    }],
    cartList: [{
        title: '基础用法',
        desc: '通过 <code>v-model</code> 绑定输入值，可以通过 <code>change</code> 事件监听到输入值的变化。',
        code: `<sun-stepper v-model="value" />`,
        jsCode: `export default {
  data() {
    return {
      value: 1,
    };
  },
};`
      },
      {
        title: '步长设置',
        desc: '通过 <code>step</code> 属性设置每次点击增加或减少按钮时变化的值，默认为 <code>1</code>。',
        code: `<sun-stepper v-model="value" step="2" />`,
      },
      {
        title: '限制输入范围',
        desc: '通过 <code>min</code> 和 <code>max</code> 属性限制输入值的范围。',
        code: `<sun-stepper v-model="value" min="5" max="8" />`,
      },

      {
        title: '禁用状态',
        desc: '通过设置 <code>disabled</code> 属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。',
        code: `<sun-stepper v-model="value" disabled />`,
      },

      {
        title: '禁用输入框',
        desc: '通过设置 <code>disable-input</code> 属性来禁用输入框，此时按钮仍然可以点击。',
        code: `<sun-stepper v-model="value" disable-input />`,
      },
      {
        title: '自定义大小',
        desc: '通过 <code>input-width</code> 属性设置输入框宽度，通过 <code>button-size</code> 属性设置按钮大小和输入框高度。',
        code: `<sun-stepper v-model="value" input-width="40px" button-size="32px" />`,
      },
      {
        title: '圆角风格',
        desc: `将 <code>theme</code> 设置为 <code>round</code> 来展示圆角风格的步进器。`,
        code: `<sun-stepper v-model="value" theme="round" button-size="22" disable-input />`
      }
    ],
  },
  swipeData:{ // Swipe 轮播
    title:'Swipe 轮播',
    desc:'',
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
        methodsList: [{
          methodName: 'prev',
          desc: '切换到上一轮播',
          callParams: '-',
          callReturns: '-',
        }, {
          methodName: 'next',
          desc: '切换到下一轮播',
          callParams: '-',
          callReturns: '-',
        }, {
          methodName: 'swipeTo',
          desc: '切换到指定位置',
          callParams: 'index: number',
          callReturns: 'void',
        }],
        slotsList: [{
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
  },
  switchData:{ // Switch 开关
    title:'Switch 开关',
    desc:'',
    importCode: `import Vue from 'vue'; \nimport { Switch } from 'vue-sun-ui'; \n \nVue.use(Switch);`,
        propsList: [{
            propName: 'v-model',
            desc: '开关选中状态',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'loading',
            desc: '	是否为加载状态	',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'disabled',
            desc: '是否为禁用状态',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'size',
            desc: '开关尺寸，默认单位为<code>px</code>',
            type: 'number | string',
            default: '30px',
          },
          {
            propName: 'active-color',
            desc: '打开时的背景色	',
            type: 'string',
            default: '#1989fa',
          },
          {
            propName: 'inactive-color',
            desc: '关闭时的背景色',
            type: 'string',
            default: 'white',
          }
        ],
        eventsList: [{
          eventName: 'change',
          desc: '开关状态切换时触发',
          callParams: 'value: boolean',
        }, {
          eventName: 'click',
          desc: '点击时触发',
          callParams: 'event: Event',
        }],
        cartList: [{
            title: '基础用法',
            desc: '通过 <code>v-model</code> 绑定开关的选中状态，<code>true</code> 表示开，<code>false</code> 表示关。',
            code: `<sun-switch v-model="checked" />`,
            jsCode: `export default {
  data() {
    return {
      checked: true,
    };
  },
};`
          },
          {
            title: '禁用状态',
            desc: '通过 <code>disabled</code> 属性来禁用开关，禁用状态下开关不可点击。',
            code: `<sun-switch v-model="checked" disabled />`,
          },
          {
            title: '加载状态',
            desc: '通过 <code>loading</code> 属性设置开关为加载状态，加载状态下开关不可点击。',
            code: `<sun-switch v-model="checked" loading />`,
          },

          {
            title: '自定义大小',
            desc: '通过 <code>size</code> 属性自定义开关的大小。',
            code: `<sun-switch v-model="checked" size="24px" />`,
          },

          {
            title: '自定义颜色',
            desc: '<code>active-color</code> 属性表示打开时的背景色，<code>inactive-color</code> 表示关闭时的背景色。',
            code: `<sun-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />`,
          }
        ],
  },
  tabbarData:{// Tabbar 标签栏
    title:'Tabbar 标签栏',
    desc:'',
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
  },
  toastData:{// Toast 轻提示
    title:'Toast 轻提示',
    desc:'在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。',
    importCode: `import Vue from 'vue';\nimport { Toast } from 'vue-sun-ui';\n\nVue.use(Toast);`,
    methodsList: [{
            methodName: 'Toast',
            desc: '展示提示	',
            callParams: 'options | message',
            callReturns: 'toast 实例',
          },
          {
            methodName: 'Toast.loading',
            desc: '展示加载提示	',
            callParams: 'options | message',
            callReturns: 'toast 实例',
          },
          {
            methodName: 'Toast.success',
            desc: '展示成功提示',
            callParams: 'options | message',
            callReturns: 'toast 实例',
          },
          {
            methodName: 'Toast.fail',
            desc: '展示失败提示	',
            callParams: 'options | message',
            callReturns: 'toast 实例',
          },
          {
            methodName: 'Toast.clear',
            desc: '关闭提示',
            callParams: '-',
            callReturns: 'void',
          },
        ],
        optionsList: [{
            optionName: 'type',
            desc: '提示类型，可选值为 <code>loading</code> <code>success</code> <code>fail</code>',
            type: 'string',
            default: 'text',
          },
          {
            optionName: 'position',
            desc: '位置，可选值为 <code>top</code> <code>bottom</code>	',
            type: 'string',
            default: 'center',
          },
          {
            optionName: 'message',
            desc: '文本内容',
            type: 'string',
            default: '"',
          },
          {
            optionName: 'icon',
            desc: '自定义图标，支持传入<a href="#/icon">图标名称</a>或图片链接',
            type: 'string',
            default: '"',
          },
          {
            optionName: 'iconPrefix',
            desc: '图标类名前缀',
            type: 'string',
            default: 'sun-icon',
          },
          {
            optionName: 'overlay',
            desc: '是否显示背景遮罩层',
            type: 'boolean',
            default: 'false',
          },

          {
            optionName: 'closeOnClick',
            desc: '是否在点击后关闭',
            type: 'boolean',
            default: 'false',
          },
          {
            optionName: 'duration',
            desc: '展示时长(ms)',
            type: 'number',
            default: '1500',
          },
          {
            optionName: 'className',
            desc: '自定义类名',
            type: 'string',
            default: 'sun-toast',
          },
          {
            optionName: 'onOpened',
            desc: '完全展示后的回调函数',
            type: 'Function',
            default: '-',
          },
          {
            optionName: 'onClose',
            desc: '关闭时的回调函数',
            type: 'Function',
            default: '-',
          },
        ],
        cartList: [{
            title: '文字提示',
            desc: 'Layout 组件提供了<code>24列栅格</code>，通过在<code>Col</code>上添加<code>span</code>属性设置列所占的宽度百分比此外，添加<code>offset</code>属性可以设置列的偏移宽度，计算方式与 span 相同',
            jsCode: `Toast('提示内容');`,
          },

          {
            title: '加载提示',
            desc: '使用 <code>Toast.loading</code> 方法展示加载提示。',
            jsCode: `Toast.loading({
  message: '加载中...'
});`,
          },
          {
            title: '成功/失败提示',
            desc: '使用 <code>Toast.success</code> 方法展示成功提示，使用 <code>Toast.fail</code> 方法展示失败提示。',
            jsCode: `Toast.success('成功提示');\nToast.fail('失败提示');`,
          },
          {
            title: '自定义图标',
            desc: '通过<code>icon</code>选项可以自定义图标，支持传入图标名称或图片链接，如果在loading方法中使用<code>icon</code>属性可以自定义加载图标。',
            jsCode: `Toast({
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
            jsCode: `Toast({
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
            jsCode: `export default {
  mounted() {
    this.$toast('提示文案');
  },
};`,
          },
          {
            title: '单例模式',
            desc: 'Toast 采用单例模式，即同一时间只会存在一个 Toast，可以像下面这样手动关闭 Toast',
            jsCode: `const toast1 = Toast('第一个 Toast');
const toast2 = Toast.success('第二个 Toast');

toast1.clear();
toast2.clear();`,
          },
        ],
  },
  dialogData:{ // Dialog 弹框
    title:'Dialog 弹框',
    desc:'弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。弹出框组件支持函数调用和组件调用两种方式。',
    importCode: `import Vue from 'vue'; \nimport { Dialog } from 'vue-sun-ui'; \n \nVue.use(Dialog);`,
        propsList: [{
            propName: 'v-model',
            desc: '是否显示弹窗',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'title',
            desc: '标题',
            type: 'string',
            default: '-',
          },
          {
            propName: 'width',
            desc: '弹窗宽度，默认单位为 <code>px</code>',
            type: 'number | string',
            default: '320px',
          },
          {
            propName: 'message',
            desc: '文本内容',
            type: 'string',
            default: '-',
          },
          {
            propName: 'theme',
            desc: '样式风格，可选值为 <code>round-button</code>',
            type: 'string',
            default: 'default',
          },
          {
            propName: 'show-confirm-button',
            desc: '是否展示确认按钮',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'show-cancel-button',
            desc: '是否展示取消按钮',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'confirm-button-text',
            desc: '确认按钮文案',
            type: 'string',
            default: '确认',
          },
          {
            propName: 'confirm-button-color',
            desc: '确认按钮颜色',
            type: 'string',
            default: '#ee0a24',
          },

          {
            propName: 'cancel-button-text',
            desc: '取消按钮文案',
            type: 'string',
            default: '取消',
          },
          {
            propName: 'cancel-button-color',
            desc: '取消按钮颜色',
            type: 'string',
            default: 'black',
          },
          {
            propName: 'overlay',
            desc: '是否展示遮罩层',
            type: 'boolean',
            default: 'true',
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
            propName: 'close-on-click-overlay',
            desc: '是否在点击遮罩层后关闭弹窗',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'tag',
            desc: 'Dialog 渲染标签',
            type: 'string',
            default: 'div',
          },
        ],
        eventsList: [
          {
            eventName: 'confirm',
            desc: '点击确认按钮时触发',
            callParams: '-',
          },
          {
            eventName: 'cancel',
            desc: '点击取消按钮时触发',
            callParams: '-',
          }, 
          {
            eventName: 'open',
            desc: '打开弹窗时触发',
            callParams: '-',
          }, 
          {
            eventName: 'close',
            desc: '关闭弹窗时触发',
            callParams: '-',
          }
        ],
        cartList: [{
            title: '消息提示',
            desc: '用于提示一些消息，只包含一个确认按钮。',
            code: `<sun-dialog v-model="show" title="标题" message="代码是写出来给人看的，附带能在机器上运行"></sun-dialog>`,
            jsCode: `export default {
  data() {
    return {
      show: true
    };
  },
};`
          },
          {
            title: '消息确认',
            desc: '用于确认消息，包含取消和确认按钮。',
            code: `<sun-dialog v-model="show" title="标题" message="代码是写出来给人看的，附带能在机器上运行" show-cancel-button></sun-dialog>`,
          },
          {
            title: '圆角按钮风格',
            desc: '将 theme 选项设置为 <code>round-button</code> 可以展示圆角按钮风格的弹窗。',
            code: `<sun-dialog v-model="show" theme="round-button" title="标题" message="代码是写出来给人看的，附带能在机器上运行" show-cancel-button></sun-dialog>`,
          }
        ],
        slotsList: [{
          slotName: 'default',
          desc: '自定义内容',
        },
        {
          slotName: 'title',
          desc: '自定义标题',
        },
      ],
  },
}
export default data