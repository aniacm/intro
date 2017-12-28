<template>
	<div id="carousel">


		<div class="imgdiv" v-for='(link,index) in img_list'>
			<img :src='link' v-if="index==target_index" height="600" width="950" alt="">
		</div>

		<div class="allbtn">
			<div class="btndiv" v-for='(link,index) in img_list'>
				<button class="btn select_btn" :class="index==target_index?'current_btn':'select_btn'" @click='Select_Img(index)'></button>
				<!-- <button class="btn current_btn" v-if="index==target_index"></button> -->
			</div>
		</div>




	</div>
</template>

<script>
export default{
	name: 'carousel',
	data(){
		return{
			target_index: 0,
			img_list:[
				require("../../assets/image/carousel/img001.png"),
				require("../../assets/image/carousel/img002.png"),
				require("../../assets/image/carousel/img003.png"),
				require("../../assets/image/carousel/img004.png"),
				require("../../assets/image/carousel/img005.png")
			]
		}
	},
	mounted(){
		window.setInterval(this.slide, 3000); 
	},
	methods:{
		slide(){
			if(this.target_index<4){
				this.target_index++;
			}else{
				this.target_index=0;
			}

			// console.log('aaaa');
		},
		Select_Img(n){
			this.target_index=n;
		}
	}
}
</script>

<style scoped>
#carousel{
	text-align: center;
	/*height: 600px;*/
	position: relative;
	margin: 5% 0%;
}

.imgdiv{
}

.allbtn{
	position: absolute;
	right: 5%;
	bottom: 0px;
	padding: 2%;
	z-index: 999;

}

.btndiv{
	display: inline-block;
	padding-right: 5px;
	/*position: absolute;*/
}

.btn{
	width: 20px;
	height: 20px;
	border-radius: 10px;
	border-color:#fff;
	/*position: relative;*/
	/*display: inline;*/
}

.select_btn{
	background-color: #B3B3B3;
	cursor: pointer;
	/*position: absolute;*/
}

.current_btn{
	background-color: #fff;
}






</style>