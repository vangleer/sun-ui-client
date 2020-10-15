<template>
  <div class="card">
    <h3>{{title}}</h3>
    <p v-if="desc">{{desc}}</p>
    <table>
      <thead>
        <tr>
          <th>方法名</th>
          <th>说明</th>
          <th>参数</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in methodsList" :key="index">
          <td>{{ item.methodName }}</td>
          <td v-html="item.desc"></td>
          <td>
            <span class="info-string">{{ item.callParams }}</span>
          </td>
          <td>
            <span v-if="item.callReturns === '-'">{{ item.callReturns }}</span>
            <code v-else>{{ item.callReturns }}</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props:{
    methodsList:{
      type:Array|Object
     },
     title:{
       type:String,
       default:'方法'
     },
     desc:{
      type:String
     }
  }
}
</script>

<style>

</style>