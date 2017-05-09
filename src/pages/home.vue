<template>
	<div>
		i am home page
		<input type="file" ref="files" class="form-control" v-on:change="picOnchange"/>
	</div>
</template>

<script>
	import xhres6 from '../public/js/xhres6.js'
    export default {
    	data(){
    		return {
    			
    		}
    	},
    	mounted(){
    		
    	},
    	computed:{
    		
    	},
    	methods:{
    		picOnchange(e){
//     			console.dir(e);
    			const file = e.target.files[0];
    			console.dir(file);
    			this.uploadFile(file);
    		},
			uploadFile(_file){
				const xhr = new xhres6;
				xhr.put('http://dev.yimentong.sj33333.com/index.php/v3/admin/Image',{
					headers:{
						'Content-Type':'multipart/form-data;'
					},
					data:_file
				})
				.then(function(_rpdata){
					console.dir(_rpdata);
					const { headers, body, xhr_status, xhr} = _rpdata;
					// body this is server response data;
				});
			}
    	},
    }
</script>

<style scoped>
	
</style>
