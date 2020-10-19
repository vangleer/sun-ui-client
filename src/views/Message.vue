<template>
  <div class="sun-doc-message sun-doc-content">
    <section>
      <h1>{{data.messageData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.recommend')}}</h3>
        <div>
          {{data.messageData.desc}}
        </div>
      </div>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <p v-if="$i18n.locale==='zh'">
          引入<code>Message</code>可以使用<code>Vue.use(Message)</code>在所有实例添加<code>$message</code>方法，也可以单独使用<code>Message</code>方法。
        </p>
        <div v-highlight>
          <pre><code v-html="data.messageData.importCode"></code></pre>
        </div>
      </div>
      
      <!-- 代码展示 -->
      <show-code :cart-list="data.messageData.cartList"/>

      <!-- API介绍 -->
      <h2>API</h2>
      
      <!-- 方法列表 -->
      <methods-list :methods-list="data.messageData.methodsList" />

      <!-- 参数类型列表 -->
      <options-list :options-list="data.messageData.optionsList"/>
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