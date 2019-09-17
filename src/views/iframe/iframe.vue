<template>

    <div style="height: 100%" class="view-iframe" id="view-iframe">

        <div style="font-size: 55px; border:1px solid red;" @click="btn">btn</div>


        <h1 style="transform: scale(1)">fafafafafa</h1>


        <iframe  width="100%" height="100%"
                 frameborder="0"
                src="http://223.71.195.71:9080/gateway.in/web/bindSettleAcct.html?reqData=gHiGJPRVJea4J9RqJeoqveoVM9vp_81FmoAuve0uv9HFlxupv9cWv9mqJGc1UeRVJGQd">

        </iframe>

        <div id="ceshi">
            <div v-html="txt"></div>
        </div>

    </div>
</template>


<script>
    //function viewFun() {
    //     var __iqianjin_pc = true;
    //     (function () {
    //         var userAgentInfo = navigator.userAgent.toLowerCase();
    //         var Agents = ["android", "iphone", "symbianos", "windows phone", "ipad", "ipod"];
    //         for (var v = 0; v < Agents.length; v++) {
    //             if (userAgentInfo.indexOf(Agents[v]) > 0) { __iqianjin_pc = false; break; }
    //         }
    //     })();
    //
    //     (function (screen) {
    //         if (__iqianjin_pc) return;
    //         var phoneWidth = parseInt((window.screen.width));
    //         var phoneScale = phoneWidth / screen;
    //         var ua = navigator.userAgent.toLowerCase();
    //         if (/android (\d+\.\d+)/.test(ua)) {
    //             var version = parseFloat(RegExp.$1);
    //             // andriod 2.3
    //             if (version > 2.3) {
    //                 document.write('<meta name="viewport" content="width=' + screen + ', minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi, minimal-ui, viewport-fit=cover">');
    //                 // andriod 2.3以上
    //             } else {
    //                 document.write('<meta name="viewport" content="width=' + screen + ', target-densitydpi=device-dpi, minimal-ui">');
    //             }
    //             // 其他系统
    //         } else {
    //             //document.write('<meta name="viewport" content="width=' + screen + ', user-scalable=no, viewport-fit=cover">');
    //         }
    //     })(750);
    //}
    //viewFun();
    export default {
        data () {
            return {
                txt:''
            }
        },
        created(){

        },
        watch: {
            $route(to,from){

                console.log(to,"====")
            }
        },
        methods:{

            btn() {
                //return;
                this.$router.go(-1);
            },


        },
        mounted(){
            // document.querySelector("#view-iframe")[0].innerHTML='<meta name="viewport" content="width=320, user-scalable=no, viewport-fit=cover">'
            this.txt = '<meta name="viewport" content="width=750, user-scalable=no, viewport-fit=cover">';
            //<meta name="viewport" content="width=device-width">

            //console.log(this.$route.name,"-====")
            var name = "window";
            var obj = {
                name: 'a',
                getName : function () {
                    console.log(this.name,"{{");
                }
            };

            var fn = obj.getName;
            fn()


        },


    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .iqianjin-m{
        font-size: 10px;
        background-size: contain;
    }
    .view-iframe{
        iframe{
            //transform: scale(0.5);
            width: 100%;
            height: 100%;
             html{
                transform: scale(0.5);
            }
        }
    }

</style>