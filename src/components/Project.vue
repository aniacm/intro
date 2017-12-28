<template>
  <div id="project">
    <div class="painting">
      <h3>{{ $t('message.pai') }}</h3>
      <div class="portfolio pai" v-for='list in Painting_List'> 
        <router-link :to='list.link'>
          <!-- {{list.name}} -->
          <img class="linkimg" v-if="list.imgsrc" :src="list.imgsrc" height="200" width="200" alt="">
        </router-link>
      </div>
    </div>
    <div class="programming">
      <h3>{{ $t('message.prog') }}</h3>
      <div class="portfolio pro" v-for='list in Programming_List'>
        <br> 
        <router-link :to='list.link'>
          <div class="linkdiv" :style="list.bgcolor">
            {{ $t(list.name) }}
          </div>
        </router-link>
      </div>
    </div>
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      Painting_List:[
        {
          name:'虞姬',
          link:'/project/painting/Yuji',
          imgsrc: require('../assets/image/20160125_small.jpg')
          // imgsrc:require('../assets/image/p1.png')
        },
        {
          name:'Q版人物',
          link:'/project/painting/choroq',
          imgsrc: require('../assets/image/20160128_small.jpg')
        }
      ],
      Programming_List: [
        {
          name: 'message.ProcessData',
          link:'/project/programming/process_data',
          bgcolor: 'background-color:#074080'
        },
        {
          name:'message.carousel',
          link:'/project/programming/carousel',
          bgcolor: 'background-color:#108080'
        },
        {
          name:'',
          link:'/project',
          bgcolor: 'background-color:#108040'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#project{
  width: 70%;
  /*max-width: 900px;*/
  /*height: 90%;*/
  position: absolute;
  margin: 0% 10%;
  padding: 5%;
  text-align: left;
  background-color: #fff;
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
  /*background-color: #FFF;*/
  color: #000;
}

.router-link-exact-active{
  /*background-color: #FFF;*/
  color: #000;
  border-radius: 0px;
}


.portfolio{
  /*width: 100px;*/
  /*height: 100px;*/
  /*overflow: hidden;*/
  display: inline-block;
  /*background-color: #FFF;*/
  vertical-align: top;
  text-align: center;
  /*line-height: 100px;*/
  transition: 0.3s;
  /*background-color: #000;*/
}

.pai{
  margin: 5% 0;
  background-color: #000;
  height: 200px;
}

.pro{
  margin: 3% 0;
}



.linkimg{
  box-shadow: #bbb 0px 0px 10px;
  z-index: 999;
}

.linkimg:hover{
  opacity: 0.8;
  filter: alpha(opacity=80);
}


.linkdiv{
  width: 200px;
  height: 100px;
  /*box-shadow: #bbb 0px 0px 10px;*/
  line-height: 100px;
  /*background-color: #FFFF0A;*/
  z-index: 999;
  color: #fff;
}

.linkdiv:hover{
  opacity: 0.8;
  filter: alpha(opacity=80);
}


.portfolio>img{
  border-bottom: 1px solid #eee; 
}
</style>
