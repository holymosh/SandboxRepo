<template>
    <div id="Object">
        <div class="item">
        <h1>Объекты электроэнергетики</h1>
        </div>
        <table>
            <thead>
                <tr>
                    <th  v-for="column in gridColumns" :key="column">{{column}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="element in gridData" :key="element.id">
                    <td v-for="column in gridColumns" :key="column">
                        {{element[column]}}
                    </td>
                </tr>
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
        { id: 1, name: 'ПС 35 кв Павелецкая', address: 'адрес1', type: 'тип1' },
        { id: 2, name: 'ПС 35 кв Павелецкая', address: 'адрес1', type: 'тип1' },
        { id: 3, name: 'ПС 35 кв Павелецкая', address: 'адрес1', type: 'тип1' },
        { id: 4, name: 'ПС 35 кв Павелецкая', address: 'адрес1', type: 'тип1' }
      ]
    }
  }
}
</script>

<style>
#Object {
    box-sizing: border-box;
}
table{
}
</style>
