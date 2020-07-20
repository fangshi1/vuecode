import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index/index'
import shop from '@/shop/shop'
import xiazai from '@/xiazai/xiazai'
import about from '@/about/about'
import bangzhu from '@/bangzhu/bangzhu'
import list from '@/list/list'
import desc from '@/desc/desc'
import n404 from '@/components/n404'
import login from '@/login/login'
import forgot from '@/login/forgot'
import register from '@/login/register'
import asuser from '@/ausers/index'
import purchase from '@/ausers/purchase'
import jinbi from '@/ausers/jinbi'
import dingdan from '@/ausers/dingdan'
import fuwuqi from '@/ausers/fuwuqi'
import shezhi from '@/ausers/shezhi'
import fapiao from '@/ausers/fapiao'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
    	  title: '逍遥代理',
    	  keepAlive: true, // 需要被缓存
      }
    },
    {
    	path: '/shop',
    	name: 'shop',
    	component: shop,
    	meta: {
    		  title: '套餐购买',
    		  keepAlive: true, // 需要被缓存
    	}
    },
	{
		path: '/xiazai',
		name: 'xiazai',
		component: xiazai,
		meta: {
			  title: '软件下载',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/bangzhu',
		name: 'bangzhu',
		component: bangzhu,
		meta: {
			  title: '帮助中心',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/about',
		name: 'about',
		component: about,
		meta: {
			  title: '关于我们',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/list/:cid',
		name: 'list',
		component: list,
		meta: {
			  title: '列表',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/desc/:id',
		name: 'desc',
		component: desc,
		meta: {
			  title: '详情',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/login',
		name: 'login',
		component: login,
		meta: {
			  title: '登录',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/forgot',
		name: 'forgot',
		component: forgot,
		meta: {
			  title: '忘记密码',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/register',
		name: 'register',
		component: register,
		meta: {
			  title: '注册',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/user',
		name: 'user',
		component: asuser,
		meta: {
			  title: '用户中心',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/purchase',
		name: 'purchase',
		component: purchase,
		meta: {
			  title: '开通会员',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/jinbi',
		name: 'jinbi',
		component: jinbi,
		meta: {
			  title: '发票申请',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/dingdan',
		name: 'dingdan',
		component: dingdan,
		meta: {
			  title: '订单管理',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/shezhi',
		name: 'shezhi',
		component: shezhi,
		meta: {
			  title: '账号管理',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/fuwuqi',
		name: 'fuwuqi',
		component: fuwuqi,
		meta: {
			  title: '主机地址',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
		path: '/fapiao',
		name: 'fapiao',
		component: fapiao,
		meta: {
			  title: '开票',
			  keepAlive: true, // 需要被缓存
		}
	},
	{
	    path: '/404',
	    name: '404',
	    component: n404
	}
		
  ],
	 mode:'history'
})
router.afterEach(route => {
  // 从路由的元信息中获取 title 属性
  if (route.meta.title) {
    document.title = route.meta.title;
    // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      const hackIframe = document.createElement('iframe');
      hackIframe.style.display = 'none';
      hackIframe.src = '/static/html/fixIosTitle.html?r=' + Math.random();
      document.body.appendChild(hackIframe);
      setTimeout(_ => {
        document.body.removeChild(hackIframe)
      }, 300)
    }
  }
});
 router.beforeEach((to, from, next) => {
   if (to.matched.length === 0) { //匹配前往的路由不存在
     from.name ? next({
       name: from.name
     }) : next('/404'); //判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
   } else {
     next(); //如果匹配到正确跳转
   }
 });
export default router;
