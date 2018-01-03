<template>
	<div id="skill">
  
    <div id="radarchart" ref='myEchart'></div>

		<div class="left">
      {{ $t('message.ski1') }}<br>
      {{ $t('message.ski2') }}<br> 
      {{ $t('message.ski3') }}<br> 
      {{ $t('message.ski4') }}<br>
      {{ $t('message.ski5') }}<br>
      {{ $t('message.ski6') }}<br>
    </div>

	</div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      chart: null,
    }
  },
  mounted(){
    this.initChart();
  },
  methods: {
    initChart(){
      this.chart = echarts.init (this.$refs.myEchart);
      this.chart.setOption({
        title: {
            text: 'Skills Proficiency'
        },
        tooltip: {},
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: 'Web Development', max: 5},
               { name: 'Database', max: 5},
               { name: 'English', max: 5},
               { name: 'Version Control Systems', max: 5},
               { name: 'Linux bash', max: 5},
               { name: 'Photoshop', max: 5}
            ]
        },
        series: [{
            name: 'Skills Proficiency',
            type: 'radar',
            areaStyle: {normal: {color: '#074080'}},
            lineStyle: 
                {
                normal: {
                    color: '#074080',
                        }
                },
            data : [
                {
                    value : [4, 3, 4, 4, 2, 4],
                    name : 'Skills Proficiency'
                }
            ]
        }]
      })
    }
  }
}
</script>

<style scoped>
#skill{
  width: 70%;
  /*height: 90%;*/
  position: absolute;
  margin: 0% 10%;
  padding: 5%;
  text-align: left;
  background-color: #fff;
  display: flex;
}

#radarchart{
  width: 500px;
  height: 500px;
  /*margin: auto;*/
  display: inline-block;
  /*float: left;*/
}

.left{
  padding-top: 18%;
  /*float: left;*/
  width: 50%;
}

@media screen and (max-width: 600px) {  
#skill{
  display: block;
}

#radarchart{
  /*margin-top:10%;*/
  width: 300px;
  height: 240px;
}

.left{
  width: 100%;
}


}
</style>