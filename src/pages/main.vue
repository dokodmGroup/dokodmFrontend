<template>
	<div class="cntr-p" >	
		<div class="t-style cntr-ml">
			{{msg}}
		</div>
    </div>
</template>

<script>
// 	import moment from 'moment';
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
    		
    	},
    }
</script>

<style scoped>
	.t-style{
		background:#283;
	}
</style>
