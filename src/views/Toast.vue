<template>
  <div class="sun-doc-toast sun-doc-content">
    <section>
      <h1>{{title}}</h1>
      <div class="card" v-if="desc">
        <h3>{{$t('common.recommend')}}</h3>
        <div>
          {{desc}}
        </div>
      </div>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="importCode"></code></pre>
        </div>
      </div>
      
      <!-- 代码展示 -->
     <show-code :cart-list="cartList"/>
     
      <!-- API介绍 -->
      <h2>API</h2>

      <!-- 方法列表 -->
      <methods-list :methods-list="methodsList" />

      <!-- 参数类型列表 -->
      <options-list :options-list="optionsList"/>
    </section>
  </div>
</template>

<script>
  import data from '../assets/data/index'
  export default {
    data() {
      return {
        ...data.toastData
      }
    },
  }
</script>