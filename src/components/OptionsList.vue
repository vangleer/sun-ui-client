<template>
  <div class="card">
    <h3>Options</h3>
    <table>
      <thead>
        <tr>
          <th>{{$t('common.parameter')}}</th>
          <th>{{$t('common.explain')}}</th>
          <th>{{$t('common.type')}}</th>
          <th>{{$t('common.defaultValue')}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in optionsList" :key="index">
          <td>{{ item.optionName }}</td>
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
</template>

<script>
export default {
  props:{
    optionsList:{
      type:Array|Object
    },
    title:{
      type:String,
      default:'Options'
    }
  }
}
</script>
