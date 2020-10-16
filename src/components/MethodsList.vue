<template>
  <div class="card">
    <h3>{{title}}</h3>
    <p v-if="desc">{{desc}}</p>
    <table>
      <thead>
        <tr>
          <th>{{$t('common.methodName')}}</th>
          <th>{{$t('common.explain')}}</th>
          <th>{{$t('common.parameter')}}</th>
          <th>{{$t('common.returnValue')}}</th>
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