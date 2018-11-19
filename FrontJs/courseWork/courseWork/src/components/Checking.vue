<template>
    <div id="Checking">
        <h1>Выездные проверки инвест проектов</h1>
        <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
  </v-data-table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: []
    }
  }
}
</script>
<style>
#Checking {
}
</style>
