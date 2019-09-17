<template>
    <div style="height: auto" class="views-editor">
        <h1>editor-{富文本编辑器--按需引入}</h1>
        <div>
            <quill-editor
                    v-model="content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)">
            </quill-editor>
            <button v-on:click="saveHtml">保存</button>
        </div>
    </div>
</template>

<script>
    // import Vue from 'vue'
    // import VueQuillEditor from 'vue-quill-editor'

    import {quillEditor} from 'vue-quill-editor'
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';

    //Vue.use(VueQuillEditor);

    import  Quill from 'quill' //引入编辑器
    // // Quill.import('parchment');
    // //quill编辑器的字体
    var fonts = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];
    var Font = Quill.import('formats/font');
    Font.whitelist = fonts; //将字体加入到白名单
    Quill.register(Font, true);

    export default {
        name: "Editor",
        data(){
            return {
                content: `<p>hello world</p>`,
                editorOption: {
                    theme:'snow',
                    // theme:'bubble',
                    modules:{
                        toolbar:[
                            ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
                            ['blockquote', 'code-block'],     //引用，代码块


                            [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
                            [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
                            [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
                            [{ 'direction': 'rtl' }],             // 文本方向


                            [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题


                            [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
                            // [{ 'font': [] }],     //字体
                            [{ 'font': fonts }],     //字体
                            [{ 'align': [] }],    //对齐方式


                            ['clean'],    //清除字体样式
                            ['image','video']    //上传图片、上传视频

                        ]
                    },
                },

            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            },
        },
        methods: {
            onEditorReady(editor) { // 准备编辑器
            },
            onEditorBlur(){}, // 失去焦点事件
            onEditorFocus(){}, // 获得焦点事件
            onEditorChange(){}, // 内容改变事件
            saveHtml:function(event){
                alert(this.content);

                //console.log(this.editor,"[[]]]");
            }
        },
        components:{
            quillEditor,
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .views-editor {
        .ql-container.ql-snow{
            min-height: 200px;
        }
    }
</style>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../assets/css/font.css";
div.views-editor{
    padding: 10px;
    h1{
        font-size: 25px;
        font-weight: normal;
    }

}
</style>