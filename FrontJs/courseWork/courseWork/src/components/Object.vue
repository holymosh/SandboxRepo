<template>
    <div id="Object">
        <h1>Объекты электроэнергетики</h1>
        <v-data-table
    :headers="headers"
    :items="objects"
    class="elevation-1"
  >
  <template slot="items" slot-scope="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
              <v-checkbox :input-value="props.selected" primary hide-details>
              </v-checkbox>
          </td>
          <td>{{props.item.name}}</td>
          <td>{{props.item.parent}}</td>
          <td>{{props.item.subject}}</td>
          <td>{{props.item.address}}</td>
          <td>{{props.item.type}}</td>
      </tr>
  </template>
  </v-data-table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Id',
          value: 'id'
        },
        {text: 'Наименование', value: 'name'},
        {text: 'Родительский объект', value: 'parent'},
        {text: 'Субъект', value: 'subject'},
        {text: 'Адрес', value: 'address'},
        {text: 'Тип', value: 'type'}
      ],
      objects: [
        {id: '1', name: 'Объект1', parent: 'ПС 35 кв', subject: 'АО Кожевники', address: 'Ул. кожвенника', type: 'КАС'},
        {id: '2', name: 'Объект2', parent: 'ПС 35 кв', subject: 'АО Кожевники', address: 'Ул. кожвенника', type: 'КАС'},
        {id: '3', name: 'Объект3', parent: 'ПС 35 кв', subject: 'АО Кожевники', address: 'Ул. кожвенника', type: 'КАС'},
        {id: '4', name: 'Объект4', parent: 'ПС 35 кв', subject: 'АО Кожевники', address: 'Ул. кожвенника', type: 'КАС'},
        {id: '5', name: 'Объект5', parent: 'ПС 35 кв', subject: 'АО Кожевники', address: 'Ул. кожвенника', type: 'КАС'},
        {id: '6', name: 'Объект6', parent: 'ПС 35 кв', subject: 'АО Кожевники', address: 'Ул. кожвенника', type: 'КАС'},
        {id: '7', name: 'Объект7', parent: 'ПС 35 кв', subject: 'АО Кожевники', address: 'Ул. кожвенника', type: 'КАС'}
      ]
    }
  }
}
</script>

<style>
#Object {
    box-sizing: border-box;
}
h1{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom:2%;
}
</style>
