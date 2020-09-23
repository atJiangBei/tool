<template>
	<div>
		<div  class="file-to-base-title">
			文件转换为base64
		</div>
		<div class="file-to-base64">
			<div class="file-control" >
				{{ addText }}
				<input type="file" @dragenter="ondragenter" @dragover="ondragover" @dragleave="ondragleave" @drop="ondrop" @change="fileChange"/>
			</div>
			<div class="file-block">
				<div>
					<span class="btn-copy" @click="copyFn">点击复制</span>
					<span class="btn-shear" @click="cutFn">点击剪切</span>
				</div>
				<textarea :value="baseStr" placeholder="显示" ref="refText"></textarea>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted,ref } from 'vue'
const fileToBase64 = (file)=>{
	var reslove = null;
	var p = new Promise((res)=>{reslove = res;});
	var fileReader = new FileReader();
	fileReader.onload = function(e){
		reslove(e.target.result)
	}
	fileReader.readAsDataURL(file)
	return p;
}
export  default{
	setup(){
		const refText = ref(null)
	
		onMounted(() => {
			console.log(refText) // <div>This is a root element</div>
		})
		const copyFn = ()=>{
			//paste粘贴
			refText.value.select();
			document.execCommand("copy");
		}
		const cutFn =()=>{
			refText.value.select();
			document.execCommand("cut");
		}
		return {
			refText,
			copyFn,
			cutFn
		}
	},
	data(){
		return{
			addText:"点击选择或者拖拽放入文件",
			baseStr:''
		}
	},
	methods:{
		ondragenter(){
			this.addText = "请松开您的小手";
		},
		ondragover(event){
			event.preventDefault();
		},
		ondragleave(){
			this.addText = "点击选择或者拖拽放入文件";
		},
		ondrop(event){
			const file = event.dataTransfer.files[0];
			fileToBase64(file).then(str=>{
				this.baseStr = str;
				this.addText = "点击选择或者拖拽放入文件";
			})
		},
		fileChange(event){
			const target = event.target;
			const file = target.files[0];
			fileToBase64(file).then(str=>{
				this.baseStr = str;
				target.value = '';
				this.addText = "点击选择或者拖拽放入文件";
			})
		}
	}
}
</script>

<style lang="less">
.file-to-base-title{
	line-height: 32px;
	padding: 30px 0;
	font-size: 20px;
	text-align: center;
}
.file-to-base64{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-items: center;
	>div{
		border: 1px solid #f0f0f0;
		cursor: pointer;
		transition: box-shadow .3s,border-color .3s,-webkit-box-shadow .3s;
	}
	>div:hover{
		border-color:transparent;
		box-shadow:0 1px 2px -2px rgba(0,0,0,.16),0 3px 6px 0 rgba(0,0,0,.12),0 5px 12px 4px rgba(0,0,0,.09);
	}
	.file-control{
		height: 300px;
		width: 360px;
		max-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		font-size: 14px;
		>input{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
			cursor: pointer;
		}
	}
	.file-block{
		height: 300px;
		width: 360px;
		max-width: 100%;
		display: flex;
		flex-direction: column;
		>div{
			padding:5px 10px;
			border-bottom: 1px solid #f0f0f0;
		}
		span{
			height: auto;
			margin: 0 8px 0 0;
			padding: 0 7px;
			font-size: 12px;
			line-height: 20px;
			border-radius: 2px;
			cursor: pointer;
			display: inline-block;
			color: #fff;
		}
		.btn-copy{
			background-color: rgb(16, 142, 233);
		}
		.btn-shear{
			background-color: rgb(45, 183, 245);
		}
		textarea{
			flex:1;
			width: 100%;
			border: none;
			outline: none;
			resize: none;
			box-sizing: border-box;
			padding: 10px;
		}
	}
}
</style>
