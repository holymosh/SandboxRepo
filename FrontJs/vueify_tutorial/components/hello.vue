<template>
    <h1> {{ greeting }}</h1>
</template>

<script>
    var hello = {
        data: function(){
            return {
                greeting : "hello vueify"
            }
        }
    }
    module.exports = hello;
</script>

<style>
    h1{
        font-family: 'Roboto' , sans-serif;
        color: green
    }
</style>


