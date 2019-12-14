/*
	所有路由配置的数组
*/

import MSite from '@/pages/MSite/MSite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/Login'


export default[
	{
		path:'/msite',
		component:MSite,
		meta:{
			footerShow:true
		}
	},
	{
		path:'/search',
		component:Search,
		meta:{
			footerShow:true
		}
	},
	{
		path:'/order',
		component:Order,
		meta:{
			footerShow:true
		}
	},
	{
		path:'/profile',
		component:Profile,
		meta:{
			footerShow:true
		}
	},
	{
		path:'/',
		redirect:'/msite'
	},
	{
		path:'/login',
		component:Login
	}
]