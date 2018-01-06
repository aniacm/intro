<template>
    <div id="project_detail">
        <router-link to='/project'>
            {{ $t('message.pro') }}
        </router-link>
        &gt;&gt; {{ $t($route.matched[0].name)}} - {{ $t($route.name) }}
        <router-view></router-view>
        <!-- <img src="../../assets/image/20160125.jpg" alt=""> -->
        <router-link to='/project'>
            <div class="back">
                {{ $t('message.back') }}
            </div>
        </router-link>
    </div>
</template>
<script>
export default{
  name: 'project_detail',
  data(){
    return {
      msg: ''
    }
  },
  mounted(){
    // console.log(this.$route.matched[0].name)

  },
  methods:{

  }
}
</script>
<style>
#project_detail {
    width: 70%;
    /*max-width: 900px;*/
    /*height: 100%;*/
    position: absolute;
    margin: 0% 10%;
    padding: 5%;
    text-align: left;
    background-color: #fff;
}

.back {
    text-align: center;
    width: 120px;
    height: 50px;
    line-height: 50px;
    border-radius: 20px;
    background-color: #FC3941;
    color: #fff;
    margin: auto;
    font-size:1.2em;
}

img {
    display: inline-block;
    height: auto;
    max-width: 100%;
}

@media screen and (max-width: 800px) {  
#project_detail {
    width: 90%;
    margin: 0;
}
}

</style>
