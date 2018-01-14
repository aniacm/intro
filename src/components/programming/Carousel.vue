<template>
    <div id="carousel">
        <div class="switch left" @click='Switch(-1)'>&lt;</div>
        <div class="switch right" @click='Switch(1)'>&gt;</div>
        <div class="imgdiv" v-for='(link,index) in img_list'>
            <img :src='link' v-if="index==target_index" alt="">
        </div>
        <div class="allbtn">
            <div class="btndiv" v-for='(link,index) in img_list'>
                <button class="btn select_btn" :class="index==target_index?'current_btn':'select_btn'" @click='Select_Img(index)'></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'carousel',
    data() {
        return {
            // timer: window.setInterval(this.slide, 3000),
            target_index: 0,
            img_list: [
                require("../../assets/image/carousel/img001.png"),
                require("../../assets/image/carousel/img002.png"),
                require("../../assets/image/carousel/img003.png"),
                require("../../assets/image/carousel/img004.png"),
                require("../../assets/image/carousel/img005.png")
            ]
        }
    },
    mounted() {
        // this.timer;
        // window.setInterval(this.slide, 3000); 
    },
    methods: {
        slide() {
            if (this.target_index < 4) {
                this.target_index++;
            } else {
                this.target_index = 0;
            }

            // console.log('aaaa');
        },
        Switch(n) {
            this.target_index += n;
            if (this.target_index == -1) {
                this.target_index = 4;
            }
            if (this.target_index == 5) {
                this.target_index = 0;
            }
            this.timer = window.clearInterval(this.timer);
            this.timer = window.setInterval(this.slide, 3000);
        },
        Select_Img(n) {
            this.target_index = n;
            this.timer = window.clearInterval(this.timer);
            this.timer = window.setInterval(this.slide, 3000);

        }
    }
}
</script>
<style scoped>
#carousel {
    text-align: center;
    /*height: 600px;*/
    position: relative;
    /*margin: 5% 0%;*/
}

.imgdiv{
    overflow: hidden;
}

.imgdiv>img {
    /*去除div底部白边，或将img标签变为块级元素。*/
    vertical-align: bottom;
    width: 100%;
    /*height: 100%;*/
}

.switch {
    /*padding: 5%;*/
    color: #f0f0f0;
    font-size: 5em;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top: -0.5em;
}

.left {
    
    left: 5%;
}

.right {
    
    right: 5%;
}

.allbtn {
    position: absolute;
    right: 5%;
    bottom: 5%;
    /*padding: 2%;*/
    z-index: 999;
}

.btndiv {
    display: inline-block;
    padding-right: 5px;
    /*position: absolute;*/
}

.btn {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border-color: #fff;
    /*position: relative;*/
    /*display: inline;*/
}

.select_btn {
    background-color: #B3B3B3;
    cursor: pointer;
    /*position: absolute;*/
}

.current_btn {
    background-color: #fff;
}
</style>
