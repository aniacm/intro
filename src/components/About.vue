<template>
	<div id='about'>
		<div id='headimg'>

		</div>

		<div id="introduce">

			<div class="left">
			<!-- {{ $t('message.') }} -->
				<b>
					{{ $t('message.nam') }}
					<br>
					{{ $t('message.loc') }}
					<br>
					<a href="https://github.com/aniacm"><img src="../assets/image/GitHub-Mark-32px.png" height="32" width="32" alt=""></a>
				</b>
			</div>
			<div class="right">
				<b>
					{{ $t('message.int') }}
					<br>
					{{ $t('message.web') }}:
					<a href="http://www.blythebao.xyz">http://www.blythebao.xyz</a>
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
	width: 100%;
	position: absolute;
	bottom: 0px;
	background-color: #fff;
	margin: auto;
	margin-top: 50px;
	padding: 5% 0%;
	left:0;
	text-align: left;
	display: flex;
}

#introduce>.left{
	width: 30%;
	margin-left: 10%; 
}

#introduce>.right{
	/*margin-left: 10%;*/
/*	position: absolute;
	width: 50%;
	left: 40%;*/
}

</style>