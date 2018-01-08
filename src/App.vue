<template>
  <div id="app">
    <div id="title">
      <div class="left">
        YETING BAO
      </div>
      <div class="right">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAYAAAC5tzfZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjIyQkFFNjc1Q0Y3MTFFMkI1NEFBNkJFQ0MyNkQ2RkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjIyQkFFNjg1Q0Y3MTFFMkI1NEFBNkJFQ0MyNkQ2RkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMjJCQUU2NTVDRjcxMUUyQjU0QUE2QkVDQzI2RDZGRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMjJCQUU2NjVDRjcxMUUyQjU0QUE2QkVDQzI2RDZGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvb/uPAAAAAmSURBVHjaYmRgYPBlIBGwiIuLk6qHgfH///+DWdNoQNA7IAACDABm7hO6FUUnoQAAAABJRU5ErkJggg==" alt="">
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
  background-color: #282A2A;
  background-image: url(./assets/image/bg_01.png);
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

#title>.right>img{
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

#title>.right>img{
  display: inline-block;
  /*padding: 0 20px;*/
}

#title>.right:hover a{
  display: block;
}

}

</style>
