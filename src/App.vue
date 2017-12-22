<template>
  <div id="app">
    <div id="title">
      <div class="left">
        <!-- <span>
          <img id="icon" src="./assets/image/icon.png" height="17" width="24" alt="">
        </span> -->
        YETING BAO
      </div>
      <div class="right">
        <router-link to="/about">{{ $t('message.ps') }}</router-link>
        <router-link to="/skill">{{ $t('message.ski') }}</router-link>
        <router-link to="/experience">{{ $t('message.exp') }}</router-link>
        <router-link to="/project">{{ $t('message.pro') }}</router-link>
        <span id="changeL" @click='changeLang()'>CN中 | EN英</span>
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
  methods:{
    changeLang(){
      this.$i18n.locale= (this.$i18n.locale=='cn')?'en':'cn'
      window.localStorage.setItem('language', this.$i18n.locale)
    }
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
body{
  /*background-color: #EEEEEE;*/
  background-image: url(./assets/image/stone.jpg);
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
  border-bottom: 1px solid #eee;
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

}

#title>.right>a {
  padding: 0 20px;
  /*background-color: #666;*/
  /*text-decoration: none;*/
  /*border-radius: 0px 0px 5px 5px;*/
}

.router-link-exact-active{
  /*background-color: #FFF;*/
  text-decoration: underline;
}

#title>.right>a:hover{
  
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
}

.view{
  padding-top: 60px;
}

</style>
