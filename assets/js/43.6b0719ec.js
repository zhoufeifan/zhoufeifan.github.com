(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{227:function(e,v,t){"use strict";t.r(v);var _=t(0),s=Object(_.a)({},function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"浏览器渲染html的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染html的过程","aria-hidden":"true"}},[e._v("#")]),e._v(" 浏览器渲染html的过程")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://p2w3pqeze.bkt.clouddn.com/qq.png",alt:"image"}})]),e._v(" "),t("p",[e._v("1.首先浏览器从服务器接收到html代码，然后开始解析html")]),e._v(" "),t("p",[e._v("2.构建DOM树（根据html代码自顶向下进行构建），并且在同时构建渲染树")]),e._v(" "),t("p",[e._v("3.遇到css文件，浏览器会延迟 JavaScript 的执行和 DOM 构建，加载css并构建CSS Rule Tree")]),e._v(" "),t("p",[e._v("在渲染树的执行过程中必须要依赖DOM Tree和CSS Rule Tree。"),t("br"),e._v("\n如果放在前面 "),t("code",[e._v("</body>")]),e._v("，当渲染树已经执行完毕后，在加载css文件 并构建CSS Rule Tree 就会，重新触发渲染树的执行，这样的过程被称为会流和重绘，既会浪费浏览器性能，又会出现闪屏的现象影响用户体验。"),t("br"),e._v("\n因此css应该放在"),t("code",[e._v("<head>")]),e._v("标签中，保证渲染树执行之前，css rule Tree 已经构建完毕。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Repaint（重绘）\n当元素样式改变时，将不会影响元素在页面当中的位置（比如 background-color, border-color, visibility），浏览器仅触发重绘。")])]),e._v(" "),t("li",[t("p",[e._v("Reflow（回流）\n当元素改变的时候，将会影响文档内容或结构，或元素位置，此过程称为 Reflow。")])])]),e._v(" "),t("p",[e._v("4、遇到js文件加载执行，将阻塞DOM树的构建，直到脚本加载并执行完成")]),e._v(" "),t("p",[e._v("js 应该放在"),t("code",[e._v("</body>")]),e._v("前，原因有二")]),e._v(" "),t("ul",[t("li",[e._v("1 js会阻塞其他资源的加载、解析、执行，如果js 放在"),t("code",[e._v("<head>")]),e._v("标签中，页面要等js全部加载并执行完了再出来，白屏时间较长，影响体验。")]),e._v(" "),t("li",[e._v("2 js 脚本中可能有对DOM 元素的操作,先执行js 再构建dom树会导致js中的DOM 操作无意义化。")])]),e._v(" "),t("p",[e._v("script标签中的defer属性：构建DOM树的过程和js文件的加载异步（并行）进行，但是js文件执行需要在DOM树构建完成之后"),t("br"),e._v("\nscript标签中的async属性：构建DOM树、渲染树的过程和js文件的加载和执行异步（并行）进行")]),e._v(" "),t("h3",{attrs:{id:"回流条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回流条件","aria-hidden":"true"}},[e._v("#")]),e._v(" 回流条件")]),e._v(" "),t("ul",[t("li",[e._v("增加、删除、或改变 DOM 节点")]),e._v(" "),t("li",[e._v('增加、删除 "class" 属性值')]),e._v(" "),t("li",[e._v("元素尺寸改变")]),e._v(" "),t("li",[e._v("文本内容改变")]),e._v(" "),t("li",[e._v("浏览器窗口改变大小或拖动")]),e._v(" "),t("li",[e._v("动画效果进行计算和改变 CSS 属性值")]),e._v(" "),t("li",[e._v("伪类激活（:hover）")])]),e._v(" "),t("h3",{attrs:{id:"补充说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充说明","aria-hidden":"true"}},[e._v("#")]),e._v(" 补充说明")]),e._v(" "),t("p",[e._v("现代浏览器的prefetch，预加载资源提高用户体验。"),t("br"),e._v("\ndns-prefetch 预解析域名，加快请求这个域名资源的速度。")])])},[],!1,null,null,null);v.default=s.exports}}]);