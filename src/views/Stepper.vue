<template>
  <div class="sun-doc-swipe sun-doc-content">
    <section>
      <h1>{{data.stepperData.title}}</h1>
      <div class="card" v-if="data.stepperData.desc">
        <h3>{{$t('common.recommend')}}</h3>
        <p>{{data.stepperData.desc}}</p>
      </div>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.stepperData.importCode"></code></pre>
        </div>
      </div>
     
      <!-- 代码展示 -->
      <show-code :cart-list="data.stepperData.cartList"/>

      <!-- 属性列表 -->
      <props-list :props-list="data.stepperData.propsList"/>
      <!-- 事件列表展示 -->
      <events-list :events-list="data.stepperData.eventsList"/>
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
