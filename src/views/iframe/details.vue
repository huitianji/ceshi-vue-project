<template>
    <div>
        <p>标题</p>
        测试错误-测试错误----
        <!--<div v-html="txt"></div>-->
        <p></p>
        <button @click="alink">点击跳转</button>
        <meta name="viewport" content="width=375, user-scalable=no, viewport-fit=cover">
    </div>

</template>

<script>
    export default {
        data(){
            return{
                //txt:'<meta name="viewport" content="width=750, user-scalable=no, viewport-fit=cover">'
            }
        },
        methods:{
            alink(){
                this.$router.push({
                    path:'/spa/iframe',
                    query:{
                        name:1
                    }
                });
            }
        },
        // watch: {
        //     $route(to,from){
        //
        //         console.log(to,"==000==")
        //     }
        // },
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>