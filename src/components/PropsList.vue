<template>
  <div>
     <!-- API介绍组件 -->
      <h2 v-if="isShowTitle">API</h2>
      <div class="card">
        <h3>{{title}}</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in propsList" :key="index">
              <td>{{ item.propName }}</td>
              <td v-html="item.desc"></td>
              <td>
                <span class="info-string">{{ item.type }}</span>
              </td>
              <td>
                <span v-if="item.default === '-'">{{ item.default }}</span>
                <code v-else>{{ item.default }}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
export default {
   props:{
    propsList:{
      type:Array|Object
     },
     title:{
       type:String,
       default:'Props'
     },
     isShowTitle:{
       type:Boolean,
       default:true
     }
  }
}
</script>
