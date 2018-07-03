1.vue-router 就是 前端路由

	前端路由：在web开发中，路由是指根据url分配到对应的处理程序。（也就是说一个url对应的是一个处理程序，访问不同的url对应的处理程序就会被执行）
	
	具体到页面中就是一个url对应一个组件，当我们访问到url的时候，对应的组件就会被解析，
	
	呈现到页面中去，这时候我们知道一个url和一个组件有映射关系的，我们需要有前端路由帮我们把映射关系一个一个对应起来
	
	vue-router的作用：通过管理url,实现url和组件的对应和通过url进行组件之间的切换

2.https://router.vuejs.org/zh-cn/    vue-router 2   （官方文档）

3.利用它可以做什么-----单页应用（SPA） （一个页面）

          加载单个HTML页面，并在用户与应用程序交互时动态更新改页面，（也就是在我们访问一个网站的时候，实际上只访问了一个页面）

          （当我们点击导航的时候它并不是去跳转页面，而是通过js执行，动态去加载页面）

4.开始使用vue-router-------使用步骤

   1.安装模块  npm install vue-router --save

   2.引入模块  import VueRouter from 'vue-router'

   3.作为Vue的插件

   4.创建路由实例对象
        new VueRouter({
                              配置参数....
        })

   5.注入Vue选项参数
              new Vue({
                 router
              })

   6.告诉路由渲染的位置
      <router-view></router-view>

5.（因为我是用vue-cli作为脚手架时，配置了vue-router，所以在改变vue-router配置项时，在router文件夹下的index.js里面修改）

6.	@是src目录，在build文件夹有一个webpack.base.conf.js文件，

   	resolve: {
    	extensions: ['.js', '.vue', '.json'],
    	alias: {                              //别名
      		'vue$': 'vue/dist/vue.esm.js',
      		'@': resolve('src'),
    	}
  	},

这一块是在使用import和require引入一个模块时的配置，

7.  export default new Router({
   		routes: [
    		{
		      path: '/',   这一块访问根路径时，
		      name: 'home',  渲染的是home这个组件
		      component:home
		    }
	  	]
	})

自己的小总结：（vue-cli脚手架下有了vue-router）

1.首先在components文件夹下面建一个自己的组件home

2.在router文件夹下面的index.js（配置路由的文件）中，引入我们所创建的home组件

    import home from '@/components/home'   /*@是src目录*/

3.配备路由，并定义导航和组件的映射关系

  export default new Router({
	  routes: [
	    {
	      path: '/',
	      name: 'home',
	      component:home
	    }
	  ]
	})

4.在main.js(入口文件)中，将路由实例注入到根实例上

   	new Vue({
        el: '#app',				/*index.html中*/
        router,     			/*将路由实例对象注入到根实例上*/
        template: '<App/>', 	/*template从根组件app.vue开始*/
        components: { App } 	/*要在模板中使用这个组件， 需要先注册一下*/
	})

1.assets文件中新建css文件------放置样式

2.css文件中app.css中用import把样式都引入进来，其实就是我们css的一个入口文件，怎么使用它呢？

  在main.js里面引入import  '@/assets/css/app.css'

3.在app.css中将要用的样式引入进来

@import './reset.css';
@import './home.css';

4.一.目前有三个组件在从conpoments文件夹下，

   二.router文件夹下的index.js文件中路由配置如下：

	import home from '@/components/home'   			/*@是src目录*/
	import about from '@/components/about'   		/*@是src目录*/
	import document from '@/components/document'    /*@是src目录*/
	import Vue from 'vue'
	import Router from 'vue-router'

	Vue.use(Router)
	
	export default new Router({
	  routes: [
	    {
	      path: '/home',
	      name: 'home',
	      component:home
	    },
	    {
	      path: '/about',
	      name: 'about',
	      component:about
	    },
	    {
	      path: '/document',
	      name: 'document',
	      component:document
	    },
	  ]
	})

 三.main.js文件中配置如下：

	import Vue from 'vue'
	import App from './App'  			/*引入根组件*/
	import router from './router'
	import  '@/assets/css/app.css'   //引入样式....................................
	
	Vue.config.productionTip = false
	
	new Vue({
	  	el: '#app',				/*index.html中*/
	  	router,     			/*将路由实例对象注入到根实例上*/
	  	template: '<App/>',  	/*template从根组件app.vue开始*/
	  	components: { App } 	/*要在模板中使用这个组件， 需要先注册一下*/
	})

四.在assets文件夹下设置css文件放置样式：

   	目前有app.css文件（是css入口文件）；
   	home.css文件

五.可以改变app.vue根组件的样式了：（我们先来设置一个导航）

	<template>
	  <div id="app">
	    <div class="nav-box">
	      <ul class="nav">
	        <li>
	          <a href="/home">home</a>
	        </li>
	        <li>
	          <a href="/document">document</a>
	        </li>
	        <li>
	          <a href="/about">about</a>
	        </li>
	      </ul>
	    </div>
	   <router-view/>
	  </div>
	</template>
	
	<script>
	export default {
	  name: 'app'
	}
	</script>
	
	<style>
	
	</style>
	
	运行 http://localhost:8080/

5.hash值

输入 http://localhost:8080   回车，会发现地址栏上出现  http://localhost:8080/#/

其中的#/就是hash值，

在我们使用vue-router的时候，它默认有一种模式，就是hash的模式，hash在切换的时候是不会切换页面的，

此时在http://localhost:8080/#/  后面添加  http://localhost:8080/#/home

                                           http://localhost:8080/#/document

                                           http://localhost:8080/#/about

可以切换不同组件页面，不是跳转页面

6.此时在href后面添加#,转为hash模式，点击导航，就会切换到不同组件了--------hash模式
   	<li>
      <a href="#/home">home</a>
    </li>
    <li>
      <a href="#/document">document</a>
    </li>
    <li>
      <a href="#/about">about</a>
    </li>

7.history模式

	在router文件夹里面的index.js文件里面，设置history模式。（默认是hash模式），

	export default new Router({
	  	mode:'history',    //改为history模式
	  	routes: [
		    {
		      path: '/home',
		      name: 'home',
		      component:home
		    },
		    {
		      path: '/about',
		      name: 'about',
		      component:about
		    },
		    {
		      path: '/document',
		      name: 'document',
		      component:document
		    },
		]
	})

	在app.vue
	       <li>
	          <a href="/home">home</a>   		//不再带#
	        </li>
	        <li>
	          <a href="/document">document</a>
	        </li>
	        <li>
	          <a href="/about">about</a>
	        </li>
	
	运行，此时再切换导航。。。。。。。
	
	http://localhost:8081/home     地址栏中不再带#
	http://localhost:8081/document
	
	（存在的问题是跳转页面---a标签）-----这样就不是一个单页应用了，而是多页应用

8.vue-router中的router-link

app.vue中

        <li>
          <router-link to="/home">home</router-link>
        </li>
        <li>
          <router-link to="/document">document</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>

运行http://localhost:8081

切换导航  （并没有刷新页面）

http://localhost:8081/home

http://localhost:8081/document

http://localhost:8081/about

f12查看，router-link默认生成a标签，-----点击的时候，会把a标签默认行为取消掉，找到对应的url地址，渲染对应的组件，

export default new Router({
  mode:'history',    //改为history模式
  routes: [
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    {
      path: '/document',
      name: 'document',
      component:document
    },
  ]
})

9.history模式改为hash模式（默认的）：

在router文件夹里面的index.js文件里面，
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    {
      path: '/document',
      name: 'document',
      component:document
    },
  ]
})

运行http://localhost:8081-----回车  http://localhost:8080/#/

切换导航  （并没有刷新页面）

http://localhost:8080/#/home    //根据你的模式，前面加上#号 

http://localhost:8080/#/document

http://localhost:8080/#/about

开发中我们一般使用的是 mode:'history',    history模式，hash有什么用呢？低版本中我们用的是hash模式，

高版本支持HTML5,history一些API的话就用history模式，我们开发项目的时候就用history模式,

 history模式好处-------有历史记录，前进后退功能


1.在app.vue中

   <ul class="nav">
        <li>
          <router-link to="/home">home</router-link>
        </li>
        <li>
          <router-link to="/document">document</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
    </ul>

使用to="/home"，目标链接是写死的，有的时候我们不是写死的，而是动态绑定的，

在app.vue中

<script>
export default {
  name: 'app',
  data(){
    return {
      index:'/home'  //目标地址
    }
  }
}
</script>

动态绑定(用v-bind)：

<ul class="nav">
        <li>
          <router-link :to="index">home2</router-link>    //动态绑定
        </li>
        <li>
          <router-link :to="{path:'/document'}">document</router-link>  //写成对象模式
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
</ul>

2.点击导航的时候，现在是a链接在跳转，有时候是div或p标签，去监听点击事件，去跳转链接，能不能把a标签换成div或p或其他标签呢？

  用tag来设置想替换的标签，

   <ul class="nav">
        <li>
          <router-link :to="index" tag="div">home2</router-link>    //生成div标签，依然可以切换，vue-router自动会帮你监听点击
        </li> 
        <li>
          <router-link :to="{path:'/document'}">document2</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
      </ul>

3.带图标的导航：

 <ul class="nav">

          <router-link :to="index" tag="li">
            <i class="fa fa-home"></i>
            <span>home</span>
          </router-link>

          <router-link :to="{path:'/document'}" tag="li">
            <i></i>
            <span>document</span>
          </router-link>

          <router-link to="/about" tag="li">
            <i></i>
            <span>about</span>
          </router-link>

 </ul>

3.点击导航----激活状态：
被激活时，实际上预留一个class名字：router-link-active，

可以通过router-link-active来设置激活样式，

全局设置，在router文件夹里面的index.js下给我们预留了一个key值，linkActiveClass

export default new Router({
  mode:'history',
  linkActiveClass:'is-active',   //在样式home.css中设置.is-active { background: yellow;}

  routes: [
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    {
      path: '/document',
      name: 'document',
      component:document
    },
  ]
})

这样全局的被激活的导航背景色均为yellow,

我不想让他们点击的时候全为黄色，想让其中一个为pink,怎么办？直接在行间设置

 <ul class="nav">

          <router-link :to="index" tag="li" >
            <i class="fa fa-home"></i>
            <span>home</span>
          </router-link>

          <router-link :to="{path:'/document'}" tag="li" active-class="activePink">   //在home.css中设置.activePink{  background: pink;}
            <i></i>
            <span>document</span>
          </router-link>

          <router-link to="/about" tag="li">
            <i></i>
            <span>about</span>
          </router-link>

   </ul>

4.导航默认点击切换-----怎么改为划过切换？

 在router-link给我们预留了配置项：event

  <ul class="nav">
          <router-link :to="index" tag="li"  event="mouseover">    //添加上event="mouseover"  第一个导航就改为划过选中了
            <i class="fa fa-home"></i>
            <span>home</span>
          </router-link>

          <router-link :to="{path:'/document'}" tag="li" active-class="activePink">
            <i></i>
            <span>document</span>
          </router-link>

          <router-link to="/about" tag="li">
            <i></i>
            <span>about</span>
          </router-link>
      </ul>

总结：router-link各种:

1.生成指定标签  tag

  1.1添加图标

2.动态绑定目标地址

3.激活状态样式的改变


四.重定向和别名

1.访问http://localhost:8080/abc   （并没有这个路径）------导航下边一片空白，没有给到客户相关提示，客户体验并不友好

2.components文件夹里面添加404组件页面，在router文件夹里面的index.js中引入进来

3.在router文件夹里面的index.js中，

export default new Router({
  mode:'history',
  linkActiveClass:'is-active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    {
      path: '/document',
      name: 'document',
      component:document
    },
    {
      path: '*',     //除了以上三个组件页，其他任何页面
      component:noFound   //渲染404组件页面
    }
  ]
})

4.当客户当访问到不存在的页面时，http://localhost:8080/abc    也可以让它渲染一个已存在的页面---------重定向、

4.1.
export default new Router({
  mode:'history',
  linkActiveClass:'is-active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    {
      path: '/document',
      name: 'document',
      component:document
    },
    {
      path: '*',
      //component:noFound
      //重定向
      redirect:'/home'             //重定向.........
    }
  ]
})

这样设置，输入http://localhost:8080/abc 回车--------地址栏上会显示http://localhost:8080/home-------渲染出home组件

4.2. 还可以写成对象形式：

{
      path: '*',
      //component:noFound
      //重定向
      //redirect:'/home'
      redirect:{path:'/home'}               //对象形式
    } 

4.3.  还可以给路由写上名字：

export default new Router({
  mode:'history',
  linkActiveClass:'is-active',
  routes: [
    {
      path: '/home',
      name: 'home',    //路由的名字
      component:home
    },
    {
      path: '/about',
      name: 'about',//路由的名字
      component:about
    },
    {
      path: '/document',
      name: 'document',//路由的名字
      component:document
    },
    {
      path: '*',
      //component:noFound
      //重定向
      //redirect:'/home'
      //redirect:{path:'/home'}
      redirect:{name:'about'}  //直接指定路由的名字
    }
  ]
})

4.3.  动态设置重定向的目标：

export default new Router({
  mode:'history',
  linkActiveClass:'is-active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    {
      path: '/document',
      name: 'document',
      component:document
    },
    {
      path: '*',
      //component:noFound
      //重定向
      //redirect:'/home'
      //redirect:{path:'/home'}
      //redirect:{name:'about'}

      redirect:(to)=>{                               //动态设置重定向的目标
        //目标路由对象，就是访问的路径的路由信息
         console.log(to)
      return '/home'
    }

    }
  ]
})

4.4  利用动态设置重定向的目标，来做点事情：

export default new Router({
  mode:'history',
  linkActiveClass:'is-active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    {
      path: '/document',
      name: 'document',
      component:document
    },
    {
      path: '*',
      //component:noFound
      //重定向
      //redirect:'/home'
      //redirect:{path:'/home'}
      //redirect:{name:'about'}

      redirect:(to)=>{
        //目标路由对象，就是访问的路径的路由信息

       if(to.path === '/123'){
           return '/home'
       }else if(to.path === '/456'){
           return {path:'/document'}      //对象形式
       }else{
           return {name:'about'}           //对象形式  （用了路由的名字）
       }

         console.log(to)
      /*return '/home'*/
    }

    }
  ]
})

5.别名   alias

现在做这样一件事情，在地址栏中输入http://localhost:8080/index   回车，

按照上边的设置，会渲染出about页面，地址栏会变成http://localhost:8080/about

但我们现在想让地址栏保持http://localhost:8080/index不变，（渲染出指定的路由，比如上边的about路由），

export default new Router({
  mode:'history',
  linkActiveClass:'is-active',
  routes: [
    {
      path: '/',            /*根路径*/
      component:home,
    },
    {
      path: '/home',
      name: 'home',
      component:home,
      alias:"index"       //别名，当我们访问index这个路径时，就能访问到这个路由了，
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    {
      path: '/document',
      name: 'document',
      component:document
    },
    {
      path: '*',
      //component:noFound
      //重定向
      //redirect:'/home'
      //redirect:{path:'/home'}
      //redirect:{name:'about'}
      redirect:(to)=>{
        //目标路由对象，就是访问的路径的路由信息
       if(to.path === '/123'){
           return '/home'
       }else if(to.path === '/456'){
           return {path:'/document'}
       }else{
           return {name:'about'}
       }

         console.log(to)
      /*return '/home'*/
    }
    }
  ]
})

访问根路径时：http://localhost:8081   回车
根据以上设置，渲染的是home路由组件页，

但home导航并没有呈现激活状态，那是因为我们访问根路径的时候，home导航没有任何一个东西匹配上，

因为home的目标路径，是/home,没有匹配上，

所以在app.vue中，

 <ul class="nav">
          <router-link :to="index" tag="li"  event="mouseover">  改
            <i class="fa fa-home"></i>
            <span>home</span>
          </router-link>

          <router-link :to="{path:'/document'}" tag="li" active-class="activePink" event="mouseover">
            <i></i>
            <span>document</span>
          </router-link>

          <router-link to="/about" tag="li">
            <i></i>
            <span>about</span>
          </router-link>
   </ul>

改为：

 <router-link to="/" tag="li"  event="mouseover">   //不在动态获取了
            <i class="fa fa-home"></i>
            <span>home</span>
  </router-link>

此时切换别的时候，home也处于激活状态，

其实是有一个

exact精确匹配

五.嵌套路由的使用
1.嵌套路由

app
Home Document Aboout

          study work hobby 
2.在组件里面嵌套路由：（例如about组件里面嵌套二级导航）：

copmponents文件夹下的about.vue文件中的内容：

<template>
	<div>
		我是about页面---关于我
		<hr>
		<ul class="nav">
			<router-link to="/about/study" tag="li">
				<a>study</a> //f12查看元素
                <a href="/about/study">study</a>
			</router-link>
			<router-link to="/about/work" tag="li">work</router-link>
			<router-link to="/about/hobby" tag="li">bobby</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	
}
</script>

3.子路由:

在src文件夹下创建views文件，views文件夹中放置about.vue中的二级导航组件-----study.vue和work.vue组件和hobby.vue组件，

在router文件夹下的index.js来配置路由：

先来引入新的组件，

import study from '@/views/study'
import work from '@/views/study'
import hobby from '@/views/study'

配置：

export default new Router({
	mode:'history',
	linkActiveClass:'is-active',
	routes: [
		{
			path: '/', //根路径
			component:home,
		},
		{
			path: '/home',
			name: 'home',
			component:home,
			alias:"index"
		},
		{
			path: '/about',
			name: 'about',
			component:about,
			children:[ //在about组件配置里面，设置children,子路由 ，在children数组的方式中再设置对应的配置
				{
					path:'study',
					component:study
				},
				{
					path:'work',
					component:work
				},
				{
					path:'hobby',
					component:hobby
				}
			],
		},
		{
			path: '/document',
			name: 'document',
			component:document
		},
		{
			path: '*',
			//component:noFound
			//重定向
			//redirect:'/home'
			//redirect:{path:'/home'}
			//redirect:{name:'about'}
			redirect:(to)=>{
			//目标路由对象，就是访问的路径的路由信息
			if(to.path === '/123'){
				return '/home'
			}else if(to.path === '/456'){
				return {path:'/document'}
			}else{
				return {name:'about'}
			}
		    console.log(to)
		  	/*return '/home'*/
		}
	]
})

3.配置子路由渲染的位置-----在about.vue中，

<template>
	<div>
		我是about页面---关于我
		<hr>
		<ul class="nav">
			<router-link to="/about/study" tag="li">
				<a>study</a>
			</router-link>
			<router-link to="/about/work" tag="li">work</router-link>
			<router-link to="/about/hobby" tag="li">bobby</router-link>
		</ul>
		<hr>
		<router-view></router-view>  
		//about.vue中的二级导航路由，还渲染在about.vue中，在这个位置渲染
	</div>
</template>

<script>
export default {
	
}
</script>

在app.vue根组件中用过了<router-view></router-view> ，根组件中的导航，会将相应的组件内容渲染在app.vue根组件中的
<router-view></router-view> 中，对应的<router-view></router-view> 中可以嵌套二级导航，（如about.vue中）

在二级导航里面，比如about.vue中，about.vue中的导航会将组件内容渲染到about.vue中的<router-view></router-view> 里面，

4.在我们访问about.vue时，about.vue中的二级导航没有一个被渲染出来，实际上在我访问about.vue的时候，我想让study.vue被渲染出来

，这时候需要在路由里面设置默认的子路由，

在router文件夹下的index.js中，

export default new Router({
	mode:'history',
	linkActiveClass:'is-active',
	routes: [
		{
			path: '/', /根路径/
			component:home,
		},
		{
			path: '/home',
			name: 'home',
			component:home,
			alias:"index"
		},
		{
			path: '/about',
			name: 'about',
			component:about,
			children:[
				{
					path:'', //默认子路由，不在写study组件了，空着，这样当访问about组件时，about.vue中得二级导航study会被渲染出来
					component:study
				},
				{
					path:'work',
					component:work
				},
				{
				path:'hobby',
					omponent:hobby
				}
			]
		},
		{
			path: '/document',
			name: 'document',
			component:document
		},
		{
			path: '*',
			//component:noFound
			//重定向
			//redirect:'/home'
			//redirect:{path:'/home'}
			//redirect:{name:'about'}
			redirect:(to)=>{
				//目标路由对象，就是访问的路径的路由信息
				if(to.path === '/123'){
					return '/home'
				}else if(to.path === '/456'){
					return {path:'/document'}
				}else{
					return {name:'about'}
				}
			  console.log(to)
			  /*return '/home'*/
			}
		}
	]
})

当然，此时study不是激活状态，这时候，我们需要在router-link中把地址变一下，

在about.vue中，

<template>
	<div>
		我是about页面---关于我
		<hr>
		<ul class="nav">
			<router-link to="/about/study" tag="li"> //改为<router-link to="/about" tag="li"><a>study</a></router-link>
				<a>study</a>
			</router-link>
			<router-link to="/about/work" tag="li">work</router-link>
			<router-link to="/about/hobby" tag="li">bobby</router-link>
		</ul>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
}
</script>

<router-link to="/about" tag="li" exact><a>study</a></router-link>
exact精确匹配 (点击work.vue和hobby.vue组件时，study.vue导航不会是激活状态)

6.命名视图
1.一个页面有两个组件时，默认的组件会放在app.vue组件的<router-view><router-view/>中，

若一个页面有两个组件，比如增加一个侧边导航，则在app.vue中需要再重新放入一个<router-view><router-view/>，

2.给组件加一个名字：动态绑定：

在index.js中，about组件下的children组件中，给每一个组件命名：

import home from '@/components/home' /@是src目录/
import about from '@/components/about' /@是src目录/
import document from '@/components/document' /@是src目录/
import noFound from '@/components/404' /@是src目录/
import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'
import Vue from 'vue'
import Router from 'vue-router'
/import HelloWorld from '@/components/HelloWorld'/

Vue.use(Router)
/配置路由/
var router = new VueRouter({
	routes:[
		{
			path:"/",
			component:home
		}
	]
})
export default new Router({
	mode:'history',
	linkActiveClass:'is-active',
	routes: [
		{
			path: '/', 		/根路径/
			component:home,
		},
		{
			path: '/home',
			name: 'home',
			component:home,
			alias:"index"
		},
		{
			path: '/about',
			name: 'about',
			component:about,
			children:[
				{
					path:'', //默认子路由 /about
					name:'about', //给about组件起了个名字：about
					component:study
				},
				{
					path:'work',
					name:'work', //给work组件起了个名字：work
					component:work
				},
				{
					path:'hobby',
					name:'hobby', //给hobby组件起了个名字：hobby
					component:hobby
				}
			]
		},
		{
			path: '/document',
			name: 'document',
			component:document
		},
		{
			path: '*',
			//component:noFound
			//重定向
			//redirect:'/home'
			//redirect:{path:'/home'}
			//redirect:{name:'about'}
			redirect:(to)=>{
				//目标路由对象，就是访问的路径的路由信息
				if(to.path === '/123'){
					return '/home'
				}else if(to.path === '/456'){
					return {path:'/document'}
				}else{
					return {name:'about'}
				}
				console.log(to)
				/*return '/home'*/
			}
		}
	]
})

然后在about.vue中：

<template>
	<div>
		我是about页面---关于我
		<hr>
		<ul class="nav">
		
		 	/*<!--<router-link to="/about" tag="li" exact>   //不再写这种嵌套关系的形式了
		    	<a>study</a>
		  	</router-link>
		 	<router-link to="/about/work" tag="li">work</router-link>
		  	<router-link to="/about/hobby" tag="li">bobby</router-link>-->*/
		 
		
			<router-link :to="{name:about}" tag="li" exact>     //而是用路由中的name,组件的名字，动态绑定一个对象
			    <a>study</a>
			</router-link>
			<router-link :to="{name:'work'}" tag="li">work</router-link>
			<router-link :to="{name:'hobby'}" tag="li">bobby</router-link>
		
		</ul>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
}
</script>

此时打开页面，在about.vue下，点击study，work,hobby组件，f12查看

<ul class="nav">

	<li class="router-link-exact-active is-active">
		<a href="/about/">study</a> //路径还是嵌套的的
	</li>
	<li class="">
		<a href="/about/work">work</a> //路径还是嵌套的的
	</li>
	<li class="">
		<a href="/about/hobby">hobby</a> //路径还是嵌套的的
	</li>

</ul>

再来看地址栏：切换到study和work和hobby,
地址栏地址分别为：
http://localhost:8081/about/

http://localhost:8081/about/work

http://localhost:8081/about/hobby

有时候呢我们不想要嵌套这种形式,想让地址栏显示成：(当然访问work和hobby的时候，还是在about.vue组件下的组件，只是路径里面不再嵌套了)

http://localhost:8081/work
http://localhost:8081/hobby这种形式，

这时候我们怎么设置？

我们要在路由里面配置一下：在router文件夹下面的index,js文件中，

未修改之前

import home from '@/components/home' /@是src目录/
import about from '@/components/about' /@是src目录/
import document from '@/components/document' /@是src目录/
import noFound from '@/components/404' /@是src目录/
import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'
import Vue from 'vue'
import Router from 'vue-router'
/import HelloWorld from '@/components/HelloWorld'/

Vue.use(Router)
/配置路由/
/var router = new VueRouter({
	routes:[
		{
			path:"/",
			component:home
		}
	]
})/
export default new Router({
	mode:'history',
	linkActiveClass:'is-active',
	routes: [
		{
			path: '/', /根路径/
			component:home,
		},
		{
			path: '/home',
			name: 'home',
			component:home,
			alias:"index"
		},
		{
			path: '/about',
			name: 'about',
			component:about,
			children:[
				{
					path:'', //默认子路由 /about
					name:'about',
					component:study
				},
				{
					path:'work', //访问字符串时，访问的是 /about/work
					name:'work',
					component:work
				},
				{
					path:'hobby',
					name:'hobby',
					component:hobby
				}
			]
		},
		{
			path: '/document',
			name: 'document',
			component:document
		},
		{
			path: '*',
			//component:noFound
			//重定向
			//redirect:'/home'
			//redirect:{path:'/home'}
			//redirect:{name:'about'}
			redirect:(to)=>{
				//目标路由对象，就是访问的路径的路由信息
				if(to.path === '/123'){
					return '/home'
				}else if(to.path === '/456'){
					return {path:'/document'}
				}else{
					return {name:'about'}
				}
				console.log(to)
				/*return '/home'*/
			}
		}
	]
})

修改之后：
{
	path: '/about',
	name: 'about',
	component:about,
	children:[
		{
			path:'', //默认子路由 /about
			name:'about',
			component:study
		},
		{
			path:'/work', // 加上根路径/ 变为/work
			name:'work',
			component:work
		},
		{
			path:'/hobby', // 变为/hobby
			name:'hobby',
			component:hobby
		}
	]
},

此时再点击work和hobby,则变为：

http://localhost:8081/work

http://localhost:8081/hobby

f12查看：

<ul class="nav">
	<li class="router-link-exact-active is-active">
		<a href="/about/">study</a> //相对根路径来说
	</li>
	<li class="">
		<a href="/work">work</a> //相对根路径来说
	</li>
	<li class="">
		<a href="/hobby">hobby</a> //相对根路径来说
	</li>
</ul>

注意：此时路径不是嵌套的，路由还是嵌套的，组件study和work和hobby还是about.vue组件的子路由，

3.以上总结：

根组件里面有三个导航，每个导航对应一个组件，其中一个呢嵌套二级导航，二级导航对应自己的3个组件，

4.命名视图：

在同级同时展示多个视图，而不是嵌套展示，

例如在document.vue中还有个sider组件，

1.在views文件件中新建slider.vue组件，

2.在router文件夹下的index.js中，引入slider.vue组件，

import slider from '@/views/slider'

步骤1：在app.vue中有个<router-view><router-view/>，视图会默认渲染在这儿，但是我们需要两个视图了，

所以我们要写两个

<router-view><router-view/>，
<router-view><router-view/>，

为了区分他们，我们要给其中一个命名，

<router-view name="slider"><router-view/> //命名视图

<router-view><router-view/>， //默认视图

我们需要路由里面去配置一下，在router文件夹下的index.js中，
将原来对应的一个组件改为多个：

{
	path: '/document',
	name: 'document',
	component:document
},

改为：

{
	path: '/document',
	name: 'document',
	components:{
		default:document, //默认渲染组件
		slider:slider //命名组件
	}
},

此时f12查看document.vue组件：（会有两部分内容）

<div data-v-00f84cea="" class="center">
	我是文档页面
</div>

<div data-v-4276c915="" class="slider">
	我是侧边栏
</div>

注意：

若路由里面只对应一个组件<router-view><router-view/>，，这个只会渲染到没有名字里面，即默认的，

如果配置了多个视图的话，会让名字对应的组件替换在<router-view name="slider"><router-view/> 名字相同的<router-view><router-view/>中，

7.滚动行为
1.来看一下滚动行为，document.vue页面为例，将滚动条向下拉一段距离，刷新本页面，滚动条位置不变，（浏览器有记忆功能），

点击浏览器后退箭头，再点击前进箭头回到本页面，则滚动距离为0，（没有记录下上一次的滚动位置）

2.我们现在的需求就是若在document.vue中滚动条已经滚动一段距离，那我们点击后退，前进按钮回到本页面，滚动距离依旧是原来的距离，

所以我们需要给他设置一个滚动行为
，怎么设置滚动行为呢？

需要在配置里面设置，打开router文件夹下面的index.js文件，在

export default new Router({

}）

中给我们提供了一个key值，scrollBehavior

scrollBehavior对应的是一个函数，函数里面接收3个参数，to,from,savePosition,

在router文件夹下面的index.js文件中，

import home from '@/components/home' /@是src目录/
import about from '@/components/about' /@是src目录/
import document from '@/components/document' /@是src目录/
import noFound from '@/components/404' /@是src目录/
import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'
import slider from '@/views/slider'
import Vue from 'vue'
import Router from 'vue-router'
/import HelloWorld from '@/components/HelloWorld'/

Vue.use(Router)
/配置路由/
/var router = new VueRouter({
	routes:[
		{
			path:"/",
			component:home
		}
	]
})/
export default new Router({
	mode:'history',
	linkActiveClass:'is-active',
	scrollBehavior(to,from,savePosition){ //打印一下试试看， 在点击浏览器的前进后退按钮，或者切换导航的时候触发
		console.log(to) //要进入的目标路由对象
		console.log(from) //离开时的路由对象
		console.log(savePosition)//记录滚动条的坐标，（只有在点击前进后退的时候记录值）
	},

	比如当前在doucument.vue上，导航切换到home.vue,会打印出来三行，
	
	第一行：Object {name: undefined, meta: Object, path: "/", hash: "", query: Object…} //到home.vue上
	
	第二行： Object {name: "document", meta: Object, path: "/document", hash: "", query: Object…} //从document.vue来
	
	第三行： null
	
	当我们来回切换导航时，发现 console.log(savePosition)打印出来的都是null,
	
	在我们使用前进后退按钮时，发现console.log(savePosition)打印出来的是Object {x: 0, y: 0}，（记录了滚动条的坐标）
	
	来我们看一下console.log(savePosition)打印出来的值有什么作用，
	在document.vue页面上将滚动天往下拉，拉完之后我后退一下到home.vue中,查看console.log(savePosition)，
	
	我再前进一下到document.vue中，查看console.log(savePosition)， Object {x: 0, y: 360} 记录了document.vue中滚动的位置，
	
	现在我们只需要做一件事情，我们想给他设置滚动的行为，

	linkActiveClass:'is-active',
	scrollBehavior(to,from,savePosition){
		console.log(to)
		console.log(from)
		console.log(savePosition)
		
		if(savePosition){   //如果说你记录了这个值，我们就把这个值return一下
		  return savePosition
		}else{
		  return {x:0,y:0}   //如果你没有记录，我们就返回一个对象，
		}
	},

	来测试一下，在documen.vue页面拉下一段距离滚动条，前进按钮进到home.vue组件，后退按钮再次进入到documentt.vue组件中，可以看到页面还保持着刚刚下来滚动条的距离的样子，

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

routes: [
	{
		path: '/', /根路径/
		component:home,
	},
	{
		path: '/home',
		name: 'home',
		component:home,
		alias:"index"
	},
	{
		path: '/about',
		name: 'about',
		component:about,
		children:[
			{
				path:'', //默认子路由 /about
				name:'about',
				component:study
			},
			{
				path:'/work',
				name:'work',
				component:work
			},
			{
				path:'/hobby',
				name:'hobby',
				component:hobby
			}
		]
	},
	{
		path: '/document',
		name: 'document',
		components:{
			default:document,
			slider:slider
		}
	},
	{
		path: '*',
		//component:noFound
		//重定向
		//redirect:'/home'
		//redirect:{path:'/home'}
		//redirect:{name:'about'}
		redirect:(to)=>{
			//目标路由对象，就是访问的路径的路由信息
			if(to.path === '/123'){
				return '/home'
			}else if(to.path === '/456'){
				return {path:'/document'}
			}else{
				return {name:'about'}
			}
			console.log(to)
		  /*return '/home'*/
		}
	}
]

3.利用hash值来设置位置，

在app.vue中给document路径加上hash值，

<template>
	<div id="app">
        <!-- <img src="./assets/logo.png">-->
        <div class="nav-box">
            <ul class="nav">
                <router-link to="/" exact tag="li" event="mouseover">
                    <i class="fa fa-home"></i>
                    <span>home</span>
                </router-link>
                <router-link :to="{path:'/document#abc'}" tag="li" active-class="activePink" event="mouseover">   //加上hash值#123
                  <i></i>
                  <span>document</span>
                </router-link>
                <router-link to="/about" tag="li">
                  <i></i>
                  <span>about</span>
                </router-link>
            </ul>
        </div>
        <router-view class="center"></router-view>
        <router-view name="slider"></router-view>
	</div>

</template>

<script>
export default {
	name: 'app',
	data(){
		return {
			index:'/home'
		}
	}
}
</script>

<style>

</style>

回到页面中，来到document.vue组件中，地址栏上http://localhost:8080/document#123 也有了hash值，

在document.vue中我们也来写上一个元素，让它定位到这个元素上去，在document.vue中

<template>
     <div>
        我是文档页面
        <p id="abc">定位到这个元素</p> //添加要定位到的元素
     </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

在路由中设置：在router文件夹下的index.js中，

export default new Router({
	mode:'history',
	linkActiveClass:'is-active',
	scrollBehavior(to,from,savePosition){
		console.log(to)
		console.log(from)
		console.log(savePosition)
		/*if(savePosition){
		  return savePosition
		}else{
		  return {x:0,y:0}
		}
	},*/
		if( to.hash ){   //用hash值来定位元素     先判断一下，如果目标.hash是存在的，hash存在
			return {       //return一个对象
			  selector:to.hash  
			}
		}
	},

routes: [
	{
		path: '/', /根路径/
		component:home,
	},
	{
		path: '/home',
		name: 'home',
		component:home,
		alias:"index"
	},
	{
		path: '/about',
		name: 'about',
		component:about,
		children:[
			{
                path:'', //默认子路由 /about
                name:'about',
                component:study
			},
			{
                path:'/work',
                name:'work',
                component:work
			},
			{
                path:'/hobby',
                name:'hobby',
                component:hobby
			}
		]
	},
	{
		path: '/document',
		name: 'document',
		components:{
			default:document,
			slider:slider
		}
	},
	{
		path: '*',
		//component:noFound
		//重定向
		//redirect:'/home'
		//redirect:{path:'/home'}
		//redirect:{name:'about'}
		redirect:(to)=>{
			//目标路由对象，就是访问的路径的路由信息
			if(to.path === '/123'){
				return '/home'
			}else if(to.path === '/456'){
				return {path:'/document'}
			}else{
				return {name:'about'}
			}
			console.log(to)
			/*return '/home'*/
		}
	}
]


4.总结以上：

1.可以配置它的坐标，

linkActiveClass:'is-active',
scrollBehavior(to,from,savePosition){
	console.log(to)
	console.log(from)
	console.log(savePosition)
	
	if(savePosition){
	  return savePosition
	}else{
	  return {x:0,y:0}
	}
},

/*if( to.hash ){
return {
  selector:to.hash
}
}*/
},

2.可以配置它的hash，(导航router-link中的hash值与组件中定位元素的id相匹配)

linkActiveClass:'is-active',
scrollBehavior(to,from,savePosition){
	console.log(to)
	console.log(from)
	console.log(savePosition)
	
	/*if(savePosition){
	  return savePosition
	}else{
	  return {x:0,y:0}
	}
	},*/
	
	if( to.hash ){
		return {
		  selector:to.hash
		}
	}
},



1.动态路径

匹配到的所有路由（所有用户），全都映射到同一组件（用户组件）

路径：/user/:userID   userID为动态路径参数

获取参数：路由信息对象params

2.比如我们进入到一个网站，进入到个人信息页面，每个人的信息页面其实是一样的，不过不同的用户展示的数据是不一样的，这时候我们

就可以把路径写成/user/:userID ，当然后面的userID是动态的，根据不同的用户，userID是不一样的,其实访问的是同一个组件，只不过

userID根据不同用户，组件里面展示的数据是不一样，userID为动态路径参数，怎么获取的呢？通过获取到它就可以拿到用户的信息了，通过路由信息对象params

3.在components文件夹下面添加user.vue,

在app.vue根组件中的导航里面，添加user导航，

 	<router-link to="/user" tag="li">
    <i></i>
    <span>user</span>
  </router-link>

在路由里面配置：在router文件夹下面的index.js里面，

先引入import user from '@/views/user'

再配置：
 {
      path: '/user',
      name: 'user',
      component:user
    },

需求：

user里面可能有多个用户，我们来写上a用户，b用户，c用户，当我们点击不同用户时，展示对应用户的信息，

我们在user.vue中准备了三组信息，

let data = [
  {
    id:1,
    userName : 'leo1',
    sex:'男',
    hobby:'写代码'
  },
  {
    id:2,
    userName : 'leo2',
    sex:'男',
    hobby:'唱歌'
  },
  {
    id:3,
    userName : 'leo3',
    sex:'男',
    hobby:'读书'
  }
]

我们在user中进行配置：在router文件夹下面的index.js里面，
对这一块进行配置：

{
  path: '/user/:userId?',// /user/1 /user/2  正则中？有可能匹配0次也有可能匹配1次
  name: 'user',
  component:user
},

现在就可以访问到user1,user2,user3,这些组件了，

http://localhost:8081/user/1

http://localhost:8081/user/2

http://localhost:8081/user/3

不同的路径同时访问同一个组件，我们用的是这种动态路由的方式，那现在我点击下这个导航之后，我是不是就可以切换这个路径了， 那我是不是可以通过这个路径拿到这个id,然后通过id就可以找到这个用户的信息了，那我怎么拿到这id的呢？

这时候我们观察一下，我访问这个路径的话，那它是不是要对应这个路由，那拿到路由信息，是不是就可以拿到这个值了，我怎么能拿到路由信息呢？

我们需要了解一下对组件的注入：

通过在Vue根实例的router配置传入router实例，我怎么能拿到这个router实例的呢？

  在main.js中

new Vue({
  el: '#app',/*index.html中*/
  router,     /*将路由实例对象注入到根实例上*/      //此行代码  专门来配置路由的
  template: '<App/>',  /*template从根组件app.vue开始*/
  components: { App } /*要在模板中使用这个组件， 需要先注册1下*/
})

实际上在以后的每一个组件里面，都可以通过$router来拿到router实例对象，

$router很形象，$router路由的意思，路由的功能就是接收到一个信号之后然后发送到不同的电脑上，实际上就是在我们访问到一个路径的时候
它会根据你的路径的访问，然后去看一下哪个路由匹配上了，把它对应的组件渲染出来，所以说这个
，名字起得还是比较形象的，

$route   路线，路由的意思，当前激活的路由信息对象，每个人组件实例都会有，也就是说我们访问一个路径后，它要对应一个路由，它里面存的就是当前的路由信息对象，我们可以通过它，知道更多的细节，拿到它之后呢，就可以拿到用户id了，该怎么做呢？

$router router实例对象

$route 当前激活的路由信息对象，每个人组件实例都会有，

beforeRouteEnter()进入组件前的钩子函数，

beforeRouteLeave()离开组件前钩子函数，

现在我们回到user.vue中，从这里面拿用户id,怎么拿？

现在在http://localhost:8082/user/3   这个地址上，

那我怎么一开始的时候就能拿到这个id的呢？我们是不是需要拿到路由信息对象，那我在什么时候去拿的呢？那我是不是拿到这个id之后
我是不是要发送ajax请求呢，那我们一般ajax请求发送到哪个位置的呢？实际上，在这里面有一个生命周期，生命周期里面我们通常是放
created(),created   在编译之前，

在user.vue中，
<template>
  <div class="center" style="height: 2000px">
   我是user
    <div class="user-list">
      <router-link style="padding: 0 20px;" :to="'/user/'+item.id" key="index" v-for="item,index in userList">{{item.userName}}</router-link>
    </div>
  </div>
</template>

<script>

let data = [
  {
    id:1,
    userName : 'leo1',
    sex:'男',
    hobby:'写代码'
  },
  {
    id:2,
    userName : 'leo2',
    sex:'男',
    hobby:'唱歌'
  },
  {
    id:3,
    userName : 'leo3',
    sex:'男',
    hobby:'读书'
  }
]
export default {
   data(){
     return {
       userList:data
     }
   },
  created(){          //在这儿，钩子函数  打印出来看一下
     console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

打印内容为：
Object {name: "user", meta: Object, path: "/user/3", hash: "", query: Object…}

里面内容有matched  嵌套路由，

有hash值，

params:动态路径里面的参数就是放在params中的，

params:Object   里面有一个对象，
userId:"3"

path:"/user/3"  

路由信息对象：

一个路由信息对象表示当前激活的路由的状态信息，每次成功的导航后都会产生一个新的对象，

path 字符串，对应当前路由的路径，

params 对象，包含动态路由参数，

query对象，URL查询参数，

hash字符串，当前路由的hash值，

fullpath字符串，URL包含查询参数和hash的完整路径，

matched 数组， 包含当前路由的所有嵌套路径片段的 路由记录，

name 字符串，当前路由的名称

得到路由信息对象我们做什么事情呢？实际上我就可以通过它，去得到动态的参数

在user.vue中，

export default {
 	data(){
   	return {
     	userList:data
   	}
 	},
  created(){          //在这儿，钩子函数  打印出来看一下
    console.log(this.$route.params.userId)       //f12查看  可以得到动态id
  }
}



2.动态参数其实可以写多个，我们来改造一下，

在user.vue中，我们把用户分一下类，有的是vip用户，有的是普通用户，在数据里面我们来一个tip,

let data = [
  {
    id:1,
    tip:'vip',    //用户分类
    userName : 'leo1',
    sex:'男',
    hobby:'写代码'
  },
  {
    id:2,
    tip:'vip',   //用户分类
    userName : 'leo2',
    sex:'男',
    hobby:'唱歌'
  },
  {
    id:3, 
    tip:'common',   //用户分类
    userName : 'leo3',
    sex:'男',
    hobby:'读书'
  }
]

在user.vue中，我们来修改一下<router-link></router-link>，

修改前：
<template>
  <div class="center" style="height: 2000px">
   我是user
    <div class="user-list">
      <router-link style="padding: 0 20px;" :to="'/user/'+item.id" key="index" v-for="item,index in userList">{{item.userName}}</router-link>
    </div>
  </div>
</template>

修改后：

<router-link style="padding: 0 20px;" :to="'/user/'+item.tip+'/'+item.id" key="index" v-for="item,index in userList">{{item.userName}}</router-link>

f12审查元素：

<div data-v-ec56ef8a="" class="user-list">

   <a data-v-ec56ef8a="" href="/user/vip/1" class="" style="padding: 0px 20px;">leo1</a>

   <a data-v-ec56ef8a="" href="/user/vip/2" class="" style="padding: 0px 20px;">leo2</a>

   <a data-v-ec56ef8a="" href="/user/common/3" class="" style="padding: 0px 20px;">leo3</a>

</div>

在路由中进行配置，才能到渲染出响应的组件，（需要设置动态的参数，有可能vip,也有可能普通的，需要我们再设置一个动态的参数），

在router文件夹下的index.js文件中，

修改前：

 {
      path: '/user/:userId?',// /user/1 /user/2  正则中？有可能匹配0次也有可能匹配1次
      name: 'user',
      component:user
    },

修改后：

 {
      path: '/user/:tip?/:userId?',// /user/vip/1 /user/vip/2 /user/common/3    正则中？有可能匹配0次也有可能匹配1次
      name: 'user',
      component:user
    },

来到页面中切换导航，leo1,leo2,leo3,

路径如下

http://localhost:8081/user/vip/1

http://localhost:8081/user/vip/2

http://localhost:8081/user/common/3

我们怎么拿到相应的动态路径参数呢？回到user.vue中，

<script>

let data = [
  {
    id:1,
    tip:'vip',
    userName : 'leo1',
    sex:'男',
    hobby:'写代码'
  },
  {
    id:2,
    tip:'vip',
    userName : 'leo2',
    sex:'男',
    hobby:'唱歌'
  },
  {
    id:3,
    tip:'common',
    userName : 'leo3',
    sex:'男',
    hobby:'读书'
  }
]
export default {
   data(){
     return {
       userList:data
     }
   },
  created(){
     console.log(this.$route.params)   //实际上我们动态的路径里面的参数都是放在$route.params下面，
  }
}
</script>

打印一下试试看：

Object {tip: "vip", userId: "2"} 

得到一个对象，

现在我们需要userId,来打印一下，

<script>

let data = [
  {
    id:1,
    tip:'vip',
    userName : 'leo1',
    sex:'男',
    hobby:'写代码'
  },
  {
    id:2,
    tip:'vip',
    userName : 'leo2',
    sex:'男',
    hobby:'唱歌'
  },
  {
    id:3,
    tip:'common',
    userName : 'leo3',
    sex:'男',
    hobby:'读书'
  }
]
export default {
   data(){
     return {
       userList:data
     }
   },
  created(){
     console.log(this.$route.params.userId)   //   1  2  3
  }
}
</script>

拿到userId之后干什么呢？我们可以通过userId找到跟它相同的数组信息，把相关的信息都展示出来，

来布一下局，在user.vue中，

<template>
  <div class="center" style="height: 2000px">
   我是user
    <div class="user-list">
      <!--<router-link style="padding: 0 20px;" :to="'/user/'+item.tip+'/'+item.id" key="index" v-for="item,index in userList">{{item.userName}}</router-link>-->
      <router-link style="padding: 0 20px;" :to="'/user/'+item.tip+'/'+item.id" key="index" v-for="item,index in userList">{{item.userName}}</router-link>
    </div>
    <div class="user-info">
      <p>姓名：</p>
      <p>性别：</p>
      <p>爱好：</p>
    </div>
  </div>
</template>

<script>

let data = [
  {
    id:1,
    tip:'vip',
    userName : 'leo1',
    sex:'男',
    hobby:'写代码'
  },
  {
    id:2,
    tip:'vip',
    userName : 'leo2',
    sex:'男',
    hobby:'唱歌'
  },
  {
    id:3,
    tip:'common',
    userName : 'leo3',
    sex:'男',
    hobby:'读书'
  }
]
export default {
   data(){
     return {
       userList:data,
       userInfo:{}         //要在data中创造一条空的对象，等到我们拿到数据之后呢，把数据放在空对象的位置，
     }
   },
  created(){
     console.log(this.$route.params.userId)
  }
}
</script>

打开页面：

姓名：

性别：

爱好：

都是空的，因为userInfo:{}是空的，所以说什么都没展示出来，

一刷新之后，userInfo:{}的值就是我们拿到的id,console.log(this.$route.params.userId)去数据data里面找的，

实际上在我们真实场景里面，通过数据 console.log(this.$route.params.userId)，向后端发送请求，拿到数据之后，填充userInfo:{}，

填完之后就可以在页面上显示了，这时候我们不用后端，直接拿假数据来写，

我们先要找id,所以

export default {
   data(){
     return {
       userList:data,
       userInfo:{}
     }
   },
created(){
    //console.log(this.$route.params)
    //console.log(this.$route.params.userId)
    let id = this.$route.params.userId;           //拿到id
    this.userInfo = this.userList.filter((item)=>{   //拿到id之后向数组里面进行过滤,实际上就是从userList里面过滤
      return item.id == id         //过滤的条件是id等于数据的id  ，如果哪一个id和我的相同了，就放在数组里面，
    })[0]     //取数组里面的某个对象
    console.log(this.userInfo)  //打印出来看一下，
  }

}

在user.vue页面中的leo1，看到该用户的所有信息，http://localhost:8081/user/vip/1

在地址栏切换地址   http://localhost:8081/user/vip/2   回车（刷新）

还有一种情况，到user.vue中只展示用户，当点击具体的某一个用户时在展示他的具体信息，

我们来判断一下，id是否存在，如果不存在，下方的信息要隐藏起来，我们来设置一下，在user.vue中，

<template>
  <div class="center" style="height: 2000px">
   我是user
    <div class="user-list">
      <!--<router-link style="padding: 0 20px;" :to="'/user/'+item.tip+'/'+item.id" key="index" v-for="item,index in userList">{{item.userName}}</router-link>-->
      <router-link style="padding: 0 20px;" :to="'/user/'+item.tip+'/'+item.id" key="index" v-for="item,index in userList">{{item.userName}}</router-link>
    </div>
    <div class="user-info" v-if="userInfo.userName" style="font-size: 14px">
      <p>姓名：{{userInfo.userName }}</p>
      <p>性别：{{userInfo.sex}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
    </div>
  </div>
</template>

<script>

let data = [
  {
    id:1,
    tip:'vip',
    userName : 'leo1',
    sex:'男',
    hobby:'写代码'
  },
  {
    id:2,
    tip:'vip',
    userName : 'leo2',
    sex:'男',
    hobby:'唱歌'
  },
  {
    id:3,
    tip:'common',
    userName : 'leo3',
    sex:'男',
    hobby:'读书'
  }
]
export default {
   data(){
     return {
       userList:data,
       userInfo:{}
     }
   },
  created(){
     //console.log(this.$route.params)
     //console.log(this.$route.params.userId)
      let id = this.$route.params.userId;
      if(id){                                              //如果id存在,我去做一个过滤
        this.userInfo = this.userList.filter((item)=>{
          return item.id == id
        })[0]
      }else{                        //如果id不存在，清空userInfo
        this.userInfo = {}    //设置一个空的对象
      }

    console.log(this.userInfo)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

它显示不显示，取决于你的userInfo里面是不是为空，我实际上可以拿userInfo的一个key值，来去判断了，

<div class="user-info" v-if="userInfo.userName" style="font-size: 14px">
      <p>姓名：{{ userInfo.userName }}</p>
      <p>性别：{{userInfo.sex}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
</div>

v-if="userInfo.userName"  如果说userInfo这个对象里面有这个key值，把它渲染出来，没值的话就不需要渲染了，

下面我们来打开user.vue，点击leo1,刷新-------leo1的信息就出来了，

为什么点击leo1,leo2,leo3后必须刷新一下才会出来啊？是因为，当我们访问user.vue的时候，我们组件可以生成一次，生成一次之后，我

们再去里面操作时，其实我们我们组件是不会重新生成的，而是复用我们的组件，那我们组件刚生成一次的时候，去执行一下你这个生命周

期的钩子函数，也就是created,也就是下一次的时候你没有让他重新生成，就不会执行了，也就是不会重新去走created里面的内容，所以说

不会得到userInfo,那我怎么拿到这个id的呢？是不是通过你的路由信息对象啊，也就是说无论我是不是复用组件，那实际上我拿到路由信息

，那我怎么拿到路由信息的呢？这时候要注意了，现在我在路由切换的时候，是不是我的路径发生变化了，路径反生变化，那他肯定是匹配

到一个路由,那我们就可以得到一个路由信息，

我们的路由信息对象一上来就拿过一次，你怎么知道路由信息对象发生变化了呢？因为我们知道，这个路由信息是一个对象，可以去监控一下这个对象，如果说你的对象发生变化，我们就去执行一个函数，没有发生变化，我们的监控就是无效的，怎么监控呢？

 watch:{
     $route(){
       console.log(this.$route.params.userId)
     }
  },


1.现在我们已经学会使用了动态路径了----然后去传参-----然后去拿到它的参数-----一步一步操作

2.除了使用这种动态路径的参数的话，我们其实还可以使用别的-----查询字符串

3.这时候我们需要用一个场景来进行说明，回到页面，

4.现在我们拿到了leo1,leo2,leo3他们的数据---基本信息，我们展示出来了，但这只是用户信息，

下面我们还有一些东西，比如说他的分享，他的关注，他的文章。。。。所以他的下面还有一个导航，我们来布一下局

5.在user.vue组件中

<template>
  <div>
    我是user页
    <div class="user-list">
      <router-link :to="'/user/'+item.tip+'/'+item.id" style="padding:0 20px" key="index1" v-for="item,index1 in userList">{{item.userName}}</router-link>
      <!--f12审查元素可以看一下   <a  href="/user/1" >leo1</a>-->
      <!--f12审查元素可以看一下   <a  href="/user/vip/1">leo1</a> 客户类型也加上了 -->
    </div>

    <div class="user-info" v-if="userInfo.userName" style="font-size: 20px">  <!--这块信息是否显示-->
      <p>姓名：{{userInfo.userName}}</p>
      <p>性别：{{userInfo.sex}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
    </div>
    <hr>

    <!--每个用户的关注，收藏等内容-->
    <div v-if="userInfo.userName" class="info-list" style="font-size: 20px">
      <!--<router-link exact to="/user/vip/1?info=follow">他的关注</router-link>   //字符串形式  先把路径写死了
      <router-link exact to="/user/vip/1?info=share">他的分享</router-link>-->

      <router-link exact to="?info=follow">他的关注</router-link>  //http://localhost:8080/user/vip/1?info=follow
      <router-link exact to="?info=share">他的分享</router-link>   //http://localhost:8080/user/vip/1?info=share
    </div>
  </div>
</template>

6.点击他的关注和他的分享，是不一样的地址-------用查询字符串的方式体现

有他的关注，他的分享，分别点击，出现不一样的数据，这时候我们要在地址里面去体现出来，
也就是说我现在点击他的关注，实际上有个标识follow,点击分享的时候是share,所以呢，我们在地址栏里需要体现出来，

怎么体现呢？实际上我们可以使用查询字符串的方式。

我们怎么写这种查询字符串的呢？也就是点击一下，在地址栏里写上查询字符串，也就是问号：？  后面我们比如说我们写上key值info，这是约定的,
比如说你是我的关注，那我们就写上一个follow, http://localhost:8080/user/vip/1?info=follow   我们拿到key值后呢，一看follow,获取的是我的关注这条信息，
http://localhost:8080/user/vip/1?info=share   一看share,获取的是我的分享这条信息，所以说我们需要用查询字符串这种方式，然后去拿到后面的信息，
然后找到用户不同的数据，不同的信息，

我们直接写吧

<router-link exact to="/user/vip/1?info=follow">他的关注</router-link>   //exact  精确匹配  （当前激活状态 ）
<router-link exact to="/user/vip/1?info=share">他的分享</router-link>

7.我访问user.vue组件，当leo1,leo2,leo3都没有被选中时，他的关注和他的分享应该不被显示出来，

这时呢，我们来做个判断，

    <!--每个用户的关注，收藏等内容-->
    <div v-if="userInfo.userName" class="info-list" style="font-size: 20px">
      <router-link exact to="/user/vip/1?info=follow">他的关注</router-link>   //字符串形式  先把路径写死了  //http://localhost:8080/user/vip/1?info=follow
      <router-link exact to="/user/vip/1?info=share">他的分享</router-link>    //http://localhost:8080/user/vip/1?info=share  
    </div>

v-if="userInfo.userName"

实际上就是每个userInfo里面有没有userName值，有的话就显示出来，没有的话就不显示，

8. 路径前面什么都不写，直接写?info=follow就可以

<!--每个用户的关注，收藏等内容-->
    <div v-if="userInfo.userName" class="info-list" style="font-size: 20px">
      <router-link exact to="?info=follow">他的关注</router-link>   //路径写死了
      <router-link exact to="?info=share">他的分享</router-link>    // 
    </div>

9.还可以用别的方式，用to后面写上对象的形式，v-bind动态绑定，
  path是相对于当前的路径，所以写上空，什么都不写，

  query里面我们就可以写上对象的形式，可以写多个，

 <div v-if="userInfo.userName" class="info-list" style="font-size: 20px">

      <router-link exact :to="{path:'',query:{info:'follow',a:1}}">他的关注</router-link>
      <router-link exact :to="{path:'',query:{info:'share',a:1}}">他的分享</router-link>
 </div>

分别点击leo1,leo2,leo3下的他的关注和他的分享：地址栏如下:

http://localhost:8080/user/vip/1?info=follow&a=1
http://localhost:8080/user/vip/1?info=share&a=1

http://localhost:8080/user/vip/2?info=follow&a=1
http://localhost:8080/user/vip/2?info=share&a=1

http://localhost:8080/user/vip/3?info=follow&a=1
http://localhost:8080/user/vip/3?info=share&a=1

10.现在我们是不是要在点击的时候拿到你这个查询字符串的值，3?info=follow&a=1，

因为我要通过info拿到值，然后去向后端发送请求，发送请求之后我们就可以拿到这个数据了，

这时候我们该怎么获取参数的值呢？

直接写在页面中吧，怎么拿的呢？实际上也是在路由信息对象里拿的，
我们之前说的路由信息对象有一个query对象，query对象就是URL查询参数，

在模板中我们可以通过$route去拿，因为$route在实例身上，

 <div v-if="userInfo.userName" class="info-list" style="font-size: 20px">

      <router-link exact :to="{path:'',query:{info:'follow',a:1}}">他的关注</router-link>   //http://localhost:8080/user/common/3?info=follow&a=1   可以多写几个
      <router-link exact :to="{path:'',query:{info:'share',a:1}}">他的分享</router-link>

      <div>
        {{$route.query}}    //{ "info": "follow", "a": 1 }  这个时候我们就把他拿到了
      </div>
    </div>

11.这个时候，还有一个问题是我们点击leo1的时候，他的关注我们希望默认显示出来，而没必要再点一下他的关注才显示出啦，

这时候我们在点leo1,leo2,leo3的时候，我们把直接把query查询字符串直接加上就行了，

所以我们在点leo1,leo2,leo3的时候，我们直接传参过来，传个什么参？传个一个查询字符串，

也就是说在导航router-link里面，我们需要有个查询字符串，

 <div class="user-list">
      <!--<router-link :to="'/user/'+item.tip+'/'+item.id" style="padding:0 20px" key="index1" v-for="item,index1 in userList">{{item.userName}}</router-link>-->

      <router-link :to="{path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}" style="padding:0 20px" key="index1" v-for="item,index1 in userList">{{item.userName}}</router-link>

    </div>

   改造一下，不用写成字符串的形式:to="'/user/'+item.tip+'/'+item.id"
   而写成对象的形式， :to="{path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}"

点击leo1,leo2,leo3时，对应的关注也会显示出来，

看地址栏：  （直接就把对应的字符串加上了）

http://localhost:8080/user/vip/1?info=follow
http://localhost:8080/user/vip/2?info=follow
http://localhost:8080/user/common/3?info=follow

f12审查元素，（看他们对应的href）

<a data-v-ec56ef8a="" href="/user/vip/1?info=follow" class="" style="padding: 0px 20px;">leo1</a>

<a data-v-ec56ef8a="" href="/user/vip/2?info=follow" class="" style="padding: 0px 20px;">leo2</a>

<a data-v-ec56ef8a="" href="/user/common/3?info=follow" class="router-link-exact-active is-active" style="padding: 0px 20px;">leo3</a>

<template>
  <div>
    我是user页
    <div class="user-list">

      <router-link :to="{path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}" style="padding:0 20px" key="index1" v-for="item,index1 in userList">{{item.userName}}</router-link>
      //此时点击leo1.leo2,leo3,可以看到地址栏上地址变化

       http://localhost:8080/user/vip/1?info=follow
       http://localhost:8080/user/vip/2?info=follow
       http://localhost:8080/user/common/3?info=follow

    </div>

    <div class="user-info" v-if="userInfo.userName" style="font-size: 20px">  <!--这块信息是否显示-->
      <p>姓名：{{userInfo.userName}}</p>
      <p>性别：{{userInfo.sex}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
    </div>
    <hr>

    <!--每个用户的关注，收藏等内容-->
    <div v-if="userInfo.userName" class="info-list" style="font-size: 20px">

      <!--<router-link exact :to="{path:'',query:{info:'follow',a:1}}">他的关注</router-link>   //http://localhost:8080/user/common/3?info=follow&a=1
      <router-link exact :to="{path:'',query:{info:'share',a:1}}">他的分享</router-link>-->

      <router-link exact :to="{path:'',query:{info:'follow'}}">他的关注</router-link>  //注意啊（将a:1去掉）    将http://localhost:8080/user/common/3?info=follow
      <router-link exact :to="{path:'',query:{info:'share'}}">他的分享</router-link>

      <div>
        {{$route.query}}
      </div>
    </div>
  </div>
</template>


1.过渡动效

提供了transiton的封装组件，添加过渡动画，

添加删除css类名   

2.现在我们点击导航，对组建进行切换的时候，显得很生硬，我们在切换的时候，给他添加一些过度动效，比如说我们是淡隐淡出，

或者是左右滑动，或者是上下滑动，或者是你像规定的一些运动效果，

这个时候我们需要用到他里面给我们提供的一个transition,这么一个封装好的组件，

然后去添加过渡动画，我们只需要把我们想要做运动的元素放在这一对transition标签之内就可以了，

当这个元素插入或者移除或者改变的时候呢，就会有我们添加好的过渡动画了，

那我怎么控制这些过渡动画的呢？

实际上我们可以对他添加删除一些css类名，也就是说我们可以使用一些css3的特性，然后通过css类名来控制，

那除了我们使用css类名来控制啊，你还可以使用它里面的钩子函数来控制，

3.这一次我们主要来探讨一下，怎么使用这种css类名来控制的，css类名呢，不是说我们随便添加一个就可以生效的，

你需要符合它里面的规则，我们来看一下，他给我们提供了哪些css类名，

过渡css类名

 v-enter:定义进入过渡的开始状态

 v-enter-active:定义进入活动状态

 v-enter-to:定义进入的结束状态

 v-leave:定义离开过渡的开始状态

 v-leave-active:定义离开活动状态

 v-leave-to:定义离开的结束状态

（v-可以改，后面是固定的）

使用name属性改变类名前缀

4.打开app.vue-----我们知道，当我们点击导航，对应的组件就会替换到

<router-view class="center"></router-view> <!-- default 默认视图 -->  这个位置，

在替换的时候，我们需要他有个动画效果，所以我们要在它外面包一个组件， <transition></transition>

我们把想要运动的元素放入它里面就行了，

		<transition>
      <router-view class="center"></router-view>
    </transition>

5.我们需要给他设置一个运动效果，运动效果我们是css来控制的，所以我们需要在<style>里面设置一些css,

<style>
	.v-enter{
	  opacity: 0;   //进入开始时
	}
	
	.v-enter-to{
	  opacity: 1;  //进入结束时
	}
	
	.v-enter-active{
	  transition:1s    //进入持续时间
	}
</style>

意思就是当我们组件进入时，透明度从0到1这个变化，持续时间是1s,

6.设置一下离开

<style>
	.v-enter{
	  opacity: 0;
	}
	.v-enter-to{
	  opacity: 1;
	}
	.v-enter-active{
	    transition:1s
	  }
	
	.v-leave{
	  opacity: 1;  //离开开始时的透明状态
	}
	.v-leave-to{   //离开结束时的透明状态
	  opacity: 0;
	}
	.v-leave-active{  //离开的持续时间
	  transition:2s
	}
</style>

7.有的时候，我们需要离开的动画完成之后，再让进入的元素进行动画，

要完成这样的功能，需要了解一下它给我们提供的两种模式，

过度模式：

in-out:新元素先进行过渡，完成之后当前元素过渡离开，

out-in:当前元素先进行过渡，完成之后新元素过渡进入，

<transition mode="out-in">
      <router-view class="center"></router-view> <!-- default 默认视图 -->
    </transition>

<transition mode="in-out">
      <router-view class="center"></router-view> <!-- default 默认视图 -->
    </transition>

分别试一下

8.除了淡隐淡出动画，能不能有别的形式的动画？

比如我们一点击导航，组件向左运动-------也就是改变我们css3里面的transilate就行了，

怎么设置？

left-enter{

}  //组件在进入时，它的一个开始位置,开始位置我们要在enter里面去设置，

其实你会发现前缀改了-----改为left-

默认v-开头，你想设置成别的运动形式的时候，你可以把v-替换成你想要的一个前缀就行了，

至于前缀怎么用的话，我们等会儿设置完了再说。

在进入的时候，我们先给他一个初始位置，

向左运动：

	left-enter{
	  transform：translateX(100%);  /*向左运动时的起始位置，在屏幕之外*/
	}
	left-enter-to{                 /*目标位置：屏幕内*/  /*此行可以省略*/
		transform：translateX(0);
	}
	left-enter-active{                 /*运动时间:1s过渡完* /
		transition:1s;
	}

怎么样用到left-前缀这组动画？我们需要在

		<transition mode="out-in">
      <router-view class="center"></router-view> <!-- default 默认视图 -->
    </transition>

里面设置一下neme,

		<transition mode="out-in" name="left">
      <router-view class="center"></router-view> <!-- default 默认视图 -->
    </transition>

1.鼠标移入，进入的元素向左，离开的元素也继续向左运动，设置一下离开的元素它的运动形式，

.left-leave{
  transform:translateX(0);      /*初始位置可以不用写，此行可以省略*/
}
.left-leave-to{
  transform:translateX(-100%);  //往左边，屏幕外边    
}
.left-leave-active{
  transition:1s
}

此时将mode="out-in"去掉，进入和离开元素同时进行，

12.

/*向右运动*/

		<transition  name="right">   //改一下name值
      <router-view class="center"></router-view> <!-- default 默认视图 -->
    </transition>

/*进入*/
.right-enter{        /*进入的时候，实际上是从屏幕的左边向右边运动的，所以一开始-100%*/
  transform:translateX(-100%);
}
.right-enter-to{    /*此行可以省略*/
  transform:translateX(0);
}
.right-enter-active{
  transition:1s
}

/*离开*/
.right-leave{
  transform:translateX(0);
}
.right-leave-to{    /*初始位置可以不用写，此行可以省略*/
  transform:translateX(100%);   /*离开的目标为100，让它到屏幕的右边去*/
}
.right-leave-active{
  transition:1s
}

13.将向左向右运动结合起来，

比如现在处于document组件，

当我鼠标移入右边的时候，它实际上想让这个组件切换的时候，是往左边去切换的，

如果移入document左边的时候，那实际上想让这个组件切换的时候，是往右边去切换的，

也就是根据我们移入document这个导航左边或者右边，然后决定你这个组件到底是往左边切换，还是往右边切换，

这个时候，我的classname就不能写死了，而是一个动态去设置的，根据我们鼠标移入导航的左边或者右边，进行设置的，

那我怎么知道你移入导航的左边或者右边的呢？

实际上你会发现，这就是个选项卡，然后我们可以利用选项的思维，其中有个思路就是我们记录下每个导航它的下标，

然后根据下标进行判断，

该怎么去记录下标？

那在app.vue中，我就不能把它写死了，

 			<ul class="nav">

          <!--<router-link to="/home">home</router-link>-->
          <!--<router-link :to="index" tag="li" event="mouseover">--><!--用v-bind动态绑定,f12审查元素，依然生成的是a标签-->
        <router-link to="/" tag="li" exact event="mouseover" >
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
          <!--用tag设置你要生成的标签  f12审查元素-->
          <!--event自定义属性：改变router-link默认的点击事件  event="mouseover"鼠标滑过切换-->

        <li>
          <!--<router-link to="/about">about</router-link>-->
          <router-link to="/about" active-class="activeClass" event="mouseover"><!--设成对象形式-->
            about
          </router-link>
            <!--在行内用active-class再设置个类名，来单独控制导航被激活时的背景颜色，在样式表里自己设置一下-->
            <!--f12审查元素，可以看到当about导航被激活时，含有类名activeClass-->
        </li>

        <li>
          <router-link  :to="{path:'/document#abc'}" event="mouseover">document</router-link>
        </li>
        <li>
          <router-link  to="/user" event="mouseover">user</router-link>
        </li>

      </ul>

如果说我们把这些导航都放在一个数组里面，我进行循环，就可以拿到下标了，

但现在我是写死的，我需要手动自己添加下标了，怎么添加下标呢？方法有很多，今天说一种方式，

路由元信息：

在路由配置中meta可以配置一些数据，用在路由信息对象中，

访问meta中数据：$route.meta

也就是说我们在配置路由的时候，除了它给我们提供了一些像path,component还有name这些供我们配置外，

我们其实还可以定义一些自己想要的一些数据，那定义在哪里的呢？我们定义在meta里面就行了，

它呢其实是一个对象，我们可以配置多条，然后我访问的时候就可以通过它拿到这条数据，也就是我想设置一些自己的数据，

那么我就可以在meta里面设置，现在我们设置的是他的一个下标，手动自己设置一下，

在router文件夹下的index.js文件中：（设置meta值）

routes: [
    {
      path:'/',
      component:home,
      meta:{
        index:0
      },
    },
    {
      //path:'/user/:userId',   //动态设置路径 /user/1 /user/2 /user/3  但此时并没有匹配到/user
      //path:'/user/:userId?',    //正则  可以访问一次，也可以访问0次
      path:'/user/:tip?/:userId?', //http://localhost:8080/user/vip/1   动态匹配客户类型
      component:user,
      meta:{
        index:3
      }
    },

    {
      path:'/about',
      name:'about',  //我们已经设置了默认子路由，name就不需要了
      component:about,
      meta:{
        index:1
      },
      children:[
        {
          //path:'study',  //路径以/开头的都是相对于根路径，此时是相对于about，写成字符串的形式就行了
          path:'',        //默认的子路由，访问http://localhost:8080/about，study组件会被渲染出来
          name: 'study',
          component:study,
        },
        {
          //path:'work',  // 地址栏上出现http://localhost:8080/about/hobby
          path:'/work',   //想让地址栏上出现http://localhost:8080/hobby   则改为
          name: 'work',
          component:work,
        },
        {
          path:'/hobby',
          name: 'hobby',
          component:hobby,
        }
      ]
    },
    {
      path:'/document',
      name:'document',
      //component:document   //一个路由对应一个组件
      components:{           //一个路由对应多个组件
        default:document,
        slider:slider,
      },
      meta:{
        index:2
      }
    },
    {
      path:'*',  //*为通配符

       redirect:(to) => {            //动态设置重定向的目标

         if(to.path === '/123'){
           return '/home'         //写成路径形式
         }else if(to.path === '/456'){
           return {path:'/document'}  //写成对象形式
         }else{
           return {name:'about'}  //写成name形式
         }

       }

    }
  ]

14.我们用meta来记录下标，我怎么访问到它的呢？

在app.vue中我们打印出来看一下：

 当前导航的下标：
    {{$route.meta.index}}

    <transition  name="right">
      <router-view class="center"></router-view> <!-- default 默认视图 -->
    </transition>

注意about组件中，有个自路由是默认的，要将meta设置到默认的自路由中：

{
      path:'/about',
      name:'about',  //我们已经设置了默认子路由，name就不需要了
      component:about,
      children:[
        {
          //path:'study',  //路径以/开头的都是相对于根路径，此时是相对于about，写成字符串的形式就行了
          path:'',        //默认的子路由，访问http://localhost:8080/about，study组件会被渲染出来
          name: 'study',
          component:study,
          meta:{       //注意meta的位置
            index:1
          }
        },
        {
          //path:'work',  // 地址栏上出现http://localhost:8080/about/hobby
          path:'/work',   //想让地址栏上出现http://localhost:8080/hobby   则改为
          name: 'work',
          component:work,
        },
        {
          path:'/hobby',
          name: 'hobby',
          component:hobby,
        }
      ]
    },

15.现在只需要我们拿到下标去判断就行了，

在app.vue中，导航一旦生成之后，组件就不会重新生成了，

所以说我们需要监控一下这个route的变化，

在app.vue中，
<script>
export default {
  name: 'App',
  watch:{
    $route(to,from){
      console.log(to.meta.index)  /*目标导航的下标*/
      console.log(from.meta.index)  /*离开导航的下标*/

    }
  },
  data(){
    return{
      index:"/home"
    }
  }
}
</script>

  /* watch:{}*/
  /*当我们当前导航发生变化的时候，这个route就会发生变化，
  发生变化之后，这个监控就执行这个函数，
  他其中他会接受两个参数，
  to:目标
  from:正要离开的这个导航

  通过to和from我们就可以拿到这个meta,
  */

16.根据下标进行判断，判断完了之后，，给他一个动态的name(来控制向左向右运动)

此时name不能写死，

 <transition  name="right">
      <router-view class="center"></router-view> <!-- default 默认视图 -->
    </transition>

设置一个数据，叫做names吧，我们一上来的时候，默认给他一个left,

<script>

export default {
  name: 'App',
  watch:{
    $route(to,from){
      console.log(to.meta.index)  /*目标导航的下标*/
      console.log(from.meta.index)  /*离开导航的下标*/

    }
  },
  data(){
    return{
      index:"/home",
      names:"left"
    }
  }
}
</script>

动态设置name,

<transition  :name="names">
      <router-view class="center"></router-view> <!-- default 默认视图 -->
    </transition>

接下来我们就需要去判断了，

<script>

export default {
  name: 'App',
  watch:{
    $route(to,from){
      console.log(to.meta.index)  /*目标导航的下标*/
      console.log(from.meta.index)  /*离开导航的下标*/
      if(to.meta.index<from.meta.index){  /*鼠标向左移动*/
         this.names = 'right'
      }else{
        this.names = 'left'
      }
    }
  },
  data(){
    return{
      index:"/home",
      names:"left"
    }
  }
}
</script>

17.








