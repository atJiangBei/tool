import * as VueRouter from 'vue-router'



const routes = [
	{
		path:"/",
		component:()=>import("@/view/nav-home")
	},
	{
		path:"/fileToBase",
		component:()=>import("@/view/file-to-base64")
	}
]


const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes: routes,
})




export default router;