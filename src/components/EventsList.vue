<template>
  <!-- 事件列表展示组件 -->
    <div class="card">
      <h3>{{title}}</h3>
      <table>
        <thead>
          <tr>
            <th>{{$t('common.eventName')}}</th>
            <th>{{$t('common.explain')}}</th>
            <th>{{$t('common.callbackParameter')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in eventsList" :key="index">
            <td>{{ item.eventName }}</td>
            <td>{{ item.desc }}</td>
            <td>
              <span class="info-string">{{ item.callParams }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
   props:{
    eventsList:{
      type:Array|Object
     },
     title:{
       type:String,
       default:'Events'
     }
  }
}
</script>