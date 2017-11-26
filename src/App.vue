<template>
  <div id="app">
    <div id="title">
      <div class="left">
        <!-- <span>
          <img id="icon" src="./assets/image/icon.png" height="17" width="24" alt="">
        </span> -->
        BLYTHE BAO
      </div>
      <div class="right">
        <router-link to="/about">个人简介</router-link>
        <router-link to="/skill">专业技能</router-link>
        <router-link to="/experience">工作经历</router-link>
        <router-link to="/project">项目经验</router-link>
      </div>
    </div>
    <!-- <transition name='slide-fade' mode='out-in'> -->
      <router-view></router-view>
    <!-- </transition> -->
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
  /*background-color: #EEEEEE;*/
  background-image: url(./assets/image/stone.jpg);
}

a{
  text-decoration: none;
  color: #000;
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
  height: 100%;
  line-height: 60px;
  background-color: #FFF;
  display: flex;
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

</style>
