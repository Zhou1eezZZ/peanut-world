(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa5ba"],{1159:function(t,n){t.exports='<h2 id="你可能不知道的css骚操作表单验证🤦">你可能不知道的css骚操作——表单验证🤦‍</h2>\n<p><img src="https://user-gold-cdn.xitu.io/2019/8/5/16c612cca1c9a96c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="firstPic"></p>\n<h3 id="效果图">效果图</h3>\n<p><img src="https://user-gold-cdn.xitu.io/2019/8/5/16c615e60dd01ead?imageslim" alt="rending"></p>\n<h3 id="原理">原理</h3>\n<p>表单元素中，有一个pattern属性，可以自定义正则表达式（如手机号、邮箱、身份证..）；valid伪类，可以匹配通过pattern验证的元素；invalid伪类则相反，可以匹配未通过pattern验证的元素；于是就可以随便搞啦，上面的效果图只是做一些简单的效果，更多效果以及限制大家就发挥自己的想象力咯；</p>\n<h3 id="html">html</h3>\n<p>布局很简单，input跟button是兄弟节点的关系，required属性是必填的意思，也就是输入的内容必须要验证通过；</p>\n<pre><code class="language-html">&lt;section class=&quot;container&quot;&gt;\n  &lt;input type=&quot;text&quot; name=&quot;tel&quot; placeholder=&quot;请输入手机号码&quot; pattern=&quot;^1[3456789]\\d{9}$&quot; required&gt;&lt;br&gt;\n  &lt;input type=&quot;text&quot; name=&quot;smscode&quot; placeholder=&quot;请输入验证码&quot; pattern=&quot;\\d{4}&quot; required&gt;&lt;br&gt;\n  &lt;button type=&quot;submit&quot;&gt;&lt;/button&gt;\n&lt;/section&gt;</code></pre>\n<h3 id="css">css</h3>\n<p>这里用的是scss预处理器</p>\n<pre><code class="language-css">input {\n  // 验证通过时按钮的样式\n  &amp;:valid {\n    &amp;~button {\n      pointer-events: all;\n      cursor: pointer;\n\n      &amp;::after {\n        content: &quot;提交👍&quot;\n      }\n    }\n  }\n\n  // 验证不通过时按钮的样式\n  &amp;:invalid {\n    &amp;~button {\n      pointer-events: none; // 去除点击事件，让按钮无法点击\n\n      &amp;::after {\n        content: &quot;未通过验证😒&quot;\n      }\n    }\n  }\n}</code></pre>\n<blockquote>\n<p>peanut 最后编辑于 2019-08-06</p>\n</blockquote>\n'}}]);
//# sourceMappingURL=chunk-2d0aa5ba.5e214507.js.map