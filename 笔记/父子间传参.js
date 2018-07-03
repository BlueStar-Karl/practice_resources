一.划分组件
	两种方式:
	1.功能模块:select,pagenation...
	2.页面区域:header,footer,sidebar...
	
二.组件调用
	1.引入
		import Header from './header';
		import Footer from './footer';
	
	2.注册
		new Vue({
			data:{
				isShow:true
			},
			//components是一个数组
			components:[
				Header,
				Footer
			]
		})
	
	3.使用
		<header></header>
		<footer></footer>

三.组件之间的通信
		
	1.自定义事件
		$on()			监听事件
		$emit()			在它上面触发事件
		$dispatch()		派发事件,事件沿着父链冒泡
		$broadcast()	广播事件,事件向下传导给所有的后代
		
		//$dispatch()和$broadcast()需要接收参数的组件使用event属性
		
		/*
		父组件向子组件传参：
			1.利用props属性
			2.$broadcast(),广播事件
		子组件向父组件传参:
			1.$on 和	 $emit()配合使用
			2.$dispatch(),派发事件
		*/
		
	2.父组件向子组件传参
		/*this is app.vue  父组件*/
		<header msg='something interesting'></header> 
		<footer></footer>
		
		
		/*this is header.vue 子组件*/
		//msg从父组件传过来后，可以直接使用，就像在data里面声明过一样，前提msg必须在props中声明
		
		<h1>{{msg}}</h1>
		
		new Vue({
			data:{
				username:'xxx'
			},
			//props是属性的意思，子组件属性一定要声明props，里面的属性以字符串的形式声明
			props:['msg'],
			methods:{
				doThis:function(){
					//在实例中，this.msg调用，在模板中{{msg}}调用（如上）
					console.log(this.msg)
				}
			}
		})
	
	
	3.广播事件,父组件向子组件传递参数
		/*this is app.vue 父组件*/
		new Vue({
			methods:{
				addNew:function(){
					this.$broadcast('onAddnew',this.items)
				}
			}
		})

		/*this is commpoentA.vue 子组件*/
		<button @click='onClichMe'>open mouse!</button>
		
		new Vue({
			events:{
				'onAddnew':function(items){
					console.log(items)
				}
			}
		})
		

	4.子组件向父组件传参
	
		子组件通过$emit()触发一个自定义事件，父组件绑定这个自定义事件（和使用v-on:click等一样，v-on:自定义事件='本地方法'），这个事件调用父组件定义的方法，并传参
		
		/*this is app.vue 父组件*/
		<commponet-a v-on:child-tell-me-something='listenToMyBoy'></commponet-a>
		
		<p>child tells me: {{childWords}}</p>
		
		new Vue({
			data:function(){
				return {
					childWords:''
				}
			}
			methods:{
				listenToMyBoy:function(msg){
					this.childWords = msg
				}
			}
		})
		
		
		/*this is commpoentA.vue 子组件*/
		<button @click='onClichMe'>open mouse!</button>
		
		new Vue({
			data:function(){
				return {
					msg:'hello from component a!'
				}
			},
			methods:{
				onClichMe:function(){
					this.$emit('child-tell-me-something',this.msg)
				}
			}
		})
		
	5.派发事件,子组件向父组件传参
	
		/*this is commpoentA.vue 子组件*/
		<button @click='onClichMe'>open mouse!</button>
		
		new Vue({
			data:function(){
				return {
					msg:'hello from component a!'
				}
			},
			methods:{
				onClichMe:function(){
					this.$dispatch('child-tell-me-something',this.msg)
				}
			}
		})
		
		/*this is app.vue 父组件*/
		//父组件中使用events属性,配合使用
		<p>child tells me: {{childWords}}</p>
		
		new Vue({
			data:function(){
				return {
					childWords:''
				}
			},
			events:{
				'child-tell-me-something':function(msg){
					this.childWords = msg;
				}
			}
		})
	
	
	
	

		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
