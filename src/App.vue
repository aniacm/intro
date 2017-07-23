<template>
  <div id="app">
    <p id="title">BLYTHE BAO</p>
    <router-link to="/">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
body{
  background-color: #EEEEEE;
}

#title{
  height: 60px;
  line-height: 60px;
  background-color: #FFF;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
