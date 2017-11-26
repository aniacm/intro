<template>
  <div class="project">
    <div class="portfolio" v-for='list in linklist'>
      <img :src="list.imgsrc" height="200" width="200" alt="">
      <br> 
      <router-link :to='list.link'>
        {{list.name}}
      </router-link>
    </div>
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      linklist: [
        {
          name:'Createjs小游戏',
          link:'/project/createjs',
          imgsrc:require('../assets/image/p1.png')},
        {
          name:'Bootstrap',
          link:'/project/bootstrap',
          imgsrc:''
        },
        {
          name:'test',
          link:'/project',
          imgsrc:''
        },
        {
          name:'test',
          link:'/project',
          imgsrc:''
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project{
  max-width: 900px;
  position: absolute;
  left:0px;
  right: 0px;
  margin: auto;
  margin-top: 20px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  border-radius: 0px;
  background-color: #FFF;
  color: #000;

}

.router-link-exact-active{
  background-color: #FFF;
  color: #000;
  border-radius: 0px;
}


.portfolio{
  width: 200px;
  height: 250px;
  display: inline-block;
  background-color: #FFF;
  margin: 0 10px 10px 10px;
  box-shadow: #bbb 0px 0px 10px;
}

.portfolio>img{
  border-bottom: 1px solid #eee; 
}
</style>
