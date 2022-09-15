(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{597:function(t,s,a){"use strict";a.r(s);var e=a(46),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[t._v("#")]),t._v(" 安全")]),t._v(" "),a("h2",{attrs:{id:"报告漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报告漏洞"}},[t._v("#")]),t._v(" 报告漏洞")]),t._v(" "),a("p",[t._v("如果有漏洞被报告，那么它将立刻成为我们最关心的问题，全职贡献者会放下一切来处理它。如需报告漏洞，请发送电子邮件至 "),a("a",{attrs:{href:"mailto:security@vuejs.org"}},[t._v("security@vuejs.org")]),t._v("。")]),t._v(" "),a("p",[t._v("虽然很少发现有新的漏洞，但我们也建议始终使用最新版本的 Vue 及其官方配套库，以确保你的应用尽可能地安全。")]),t._v(" "),a("h2",{attrs:{id:"首要规则-永远不要使用不受信任的模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首要规则-永远不要使用不受信任的模板"}},[t._v("#")]),t._v(" 首要规则：永远不要使用不受信任的模板")]),t._v(" "),a("p",[t._v("使用 Vue 时最基本的安全规则是"),a("strong",[t._v("永远不要使用不受信任的内容作为组件模板")]),t._v("。这样做相当于允许在你的应用程序中执行任意 JavaScript。更糟糕的是，如果在服务器端渲染时执行了这些代码，可能会导致服务器漏洞被恶意利用。例如：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<div>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" userProvidedString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("</div>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 永远不要这么做")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Vue 模板会被编译成 JavaScript，模板内的表达式将作为渲染过程的一部分执行。尽管表达式会针对特定的渲染场景进行评估，但由于潜在全局执行环境的复杂性，要求 Vue 这样的框架完全屏蔽潜在的恶意代码执行而不产生不切实际的性能开销非常不切实际。完全避免此类问题的最直接方法是确保 Vue 模板的内容始终受你信任并完全由你控制。")]),t._v(" "),a("h2",{attrs:{id:"vue-如何保护你"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-如何保护你"}},[t._v("#")]),t._v(" Vue 如何保护你")]),t._v(" "),a("h3",{attrs:{id:"html-内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-内容"}},[t._v("#")]),t._v(" HTML 内容")]),t._v(" "),a("p",[t._v("无论是使用模板还是渲染函数，内容都会自动转义。因此在这个模板中：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ userProvidedString }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果 "),a("code",[t._v("userProvidedString")]),t._v(" 包含：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<script>alert(\"hi\")<\/script>'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("那么它将被转义为以下 HTML：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("alert("),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:'"'}},[t._v("&quot;")]),t._v("hi"),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:'"'}},[t._v("&quot;")]),t._v(")"),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v("/script"),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("从而防止脚本注入。这种转义是使用原生浏览器 API (例如 "),a("code",[t._v("textContent")]),t._v(") 完成的，因此只有当浏览器本身易受攻击时才会存在漏洞。")]),t._v(" "),a("h3",{attrs:{id:"attribute-绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attribute-绑定"}},[t._v("#")]),t._v(" attribute 绑定")]),t._v(" "),a("p",[t._v("同样，动态 attribute 绑定也会自动转义。因此在这个模板中：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":title")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userProvidedString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  hello\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("如果 "),a("code",[t._v("userProvidedString")]),t._v(" 包含：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\" onclick=\"alert(\\'hi\\')'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("那么它将被转义为以下 HTML：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token entity named-entity",title:'"'}},[t._v("&quot;")]),t._v(" onclick="),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:'"'}},[t._v("&quot;")]),t._v("alert('hi')\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("从而防止 "),a("code",[t._v("title")]),t._v(" attribute 被提前关闭以注入新的、任意的 HTML。这种转义是使用原生浏览器 API (例如 "),a("code",[t._v("setAttribute")]),t._v(") 完成的，因此只有当浏览器本身易受攻击时才会存在漏洞。")]),t._v(" "),a("h2",{attrs:{id:"潜在的安全隐患"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#潜在的安全隐患"}},[t._v("#")]),t._v(" 潜在的安全隐患")]),t._v(" "),a("p",[t._v("在任何 Web 应用程序中，允许以 HTML、CSS 或 JavaScript 形式执行未经处理的、用户提供的内容都有潜在的安全隐患，因此应尽可能避免。不过有些时候部分风险或许是可以接受的。")]),t._v(" "),a("p",[t._v("例如，CodePen 和 JSFiddle 之类的服务允许执行用户提供的内容，但这是在预期的上下文中，并且使用了 iframe 包裹来进行一定程度的沙盒处理。如果某个重要功能本质上需要某种程度的漏洞，则由你的团队根据漏洞导致的最坏情况来权衡该功能的重要性。")]),t._v(" "),a("h3",{attrs:{id:"注入-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注入-html"}},[t._v("#")]),t._v(" 注入 HTML")]),t._v(" "),a("p",[t._v("正如你之前所看到的，Vue 会自动转义 HTML 内容，防止你意外地将可执行的 HTML 注入到你的应用程序中。但是，如果你确信某个 HTML 是安全的，你可以显式呈现 HTML 内容：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用模板：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-html")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userProvidedHtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("使用渲染函数：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("innerHTML")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userProvidedHtml\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("在 JSX 中使用渲染函数：")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("innerHTML")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userProvidedHtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("请注意，永远不要 100% 信任用户提供的 HTML，除非它位于 iframe 沙盒中，或位于仅有编写该 HTML 的用户才能接触到它的部分中。此外，允许用户编写自己的 Vue 模板也会带来类似的危险。")])]),t._v(" "),a("h3",{attrs:{id:"注入-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注入-url"}},[t._v("#")]),t._v(" 注入 URL")]),t._v(" "),a("p",[t._v("在这样的 URL 中：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userProvidedUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  click me\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("如果 URL 未经过“净化”处理来防止其通过 "),a("code",[t._v("javascript:")]),t._v(" 执行 JavaScript，则会有潜在的安全隐患。有一些库例如 "),a("a",{attrs:{href:"https://www.npmjs.com/package/@braintree/sanitize-url",target:"_blank",rel:"noopener noreferrer"}},[t._v("sanitize-url"),a("OutboundLink")],1),t._v(" 可以帮助解决这个问题，但请注意：")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("如果你只在前端进行 URL 净化，那么你已经遇到了安全问题。在保存用户提供的 URL 到数据库之前，你的后端必须对其进行净化。只有这么做，才能避免 "),a("em",[t._v("每个")]),t._v(" 连接到你 API 的客户端 (包括原生移动应用程序) 出现此类问题。另请注意，即便使用了经过净化的 URL，Vue 也无法保证它们指向安全的目标。")])]),t._v(" "),a("h3",{attrs:{id:"注入样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注入样式"}},[t._v("#")]),t._v(" 注入样式")]),t._v(" "),a("p",[t._v("考虑下列示例：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sanitizedUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userProvidedStyles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  click me\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("我们假设它已经被 "),a("code",[t._v("sanitizedUrl")]),t._v(" 净化过了，因此它确实是一个真实的 URL 而非 JavaScript。然而，恶意用户仍然可以利用 "),a("code",[t._v("userProvidedStyles")]),t._v("，通过提供 CSS 来实现“点击劫持 (click jack)”，例如将链接样式设置为“登录”按钮上方的透明框。假设 "),a("code",[t._v("https://user-controlled-website.com/")]),t._v(" 是用来为你的应用程序提供类似于登录界面功能的，那么他们可能刚刚捕获了用户的真实登录信息。")]),t._v(" "),a("p",[t._v("你或许能想象到了允许用户为某个 "),a("code",[t._v("<style>")]),t._v(" 元素提供内容会产生多大的安全漏洞，因为这意味着用户拥有了整个页面样式的完整控制权。这也是为什么 Vue 会阻止在模板中渲染样式标签，比如：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userProvidedStyles "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("为了让你的用户完全免受点击劫持，我们建议只允许用户完全控制 iframe 沙盒内的 CSS。或者，如果需要通过样式绑定来允许用户控制样式，我们建议使用它的"),a("RouterLink",{attrs:{to:"/guide/class-and-style.html#对象语法-2"}},[t._v("对象语法")]),t._v("，并且只允许用户为可以被安全控制的特定 property 提供值，如下所示：")],1),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sanitizedUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n    color: userProvidedColor,\n    background: userProvidedBackground\n  }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  click me\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"注入-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注入-javascript"}},[t._v("#")]),t._v(" 注入 JavaScript")]),t._v(" "),a("p",[t._v("我们强烈建议不要使用 Vue 渲染 "),a("code",[t._v("<script>")]),t._v(" 元素，因为这么做的话模板和渲染函数不会有副作用。不过，如果你想在运行时引入会被作为 JavaScript 处理的字符串，还有别的办法。")]),t._v(" "),a("p",[t._v("每个 HTML 元素都有能接受 JavaScript 字符串的 attribute，如 "),a("code",[t._v("onclick")]),t._v("，"),a("code",[t._v("onfocus")]),t._v(" 和 "),a("code",[t._v("onmouseenter")]),t._v("。你应当避免将用户提供的 JavaScript 绑定到任一事件 attribute，因为这会是一个潜在的安全隐患。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("请注意，永远不要 100% 信任用户提供的 JavaScript，除非它位于 iframe 沙盒中，或位于仅有编写该 HTML 的用户才能接触到它的部分中。")])]),t._v(" "),a("p",[t._v("有时我们会收到有关如何在 Vue 模板中执行跨站点脚本 (XSS) 的漏洞报告。一般来说，我们不认为这种情况是真正的漏洞，因为在下列两种允许 XSS 情况中，我们没有切实可行的方法来保护开发者免受其影响：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("开发者明确要求 Vue 将用户提供的、未经净化的内容作为 Vue 模板渲染。这根本就是不安全的，并且 Vue 无法知道这些内容的来源。")])]),t._v(" "),a("li",[a("p",[t._v("开发者正在将 Vue 挂载到整个 HTML 页面，而该页面恰好同时包含服务器渲染的和用户提供的内容。这与 #1 的问题基本相同，但有时开发者可能会没有意识到这一点。这可能会导致出现潜在漏洞，攻击者也许会提供作为纯 HTML 安全但作为 Vue 模板不安全的 HTML 内容。")])])]),t._v(" "),a("h2",{attrs:{id:"最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),a("p",[t._v("通常来说，如果你允许执行未经净化的、用户提供的内容 (作为 HTML、JavaScript 甚至 CSS)，你可能会面临攻击。无论是使用 Vue、其他框架，或是不使用框架，这些建议都是适用的。")]),t._v(" "),a("p",[t._v("除了上面提到的针对"),a("a",{attrs:{href:"#%E6%BD%9C%E5%9C%A8%E7%9A%84%E5%AE%89%E5%85%A8%E9%9A%90%E6%82%A3"}},[t._v("潜在的安全隐患")]),t._v("提出的建议之外，我们还建议你熟悉以下资源：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://html5sec.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML5 安全备忘录"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OWASP 的跨站攻击脚本 (XSS) 防御备忘录"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("如果你使用了第三方组件或是会影响 DOM 渲染的第三方依赖，请使用你学到的知识检查它们的源代码以便找出潜在的危险。")]),t._v(" "),a("h2",{attrs:{id:"后端协调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端协调"}},[t._v("#")]),t._v(" 后端协调")]),t._v(" "),a("p",[t._v("HTTP 安全漏洞主要由后端负责处理，例如跨站点请求伪造 (CSRF/XSRF) 和跨站点脚本包含 (XSSI)，因此这不是 Vue 应该考虑的问题。不过，我们非常建议你去和后端团队交流以了解如何最好地与他们的 API 交互，例如通过提交表单提交的 CSRF 令牌。")]),t._v(" "),a("h2",{attrs:{id:"服务器端渲染-ssr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器端渲染-ssr"}},[t._v("#")]),t._v(" 服务器端渲染 (SSR)")]),t._v(" "),a("p",[t._v("使用 SSR 时还有一些额外的安全问题，因此请确保遵循我们在 "),a("RouterLink",{attrs:{to:"/guide/ssr/introduction.html"}},[t._v("SSR 文档")]),t._v("中概述的最佳实践以避免漏洞。")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);