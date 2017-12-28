<template>
	<div id="process_data">


		<div class="process">
			<input id="arrayinput" v-model="Array_num" placeholder="edit me">
			<button @click='Sort(Array_num)'>{{ $t('message.sort') }}</button>
			<button @click='Distinct(Array_num)'>{{ $t('message.distinct') }}</button>
		</div>
		
		<div class="result">
			{{ $t('message.result') }}: {{Results}}
		</div>

	</div>
</template>

<script>
export default {

  name: 'process_data',

  data () {
  	return{
  		Array_num: [7,4,3,1,56,7,56,-22,-1,122,7,-22],
  		Results: ''
  	}
  },

  methods:{

  	Process(arr){
		let array=[];
  		let arra;
  		if(typeof arr=="string"){
  			arra=arr.split(',');
  			array=arra.map(function(data){  
					return +data;
					console.log(array);
				});  

  		}else{

  			for(let i=0; i<arr.length; i++){
  				array[i]=arr[i];
  			}
  		}
  		return array;
  	},

  	Sort(arr){

  		let array=this.Process(arr);
  		
  		// console.log(typeof array);

  		for( let i = 0 ; i< array.length -1 ; i++){
  			for( let j = i+1; j< array.length ; j++){
  				if (array[i]>array[j]) {
  					let t= array [i];
  					array[i] = array[j];
  					array[j] =t;
  				}
  			}
  		}

  		this.Results = array;
  	},

  	Distinct(arr){

  		this.Results= [];

  		let array=this.Process(arr);

  		//排序后去重方法
  		// this.Sort(array);

  		// for (var i = 0; i < this.Results.length-1; i++) {
  		// 	if(this.Results[i]==this.Results[i+1]){
  		// 		this.Results.splice(i,1);
  		// 		i--;
  		// 	}
  		// }

  		//直接去重方法
  		let result=new Object();

  		for (let i = 0; i < array.length; i++) {
				if(result.hasOwnProperty(array[i])){
					result[array[i]]++;
				}else{
					result[array[i]]=1;
					this.Results.push(array[i]);
				}
   		}
   		// console.log(result,this.Results);

  	}
  }
}
</script>

<style scoped>

#arrayinput{
	-moz-appearance: none;
	font-size:1.2em;
	height:2.7em;
	border-radius:4px;
	border:1px solid #c8cccf;
	color:#6a6f77;
	outline: 0;
	width: 50%;
	padding: 0% 2%;
}

button{
	font-size:1.2em;
	width: 5em;
	height: 2.7em;
	border-radius: 10px;
	background-color: #eee;
}

.process{
	margin: 5% 0%;
}

.result{
	font-size:1.2em;
	margin-bottom: 5%;
}
	










</style>