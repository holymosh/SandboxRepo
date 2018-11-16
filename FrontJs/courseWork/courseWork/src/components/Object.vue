<template>
    <div id="Object">
        <h1>Объекты электроэнергетики</h1>
        <table>
            <thead>
                <tr>
                    <th  v-for="column in gridColumns" :key="column">{{column}}</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  name: 'Object',
  data () {
    return {
      searchQuery: '',
      gridColumns: ['name', 'address', 'type'],
      gridData: [
        { name: 'hui1', address: 'na hue', type: 'hueviy' },
        { name: 'hui2', address: 'na hue', type: 'hueviy' },
        { name: 'hui3', address: 'na hue', type: 'hueviy' },
        { name: 'hui4', address: 'na hue', type: 'hueviy' }
      ]
    }
  }
}
</script>

<style>
#Object {
    box-sizing: border-box;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
}
</style>
