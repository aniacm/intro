<template>
  <div id="app">
    <div id="title" :class="title_style">
      
      <div class="left">
        YETING BAO
        <!-- <p>{{title_style}}</p> -->
      </div>
      <div class="right">
        <i class="icon iconfont icon-category"></i>
<!--         <router-link to="/about">{{ $t('message.ps') }}</router-link>
        <router-link to="/skill">{{ $t('message.ski') }}</router-link>
        <router-link to="/experience">{{ $t('message.exp') }}</router-link>
        <router-link to="/project">{{ $t('message.pro') }}</router-link> -->

        <a id="CL">
          <div id="changeL" @click='changeLang()'>
            <div :class="current_language=='cn'?'selected':''">CN中</div>
            <div id="division">|</div>
            <div :class="current_language=='en'?'selected':''">EN英</div>
          </div>
        </a>

<!--         <a class="icon" href="https://github.com/aniacm">
          <img :src="require('./assets/image/GitHub-Mark-32px.png')" height="32" width="32" alt="">
        </a>

        <a class="icon" href="mailto:blythebao@foxmail.com">
          <img :src="require('./assets/image/email_32px.png')" height="32" width="32" alt="">
        </a> -->

      </div>
    </div>



    <!-- <transition name='slide-fade' mode='out-in'> -->
      

    <div class="view">

      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Project from '@/components/Project'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'

import Project_Detail from '@/components/Project_Detail'

import Process_Data from '@/components/programming/Process_Data'
import Carousel from '@/components/programming/Carousel'
import WebGL from '@/components/programming/Webgl_threejs'

import Yuji from '@/components/painting/Yuji'
import ChoroQ from '@/components/painting/ChoroQ'
import OilPainting from '@/components/painting/OilPainting'

import Treadmill from '@/components/project/Treadmill'


export default {
  name: 'app',
  data(){
    return{
      msg:'',
      title_style: 'default', //left_scrolled
      scrolled: false,
      current_language: 'en'
    }
  },
  methods:{
    changeLang(){
      this.$i18n.locale= (this.$i18n.locale=='cn')?'en':'cn'
      this.current_language=this.$i18n.locale
      window.localStorage.setItem('language', this.$i18n.locale)
    },
    handleScroll(){
      this.scrolled = window.scrollY > 0;
      this.title_style = (this.scrolled!=false)?'scrolled':'default';
    }
  },
  mounted(){
    // console.log(document.documentElement.scrollTop,this.scrolled);
    window.addEventListener('scroll', this.handleScroll);
    // this.$nextTick(function(){
    //   document.body.style.backgroundImage = require('./assets/image/bg_01.png');
    // })
    // this.bgimg=require('./assets/image/bg_01.png')
    
    // var newImg = new Image()
    // newImg.src = require('./assets/image/bg_01.png')
    // newImg.onload = () => { // 图片加载成功后把地址给原来的img
    //   console.log("加载成功")
    //   document.body.style.backgroundImage = newImg.src;
    //   // console.log(document.body.backgroundImage)
    // }

  },
  components:{
    About,
    Skill,
    Project,
    Experience
  }
};
</script>

<style>

*{
  margin: 0px;
  padding: 0px;
}

body{
  background-color: #0C1624;
  background-image: none;
  background-repeat: no-repeat;
  background-attachment:fixed;
  background-size: cover;
}

a{
  text-decoration: none;
  /*color: #074080;*/
  cursor: pointer;
}

h3{
  color: #18B56A;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.default{
  background-color: none;
  color:#FFF;
  transition: all 0.5s ease 0s;
}

.scrolled{
  background-color: #fff;
  color:#2c3e50;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  transition: all 1s ease 0s;
}


#title{
  width: 100%;
  /*height: 100%;*/
  line-height: 60px;
  /*background-color: #252C30;*/
  /*background-image: url(../static/bg_01_small.png);*/
  
  display: flex;
  /*border-bottom: 5px solid #074080;*/
  position: fixed;
  z-index: 999;
  font-weight: bold;
}


#title>.left{
  text-align: left;
  margin-left: 15%;
  
  /*float: left;*/
}

#title>.right{
  position: absolute;
  right: 15%;
  overflow: hidden;
}

#title>.right>a#CL {
  /*padding: 0 0 0 40px;*/
  /*background-color: #fff;*/
  /*text-decoration: none;*/
  /*border-radius: 0px 0px 5px 5px;*/
}


.router-link-exact-active{
  /*background-color: #FFF;*/
  text-decoration: underline;
}

#title>.right>i.icon-category{
  margin: 0 60px;
  display: none;
  cursor: pointer;
  /*text-align: right;*/
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

#changeL{
  padding: 0 20px;
  cursor: pointer;
  /*background-color: #074080;*/
  /*color: #fff;*/
  display: inline-block;
}

#changeL>div{
  display: inline-block;
}

#changeL>.selected{
  text-decoration: underline;
  color: #18B56A;
}

#changeL:hover{
  background-color: rgba(255,255,255,0.2);
  /*color: #000;*/
  transition: all .3s ease;
}

.view{
  padding-top: 60px;
}

@media screen and (max-width: 800px) {  

body{
  /*background-image: url(./assets/image/bg_01_small.png);*/
}

#title>.right{
  right: 0px;
}
/*#title>.right>#CL{
  display: none;
  background-color: #fff;
  color: #fff;
  padding: 0px;
}*/

/*#title>.right>i.icon-category{
  display: inline-block;
}*/

#title>.right:hover #CL{
  display: block;
}



}

</style>
