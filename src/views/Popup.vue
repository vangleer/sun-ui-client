<template>
  <div class="sun-doc-popup sun-doc-content">
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

      <!-- 属性列表 -->
      <props-list :props-list="propsList"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="eventsList"/>
    </section>

  </div>
</template>

<script>
  import data from '../assets/data/index'
  export default {
    data() {
      return {
        ...data.popupData
      }
    },
  }
</script>
