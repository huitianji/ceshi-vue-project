<template>
    <div class="views-telslide">
        telSlide
        <hr>
        <button class="btn" @click="showLayer">|||</button>

        <!--<div :class="hideSlide ? 'layer ' : 'layer swipeleft'" v-show="hideSlide">-->
        <div :class="hideSlide ? 'layer swipeleft' : 'layer '">
            <div class="mask"></div>
            <div class="content swipe-container"


                 v-swipeleft="{fn:vuetouch,name:'左滑'}"


            >
                {{hideSlide}} ---- {{jsHideSlide}}
            </div>


            <!--@swipedown="swipe(x)"-->
            <!--v-tap="vuetouch"-->
            <!--v-longtap="{fn:vuetouch,name:'长按'}"-->
            <!--v-swipeleft="{fn:vuetouch,name:'左滑'}"-->
            <!--v-swiperight="{fn:vuetouch,name:'右滑'}"-->
            <!--v-swipeup="{fn:vuetouch,name:'上滑'}"-->
            <!--v-swipedown="{fn:vuetouch,name:'下滑'}"-->
        </div><br>
        {{hideSlide}}=====
    </div>
</template>

<script>
    // import vuetouch from 'utils/touch.js';
    import  'utils/touch.js';
    export default {
        name: "telSlide",
        data() {
            return{
                isShowLayer: false,
                hideSlide: true,
            }
        },
        watch:{
            // hideSlide(val, oldVal) {
            //     console.log(val,"--////--",oldVal)
            // }
        },

        computed:{
            jsHideSlide(){
                return this.hideSlide;
            }
        },

        methods: {
            showLayer() {
                //this.isShowLayer = !this.isShowLayer;
                this.hideSlide = !this.hideSlide;
            }
            ,

            vuetouch:function(s,e){
                //this.name=s.name;
                //console.log('///',s);
                this.hideSlide = true;
                console.log(s)
            },




        },

        mounted(){


        }
    }



</script>

<style lang="scss" rel="stylesheet/scss" scoped>
div.views-telslide{
    .btn{
        width: 1rem;
        height: 0.4rem;
    }
    /*.layer{*/
        /*position: absolute;*/
        /*left:0px;*/
        /*right:0px;*/
        /*bottom:0px;*/
        /*top:0px;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*-webkit-transition: all 0.3s linear;*/
    /*}*/
    .layer{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        -webkit-transition: all 0.3s linear;
    }
    .content{
        position: absolute;
        left: 0px;
        top:0px;
        //width:5rem;
        width: 60%;
        height: 100%;
        background-color: #fff;
    }
    .mask{
        position:absolute;
        left:0px;
        right:0px;
        bottom:0px;
        top:0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.1);

    }
    .swipeleft {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
        //transform: translateX(-28.5%);
        //-webkit-transform: translateX(-28.5%);
        /*width:0px;*/
        /*overflow: hidden;*/
    }
}
</style>








