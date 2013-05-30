![broswer main components][id1]
[id1]:http://taligarsiel.com/Projects/layers.png
浏览器主要组件

### 渲染引擎
#### 作用
完成内容的渲染，在浏览器窗口显示所请求的内容，html、xml、图片，还可以借助插件渲染如pdf等。
#### 主流引擎
两种主要的渲染引擎，Geoko——Mozilla，Webkit（[http://webkit.org](http://webkit.org)）——Safari\Chrome
#### 主流程
![main flow][id2]
[id2]:http://taligarsiel.com/Projects/flow.png
1. 解析html，将标签转化为内容树中的dom节点；
2. 解析外部css和style标签，构建render树；
3. 执行布局过程，确定每个节点在屏幕上的确切坐标；
4. 遍历render树，使用UI后端层绘制每个节点。

这个过程是逐步完成的，内容依据尽早呈现的原则，所以不会等到所有html都解析完毕后再进行渲染。
