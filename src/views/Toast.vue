<template>
  <div class="sun-doc-toast sun-doc-content">
    <section>
      <h1>{{data.toastData.title}}</h1>
      <div class="card" v-if="data.toastData.desc">
        <h3>{{$t('common.recommend')}}</h3>
        <div>
          {{data.toastData.desc}}
        </div>
      </div>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.toastData.importCode"></code></pre>
        </div>
      </div>
      
      <!-- 代码展示 -->
     <show-code :cart-list="data.toastData.cartList"/>
     
      <!-- API介绍 -->
      <h2>API</h2>

      <!-- 方法列表 -->
      <methods-list :methods-list="data.toastData.methodsList" />

      <!-- 参数类型列表 -->
      <options-list :options-list="data.toastData.optionsList"/>
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