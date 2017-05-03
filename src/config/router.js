import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);



import Main from './../pages/main.vue';
import NotFound from './../pages/404.vue';
// import Home from './pages/home.vue';
// import Tabpage from './tabpage.vue';
// const page_array = [
// 	{
// 		name:'rootcntr',
// 		mid:'',
// 		url:'./pages/rootcntr'
// 	},
// 	{
// 		name:'home',
// 		mid:'member/',
// 		url:'./pages/member/home'
// 	}
// ];
// let router_array = [];
// for(let i=0;i<page_array.length;i++){
// 	router_array.push({
// 		path:"/vuetodo/"+page_array[i].mid+page_array[i].name,
// 		name:page_array[i].name,
// 		component:resolve => require([page_array[i].url+'.vue'], resolve)
// 	})
// }
// console.log(router_array);
// const Tabpage = resolve => {
//   	// require.ensure is Webpack's special syntax for a code-split point.
// 	require.ensure(['./pages/tabpage.vue'], () => {
// 		resolve(require('./pages/tabpage.vue'))
// 	})
// }
// const Column0 = resolve => {
//   	// require.ensure is Webpack's special syntax for a code-split point.
// 	require.ensure(['./pages/column0.vue'], () => {
// 		resolve(require('./pages/column0.vue'))
// 	})
// }
// const Column1 = resolve => {
//   	// require.ensure is Webpack's special syntax for a code-split point.
// 	require.ensure(['./pages/column1.vue'], () => {
// 		resolve(require('./pages/column1.vue'))
// 	})
// }

// const tmp_url = './pages/member/home';
// 
// let router_array=[{
// 	path:"/vuetodo/",
// 	name:'root',
// 	component:resolve => require([tmp_url+'.vue'], resolve)
// }]

const router = new VueRouter({
	mode: 'history',
// 	routes:router_array,
  	routes:[
  		{
  			path:'/',
  			name:'root',
  			component:Main
  		},
  		{
  			path:'/*',
  			name:'404',
  			component:NotFound
  		},
//   		{
//   			path:'/*',
//   			name:'404',
//   			component:{
//   				template:`<div>
//   							<h1>404</h1>
//   							<router-link v-bind:to="{name:'root'}">root</router-link>
//   						</div>`
//   			}
//   		}
  	]
})

// 	let tmp_path = '/vuetodo/home';
// 	let tmp_route_name = 'home';
// 	let tmp_page_url = './pages/home';
// 	setTimeout(()=>{
// 		const tmp_random = Math.random();
// 		console.log(tmp_random);
// 		if(tmp_random>0.5){
// 			tmp_page_url = './pages/member/home';
// 		}
// 		router.addRoutes([{
// 			path:tmp_path,
// 			name:tmp_route_name,
// 			component:resolve => require([tmp_page_url+'.vue'], resolve)
// 		}])
// 	},1000)
	
	
	
	
// 
// const router = new VueRouter({
// 	mode: 'history',
// 	routes : routes,
// });

export default router;