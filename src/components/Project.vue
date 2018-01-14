<template>
    <div id="project">
        <h3>{{ $t('message.prog') }}</h3>
        
        <div class="programming">
            <div class="pro" v-for='list in Programming_List'>
                <div class="linkdiv" :class="(list.component==Content)?'linkdiv_selected':''" @click='Display(list.component)'>
                    <span>{{ $t(list.name) }}</span><i class="fa fa-angle-down fa-lg"></i>
                </div>
                <collapse_transition>
                    <component v-bind:is="Content" v-if="list.component==Content" :style="list.border"></component>
                </collapse_transition>
                
            </div>
        </div>

        <h3>{{ $t('message.pai') }}</h3>
        <div class="painting">
            <div class="pai" v-for='(list,index) in Painting_List'>
                <img class="linkimg" v-if="list.imgsrc" :src="list.imgsrc" height="200" width="200" alt="" @click='ShowImg(index)'>
                <div class="img_mask" v-if="index==showimg" @click='HideImg()'></div>
                <img class="img_display" :src="list.imgsrc_big" alt="" v-if="index==showimg" @click='HideImg()'>
            </div>
        </div>
    </div>
</template>
<script>
import collapse_transition from '@/components/Transition'
import Process_Data from '@/components/programming/Process_Data'
import Carousel from '@/components/programming/Carousel'
import WebGL from '@/components/programming/Webgl_threejs'
import Yuji from '@/components/painting/Yuji'
import ChoroQ from '@/components/painting/ChoroQ'
import OilPainting from '@/components/painting/OilPainting'
export default {
    name: 'project',
    data() {
        return {
            Content: Process_Data,
            showimg: -1,
            Painting_List: [{
                    name: '虞姬',
                    link: '/project/painting/yuji',
                    imgsrc: require('../assets/image/20160125_small.jpg'),
                    imgsrc_big: require('../assets/image/20160125.jpg')
                        // imgsrc:require('../assets/image/p1.png')
                }, {
                    name: 'Q版人物',
                    link: '/project/painting/choroq',
                    imgsrc: require('../assets/image/20160128_small.jpg'),
                    imgsrc_big: require('../assets/image/20160128.jpg')
                }, {
                    name: '油画',
                    link: '/project/painting/oilpainting',
                    imgsrc: require('../assets/image/oilpainting_small.jpg'),
                    imgsrc_big: require('../assets/image/oilpainting.jpg')
                }

            ],
            Programming_List: [{
                name: 'message.ProcessData',
                link: '/project/programming/process_data',
                // bgcolor: 'background-color:#323144',//074080
                // border: 'border-top: 1px solid #7E7BB1',
                component: Process_Data
            }, {
                name: 'message.carousel',
                link: '/project/programming/carousel',
                // bgcolor: 'background-color:#323144',
                // border: 'border-top: 1px solid #7E7BB1',
                component: Carousel
            }, {
                name: 'message.webgl',
                link: '/project/programming/webgl',
                // bgcolor: 'background-color:#323144',
                // border: 'border-top: 1px solid #7E7BB1',
                component: WebGL
            }]
        }
    },
    methods:{
        Display(name){
            this.Content=(this.Content!=name)?name:'';
        },
        ShowImg(index){
            this.showimg=index;
        },
        HideImg(){
            this.showimg=-1;
        }
    },
    components: {
        collapse_transition,
        Process_Data,
        Carousel,
        WebGL,
        Yuji,
        ChoroQ,
        OilPainting
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#project {
    width: 70%;
    /*max-width: 900px;*/
    /*height: 90%;*/
    position: absolute;
    margin: 0% 10%;
    padding: 5%;
    text-align: left;
    background-color: #fff;
    transition: 0.3s;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

a {
    border-radius: 0px;
    /*background-color: #FFF;*/
    color: #000;
}

.programming,.painting{
    margin: 5% 0;
}

.programming{
    background-color: #eee;
    /*border:1px solid #323144;*/
    border-radius: 10px;
    overflow: hidden;
}

.router-link-exact-active {
    /*background-color: #FFF;*/
    color: #000;
    border-radius: 0px;
}


.pai {
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    /*text-align: center;*/
    transition: 0.3s;
    background-color: #000;
    height: 200px;
}

.pro {
    /*text-align: center;*/
    width: 100%;
}

.linkimg {
    box-shadow: #bbb 0px 0px 10px;
    z-index: 999;
}

.linkimg:hover {
    opacity: 0.8;
    filter: alpha(opacity=80);
}

.img_mask{
    background-color: #000;
    opacity: 0.8;
    position: fixed;
    z-index: 999;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
}

.img_display{
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto;
    max-height: 100%;
    z-index: 999;
}

.linkdiv {
    /*width: 200px;*/
    font-weight: 700;
    padding-left: 1em;
    height: 50px;
    line-height: 50px;
    color: #eee;
    border-bottom: 1px solid #7E7BB1;
    background-color:#323144;
    cursor: pointer;
    position: relative;
}

.linkdiv:hover {

    opacity: 0.8;
    filter: alpha(opacity=80);

}

.linkdiv i.fa-angle-down{
    right: 1em;
    top: 20px;
    /*left: auto;*/
    position: absolute;
    /*text-align: right;*/
}

.linkdiv_selected{
    background-color: #D3394F;
    border-bottom: 1px solid #D3394F;
}

.linkdiv_selected i.fa-angle-down{
    transition: all 0.25s ease;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
}

.portfolio>img {
    border-bottom: 1px solid #eee;
}


@media screen and (max-width: 800px) {
    #project {
        width: 90%;
        margin: 0;
        /*padding: 0;*/
    }
}
</style>
