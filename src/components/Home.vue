<template>
	<div id="home">
		<About></About>
		<Project></Project>
		<Experience></Experience>
		<div id="foot">
			<a class="icon" href="https://github.com/aniacm">
				<img src="../assets/image/GitHub-Mark-32px.png" height="32" width="32" alt="">
			</a>
			<a class="icon" href="mailto:blythebao@foxmail.com">
				<img src="../assets/image/email_32px.png" height="32" width="32" alt="">
			</a>
		</div>
		
	</div>
</template>
<script>
import Project from '@/components/Project'
import About from '@/components/About'
import Experience from '@/components/Experience'

export default{
name:'home',
	data(){
	return{
	msg:''
	}
	},
	mounted(){
	
	},
	method:{
	
	},
	components:{
    About,
    Project,
    Experience
  }

};
</script>
<!-- <style scoped></style> -->
<style>
#home>#foot{
	background: #fff;
	padding-bottom: 5%;
}

#foot>a{
	padding: 0 1em;
}














</style>