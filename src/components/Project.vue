<template>
    <div id="project">
        <h3>{{ $t('message.project') }}</h3>


        <div class="project">
            <div class="proj" v-for='(list,index) in Project_List'>
                <div class="img_small" @click="Goto(list.resource,list.link)">
                    <div class="describe">
                        <p id="p_name">{{list.name}}<p>
                        <p id="p_detail">{{list.detail}}</p>
                    </div>
                    <img class="linkimg" v-if="list.imgsrc" :src="list.imgsrc" height="200" width="200" alt="Projects">
                </div>
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
            Project_List:[{
                    name: 'RecoverRochester',
                    detail: 'Food recovery app',
                    resource: 'outside',
                    link: 'https://sites.google.com/g.rit.edu/hci-ritfoodrecovery/home',
                    imgsrc: require('../assets/image/RRlogo.png')
                },{
                    name: 'Treadmill',
                    detail: 'Interactive screen',
                    resource: 'inside',
                    link: '/project/treadmill',
                    imgsrc: require('../assets/image/Treadmill.png'),
                    // imgsrc_big: require('')
                // }, {
                //     name: '油画',
                //     // link: '/project/painting/oilpainting',
                //     imgsrc: require(''),
                //     imgsrc_big: require('')
                }

            ]
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
        },
        Move(n){
            this.showimg+=n;
        },
        Goto(resource,linkname){
            //判断resource是外部链接还是内部组件
            if(resource=='outside'){
                window.open(linkname);
            }else if(resource=='inside'){
                this.$router.push(linkname);
            }
            
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#project {
    padding: 0% 15%;
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

.programming{
    background-color: #eee;
    /*border:1px solid #323144;*/
    border-radius: 1em;
    overflow: hidden;
}

.router-link-exact-active {
    /*background-color: #FFF;*/
    color: #000;
    border-radius: 0px;
}


.pai, .proj {
    display: inline-block;
    
    /*text-align: center;*/
    transition: 0.3s;
    /*background-color: #000;*/
    /*border-radius: 1em;*/
    height: 200px;
}

.pro {
    /*text-align: center;*/
    width: 100%;
}

div.img_small{

    background-color: #000;
    /*border-radius: 1em;*/
    margin-right: 1em;
    margin-top: 1em;
    /*padding: 1em;*/
    
}

div.img_small>.describe{
    position: absolute;
    width: 200px;
    height: 200px;
    text-align: center;
    /*line-height: 200px;*/
    opacity: 0;
}

div.img_small>.describe>p#p_name{
    margin-top: 80px;
    font-size: 1.2em;
}

div.img_small>.describe:hover{
    background-color: rgba(0,0,0,0.5);

    font-weight: bold;
    /*line-height: 200px;*/
    opacity: 1;
    color: #fff;
    cursor: pointer;
}


img.linkimg {
    vertical-align: bottom;
    box-shadow: #bbb 0px 0px 10px;
    /*cursor: pointer;*/
    /*border-radius: 1em;*/
    /*border: 1px solid #eee;*/
}

/*img.linkimg:hover {
    opacity: 0.8;
    filter: alpha(opacity=80);
}*/


.img_big{
    
}

.img_mask{
    background-color: #000;
    opacity: 0.9;
    position: fixed;
    z-index: 999;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
}

i.icon-back,i.icon-more,i.icon-close{
    position: fixed;
    z-index: 999;
    color: #eee;
    font-size: 5em;
    cursor: pointer;
}

i.icon-back:active,i.icon-more:active,i.icon-close:active{
    opacity: 0.5;
    filter: alpha(opacity=50);
}

i.icon-back,i.icon-more{
    top: 50%;
    margin-top: -0.5em;
}

i.icon-back{
    left: 5%;
}

i.icon-more,i.icon-close{

    right: 5%;
}

i.icon-close{
    font-size: 4em;
    font-weight: 900;
    top: 5%;
}

i.icon-close:hover{
    color: #D3394F;
}

.img_display{
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto;
    max-height: 100%;
    max-width: 100%;
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

.linkdiv i.icon-less{
    right: 1em;
    /*top: 20px;*/
    /*left: auto;*/
    position: absolute;
    /*text-align: right;*/
    transition: all 0.25s ease;
}

.linkdiv_selected{
    background-color: #D3394F;
    border-bottom: 1px solid #D3394F;
}

.linkdiv_selected i.icon-less{
    
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
