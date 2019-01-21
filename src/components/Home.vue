<template>
	<div id="home">
		<About></About>
		<Project></Project>
		<Experience></Experience>
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
<style></style>