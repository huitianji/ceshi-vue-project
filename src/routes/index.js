/**
 * @file
 * Created by hanan on 16/10/15.
 */
const Hello = r => require(['views/hello'], r);
const NotFound = r => require(['views/notfound'], r);

const News = r => require(['views/News.vue'],r);
const List = r => require(['views/List'],r);
const Login = r => require(['views/Login'],r);

const Home = r => require(['views/transfer-route/Home'],r);
const HomeChild = r => require(['views/transfer-route/HomeChild'],r);

const ClickHome =  r => require(['views/click/ClickHome'],r );

const Vmodulebox =  r => require(['views/vmodule/Vmodulebox'],r );

//JumpNewWindow

const JumpNewWindow =  r => require(['views/jumpnewwindow/JumpNewWindow'],r );

const PdfJs =  r => require(['views/pdf/PdfJs'],r );

const PdfJsV1 =  r => require(['views/pdf/PdfJsV1'],r );

const DocumentClick = r => require(['views/telSlide/document'],r );

const TelSlide = r => require(['views/telSlide/telSlide'],r );
const Editor = r => require(['views/Editor/Editor'],r );

const GlobalEditor = r => require(['views/Editor/globalEditor'],r );

const QuillEditor = r => require(['views/Editor/quillEditor'],r );

const Iframe = r => require(['views/iframe/iframe'],r );

//Details
const Details = r => require(['views/iframe/details'],r );

//
const BeforeEach = r => require(['views/beforeEach/beforeEach'],r );

//红包
const RedPack = r => require(['views/redpack/redpack'],r );


// import Login from '../views/Login';


// 根目录
const rootPath = process.env.spaRootPath || '';

// 页面路由
const routes = [
    {path: '', redirect: {name: 'hello'}},
    {path: '/hello', component: Hello, name: 'hello'},
    {path:'/news',component:News , name:'news'},
    {
        path:'/list',
        component:List,
        name:'list'
    },
    {
        path:'/login',
        component:Login,
        name:'login',
        meta: { keepAlive: false }
    },
    {
        path:'/',
        component:List,
        name:'list'
    },

    {
        path:'/home',
        component:Home,
        name:'home',
        children:[
            {
                path:'homechild',
                component:HomeChild
            }
        ]
    },

    {
        path:'/clickhome', component:ClickHome, name:'点击Home'
    }
    ,
    {
        path:'/vmodule', component:Vmodulebox, name:'v-modle'
    }

    ,
    {
        path:'/jumpnewwindow', component:JumpNewWindow, name:'jumpnewwindow'
    }
    ,

    {
        path:'/pdfjs',
        component:PdfJs,
        name:'pdfjs'
    }
    ,
    {
        path:'/pdfjsv1',
        component:PdfJsV1,
        name:'测试pdf预览'
    }


    //点击空白处docuemnt
    ,
    {
        path:'/document',
        component:DocumentClick,
        name:'点击空白处关闭弹窗'
    }

    //tel --滑动

    ,
    {
        path:'/telslide',
        component:TelSlide,
        name:'手机端四个方向滑动'
    },

    //\富文本编辑器-

    {
        path:'/editor',
        component:Editor,
        name:'富文本编辑器'
    },

    //GlobalEditor
    {
        path:'/globalEditor',
        component:GlobalEditor,
        name:'全局引入富文本编辑器'
    },

    //QuillEditor
    {
        path:'/quillEditor',
        component:QuillEditor,
        name:'quill富文本编辑器'
    },

    //iframe
    {
        path:'/iframe',
        component:Iframe,
        name:'iframe'
    },

    {
        path:'/details',
        component:Details,
        name:'details'
    },


    {
        path:'/beforeEach',
        component:BeforeEach,
        name:'beforeEach'
    },
    {
        path:'/redpack',
        component:RedPack,
        name:'redpack'
    }



].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({path: '*', component: NotFound, name: 'notfound'});

export default routes;