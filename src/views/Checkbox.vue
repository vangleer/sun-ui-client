<template>
  <div class="sun-demo-checkbox sun-doc-content">
    <section>
      <h1>{{data.checkBoxData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.checkBoxData.importCode"></code></pre>
        </div>
      </div>
      <!-- 代码展示 -->
      <show-code :cart-list="data.checkBoxData.cartList"/>
      
      <!-- Checkbox 属性列表 -->
      <props-list :propsList="data.checkBoxData.childPropsList" title="Checkbox Props"/>

      <!-- CheckboxGroup 属性列表 -->
      <props-list :props-list="data.checkBoxData.parentPropsList" title="CheckboxGroup Props" :is-show-title="false"/>

      <!-- Checkbox 事件列表展示 -->
      <events-list :events-list="data.checkBoxData.childEventsList" title="Checkbox Events"/>

      <!-- Checkbox 事件列表展示 -->
      <events-list :events-list="data.checkBoxData.parentEventsList" title="CheckboxGroup Events"/>

      <!-- 插槽列表 -->
      <slots-list :slots-list="data.checkBoxData.childSlotsList" title="Checkbox Slots"/>

      <!-- 方法列表 -->
      <methods-list 
        :methods-list="data.checkBoxData.parentMethodsList" 
        :title="$i18n.locale==='zh-CN'?'CheckboxGroup 方法':'CheckboxGroup Methods'" 
        :desc="$i18n.locale==='zh-CN'?'通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法':'Use ref to get CheckboxGroup instance and call instance methods.'"
      />
    </section>

  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['data'])
    },
  }
</script>
