<template>
	<div class="process_array">
		&lt;&lt;
		<router-link to='/project'>
		    Projects
		</router-link>
		- Programming - Process the array

		<div class="process">
			<input id="arrayinput" v-model="Array_num" placeholder="edit me">
			<button @click='Sort(Array_num)'>Sort</button>
			<button @click='Distinct(Array_num)'>Distinct</button>
		</div>
		
		<div class="result">
			Results: {{Results}}
		</div>

	</div>
</template>

<script>
export default {

  name: 'process_array',

  data () {
  	return{
  		Array_num: [7,4,3,1,56,7,56,-22,-1,122],
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