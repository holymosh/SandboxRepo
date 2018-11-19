<template>
  <div class="hello" id="HelloWorld">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#HelloWorld{
}
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
