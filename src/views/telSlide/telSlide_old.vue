<template>
    <div class="views-telslide">
        telSlide
        <hr>
        <button class="btn" @click="showLayer">|||</button>

        <div :class="hideSlide ? 'layer swipeleft' : 'layer'" v-show="isShowLayer">
            <div class="mask"></div>
            <div class="content swipe-container" @click="ceshi">
                {{hideSlide}} ---- {{jsHideSlide}}
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "telSlide",
        data() {
            return{
                isShowLayer: true,
                hideSlide: false,
            }
        },
        watch:{
            hideSlide(val, oldVal) {
                console.log(val,"--////--",oldVal)
            }
        },

        computed:{
            jsHideSlide(){
                return this.hideSlide;
            }
        },

        methods: {
            showLayer() {
                this.isShowLayer = !this.isShowLayer;
            },


            ceshi() {
                this.hideSlide = true;
                console.log("////", this.hideSlide)
            }
            ,

            setSlide() {
                //侧滑显示删除按钮
                var expansion = null; //是否存在展开的list
                var container = document.querySelectorAll(".swipe-container");

                var x, y, X, Y, swipeX, swipeY;
                container[0].addEventListener('touchstart', function (event) {
                    x = event.changedTouches[0].pageX;
                    y = event.changedTouches[0].pageY;
                    swipeX = true;
                    swipeY = true;
                    if (expansion) { //判断是否展开
                        //如果展开则收起 以下代码取消注释后则滑动开始立即收起 注释后则向右滑动一定距离后收起隐藏按钮
                        //方法一.
                        //removeClass(this,"swipeleft");
                        //方法二 需引入jquery
                        //$(this).removeClass("swipeleft");
                    }
                    console.log(this.hideSlide = true,"//")
                });
                container[0].addEventListener('touchmove', function (event) {
                    X = event.changedTouches[0].pageX;
                    Y = event.changedTouches[0].pageY;
                    // 左右滑动
                    if (swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
                        // 阻止事件冒泡
                        event.stopPropagation();
                        if (X - x > 10) { //右滑收起
                            //event.preventDefault();
                            this.hideSlide = false;
                            //console.log("right", this.hideSlide);
                            //removeClass(this,"swipeleft");
                            //$(this).removeClass("swipeleft");
                        }
                        if (x - X > 10) { //左滑展开
                            //event.preventDefault();
                            //$(this).addClass("swipeleft");
                            //addClass(this,"swipeleft");

                            this.hideSlide = true;
                            //expansion = this;
                            //console.log("left", this.hideSlide);
                        }
                        swipeY = false;
                    }
                    // 上下滑动
                    if (swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
                        swipeX = false;
                    }
                });

            }

        },

        mounted(){
            //this.setSlide();

        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
div.views-telslide{
    .btn{
        width: 1rem;
        height: 0.4rem;
    }
    .layer{
        width: 140%;
        -webkit-transition: all 0.3s linear;
        transition: all 0.3s linear;
    }
    .content{
        position: absolute;
        left: 0px;
        top:0px;
        width:5rem;
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
        background-color: rgba(0,0,0,0.4);

    }
    .swipeleft {
        transform: translateX(-28.5%);
        -webkit-transform: translateX(-28.5%);
    }
}
</style>








