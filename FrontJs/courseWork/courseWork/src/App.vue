<template>
  <div id="app" >
    <div class="sidebar clearfix">
    <aside>
    <span><router-link to="/">Главная</router-link></span>
    <span><router-link to="/test">Component</router-link></span>
    <span><router-link to="/objects">Объекты</router-link></span>
    <span><router-link to="/subjects">Субъекты</router-link></span>
    <span><router-link to="/projects">Проекты</router-link></span>
    <span><router-link to="/checkings">Проверки</router-link></span>
    </aside>
    </div>
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
.sidebar{
  float: left;
  background: whitesmoke;
}
.clearfix{
  overflow: hidden;
}
#app {
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
