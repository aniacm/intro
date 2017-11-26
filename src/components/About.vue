<template>
	<div id='about'>
		<div id='headimg'>

		</div>

		<div id="introduce">

			<div class="left">
				<b>
					姓名：包烨婷
					<br>
					所在地：上海
					<br>	
					邮箱：blythebao@foxmail.com
					<br>
					<a href="https://github.com/aniacm"><img src="../assets/image/GitHub-Mark-32px.png" height="32" width="32" alt=""></a>
				</b>
			</div>
			<div class="right">
				<b>
					熟练HTML+CSS /Javascript /Jquery /MySQL /AJAX /npm等，能够熟练使用sublime text3、photoshop等工具进行前端页面手工式的开发，能够兼容主流各种浏览器，比如ie6-10,  Chrome, Firefox, Safari等，能够熟练在各个浏览器下进行调试。
					<br>
					善于使用vue-cli进行单页面开发，微信小程序单页面。
					<br>
					闲暇中在学习nodejs+express+mongodb开发网站。
					<br>
					个人学习博客：<a href="http://www.blythebao.xyz">http://www.blythebao.xyz</a>
				</b>
			</div>

			
		</div>

	</div>
</template>

<script>


export default{
	name: 'About'
}
</script>

<style>

#about{
}
	
#headimg{
	background-color: #000;
	width: 300px;
	height: 300px;
	border-radius: 150px;
	margin: auto;
	margin-top: 80px; 
}

#introduce{
	/*width: 100%;*/
	position: absolute;
	bottom: 0px;
	padding: 2% 15%;
	background-color: #fff;
	margin: auto;
	margin-top: 50px;
	left:0;
	text-align: left;
	display: flex;
}

#introduce>.left{
	width: 100%;
}

#introduce>.right{
	/*margin-left: 10%;*/
/*	position: absolute;
	width: 50%;
	left: 40%;*/
}

</style>