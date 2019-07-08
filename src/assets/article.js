const articles = [
  {
    id: '000001',
    title: '一些有趣的前端库和工具',
    timestamp: '2019-07-08',
    content: [
      {
        name: 'Sakura',
        pic: 'https://pic3.zhimg.com/80/v2-c213bcc7a4bf730e6133cc0862ce5ab6_hd.jpg',
        description: 'Sakura 是一个独特的极简 CSS 框架，无需为 HTML 添加任何类。你只需要将 sakura.css 放到任意页面，它就会继承默认的排版和元素样式。由于没有类，Sakura 能够快速的生成漂亮页面，并且非常容易定制。',
        link: 'https://github.com/oxalorg/sakura'
      },
      {
        name: 'Flv.js',
        pic: 'https://upload-images.jianshu.io/upload_images/675733-ffc24bcc45efbd20.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/785/format/webp',
        description: 'Flv.js 是由 bilibili 网站开源的 HTML5 Flash 视频（FLV）播放器，纯原生 JavaScript 开发（ECMAScript 6 编写） ，没有用到 Flash。它的工作原理是 Flv.js 在 JavaScript 中流式解析 flv 文件流，并实时转封装为 fmp4 ，通过 Media Source Extensions 喂给浏览器，实现了 FLV 格式视频的播放。',
        link: 'https://github.com/Bilibili/flv.js'
      },
      {
        name: 'Eagle.js',
        pic: 'https://pic3.zhimg.com/80/v2-0b93f7748a1b4d37a1efaba5ecbc91c6_hd.jpg',
        description: 'Eagle.js 是一个用于制作基于 Web 幻灯片的 Vue.js 框架，与 Reveal.js 相似。它支持动画、主题、交互小部件（用于 Web 演示），并且可以轻松地在演示文稿之间进行组件、幻灯片和样式的重用。',
        link: 'https://zulko.github.io/eaglejs-demo/#/'
      },
      {
        name: 'Stepper',
        pic: 'https://user-gold-cdn.xitu.io/2019/5/13/16aae9a07aa4d12b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
        description: '非常好的数字步进控件，非常适合上/下式的增减控制或其他计数器控件。点击箭头会产生非常棒的动画与光滑的CSS效果。',
        link: ''
      },
      {
        name: 'DropCSS',
        pic: 'https://user-gold-cdn.xitu.io/2019/5/13/16aae9a07b2009c2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
        description: '彻底的CSS清理程序，它将获取HTML和CSS，并只返回实际使用的样式。它删除所有未使用的样式块、重复的选择器、@keyframes等等。高度优化，速度极快。',
        link: 'https://github.com/leeoniya/dropcss'
      },
      {
        name: 'React LoadCon',
        pic: 'https://user-gold-cdn.xitu.io/2019/5/13/16aae9a0b3686b64?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
        description: 'React组件，允许您使用一系列动态生成的图像来使网站的favicon图标产生动画。这个效果可以用作进度或加载指示器，也可以作为一个很酷的小动画，使您的页面脱颖而出',
        link: 'https://github.com/foreseaz/react-loadcon'
      },
      {
        name: 'Card',
        pic: 'https://lc-gold-cdn.xitu.io/c544e8b41e0ac12e319a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
        description: 'Card是一个纯JS项目（有jQuery版本）, 提供非常酷的实时展示卡片信息的功能，非常适合用来做有信用卡、驾照等信息的表单',
        link: 'https://jessepollak.github.io/card/'
      },
      {
        name: 'Conversational Form',
        pic: 'https://lc-gold-cdn.xitu.io/c93210a06cfa4920b53c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
        description: '抛弃了传统表单的形式，采用对话的方式让你来完成表单.Intersting!',
        link: 'https://space10-community.github.io/conversational-form/landingpage/'
      },
      {
        name: 'docsify',
        pic: 'https://lc-gold-cdn.xitu.io/6a2358094cf7a718956c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
        description: '文档生成工具，提供非常简单好看的主题， vuejs的文档好像就是这个生成的？',
        link: 'https://docsify.js.org/#/'
      }
      // ,{
      //   name: '',
      //   pic: '',
      //   description: '',
      //   link: ''
      // }
    ]
  }
]

export default articles
