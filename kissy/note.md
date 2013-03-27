## KISSY的架构
![替换文字1](http://img03.taobaocdn.com/tps/i3/T1QDBbXDliXXaoYMUR-865-661.png "Kissy架构")
1. 最底层的seed类似于AMD模块化机制实现，支持自动combo，提供如each、mix、param、ready等静态工具方法，及Path、UA等基础类；
2. core层是处理dom兼容性的核心模块，把不同浏览器的兼容性代码进行了独立抽离，根据不同设备依赖不同的模块，但对外接口保持一致；
3. 组件架构层，提供实现组件和继承的基础类，如rich-base、component、xtemplate；
4. component层为独立可用的kissy组件；
5. gallery层里可以存放kissy社区开发的一些通用模块。

# 目录
* 什么是KISSY？
* 为什么选择KISSY？
* 几个核心概念
* 基于KISSY的项目开发

## 什么是KISSY？
架构简介、来源、用意

## 为什么选择KISSY？
优缺点

## 几个核心概念
### 模块化机制
为了提高代码的可维护性和重用性，KISSY引入了简单的模块化机制，KISSY1.3的模块化机制与目前的AMD规范（<http://www.sitepen.com/blog/2010/11/04/requirejsamd-module-forms/>）比较类似，用KISSY.add方法定义一个模块，KISSY.use方法加载一个模块。

#### 1. 包与包配置
KISSY存在包的概念，KISSY之外的每个模块必须属于一个包，一个包内可以有很多相关模块，它们具备项目的加载基地址。包的设计一方面通过约定优先配置的原则可以减少同一个包内多个模块的请求路径配置，另一方面也方便了部署在不同地址的多个应用间相互调用模块。所以开发应用前最好先配置包地址：
	
	KISSY.config('packages', {
		myMods: {
			base: './assets'
		}	
	});

myMods为包名，与存放模块的目录名称相对应，base为包所在的路径，可以是相对路径（相对引用配置代码的页面来说），也可以是绝对路径。在实际的开发中，应该把base设置为绝对路径。

#### 2. 写一个简单的模块
以存放demo页面的路径作为当前目录，在路径./assets/myMods/下编写alertmod.js：
	
	KISSY.add(function(S, DOM, EVENT){

		"use strict";

		return {
			init: function(wrap) {
				var wrap = DOM.get(wrap);

				EVENT.on(wrap, 'click', function() {
					alert('Hello KISSY!');
				});
			}
		}

	},{
		requires:['dom', 'event']
	});

在demo页面下进行包配置，并引用模块：

	KISSY.use('myMods/alertmod', function(S, ALERT) {
		ALERT.init('#alert-btn');	
	});

开启浏览器访问demo页面，点击click按钮，弹框成功

#### 3. KISSY Loader
在demo成功的同时，思考几个问题：

* KISSY.add和KISSY.use是怎么实现的？
* KISSY如何知道模块的依赖关系？如何根据依赖关系动态加载js？
* 如何减少动态请求的数量？

KISSY Loader是KISSY进行模块化组织的核心模块，Loader实现add和use方法，可以根据模块的依赖信息动态地为所使用的模块加载js和css文件。可以单个加载文件，也可以从支持combo的服务器合并加载文件。那么，OK，研习KISSY Loader可以解答以上问题，也可以对KISSY的模块化机制的实现进行梳理。

KISSY.add时，会把模块注册到S.Env.mods中，里面保留有模块的文件路径和依赖信息；use时根据依赖信息到S.Env.mods中读取模块所要依赖的其他模块信息，如果发现其他模块还没有加载，则使用S.getScript方法进行异步加载，此时会通过一个LoadChecker实例进行监听，每当一个脚本加载完毕就会调用loadChecker.check()，如果发现模块所依赖的其他模块都已经加载完毕时，调用use中的回调函数。

KISSY支持自动combo的功能，通过一次http请求一次性抓取属于同一域名下的静态资源，如需配置combo


#### 4. Combo

### 组件机制

## 基于KISSY的项目开发
### 一个项目应该包含的基本元素
### 目录组织的选择
### 设计与开发
### 打包与构建
### 调试与发布

