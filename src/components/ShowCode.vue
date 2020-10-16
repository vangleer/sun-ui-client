<template>
  <div>
    <!-- 代码展示 --> 
    <h2>{{$t('common.showCode')}}</h2>
    <div class="card" v-for="(item, index) in cartList" :key="index">
      <h3 v-if="item.title">{{ item.title }}</h3>
      <p v-if="item.desc" v-html="item.desc">
      </p>
      <div v-highlight>
        <pre v-if="item.code"><code  class="language-html" v-text="item.code"></code></pre>
        <pre v-if="item.jsCode"><code class="language-js" v-text="item.jsCode"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    cartList:{
      type:Array|Object
     }
  }
}
</script>
