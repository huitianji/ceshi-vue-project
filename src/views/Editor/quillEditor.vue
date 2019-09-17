<template>
    <div class="view-quill-editor">
        <h6>quillEditor--{{富文本编辑器}}</h6>
        <!--<quill-->
                <!--v-model="content"-->
                <!--ref="myQuillEditor"-->
                <!--:options="editorOption"-->
                <!--@blur="onEditorBlur($event)" @focus="onEditorFocus($event)"-->
                <!--@change="onEditorChange($event)">-->
        <!--</quill>-->
        <!--<button v-on:click="saveHtml">保存</button>-->
        <div id="editor-container" v-model="content"></div>
        <div>{{content}}</div>
    </div>
</template>

<script>
    import  Quill from 'quill' //引入编辑器

    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';

    export default {
        name: "quillEditor",
        data(){
            return {
                content: `<p>hello world</p>`,
                editorOption: {}
            }
        },
        computed: {

        },
        methods: {
            onEditorReady(editor) { // 准备编辑器
            },
            onEditorBlur(){}, // 失去焦点事件
            onEditorFocus(){}, // 获得焦点事件
            onEditorChange(){}, // 内容改变事件
            saveHtml:function(event){
                alert(this.content);
            },
            f() {
                var quill = new Quill('#editor-container', {
                    modules: {
                        toolbar: [
                            [{ header: [1, 2, false] }],
                            ['bold', 'italic', 'underline'],
                            ['image', 'code-block']
                        ]
                    },
                    placeholder: 'Compose an epic...',
                    theme: 'snow'  // or 'bubble'
                });
            }
        },

        mounted() {
            this.f();
        },

        components:{
            Quill,
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
div.view-quill-editor{
    padding: 10px;
}
</style>