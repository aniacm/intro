<template>
	<div id='about'>
		<div id='abstract'>
			<img src="../assets/image/photo.jpg" height="300" width="">
			<div id="quote">“Hi. <p>I am Yeting Bao.</p><p id="major">First-year graduate student in HCI program.</p>”</div>
		</div>

		<div id="introduce">

			<div class="left">
			<!-- {{ $t('message.') }} -->
			
				<!-- {{ $t('message.nam') }} -->
				<!-- <br> -->
				{{ $t('message.loc') }}
				<br>
				<a class="icon" href="https://github.com/aniacm">
					<img src="../assets/image/GitHub-Mark-32px.png" height="32" width="32" alt="">
				</a>

				<a class="icon" href="mailto:blythebao@foxmail.com">
					<img src="../assets/image/email_32px.png" height="32" width="32" alt="">
				</a>
				
			</div>
			<div class="right">
				{{ $t('message.int') }}
				<!-- <br> -->
				<!-- {{ $t('message.web') }}: -->
				<!-- <a href="http://www.blythebao.xyz">http://www.blythebao.xyz</a> -->

			</div>

			
		</div>

	</div>
</template>

<script>


export default{
	name: 'About',
	mounted(){
		this.$nextTick(function(){
        //对DOM的操作放在这
        	// console.log('nextTick:');
           	// let bodyHeight=(document.body.clientHeight>200)?document.body.clientHeight:310;
        	// let mt=(window.innerHeight-bodyHeight-document.getElementById('introduce').clientHeight)/2;
        	// console.log(window.innerHeight,bodyHeight,document.getElementById('introduce').clientHeight);
        	// console.log(mt);
        	// document.getElementById('abstract').style.marginTop=mt+'px';
    	})
	}
};

</script>

<style scoped>

#about{
	/*background-image: url(../assets/image/bg_01.png);*/
}
	
#abstract{
	padding: 5% 15%;

	/*background-color: #eee;*/
	display: flex;
}


#abstract>img{
	padding-right: 5%;
	/*background-color: #000;*/
	/*position: absolute;*/
	/*max-width: 50%;*/
	/*max-height: ;*/
	/*border-radius: 50%;*/
	/*margin: auto;*/
	/*margin-top: 8%; */
}

#abstract>#quote{
	/*margin:auto;*/
	/*margin-top:10% ;*/
	text-align: left;
	color: #fff;
	font-size: 4em;
}

#abstract>#quote>#major{
	font-size: 0.5em;
}

#introduce{
	/*width: 100%;*/
	/*margin-top: 15em;*/
	/*position: absolute;*/
	/*bottom: 0px;*/
	background-color: #fff;
	/*margin: auto;*/
	padding: 5% 15%;
	left:0;
	text-align: left;
	display: flex;
	min-height: 5em;

}

#introduce>.left{
	width: 300px;
	flex: 0.2;
	padding-right: 10px; 
	/*margin: 0 10%; */
}

#introduce>.right{
	flex: 0.8;
	/*margin-right: 10%;*/
/*	position: absolute;
	width: 50%;
	left: 40%;*/
}

.icon{
	margin-right: 10px;
}

@media screen and (max-width: 800px) {  
#abstract>img{
	max-width: 15em;
	max-height: 15em;
	/*margin-top:5%;*/
}

#abstract>#quote{
	font-size: 3em;
}

}

</style>