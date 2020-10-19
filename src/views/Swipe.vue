<template>
  <div class="sun-doc-stepper sun-doc-content">
    <section>
      <h1>{{data.swipeData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.swipeData.importCode"></code></pre>
        </div>
      </div>
     
      <!-- 代码展示 -->
     <show-code :cart-list="data.swipeData.cartList"/>

      <!-- 属性列表 -->
      <props-list :props-list="data.swipeData.propsList" title="Swipe Props"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.swipeData.eventsList" title="Swipe Events"/>

      <!-- 方法列表 -->
      <methods-list 
        :methods-list="data.swipeData.methodsList" 
        :title="$i18n.locale==='zh-CN'?'Swipe 方法':'Swipe Methods'" 
        :desc="$i18n.locale==='zh-CN'?'通过 ref 可以获取到 Swipe 实例并调用实例方法。':'Use ref to get Swipe instance and call instance methods..'"
      />

      <!-- 插槽列表 -->
      <slots-list :slots-list="data.swipeData.slotsList"/>

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
