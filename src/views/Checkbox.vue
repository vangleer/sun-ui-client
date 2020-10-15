<template>
  <div class="sun-demo-checkbox sun-doc-content">
    <section>
      <h1>{{title}}</h1>
      <div class="card">
        <h3>引入</h3>
        <div v-highlight>
          <pre><code v-html="importCode"></code></pre>
        </div>
      </div>
      <!-- 代码展示 -->
      <show-code :cart-list="cartList"/>

      <!-- API 介绍 -->
      
      <!-- Checkbox 属性列表 -->
      <props-list :propsList="childPropsList" title="Checkbox Props"/>

      <!-- CheckboxGroup 属性列表 -->
      <props-list :props-list="parentPropsList" title="CheckboxGroup Props" :is-show-title="false"/>

      <!-- Checkbox 事件列表展示 -->
      <events-list :events-list="childEventsList" title="Checkbox Events"/>

      <!-- Checkbox 事件列表展示 -->
      <events-list :events-list="parentEventsList" title="CheckboxGroup Events"/>

      <!-- 插槽列表 -->
      <slots-list :slots-list="childSlotsList" title="Checkbox Slots"/>

      <!-- 方法列表 -->
      <methods-list 
        :methods-list="parentMethodsList" 
        title="CheckboxGroup 方法" 
        desc="通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法"
      />
    </section>

  </div>
</template>

<script>
  import data from '../assets/data/index'
  export default {
    data() {
      return {
       ...data.checkBoxData
      }
    },
  }
</script>

<style lang="less"></style>