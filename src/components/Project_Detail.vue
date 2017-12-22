<template>
	<div id="project_detail">


    <router-view></router-view>

		<!-- <img src="../../assets/image/20160125.jpg" alt=""> -->
    <router-link to='/project'>
      <div class="back">
        {{ $t('message.back') }}
      </div>
    </router-link>
	</div>
</template>

<style>
#project_detail{
  width: 70%;
  /*max-width: 900px;*/
  /*height: 100%;*/
  position: absolute;
  margin: 0% 10%;
  padding: 5%;
  text-align: left;
  background-color: #fff;
}

.back{
  text-align: center;
  width: 100px;
  height: 50px;
  line-height: 50px;
  border-radius: 20px;
  background-color: #FC3941;
  color: #fff;
  margin: auto;
}

img {
  display: inline-block;
  height: auto;
  max-width:100%; 
}
</style>