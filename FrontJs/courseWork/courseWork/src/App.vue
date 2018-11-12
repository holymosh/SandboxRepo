<template>
  <div id="app" >
    <aside>
    <span><router-link to="/">Главная</router-link></span>
    <span><router-link to="/test">Go to test</router-link></span>
    </aside>
    <div>
        <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
aside{
  position: fixed;
  width: 7.1rem;
  height: calc(100% -  4.045rem);
  transition: 0.3s cubic-bezier(0.6, 0, 0.4, 1);
  transition-property: width, transform;
  background-color: gainsboro;
  touch-action: auto;
  overflow: hidden !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
span{
  display: block;
  margin-left: 10% ;
  margin-top: 3%;
}
a:visited { text-decoration: none; color: black;}
a:focus { text-decoration: none; color: rgb(85, 121, 156); }
a:hover, a:active { text-decoration: none; color:black }
a:link{text-decoration: none;}
a:active{text-decoration: none;}
</style>
