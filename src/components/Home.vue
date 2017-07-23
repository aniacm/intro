<template>
  <div class="home">
    <div class="portfolio" v-for='list in linklist'>
      <img :src="list.imgsrc" height="200" width="200" alt="">
      <br> 
      <router-link :to='list.link'>
        {{list.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      linklist: [
        {
          name:'Createjs小游戏',
          link:'/createjs',
          imgsrc:require('../assets/image/p1.png')},
        {
          name:'Bootstrap',
          link:'/bootstrap',
          imgsrc:''
        },
        {
          name:'test',
          link:'/',
          imgsrc:''
        },
        {
          name:'test',
          link:'/',
          imgsrc:''
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.portfolio{
  display: inline-block;
}
</style>
