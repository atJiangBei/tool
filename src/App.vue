<template>
  <div>
	<div class="body">
		<div>
			<router-view></router-view>
		</div>
	</div>
	<footer>
		
	</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
*{
	margin:0;
	padding:0;
}
html,body{
	min-height: 100%;
}
body{
	overflow: hidden;
}
li{
	list-style: none;
}
a{
	text-decoration: none;
}

.body{
	position: relative;
	>div{
		margin: 0 auto;
		width: 1200px;
		max-width: 100%;
		position: relative;
		background: #fff;
		border-radius: 8px;
	}
}

footer{

}

</style>
