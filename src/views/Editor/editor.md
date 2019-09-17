/*
editor:
安装：
cnpm install vue-quill-editor --save

安装依赖
cnpm install quill --save

*/
-----------[按需引入]------------
/*

//按需引入
import {quillEditor} from 'vue-quill-editor'
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';



//js
export default {
        name: "Editor",
        data(){
            return {
                content: `<p>hello world</p>`,
                editorOption: {}
            }
        },computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            },
        },methods: {
            onEditorReady(editor) { // 准备编辑器
            },
            onEditorBlur(){}, // 失去焦点事件
            onEditorFocus(){}, // 获得焦点事件
            onEditorChange(){}, // 内容改变事件
            saveHtml:function(event){
                alert(this.content);
            }
        },
        components:{
            quillEditor,
        }
    }

//html

<quill-editor
                    v-model="content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)">
            </quill-editor>
            <button v-on:click="saveHtml">保存</button>



//自定义工具栏toolbar
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

//引入字体
font.css
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=SimSun]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=SimSun]::before {
  content: "宋体";
  font-family: "SimSun";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=SimHei]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=SimHei]::before {
  content: "黑体";
  font-family: "SimHei";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=Microsoft-YaHei]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=Microsoft-YaHei]::before {
  content: "微软雅黑";
  font-family: "Microsoft YaHei";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=KaiTi]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=KaiTi]::before {
  content: "楷体";
  font-family: "KaiTi";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=FangSong]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=FangSong]::before {
  content: "仿宋";
  font-family: "FangSong";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=Arial]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=Arial]::before {
  content: "Arial";
  font-family: "Arial";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=Times-New-Roman]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=Times-New-Roman]::before {
  content: "Times New Roman";
  font-family: "Times New Roman";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=sans-serif]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=sans-serif]::before {
  content: "sans-serif";
  font-family: "sans-serif";
}

.ql-font-SimSun {
  font-family: "SimSun";
}
.ql-font-SimHei {
  font-family: "SimHei";
}
.ql-font-Microsoft-YaHei {
  font-family: "Microsoft YaHei";
}
.ql-font-KaiTi {
  font-family: "KaiTi";
}
.ql-font-FangSong {
  font-family: "FangSong";
}
.ql-font-Arial {
  font-family: "Arial";
}
.ql-font-Times-New-Roman {
  font-family: "Times New Roman";
}
.ql-font-sans-serif {
  font-family: "sans-serif";
}


import  Quill from 'quill' //引入编辑器
// // Quill.import('parchment');
// //quill编辑器的字体
var fonts = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];
var Font = Quill.import('formats/font');
Font.whitelist = fonts; //将字体加入到白名单
Quill.register(Font, true);

*/

//穿透scoped？
<style scoped>
    外层 >>> 第三方组件 {
        样式
    }
</style>

------------------【全局引入】----------------------

//在main.js中进行引入

import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)

