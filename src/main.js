// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //路由
import api from './requery/api.js'   //axios实例化
import { MessageBox } from 'element-ui'; //模态框动态引入
import ElementUI from 'element-ui';//提示框静态引入
import 'element-ui/lib/theme-chalk/index.css'; //引入样式
import '@/assets/css/iconfont.css';    //引入图标
Vue.config.productionTip = false
Vue.prototype.$api = api   //axios放入全局
// import apiConfig from '../config/api.config' //处理跨域请求
import Json from './Json' //测试用数据
import Axios from 'axios' //接口
import VueAxios from 'vue-axios'
//获取静态json数据
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		resolve(Json[type]);
	})
}
Vue.prototype.$url = {json}; //发布静态方法
Vue.prototype.ElementUI = ElementUI //提示框
Vue.prototype.MessageBox = MessageBox //模态框
Vue.use(VueAxios, Axios,ElementUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
