<template>
	<div id='about'>
		<div id='headimg'>
			<img src="../assets/image/photo.jpg" height="300" width="300" alt="">
		</div>

		<div id="introduce">

			<div class="left">
			<!-- {{ $t('message.') }} -->
				{{ $t('message.nam') }}
				<br>
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
				<br>
				{{ $t('message.web') }}:
				<a href="http://www.blythebao.xyz">http://www.blythebao.xyz</a>

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
        	// console.log(window.innerHeight,document.body.clientHeight,document.getElementById('introduce').clientHeight);
        	let mt=(window.innerHeight-document.body.clientHeight-document.getElementById('introduce').clientHeight)/2;
        	// console.log(mt);
        	document.getElementById('headimg').style.marginTop=mt+'px';
    	})
	}
}
</script>

<style>

#about{
	/*background-image: url(../assets/image/bg_01.png);*/
}
	
#headimg>img{
	/*background-color: #000;*/
	/*position: absolute;*/
	max-width: 18em;
	max-height: 18em;
	border-radius: 50%;
	margin: auto;
	/*margin-top: 8%; */
}

#introduce{
	width: 100%;
	position: absolute;
	bottom: 0px;
	background-color: #fff;
	margin: auto;
	padding: 4% 0%;
	left:0;
	text-align: left;
	display: flex;
}

#introduce>.left{
	width: 300px;
	margin: 0 10%; 
}

#introduce>.right{
	margin-right: 10%;
/*	position: absolute;
	width: 50%;
	left: 40%;*/
}

.icon{
	margin-right: 10px;
}

@media screen and (max-width: 800px) {  
#headimg>img{
	max-width: 15em;
	max-height: 15em;
	/*margin-top:5%;*/
}
}

</style>