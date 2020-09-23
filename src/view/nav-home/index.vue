<template>
	<nav>
		<h3>工具列表</h3>
		<ul class="nav-list">
			<li v-for="item in routePaths" :key="item.path">
				<div>
					<router-link :to="item.path" tag="div">
						<div class="block_img_item"></div>
						<div class="block_text">
							<div class="title">
								{{ item.label }}
							</div>
						</div>
					</router-link>
				</div>
			</li>
		</ul>
	</nav>
</template>

<script>
export default{
	setup(){
		const routePaths = [
			{
				path:"/fileToBase",
				label:"文件转base64"
			},
			{
				path:"/",
				label:"暂无"
			}
		]
		return {
			routePaths
		}
	}
}
</script>

<style lang="less">
	h3{
		font-size: 30px;
		font-weight: 500;
		text-align: center;
		color: #3F3D56;
		margin-bottom: 30px;
	}
.nav-list{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding-bottom: 50px;
	li{
		margin-bottom: 20px;
		>div{
			box-sizing: border-box;
			margin: 0 10px;
			width: 280px;
			border: 1px solid #f0f0f0;
			cursor: pointer;
			transition: box-shadow .3s,border-color .3s,-webkit-box-shadow .3s;
		}
		>div:hover{
			border-color:transparent;
			box-shadow:0 1px 2px -2px rgba(0,0,0,.16),0 3px 6px 0 rgba(0,0,0,.12),0 5px 12px 4px rgba(0,0,0,.09);
			.block_text{
				border-top-left-radius: 50%;
				background: #3959EF;
				.title,.content-text{
					color: #fff;
				}
			}
		}
		.block_img_item{
			width: 220px;
			height: 220px;
			margin: 0 auto;
			padding: 15px 10px;
			background: url(../../assets/imgs/item_bg.svg) no-repeat center;
			background-size: 100% 100%;
		}
		.block_text{
			text-align: center;
			padding: 20px;
			transition: all .3s;
		}
		
		.title{
			line-height: 1.35;
			font-size: 22px;
			font-weight: 400;
			color: #0d1a26;
			margin-bottom: 12px;
			
		}
	}
}
</style>
