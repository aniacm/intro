<template>
    <div id="carousel">
        <div class="switch left" @click='Switch(-1)'>&lt;</div>
        <div class="switch right" @click='Switch(1)'>&gt;</div>
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
export default {
    name: 'carousel',
    data() {
        return {
            timer: window.setInterval(this.slide, 3000),
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
    margin: 5% 0%;
}

.imgdiv {}

.switch {
    padding: 5%;
    color: #fff;
    font-size: 3em;
    cursor: pointer;
}

.left {
    position: absolute;
    left: 0px;
    top: 35%;
}

.right {
    position: absolute;
    right: 0px;
    top: 35%;
}

.allbtn {
    position: absolute;
    right: 5%;
    bottom: 0px;
    padding: 2%;
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
