let data = {
  navList: [{
      desc: 'Essentials',
      group: [{
        text: 'Introduction',
        path: '/',
        desc:'Mobile UI Components built on Vue'
      }]
    }, {
      desc: 'Basic Components',
      group: [{
        text:'Button',
        path: '/button',
        desc:'Support default、primary、info、warning、danger ，Default is default。'
      }, {
        text:'Cell',
        path: '/cell',
        desc:'Use a list of Cell cells'
      }, {
        text:'Icon',
        path: '/icon',
        desc:'Icon Icon component, supporting image links'
      }, {
        text:'Layout',
        path: '/layout',
        desc:'The Layout component provides 24 columns of grids, and sets the percentage of columns width by adding the span attribute to the Col. In addition, add the offset attribute to set the offset width of the columns in the same way as the span'
      }, {
        text:'Popup',
        path: '/popup',
        desc:'Pop-up layer container, used to display pop-ups, information tips and other content.'
      }, {
        text:'Toast',
        path: '/toast',
        desc:'Black translucent prompt appears in the middle of the page for message notification, loading prompt, operation result prompt and other scenarios.'
      },{
        text: 'Dialog',
        desc:'Pop-up modal boxes, often used for message prompts, message acknowledgements, or to complete specific interactions within the current page.The pop-up component supports both function calls and component calls.',
        path: '/dialog'
      }]
    },
    {
      desc:'Form Components',
      group: [{
          text:'Checkbox',
          path: '/checkbox',
          desc:'Check the state by v-Model binding check box.'
        }, {
          text:'Rate',
          path: '/rate',
          desc:'Rating components, support for custom ICONS.'
        }, {
          text:'Switch',
          path: '/switch',
          desc:'With the v-Model binding switch selected, true means on and false means off.'
        }, {
          text:'Message',
          path: '/message',
          desc:'A message prompt is displayed at the top of the page to support function calls.'
        }, {
          text:'PullRefresh',
          path: '/pullRefresh',
          desc:"The Refresh event is triggered when the pull down refreshes and can be performed synchronously or asynchronously in the event's callback function. When the operation is complete, the V-Model is set to false to indicate that the load is complete."
        },
        {
          text:'Stepper',
          path: '/stepper',
          desc:'The stepper is composed of add button, reduce button and input box, which is used to input and adjust Numbers within a certain range.'
        }
      ]
    },
    {
      desc:'Display Components',
      group: [{
        text:'Swipe',
        path: '/swipe',
        desc:'Each SwipeItem represents a rotations card, and the interval of automatic rotations can be set through the AutoPlay property.'
      },{
        text:'Collapse',
        path: '/collapse',
      },{
        text:'Pagination',
        path: '/pagination',
      }]
    },
    {
      desc:'Navigation Components',
      group: [{
        text:'NavBar',
        path: '/navBar',
        desc:'Customize the content on either side of the navigation bar through the slot.'
      }, {
        text:'TabBar',
        path: '/tabBar',
        desc:'The v-Model default binding selects the index value of the label, and the selected label can be switched by modifying the V-Model.'
      }]
    }
  ],
  buttonData:{ // Button 按钮
    title:'Button',
    desc:'',
    importCode: `import Vue from 'vue';\nimport { Button } from 'vue-sun-ui';\n\nVue.use(Button);`,
    propsList: [{
        propName: 'type',
        desc: 'Can be set to<code>primary</code><code>info</code><code>warning</code><code>danger</code>',
        type: 'string',
        default: 'default',
      },
      {
        propName: 'size',
        desc: 'Can be set to<code>large</code><code>small</code><code>mini</code>',
        type: 'string',
        default: 'normal',
      },
      {
        propName: 'color',
        desc: 'Color, support <code>linear-gradient</code>',
        type: 'string',
        default: '-',
      },
      {
        propName: 'icon',
        desc: 'Left Icon',
        type: 'string',
        default: 'sun-icon',
      },
      {
        propName: 'tag',
        desc: 'HTML Tag',
        type: 'string',
        default: 'button',
      },
      {
        propName: 'block',
        desc: 'Whether to set display block',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'plain',
        desc: 'Whether to be plain button',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'text',
        desc: 'Text',
        type: 'string',
        default: '-'
      },
      {
        propName: 'round',
        desc: 'Whether to be round button',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'disabled	',
        desc: 'Whether to disable button',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'isExtra',
        desc: 'Whether to open and click the border effect',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'effectWidth',
        desc: 'The width of the border effect',
        type: 'string | number',
        default: '6px',
      },
    ],
    eventsList: [{
        eventName: 'click',
        desc: 'Triggered when click button and not disabled or loading',
        callParams: 'event: Event',
      },
      {
        eventName: 'touchstart',
        desc:'Triggered when touch start',
        callParams: 'event: TouchEvent',
      },
    ],
    slotsList: [{
      slotName: 'default',
      desc: 'Content',
    }],
    cartList: [{
        title:'type',
        code: `<sun-button type="primary">primary</sun-button>\n<sun-button type="info">info</sun-button>\n<sun-button type="default">default</sun-button>\n<sun-button type="danger">danger</sun-button>\n<sun-button type="warning">warning</sun-button>`,
      },
      {
        title:'Disabled',
        code: `<sun-button disabled type="primary">Disabled</sun-button>\n<sun-button disabled type="info">Disabled</sun-button>`,
      },
      {
        title: 'plain',
        code: `<sun-button type="primary" plain>primary</sun-button>\n<sun-button type="info" plain>info</sun-button>`,
      },
      {
        title: 'Shape',
        code: `<sun-button type="primary">Square</sun-button>\n<sun-button type="info" round>Round</sun-button>`,
      },

      {
        title: 'Icon',
        code: `<sun-button type="primary" icon="plus"></sun-button>\n<sun-button type="primary" icon="plus">Button</sun-button>\n<sun-button type="info" plain icon="friends">Button</sun-button>`,
      },
      {
        title: 'Border Effect',
        code: `<sun-button type="primary" :isExtra="false">Close Effect</sun-button>\n<sun-button type="info" effectWidth="10px">Change Size</sun-button>`,
      },
      {
        title: 'Size',
        code: `<sun-button type="primary" size="large">Large</sun-button>\n<sun-button type="primary" size="normal">Normal</sun-button>\n<sun-button type="info" size="small">Small</sun-button>\n<sun-button type="danger" size="mini">Mini</sun-button>`,
      },
      {
        title: 'Custom Color',
        code: `<sun-button color="#7232dd">Pure</sun-button>\n<sun-button color="#7232dd" plain>Pure</sun-button>\n<sun-button color="linear-gradient(to right, #ff6034, #ee0a24)">Gradient</sun-button>`,
      },
    ],
  },
  cellData:{ // Cell 单元格
    title:'Cell',
    desc:'',
    importCode: `import Vue from 'vue'; \nimport { Cell } from 'vue-sun-ui'; \n \nVue.use(Cell);`,
    propsList: [{
        propName: 'title',
        desc: 'Title',
        type: 'number | string',
        default: '-',
      },
      {
        propName: 'value',
        desc: '	Right text',
        type: 'number | string',
        default: '-',
      },
      {
        propName: 'label',
        desc: 'Description below the title',
        type: 'string',
        default: '-',
      },
      {
        propName: 'icon',
        desc: 'Left Icon',
        type: 'string',
        default: 'sun-icon',
      },
      {
        propName: 'border',
        desc: 'Whether to show inner border',
        type: 'boolean',
        default: 'true',
      },
      {
        propName: 'is-link',
        desc: 'Whether to show link icon',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'arrow-direction',
        desc: 'Can be set to <code>left</code> <code>up</code> <code>down</code>',
        type: 'string',
        default: 'right',
      },
      {
        propName: 'title-style',
        desc: 'Title style',
        type: 'any',
        default: '-'
      },
      {
        propName: 'title-class',
        desc: 'Title className',
        type: 'any',
        default: '-',
      },
      {
        propName: 'value-class',
        desc: 'Value className',
        type: 'any',
        default: '-',
      },
      {
        propName: 'label-class',
        desc: 'Label className',
        type: 'any',
        default: '-',
      }
    ],
    eventsList: [{
      eventName: 'click',
      desc: 'Triggered when a cell is clicked',
      callParams: 'event: Event',
    }],
    slotsList: [{
        slotName: 'default',
        desc: 'Custom value',
      },
      {
        slotName: 'title',
        desc: 'Custom title',
      },
      {
        slotName: 'icon',
        desc: 'Custom icon',
      }
    ],
    cartList: [{
        title: 'Basic Usage',
        code: `<sun-cell title="Cell title" value="Content" />\n<sun-cell title="Cell title" value="Content" label="Description" />`,
      },
      {
        title: 'Left Icon',
        code: `<sun-cell icon="friends" title="Cell title" value="Content" />`,
      },
      {
        title: 'Link',
        code: `<sun-cell title="Cell title" is-link />\n<sun-cell title="Cell title" is-link value="Content" />\n<sun-cell title="Cell title" is-link arrow-direction="down" value="Content" />`,
      },

      {
        title: 'Background Effect',
        code: `<sun-cell title="Cell title" :bgEffect="true" />\n<sun-cell title="Cell title" :bgEffect="false" value="Content" />`,
      },

      {
        title: 'Slots',
        code: `<sun-cell>\n <template #title>\n   <span>Cell title</span>\n   <sun-button size="mini" type="danger">Button</sun-button>\n </template>\n</sun-cell>`,
      }
    ],
  },
  checkBoxData:{ // Checkbox 复选框
        title:'Checkbox',
        desc:'',
        importCode: `import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'sun';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);`,
        parentPropsList: [{
            propName: 'v-model (value)',
            desc: 'Names of all checked checkboxes',
            type: 'any[]',
            default: '-',
          },
          {
            propName: 'disabled',
            desc: 'Whether to disable all checkboxes',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'max',
            desc: 'Maximum amount of checked options',
            type: 'number | string',
            default: '0',
          },
          {
            propName: 'direction',
            desc: 'Direction, can be set to<code>horizontal</code>',
            type: 'string',
            default: 'vertical',
          },
          {
            propName: 'icon-size',
            desc: 'Icon size of all checkboxes',
            type: 'number | string',
            default: '16px',
          },
          {
            propName: 'checked-color',
            desc: 'Checked color of all checkboxes',
            type: 'string',
            default: '#1989fa',
          },
        ],
        childPropsList: [{
            propName: 'v-model (value)',
            desc: 'Check status',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'name',
            desc: 'Checkbox name',
            type: 'any',
            default: '-',
          },
          {
            propName: 'shape',
            desc: 'Can be set to <code>square</code>',
            type: 'string',
            default: 'round',
          },
          {
            propName: 'disabled',
            desc: 'Disable checkbox',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'label-disabled',
            desc: 'Whether to disable label click',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'label-position',
            desc: 'Can be set to <code>left</code>',
            type: 'string',
            default: 'right',
          },
          {
            propName: 'icon-size',
            desc: 'Icon size',
            type: 'number | string',
            default: '16px',
          },
          {
            propName: 'checked-color',
            desc: 'Checked color',
            type: 'string',
            default: '#1989fa',
          },
        ],
        childEventsList: [{
            eventName: 'change',
            desc: 'Triggered when value changed',
            callParams: 'checked: boolean',
          },
          {
            eventName: 'click',
            desc: 'Triggered when click checkbox',
            callParams: 'event: Event',
          },
        ],
        parentEventsList: [{
          eventName: 'change',
          desc: 'Triggered when value changed',
          callParams: 'names: any[]',
        }, ],
        parentMethodsList: [{
          methodName: 'toggleAll',
          desc: 'Toggle check status of all checkboxes',
          callParams: 'checked?: boolean',
          callReturns: '-',
        }, ],
        childSlotsList: [{
            slotName: 'default',
            desc: 'Custom label',
          },
          {
            slotName: 'icon',
            desc: 'Custom Icon',
          },
        ],
        cartList: [{
            title: 'Basic Usage',
            code: `<sun-checkbox v-model="checked">Checkbox</sun-checkbox>`,
            jsCode: `export default {
  data() {
    return {
      checked: true
    };
  },
};`,
          },
          {
            title: 'Disabled',
            code: `<sun-checkbox v-model="checked" disabled>Checkbox</sun-checkbox>`,
          },
          {
            title: 'Custom Shape',
            code: `<sun-checkbox v-model="checked" shape="square">Checkbox</sun-checkbox>`,
          },
          {
            title: 'Custom Color',
            code: `<sun-checkbox v-model="checked" checked-color="#07c160">Checkbox</sun-checkbox>`,
          },
          {
            title: 'Custom Icon Size',
            code: `<sun-checkbox v-model="checked" icon-size="22px">Checkbox</sun-checkbox>`,
          },
          {
            title: 'Custom Icon',
            desc: 'Use icon slot to custom icon.',
            code: ` <sun-checkbox v-model="checked">
  Custom Icon
  <template #icon>
    <sun-icon name="plus" />
  </template>
</sun-checkbox>`,
          },
          {
            title: 'Disable Label Click',
            code: `<sun-checkbox v-model="checked" label-disabled>Checkbox</sun-checkbox>`,
          },
          {
            title: 'Checkbox Group',
            desc: "When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by v-model.",
            code: `<sun-checkbox-group v-model="result">
  <sun-checkbox name="a">Checkbox a</sun-checkbox>
  <sun-checkbox name="b">Checkbox b</sun-checkbox>
  <sun-checkbox name="c">Checkbox c</sun-checkbox>
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
            title: 'Horizontal',
            code: `<sun-checkbox-group v-model="result" direction="horizontal">
  <sun-checkbox name="a">Checkbox a</sun-checkbox>
  <sun-checkbox name="b">Checkbox b</sun-checkbox>
  <sun-checkbox name="c">Checkbox c</sun-checkbox>
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
            title: 'Maximum amount of checked options',
            code: `<sun-checkbox-group v-model="result" :max="2">
  <sun-checkbox name="a">Checkbox  a</sun-checkbox>
  <sun-checkbox name="b">Checkbox  b</sun-checkbox>
  <sun-checkbox name="c">Checkbox  c</sun-checkbox>
</sun-checkbox-group>`,
          },
          {
            title: 'Toggle All',
            code: `<sun-checkbox-group v-model="result4" ref="checkboxGroup">
  <sun-checkbox name="a">Checkbox a</sun-checkbox>
  <sun-checkbox name="b">Checkbox b</sun-checkbox>
  <sun-checkbox name="c">Checkbox c</sun-checkbox>
</sun-checkbox-group>

<sun-button type="primary" @click="checkAll">Check All</sun-button>
<sun-button type="info" @click="toggleAll">Toggle All</sun-button>`,
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
    title:'Icon',
    importCode: `import Vue from 'vue'; \nimport { Icon } from 'vue-sun-ui'; \n \nVue.use(Icon);`,
    propsList: [{
        propName: 'name',
        desc: 'Icon name or URL',
        type: 'string',
        default: '-',
      },
      {
        propName: 'dot',
        desc: '	Whether to show red dot',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'badge',
        desc: 'Content of the badge',
        type: 'number | string',
        default: '-',
      },
      {
        propName: 'color',
        desc: 'Icon color',
        type: 'string',
        default: 'inherit',
      },
      {
        propName: 'size',
        desc: 'Icon size',
        type: 'number | string',
        default: 'inherit',
      },
      {
        propName: 'dot-color',
        desc: '	ClassName prefix',
        type: 'string',
        default: '#f10',
      },
      {
        propName: 'tag',
        desc: 'HTML tag',
        type: 'string',
        default: 'i',
      },

    ],
    eventsList: [{
      eventName: 'click',
      desc: '	Triggered when click icon',
      callParams: 'event: Event',
    }],
    cartList: [{
        title: 'Basic Usage',
        desc: 'Use <code>name</code> prop to set icon name or icon URL.',
        code: `<sun-icon name="message-o" />\n<sun-icon name="star-o" />`,
      },
      {
        title: 'Show Badge',
        desc: 'Use dot prop, a small red dot will be displayed in the upper right corner of the icon. Use badge prop, the badge will be displayed in the upper right corner of the icon.',
        code: `<sun-icon name="message-o" dot />\n<sun-icon name="message-o" badge="8" />\n<sun-icon name="message-o" badge="88+" />`,
      },
      {
        title: 'Icon Color',
        desc: 'Use <code>color</code> prop to set icon color.',
        code: `<sun-icon name="message-o" color="#1989fa" />\n<sun-icon name="message-o" color="#07c160" />`,
      },

      {
        title: 'Icon Size',
        desc: 'Use <code>size</code> prop to set icon size.',
        code: `<sun-icon name="message-o" size="40" />\n<sun-icon name="message-o" size="3rem" />`,
      }
    ],
  },
  layoutData:{ // Layout 布局
    title:'Layout',
    desc:'Quickly and easily create layouts with <code>sun-row</code> and <code>sun-col</code>.',
    importCode: `import Vue from 'vue';\nimport { Col, Row } from 'vue-sun-ui';\n\nVue.use(Col);\nVue.use(Row);`,
    parentPropsList: [{
        propName: 'type',
        desc: 'Layout type, can be set to<code>flex</code>',
        type: 'string',
        default: '-',
      },
      {
        propName: 'gutter',
        desc: 'Grid spacing（px）',
        type: 'number | string',
        default: '-',
      },
      {
        propName: 'justify',
        desc: '	Flex main axis，can be set to <code>end</code> <code>center</code> <code>space-around</code> <code>space-between</code>',
        type: 'string',
        default: 'start',
      },
      {
        propName: 'align',
        desc: '	Flex cross axis, be set to <code>center</code> <code>bottom</code>	',
        type: 'string',
        default: 'inherit',
      },
      {
        propName: 'tag',
        desc: 'Custom element tag',
        type: 'string',
        default: 'div',
      },

    ],
    childPropsList: [{
        propName: 'span',
        desc: 'number of column the grid spans',
        type: 'number | string',
        default: '-',
      },
      {
        propName: 'offset',
        desc: 'number of spacing on the left side of the grid	',
        type: 'number | string',
        default: '-',
      },
      {
        propName: 'tag',
        desc: 'Custom element tag',
        type: 'string',
        default: 'div',
      },
    ],
    eventsList: [{
      eventName: 'click',
      desc: 'Triggered when click col',
      callParams: 'event: Event',
    }],
    cartList: [{
        title: 'Basic Usage',
        desc: 'Layout are based on 24-column. The attribute <code>span</code> in <code>Col</code> means the number of column the grid spans. Of course, You can use <code>offset</code> attribute to set number of spacing on the left side of the grid.',
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
        title: 'Column Spacing',
        desc: 'Set grid spacing using <code>gutter</code> attribute. The default value is 0.',
        code: `<sun-row gutter="20">
  <sun-col span="8">span: 8</sun-col>
  <sun-col span="8">span: 8</sun-col>
  <sun-col span="8">span: 8</sun-col>
</sun-row>`,
      },
      {
        title: 'Flex Layout',
        desc: 'Setting <code>type</code> to <code>flex</code> to enable flex layout.',
        code: `<sun-row type="flex">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>

<sun-row type="flex" justify="center">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>

<sun-row type="flex" justify="end">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>

<sun-row type="flex" justify="space-between">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>

<sun-row type="flex" justify="space-around">
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
  <sun-col span="6">span: 6</sun-col>
</sun-row>`,
      },
    ],
  },
  messageData:{ // Message 消息提示
    title:'Message',
    desc:'A message prompt is displayed at the top of the page to support function calls.',
    importCode: `import Vue from 'vue';\nimport { Message } from 'vue-sun-ui';\n\nVue.use(Message);\nthis.$message('Show Message')`,
    methodsList: [{
        methodName: 'Message',
        desc: 'Display prompts',
        callParams: 'options | message',
        callReturns: 'message instance',
      },
      {
        methodName: 'Message.success',
        desc: 'success',
        callParams: 'options | message',
        callReturns: 'message instance',
      },
      {
        methodName: 'Message.error',
        desc: 'error',
        callParams: 'options | message',
        callReturns: 'message instance',
      },
      {
        methodName: 'Message.info',
        desc: 'info',
        callParams: 'options | message',
        callReturns: 'message instance',
      },
      {
        methodName: 'Message.warning',
        desc: 'warning',
        callParams: 'options | message',
        callReturns: 'message instance',
      },
      {
        methodName: 'Message.loading',
        desc: 'loading',
        callParams: 'options | message',
        callReturns: 'message instance',
      },
      {
        methodName: 'Message.clear',
        desc: 'clear',
        callParams: '-',
        callReturns: 'void',
      },
    ],
    optionsList: [{
        optionName: 'type',
        desc: 'Can be set to <code>success</code> <code>error</code> <code>info</code><code>warning</code><code>loading</code>',
        type: 'string',
        default: 'success',
      },
      {
        optionName: 'message',
        desc: 'Message',
        type: 'string',
        default: 'center',
      },
      {
        optionName: 'duration',
        desc: 'Duration(ms)',
        type: 'number | string',
        default: '1500',
      },
      {
        optionName: 'color',
        desc: 'Message color',
        type: 'string',
        default: '-',
      },
      {
        optionName: 'icon',
        desc: 'Custom Icon',
        type: 'string',
        default: '-',
      },
      {
        optionName: 'border',
        desc: 'border',
        type: 'boolean',
        default: 'false',
      },
      {
        optionName: 'position',
        desc: 'Show the location of the optional values are <code>center</code>、<code>bottom</code>',
        type: 'string',
        default: 'top',
      },
      {
        optionName: 'onClick',
        desc: 'Click on the callback function',
        type: 'Function',
        default: '-',
      },
      {
        optionName: 'onOpened',
        desc: 'The callback function is fully displayed',
        type: 'Function',
        default: '-',
      },
      {
        optionName: 'onClose',
        desc: 'The callback function when closed',
        type: 'Function',
        default: '-',
      },

    ],
    cartList: [{
        title: 'Basic Usage',
        jsCode: `Message('Content');`,
      },
      {
        title: 'Message Type',
        desc: 'support <code>success</code>、<code>error</code>、<code>info</code>、<code>warning</code>、<code>loading</code> five types of notification，default is success。',
        jsCode: `// Success Message
Message({ type: 'success', message: 'Success Message' });

// error Message
Message({ type: 'error', message: 'error Message' });

// info Message
Message({ type: 'info', message: 'info Message' });

// warning Message
Message({ type: 'warning', message: 'warning Message' });

// errloadingor Message
Message({ type: 'loading', message: 'loading Message' });`,
      },
      {
        title: 'Custom Notify',
        jsCode: `Message({
  message: 'Custom Color',
  color: 'pink',
});

Message({
  message: 'Custom Duration',
  duration: 3000,
});

Message({
  message: 'Custom Icon',
  icon: 'plus',
});`,
      },

    ],
  },
  navBarData:{ // NavBar 导航栏
    title:'NavBar',
    desc:'',
    importCode: `import Vue from 'vue';\nimport { NavBar } from 'vue-sun-ui';\n\nVue.use(NavBar);`,
    propsList: [{
        propName: 'title',
        desc: 'Title',
        type: 'string',
        default: '"',
      },
      {
        propName: 'left-text',
        desc: 'Left Text',
        type: 'string',
        default: '"',
      },
      {
        propName: 'right-text',
        desc: 'Right Text',
        type: 'string',
        default: '"',
      },
      {
        propName: 'left-arrow',
        desc: 'Whether to show left arrow',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'border',
        desc: 'Whether to show bottom border',
        type: 'boolean',
        default: 'true',
      },
      {
        propName: 'fixed',
        desc: 'Whether to fixed top	',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'z-index',
        desc: 'Z-index',
        type: 'number | string',
        default: '1',
      },
    ],
    eventsList: [{
        eventName: 'click-left',
        desc: 'Triggered when click left button	',
        callParams: '-',
      },
      {
        eventName: 'click-right',
        desc: 'Triggered when click right button',
        callParams: '-',
      },
    ],
    slotsList: [{
      slotName: 'title',
      desc: 'Custom title '
    }, {
      slotName: 'left',
      desc: 'Custom left side content'
    }, {
      slotName: 'right',
      desc: 'Custom right side content'
    }],
    cartList: [{
        title: 'Basic Usage',
        code: `<sun-nav-bar 
  title="Title" 
  left-text="Back" 
  right-text="Button" 
  left-arrow 
  @click-left="onClickLeft" 
  @click-right="onClickRight" 
/>`,
        jsCode: `import { Toast } from 'vue-sun-ui';

export default {
  methods: {
    onClickLeft() {
      Toast('Back');
    },
    onClickRight() {
      Toast('Button');
    },
  },
};`
      },
      {
        title: 'Use Slot',
        code: `<sun-nav-bar title="Title" left-text="Back" left-arrow>
  <template #right>
    <sun-icon name="plus" size="18" />
  </template>
</sun-nav-bar>`,
      }
    ],
  },
  popupData:{ // Popup 弹出层
    title:'Popup',
    desc:'Pop-up layer container, used to display pop-ups, information tips and other content.',
    importCode: `import Vue from 'vue';\nimport { Popup } from 'vue-sun-ui';\n\nVue.use(Popup);`,
    propsList: [{
        propName: 'v-model (value)',
        desc: 'Whether to show popup',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'overlay',
        desc: 'Whether to show overlay',
        type: 'boolean',
        default: 'true',
      },
      {
        propName: 'position',
        desc: 'Can be set to <code>top</code> <code>bottom</code> <code>right</code> <code>left</code>',
        type: 'string',
        default: 'center',
      },
      {
        propName: 'overlay-class',
        desc: 'Custom overlay class',
        type: 'string',
        default: '-',
      },
      {
        propName: 'overlay-style',
        desc: 'Custom overlay style',
        type: 'object',
        default: '-',
      },
      {
        propName: 'duration',
        desc: 'Transition duration, unit second',
        type: 'number | string',
        default: '0.3',
      },

      {
        propName: 'closeable',
        desc: 'Whether to show close icon',
        type: 'boolean',
        default: 'false',
      },

      {
        propName: 'close-icon',
        desc: 'Close icon name',
        type: 'string',
        default: 'cross',
      },

      {
        propName: 'close-icon-position',
        desc: 'Close Icon Position，can be set to <code>top-left</code> <code>bottom-left</code> <code>bottom-right</code>',
        type: 'string',
        default: 'top-right',
      },
      {
        propName: 'tag',
        desc: 'HTML tag',
        type: 'string',
        default: 'div',
      },

    ],
    eventsList: [{
      eventName: 'click',
      desc: 'Triggered when click Popup',
      callParams: 'event: Event',
    }, {
      eventName: 'open',
      desc: 'Triggered when open Popup',
      callParams: '-',
    }, {
      eventName: 'close',
      desc: 'Triggered when close Popup	',
      callParams: '-',
    }, {
      eventName: 'opened',
      desc: 'Triggered when opened Popup',
      callParams: '-',
    }, {
      eventName: 'closed',
      desc: 'Triggered when closed Popup',
      callParams: '-',
    }, {
      eventName: 'click-overlay',
      desc: 'Triggered when click overlay',
      callParams: '-',
    }],
    cartList: [{
        title: 'Basic Usage',
        code: `<sun-cell is-link bg-cffect @click="showPopup">Show Popup</sun-cell>\n<sun-popup v-model="show" >Content</sun-popup>`,
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
        title: 'Position',
        desc: 'Use <code>position</code>  prop to set popup display position.',
        code: `<sun-popup v-model="show" position="top" :style="{ height: '30%' }" />`,
      },
      {
        title: 'Close Icon',
        code: `<sun-popup 
  v-model="show" 
  position="bottom" 
  closeable 
/>
<!-- Custom Icon -->
<sun-popup 
  v-model="show" 
  position="bottom" 
  closeable 
  close-icon="plus" 
/>
<!-- Icon Position -->
<sun-popup 
  v-model="show" 
  position="bottom" 
  closeable 
  close-icon-position="top-left" 
/>`,
      },
      {
        title: 'Round Corner',
        code: `<sun-popup v-model="showRound" position="bottom" round />`,
      }
    ],
  },
  pullRefreshData:{ // PullRefresh 下拉刷新
    title:'PullRefresh',
    desc:'',
    importCode: `import Vue from 'vue'; \nimport { PullRefresh } from 'vue-sun-ui'; \n \nVue.use(PullRefresh);`,
        propsList: [{
            propName: 'v-model',
            desc: 'Loading status',
            type: 'boolean',
            default: '-',
          },
          {
            propName: 'pulling-text',
            desc: 'Text to show when pulling',
            type: 'string',
            default: 'Pull to refresh...',
          },
          {
            propName: 'loosing-text',
            desc: 'Text to show when loosing',
            type: 'string',
            default: 'Loose to refresh...',
          },
          {
            propName: 'loading-text',
            desc: 'Text to show when loading',
            type: 'string',
            default: 'Loading...',
          },
          {
            propName: 'success-text',
            desc: 'Text to show when loading success',
            type: 'string',
            default: '-',
          },
          {
            propName: 'success-duration',
            desc: 'Success text display duration(ms)',
            type: 'number | string',
            default: '500',
          },
          {
            propName: 'head-height',
            desc: 'Height of head',
            type: 'number | string',
            default: '50',
          },
        ],
        eventsList: [{
          eventName: 'refresh',
          desc: 'Triggered when pull refresh',
          callParams: '-',
        }],
        slotsList: [{
            slotName: 'default',
            desc: 'Default slot'
          },
          {
            slotName: 'pulling',
            desc: 'Content of head when at pulling'
          },
          {
            slotName: 'loosing',
            desc: 'Content of head when at loosing'
          },
          {
            slotName: 'loading',
            desc: 'Content of head when at loading'
          },
          {
            slotName: 'success',
            desc: 'Content of head when succeed'
          },
        ],
        cartList: [{
            title: 'Basic Usage',
            desc: 'The refresh event will be triggered when pull <code>refresh</code>, you should set <code>v-model</code> to <code>false</code> to reset loading status after process refresh event.',
            code: `<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <p>Refresh Count: {{ count }}</p>
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
     console.log('Refresh Success')
    },
  },
};`
          },
          {
            title: 'Success Tip',
            desc: 'Use <code>success-text</code> to set the success prompt after the refresh is successful',
            code: `<van-pull-refresh
  v-model="isLoading"
  success-text="Refresh success"
  @refresh="onRefresh"
>
  <p>Refresh Count: {{ count }}</p>
</van-pull-refresh>`,
          },
          {
            title: 'Custom Tips',
            desc: 'Use slots to custom tips.',
            code: `<van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
  <template #loosing>
    <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
  </template>

  <template #loading>
    <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
  </template>
  <p>Refresh Count: {{ count }}</p>
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
    title:'Rate',
    desc:'',
    importCode: `import Vue from 'vue'; \nimport { Rate } from 'vue-sun-ui'; \n \nVue.use(Rate);`,
    propsList: [{
        propName: 'v-model',
        desc: 'Current rate',
        type: 'number',
        default: '-',
      },
      {
        propName: 'count',
        desc: '	Count',
        type: 'number | string',
        default: '5',
      },
      {
        propName: 'size',
        desc: 'Icon size',
        type: 'number | string',
        default: '20px',
      },
      {
        propName: 'gutter',
        desc: 'Icon gutter',
        type: 'number | string',
        default: '4px',
      },
      {
        propName: 'color',
        desc: 'Selected color',
        type: 'string',
        default: '#ee0a24',
      },
      {
        propName: 'void-color',
        desc: 'Void color',
        type: 'string',
        default: '#c8c9cc',
      },
      {
        propName: 'disabled-color',
        desc: 'Disabled color',
        type: 'string',
        default: '#c8c9cc',
      },
      {
        propName: 'icon',
        desc: '	Selected icon',
        type: 'string',
        default: 'star-f'
      },
      {
        propName: 'readonly',
        desc: 'Whether to be readonly',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'disabled',
        desc: 'Whether to disable rate',
        type: 'boolean	',
        default: 'false',
      }
    ],
    eventsList: [{
      eventName: 'change',
      desc: 'Triggered when rate changed',
      callParams: 'value: current rate',
    }],
    cartList: [{
        title: 'Basic Usage',
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
        title: 'Custom Icon',
        code: `<sun-rate v-model="value" icon="like" void-icon="like-o" />`,
      },
      {
        title: 'Custom Style',
        code: `<sun-rate v-model="value" :size="25" color="#ffd21e" void-icon="star-f" void-color="#eee" />`,
      },

      {
        title: 'Custom Count',
        code: `<sun-rate v-model="value" :count="6" />`,
      },

      {
        title: 'Disabled',
        code: `<sun-rate v-model="value" disabled />`,
      },
      {
        title: 'Readonly',
        code: `<sun-rate v-model="value" readonly />`,
      },
      {
        title: 'Change Event',
        code: `<sun-rate v-model="value7" @change="onChange" />`,
        jsCode: `export default {
  method: {
    onChange(value) {
      this.$toast('current value: ' + value);
    },
  },
};`
      }
    ],
  },
  stepperData:{ // Stepper 步进器
    title:'Stepper',
    importCode: `import Vue from 'vue'; \nimport { Stepper } from 'vue-sun-ui'; \n \nVue.use(Stepper);`,
    propsList: [{
        propName: 'v-model',
        desc: 'Current value',
        type: 'number | string',
        default: '-',
      },
      {
        propName: 'min',
        desc: 'Min value',
        type: 'number | string',
        default: '1',
      },
      {
        propName: 'max',
        desc: 'Max value',
        type: 'number | string',
        default: '-',
      },
      {
        propName: 'step',
        desc: 'Value change step',
        type: 'number | string',
        default: '1',
      },
      {
        propName: 'input-width',
        desc: 'Input width',
        type: 'number | string',
        default: '32px',
      },
      {
        propName: 'button-size',
        desc: 'Button size',
        type: 'number | string',
        default: '28px',
      },
      {
        propName: 'theme',
        desc: 'Theme, can be set to <code>round</code>',
        type: 'string',
        default: '-',
      },
      {
        propName: 'disabled',
        desc: 'Whether to disable value change',
        type: 'boolean',
        default: 'false'
      },
      {
        propName: 'disable-plus',
        desc: 'Whether to disable plus button',
        type: 'boolean',
        default: 'false',
      },
      {
        propName: 'disable-minus',
        desc: 'Whether to disable minus button',
        type: 'boolean	',
        default: 'false',
      },
      {
        propName: 'disable-input',
        desc: 'Whether to disable input',
        type: 'boolean	',
        default: 'false',
      },
      {
        propName: 'show-plus',
        desc: 'Whether to show plus button',
        type: 'boolean	',
        default: 'true',
      },
      {
        propName: 'show-minus',
        desc: 'Whether to show minus button	',
        type: 'boolean	',
        default: 'true',
      }
    ],
    eventsList: [{
      eventName: 'change',
      desc: 'Triggered when value change',
      callParams: 'value: string',
    }, {
      eventName: 'overlimit',
      desc: 'Triggered when click disabled button',
      callParams: '-',
    }, {
      eventName: 'plus',
      desc: 'Triggered when click plus button',
      callParams: '-',
    }, {
      eventName: 'minus',
      desc: 'Triggered when click minus button',
      callParams: '-',
    }, {
      eventName: 'focus',
      desc: 'Triggered when input focused',
      callParams: 'event: Event',
    }, {
      eventName: 'blur',
      desc: 'Triggered when input blured',
      callParams: 'event: Event',
    }],
    cartList: [{
        title: 'Basic Usage',
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
        title: 'Step',
        code: `<sun-stepper v-model="value" step="2" />`,
      },
      {
        title: 'Range',
        code: `<sun-stepper v-model="value" min="5" max="8" />`,
      },

      {
        title: 'Disabled',
        code: `<sun-stepper v-model="value" disabled />`,
      },

      {
        title: 'Disable Input',
        code: `<sun-stepper v-model="value" disable-input />`,
      },
      {
        title: 'Custom Size',
        code: `<sun-stepper v-model="value" input-width="40px" button-size="32px" />`,
      },
      {
        title: 'Round Theme',
        code: `<sun-stepper v-model="value" theme="round" button-size="22" disable-input />`
      }
    ],
  },
  swipeData:{ // Swipe 轮播
    title:'Swipe',
    desc:'',
    importCode: `import Vue from 'vue'; \nimport { Swipe, SwipeItem } from 'vue-sun-ui'; \n \nVue.use(Swipe);\nVue.use(SwipeItem);`,
        propsList: [{
            propName: 'autoplay',
            desc: '	Autoplay interval (ms)',
            type: 'number | string',
            default: '-',
          },
          {
            propName: 'duration',
            desc: 'Animation duration (ms)',
            type: 'number | string',
            default: '500',
          },
          {
            propName: 'initial-swipe',
            desc: 'Index of initial swipe, start from 0',
            type: 'number | string',
            default: '-',
          },
          {
            propName: 'width',
            desc: 'Set Swiper Item Width',
            type: 'number | string',
            default: 'auto',
          },
          {
            propName: 'height',
            desc: 'Set Swiper Item Height',
            type: 'number | string',
            default: 'auto',
          },
          {
            propName: 'show-indicators',
            desc: 'Whether to show indicators',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'vertical',
            desc: 'Whether to be vertical Scrolling',
            type: 'boolean',
            default: 'false'
          },
          {
            propName: 'touchable',
            desc: 'Whether to allow swipe by touch gesture',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'stop-propagation',
            desc: 'Whether to stop touchmove event propagation',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'indicator-color',
            desc: 'Indicator color',
            type: 'string',
            default: '#1989fa',
          }
        ],
        eventsList: [{
          eventName: 'change',
          desc: 'Triggered when current swipe change',
          callParams: 'index, current index',
        }],
        methodsList: [{
          methodName: 'prev',
          desc: 'Swipe to prev item',
          callParams: '-',
          callReturns: '-',
        }, {
          methodName: 'next',
          desc: 'Swipe to next item',
          callParams: '-',
          callReturns: '-',
        }, {
          methodName: 'swipeTo',
          desc: 'Swipe to target index',
          callParams: 'index: number',
          callReturns: 'void',
        }],
        slotsList: [{
            slotName: 'default',
            desc: 'Content',
          },
          {
            slotName: 'indicator',
            desc: 'Custom indicator',
          },
        ],
        cartList: [{
            title: 'Basic Usage',
            desc: 'Use autoplay prop to set autoplay interval.',
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
            title: 'Change Event',
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
      Toast('Current Swipe index: ' + index);
    },
  },
};`,
          },
          {
            title: 'Current Swipe index:',
            code: `<sun-swipe class="my-swipe" vertical>
  <sun-swipe-item>1</sun-swipe-item>
  <sun-swipe-item>2</sun-swipe-item>
  <sun-swipe-item>3</sun-swipe-item>
  <sun-swipe-item>4</sun-swipe-item>
</sun-swipe>`,
          },

          {
            title: 'Custom Indicator',
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
    title:'Switch',
    desc:'',
    importCode: `import Vue from 'vue'; \nimport { Switch } from 'vue-sun-ui'; \n \nVue.use(Switch);`,
        propsList: [{
            propName: 'v-model',
            desc: 'Check status of Switch',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'loading',
            desc: '	Whether to show loading icon',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'disabled',
            desc: 'Whether to disable switch',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'size',
            desc: 'Size of switch',
            type: 'number | string',
            default: '30px',
          },
          {
            propName: 'active-color',
            desc: 'Background color when active',
            type: 'string',
            default: '#1989fa',
          },
          {
            propName: 'inactive-color',
            desc: 'Background color when inactive',
            type: 'string',
            default: 'white',
          }
        ],
        eventsList: [{
          eventName: 'change',
          desc: 'Triggered when check status changed',
          callParams: 'value: boolean',
        }, {
          eventName: 'click',
          desc: 'Triggered when clicked',
          callParams: 'event: Event',
        }],
        cartList: [{
            title: 'Basic Usage',
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
            title: 'Disabled',
            code: `<sun-switch v-model="checked" disabled />`,
          },
          {
            title: 'Loading',
            code: `<sun-switch v-model="checked" loading />`,
          },

          {
            title: 'Custom Size',
            code: `<sun-switch v-model="checked" size="24px" />`,
          },

          {
            title: 'Custom Color',
            code: `<sun-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />`,
          }
        ],
  },
  tabbarData:{// Tabbar 标签栏
    title:'Tabbar',
    desc:'',
    importCode: `import Vue from 'vue';\nimport { Tabbar, TabbarItem } from 'vue-sun-ui';\n\nVue.use(Tabbar);\nVue.use(TabbarItem);`,
        propsList: [{
            propName: 'v-model',
            desc: 'Identifier of current tab',
            type: 'number | string',
            default: '0',
          },
          {
            propName: 'fixed',
            desc: 'Whether to fixed bottom',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'border',
            desc: 'Whether to show border',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'z-index',
            desc: 'Z-index',
            type: 'number | string',
            default: '1',
          },
          {
            propName: 'active-color',
            desc: 'Color of active tab item',
            type: 'string',
            default: '#1989fa',
          },
          {
            propName: 'inactive-color',
            desc: 'Color of inactive tab item',
            type: 'string',
            default: '#7d7e80',
          }
        ],
        itemPropsList: [{
          propName: 'icon',
          desc: 'Icon name',
          type: 'string',
          default: '-',
        }, {
          propName: 'icon-prefix',
          desc: 'Icon className prefix',
          type: 'string',
          default: 'sun-icon',
        }, {
          propName: 'dot',
          desc: 'Whether to show red dot',
          type: 'boolean',
          default: 'false',
        }, {
          propName: 'badge',
          desc: 'Content of the badge',
          type: 'number | string',
          default: '-',
        }, {
          propName: 'url',
          desc: 'Link',
          type: 'string',
          default: '-',
        }, {
          propName: 'to',
          desc: 'Target route of the link, same as to of vue-router',
          type: 'string | object',
          default: '-',
        }, {
          propName: 'replace',
          desc: 'If true, the navigation will not leave a history record',
          type: 'boolean',
          default: 'false',
        }, ],
        eventsList: [{
          eventName: 'change',
          desc: 'Triggered when change active tab',
          callParams: 'active: index of current tab',
        }, ],
        itemSlotsList: [{
          slotName: 'icon',
          desc: 'Custom icon'
        }],
        cartList: [{
            title: 'Basic Usage',
            code: `<sun-tabbar v-model="active">
  <sun-tabbar-item icon="home">Tab</sun-tabbar-item>
  <sun-tabbar-item icon="category">Tab</sun-tabbar-item>
  <sun-tabbar-item icon="friends">Tab</sun-tabbar-item>
  <sun-tabbar-item icon="settings">Tab</sun-tabbar-item>
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
            title: 'Show Badge',
            code: `<sun-tabbar v-model="active">
    <sun-tabbar-item icon="home">Tab</sun-tabbar-item>
    <sun-tabbar-item icon="category" dot>Tab</sun-tabbar-item>
    <sun-tabbar-item icon="friends" badge="20">Tab</sun-tabbar-item>
    <sun-tabbar-item icon="settings" badge="5">Tab</sun-tabbar-item>
  </sun-tabbar>
</div>`,
          },
          {
            title: 'Custom Icon',
            code: `<sun-tabbar v-model="active">
  <sun-tabbar-item icon="home">
    <span>Custom</span>
    <template #icon>
      <sun-icon name="star-f" />
    </template>
  </sun-tabbar-item>
  <sun-tabbar-item icon="category">Tab</sun-tabbar-item>
  <sun-tabbar-item icon="friends">Tab</sun-tabbar-item>
</sun-tabbar>`,
          },
          {
            title: 'Custom Color',
            code: `<sun-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
  <sun-tabbar-item icon="home">Tab</sun-tabbar-item>
  <sun-tabbar-item icon="category">Tab</sun-tabbar-item>
  <sun-tabbar-item icon="friends">Tab</sun-tabbar-item>
  <sun-tabbar-item icon="settings">Tab</sun-tabbar-item>
</sun-tabbar>`,
          },
          {
            title: 'Change Event',
            code: `<sun-tabbar v-model="active" @change="onChange">
  <sun-tabbar-item icon="home">Tab1</sun-tabbar-item>
  <sun-tabbar-item icon="category">Tab2</sun-tabbar-item>
  <sun-tabbar-item icon="friends">Tab3</sun-tabbar-item>
  <sun-tabbar-item icon="settings">Tab4</sun-tabbar-item>
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
    title:'Toast',
    desc:'',
    importCode: `import Vue from 'vue';\nimport { Toast } from 'vue-sun-ui';\n\nVue.use(Toast);`,
    methodsList: [{
            methodName: 'Toast',
            desc: 'Show toast	',
            callParams: 'options | message',
            callReturns: 'toast instance',
          },
          {
            methodName: 'Toast.loading',
            desc: 'Show loading toast	',
            callParams: 'options | message',
            callReturns: 'toast instance',
          },
          {
            methodName: 'Toast.success',
            desc: 'Show success toast',
            callParams: 'options | message',
            callReturns: 'toast instance',
          },
          {
            methodName: 'Toast.fail',
            desc: 'Show fail toast	',
            callParams: 'options | message',
            callReturns: 'toast instance',
          },
          {
            methodName: 'Toast.clear',
            desc: 'Close toast',
            callParams: '-',
            callReturns: 'void',
          },
        ],
        optionsList: [{
            optionName: 'type',
            desc: 'Can be set to <code>loading</code> <code>success</code> <code>fail</code>',
            type: 'string',
            default: 'text',
          },
          {
            optionName: 'position',
            desc: 'Can be set to <code>top</code> <code>bottom</code>	',
            type: 'string',
            default: 'center',
          },
          {
            optionName: 'message',
            desc: 'Message',
            type: 'string',
            default: '"',
          },
          {
            optionName: 'icon',
            desc: 'Custom icon',
            type: 'string',
            default: '"',
          },
          {
            optionName: 'iconPrefix',
            desc: 'Icon className prefix',
            type: 'string',
            default: 'sun-icon',
          },
          {
            optionName: 'overlay',
            desc: 'Whether to show overlay',
            type: 'boolean',
            default: 'false',
          },

          {
            optionName: 'closeOnClick',
            desc: 'Whether to close after clicked',
            type: 'boolean',
            default: 'false',
          },
          {
            optionName: 'duration',
            desc: "Toast duration(ms), won't disappear if value is 0",
            type: 'number',
            default: '1500',
          },
          {
            optionName: 'className',
            desc: 'Custom className',
            type: 'string',
            default: 'sun-toast',
          },
          {
            optionName: 'onOpened',
            desc: 'Callback function after opened',
            type: 'Function',
            default: '-',
          },
          {
            optionName: 'onClose',
            desc: 'Callback function after close',
            type: 'Function',
            default: '-',
          },
        ],
        cartList: [{
            title: 'Text',
            jsCode: `Toast('Some messages');`,
          },

          {
            title: 'Loading',
            jsCode: `Toast.loading({
  message: 'Loading...'
});`,
          },
          {
            title: 'Success/Fail',
            jsCode: `Toast.success('Success');\nToast.fail('Fail');`,
          },
          {
            title: 'Custom Icon',
            jsCode: `Toast({
  message: 'Custom Icon',
  icon: 'like-o',
});

Toast({
  message: 'Custom Image',
  icon: 'https://img.yzcdn.cn/vant/logo.png',
});

Toast.loading({
  message: 'Loading...',
  icon:'loading2'
});`,
          },
          {
            title: 'Custom Position',
            jsCode: `Toast({
  message: 'Top',
  position: 'top',
});

Toast({
  message: 'Bottom',
  position: 'bottom',
});`,
          },
          {
            title: 'Global Method',
            desc: 'After import the Toast component, the <code>$toast</code> method is automatically mounted on Vue.prototype, making it easy to call within a vue component.',
            jsCode: `export default {
  mounted() {
    this.$toast('Some messages');
  },
};`,
          },
          {
            title: 'Singleton',
            desc: 'Toast use singleton mode by default, if you need to pop multiple Toast at the same time, you can refer to the following example:',
            jsCode: `const toast1 = Toast('First Toast');
const toast2 = Toast.success('Second Toast');

toast1.clear();
toast2.clear();`,
          },
        ],
  },
  dialogData:{ // Dialog 
    title:'Dialog',
    desc:'',
    importCode: `import Vue from 'vue'; \nimport { Dialog } from 'vue-sun-ui'; \n \nVue.use(Dialog);`,
        propsList: [{
            propName: 'v-model',
            desc: 'Whether to show dialog',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'title',
            desc: 'Title',
            type: 'string',
            default: '-',
          },
          {
            propName: 'width',
            desc: 'Width',
            type: 'number | string',
            default: '320px',
          },
          {
            propName: 'message',
            desc: 'Message',
            type: 'string',
            default: '-',
          },
          {
            propName: 'theme',
            desc: 'theme style，can be set to <code>round-button</code>',
            type: 'string',
            default: 'default',
          },
          {
            propName: 'show-confirm-button',
            desc: 'Whether to show confirm button	',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'show-cancel-button',
            desc: 'Whether to show cancel button',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'confirm-button-text',
            desc: 'Confirm button text',
            type: 'string',
            default: 'Confirm',
          },
          {
            propName: 'confirm-button-color',
            desc: 'Confirm button color',
            type: 'string',
            default: '#ee0a24',
          },

          {
            propName: 'cancel-button-text',
            desc: 'Cancel button text',
            type: 'string',
            default: 'Cancel',
          },
          {
            propName: 'cancel-button-color',
            desc: 'Cancel button color',
            type: 'string',
            default: 'black',
          },
          {
            propName: 'overlay',
            desc: 'Whether to show overlay',
            type: 'boolean',
            default: 'true',
          },
          {
            propName: 'overlay-class',
            desc: 'Custom overlay class',
            type: 'string',
            default: '-',
          },
          {
            propName: 'overlay-style',
            desc: 'Custom overlay style',
            type: 'object',
            default: '-',
          },
          {
            propName: 'close-on-click-overlay',
            desc: 'Whether to close when click overlay',
            type: 'boolean',
            default: 'false',
          },
          {
            propName: 'tag',
            desc: 'Dialog tag',
            type: 'string',
            default: 'div',
          },
        ],
        eventsList: [
          {
            eventName: 'confirm',
            desc: 'Triggered when click confirm button',
            callParams: '-',
          },
          {
            eventName: 'cancel',
            desc: 'Triggered when click cancel button',
            callParams: '-',
          }, 
          {
            eventName: 'open',
            desc: 'Triggered when open Dialog',
            callParams: '-',
          }, 
          {
            eventName: 'close',
            desc: 'Triggered when close Dialog',
            callParams: '-',
          }
        ],
        cartList: [{
            title: 'Alert dialog',
            desc: 'Used to prompt for some messages, only including one confirm button.',
            code: `<sun-dialog v-model="show" title="Title" message="Content"></sun-dialog>`,
            jsCode: `export default {
  data() {
    return {
      show: true
    };
  },
};`
          },
          {
            title: 'Confirm dialog',
            desc: 'Used to confirm some messages, including a confirm button and a cancel button.',
            code: `<sun-dialog v-model="show" title="Title" message="Content" show-cancel-button></sun-dialog>`,
          },
          {
            title: 'Round Button Style',
            desc: 'Use round button style.',
            code: `<sun-dialog v-model="show" theme="round-button" title="Title" message="Content" show-cancel-button></sun-dialog>`,
          }
        ],
        slotsList: [{
          slotName: 'default',
          desc: 'Custom message',
        },
        {
          slotName: 'title',
          desc: 'Custom title',
        },
      ],
  },
}
export default data