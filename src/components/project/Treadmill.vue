<template>
	<div id="treadmill">
		<router-link to='/'>
			<h3>&lt; {{ $t('message.back') }}</h3>
        </router-link>
        <img id="treadmill_photo" src="../../assets/image/Treadmill2.png" height="454" width="1224" alt="">
        <h2>Treadmill</h2>
        <h3>Overview</h3>
        	<p>Our purpose is to improve the user experience of common treadmill. By observation and interview, we collected data and found goal of participants. The problem and design storyboard were created.</p>
        	<p>Team member: Linyun Zhu, Qiwen Zhao, Vaishnavi Mande and Yeting Bao</p>
        <h3>Personas</h3>
        	<img id="per1" src="../../assets/image/Persona/Persona1.jpg" height="1002" width="1600" alt="">
        	<img id="per2" src="../../assets/image/Persona/Persona2.jpg" height="1002" width="1600" alt="">
        	<img id="per3" src="../../assets/image/Persona/Persona3.jpg" height="1002" width="1600" alt="">
        	<img id="per4" src="../../assets/image/Persona/Persona4.jpg" height="1002" width="1600" alt="">
		<h3>Storybords</h3>
			<img id="pro1" src="../../assets/image/Storyboard/Problem1.png" height="1980" width="1356" alt="">
			<img id="pro2" src="../../assets/image/Storyboard/Problem2.png" height="1980" width="1356" alt="">
			<img id="des1" src="../../assets/image/Storyboard/Design3.png" height="1980" width="1356" alt="">
			<img id="des2" src="../../assets/image/Storyboard/Design4.png" height="1980" width="1356" alt="">
		<router-link to='/'>
			<h3 id="back_btm">{{ $t('message.back') }}</h3>
        </router-link>
	</div>
</template>

<style scoped>
#treadmill{
	padding: 5% 15%;
    text-align: left;
    background-color: #fff;
    transition: 0.3s;
}

#treadmill>h2, h3{
	margin: 2% 0%;
}

#treadmill_photo, #per1, #per2, #per3, #per4, #pro1, #pro2, #des1, #des2{
	max-width: 100%;
	height: auto;
}

#treadmill>h4{
	margin: 0% 2%;
}

#back_btm{
	text-align: center;
	text-decoration: underline;
}


</style>