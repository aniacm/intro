<template>
  <div id="app">
    <p id="title">
      <span>
        <img id="icon" src="./assets/image/icon.png" height="17" width="24" alt="">
      </span>
      BLYTHE BAO
    </p>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  padding: 0 30px;
  color: #fff;
  cursor: pointer;
  background-color: #666;
  text-decoration: none;
  border-radius: 0px 0px 5px 5px;
}

.router-link-exact-active{
  background-color: #FFF;
  color: #000;
}

a:hover{
  
}

#title{
  height: 60px;
  line-height: 60px;
  background-color: #FFF;
}

#icon{
  display: inline;
}


</style>
