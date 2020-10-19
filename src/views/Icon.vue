<template>
  <div class="sun-doc-icon sun-doc-content">

    <section>
      <h1>{{data.iconData.title}}</h1>
      <div class="card" v-if="data.iconData.desc">
        <h3>{{$t('common.recommend')}}</h3>
        <div>
          {{data.iconData.desc}}
        </div>
      </div>
      <div class="card">
        <h3>{{$t('common.introduce')}}</h3>
        <div v-highlight>
          <pre><code v-html="data.iconData.importCode"></code></pre>
        </div>
      </div>
      <!-- 代码展示 -->
      <show-code :cart-list="data.iconData.cartList"/>

      <!-- 属性列表 -->
      <props-list :props-list="data.iconData.propsList"/>

      <!-- 事件列表展示 -->
      <events-list :events-list="data.iconData.eventsList"/>
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
