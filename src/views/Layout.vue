<template>
  <div class="sun-doc-layout sun-doc-content">

    <section>
      <h1>{{data.layoutData.title}}</h1>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.layoutData.importCode"></code></pre>
        </div>
      </div>
      <!-- 代码展示 -->
      <show-code :cart-list="data.layoutData.cartList"/>

      <!-- Row 属性列表 -->
      <props-list :props-list="data.layoutData.parentPropsList" title="Row Props"/>

      <!-- Col 属性列表 -->
      <props-list :props-list="data.layoutData.childPropsList" title="Col Props"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.layoutData.eventsList"/>
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
