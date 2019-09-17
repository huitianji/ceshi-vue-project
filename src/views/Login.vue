<template>
    <div>
        <h1>login~~~</h1>

        <input type="text" value="fafaff"/>


        <br>
        <br>

        <a href="javascript:void(0)" @click="jumpClick"> 跳转到--beforeEach---</a>
        <div>
            {{str}}
        </div>
    </div>

</template>

<script>
    //
    //import CryptoJS from 'crypto-js/crypto-js';
    import {aesEncript} from '../utils/cryptojs';
    console.log(aesEncript,"{{{");
    export default {
        name: "Login",
        data(){
            return {
                str:"",
            }
        },
        methods:{
            jumpClick() {
                this.$router.push({
                    path:'/spa/beforeEach',
                    query:{
                        name:'beforeEach'
                    }
                })
            },
            aesEncript(text, keyStr) {
                const key = CryptoJS.enc.Utf8.parse(keyStr);
                const encryptResult = CryptoJS.AES.encrypt(text, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString();
                return encryptResult;
            }
        },
        mounted() {
            //console.log(this.$route.query)
            // this.$router.beforeEach((to, from, next) =>{
            //     console.log(to,"==login==");
            //     next()
            // });

            //console.log(this.$route)
            let str = '{userName:"张三", mobile:"18888888888", cardId:"350000000000000000"}';
            let keyStr = '1234567890123456';
            //
            // let f = this.aesEncript(str,keyStr);
            // //console.log(encodeURI(f));
            // this.str = encodeURIComponent(f);

        }
    }
</script>

<style scoped>

</style>