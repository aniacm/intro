<template>
  <div id="app">
    <div id="title">
      <div class="left">
        YETING BAO
      </div>
      <div class="right">
        <i class="icon iconfont icon-category"></i>
        <router-link to="/about">{{ $t('message.ps') }}</router-link>
        <router-link to="/skill">{{ $t('message.ski') }}</router-link>
        <router-link to="/experience">{{ $t('message.exp') }}</router-link>
        <router-link to="/project">{{ $t('message.pro') }}</router-link>
        <a id="CL"><div id="changeL" @click='changeLang()'>CN中 | EN英</div></a>
      </div>
    </div>
    <!-- <transition name='slide-fade' mode='out-in'> -->
      
    <div class="view">
      <router-view></router-view>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      msg:''
    }
  },
  methods:{
    changeLang(){
      this.$i18n.locale= (this.$i18n.locale=='cn')?'en':'cn'
      window.localStorage.setItem('language', this.$i18n.locale)
    }
  },
  mounted(){
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
  }
}
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
  color: #074080;
  cursor: pointer;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#title{
  width: 100%;
  /*height: 100%;*/
  line-height: 60px;
  background-color: #FFF;
  display: flex;
  border-bottom: 5px solid #074080;
  position: fixed;
  z-index: 999;
}

#title>.left{
  text-align: left;
  margin-left: 10%;
  /*float: left;*/
}

#title>.right{
  position: absolute;
  right: 10%;
  overflow: hidden;
}

#title>.right>a {
  padding: 0 0 0 40px;
  background-color: #fff;
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
  background-color: #074080;
  color: #fff;
  display: inline-block;
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
#title>.right>a{
  display: none;
  background-color: #074080;
  color: #fff;
  padding: 0px;
  opacity:0.9;

}

#title>.right>i.icon-category{
  display: inline-block;
  /*padding: 0 20px;*/
}

#title>.right:hover a{
  display: block;
}

}

</style>
