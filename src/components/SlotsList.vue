<template>
  <div class="card">
    <h3>{{title}}</h3>
    <table>
      <thead>
        <tr>
          <th>{{$t('common.eventName')}}</th>
          <th>{{$t('common.explain')}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in slotsList" :key="index">
          <td>{{ item.slotName }}</td>
          <td>{{ item.desc }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props:{
    slotsList:{
      type:Array|Object
     },
     title:{
       type:String,
       default:'Slots'
     }
  }
}
</script>