<template>
  <div id="project">
    <div class="painting">
      <h3>{{ $t('message.pai') }}</h3>
      <div class="portfolio" v-for='list in Painting_List'> 
        <router-link :to='list.link'>
          <!-- {{list.name}} -->
          <img class="linkimg" v-if="list.imgsrc" :src="list.imgsrc" height="100" width="100" alt="">
        </router-link>
      </div>
    </div>
    <div class="programming">
      <h3>{{ $t('message.prog') }}</h3>
      <div class="portfolio" v-for='list in Programming_List'>
        <br> 
        <router-link :to='list.link'>
          <div class="linkdiv">
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
          link:'/project/programming/process_array'
        },
        {
          name:'',
          link:'/project'
        },
        {
          name:'',
          link:'/project'
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
  background-color: #FFF;
  color: #000;
}

.router-link-exact-active{
  background-color: #FFF;
  color: #000;
  border-radius: 0px;
}


.portfolio{
  /*width: 100px;*/
  /*height: 100px;*/
  display: inline-block;
  /*background-color: #FFF;*/
  margin: 5%;
  vertical-align: top;
  text-align: center;
  /*line-height: 100px;*/
}

.linkimg{
  box-shadow: #bbb 0px 0px 10px;
}

.linkdiv{
  width: 100px;
  height: 100px;
  box-shadow: #bbb 0px 0px 10px;
  line-height: 100px;
  background-color: #8BC1FF;
}

.portfolio>img{
  border-bottom: 1px solid #eee; 
}
</style>
