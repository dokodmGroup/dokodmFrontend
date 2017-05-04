<template>
	<div class="cntr-p" >	
		<div class="t-style cntr-ml">
			{{msg}}
		</div>
		<button class="btn btn-info" v-on:click="testApi('PUT')">put</button>
		<button class="btn btn-info" v-on:click="testApi('POST')">post</button>
		<button class="btn btn-info" v-on:click="testApi('DELETE')">delete</button>
    </div>
</template>

<script>
// 	import moment from 'moment';
	import xhres6 from '../public/js/xhres6.js';
    export default {
    	components:{
    	},
    	data(){
    		return {
    			msg:'hello vue world'
    		}
    	},
    	mounted(){
    		console.log('main page')
    	},
    	computed:{
    		
    	},
    	updated(){

    	},
    	methods:{
    		testApi(_method){
    			const xhr = new xhres6({
    				method:_method,
					url:'https://api.dokodm.com/',
    			});
    			xhr.then((_rpdata)=>{
    				console.log(_rpdata);
    			})
    		}
    		
    	},
    }
</script>

<style scoped>
	.t-style{
		background:#283;
	}
</style>
