<template>
  <div class="sun-doc-popup sun-doc-content">
    <section>
      <h1>{{data.popupData.title}}</h1>
      <div class="card" v-if="data.popupData.desc">
        <h3>{{$t('common.recommend')}}</h3>
        <div>
          {{data.popupData.desc}}
        </div>
      </div>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.popupData.importCode"></code></pre>
        </div>
      </div>
      
      <!-- 代码展示 -->
     <show-code :cart-list="data.popupData.cartList"/>

      <!-- 属性列表 -->
      <props-list :props-list="data.popupData.propsList"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.popupData.eventsList"/>
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
