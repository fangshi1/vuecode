<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="3"></headers>
		<!--登录-->
		<div class="logins">
			<div class="modal_main lrz_muban">
				<div class="t_c mb20"><img src="images/logo3.png" alt=""></div>
				<h1 class="f24 t_c green">用户登录</h1>
				<div class="form_list">
					<form action="#" method="post" id="myForm">
					<ul>
						<li><i class="iconfont icon-people"></i><input type="text" name="username" placeholder="请输入您的用户名"></li>
						<li><i class="iconfont icon-lock"></i><input type="password" name="password" placeholder="请输入您的密码"></li>
					</ul>
					<div class="f12 mt20 mb20">
						<label for="reb"><i class="check_on"></i>记住密码<input type="checkbox" id="reb" checked="" hidden=""></label>
					</div>
					<button class="btn form_btn">登 录</button>
					</form>
					<div class="form_tip t_c f14 mt10">
						<router-link class="form_reg" :to="{name:'user'}">用户中心</router-link> 
						<router-link class="form_reg" :to="{name:'register'}">注册用户</router-link> | <router-link class="form_back" :to="{name:'forgot'}">找回密码</router-link>
					</div>
				</div>
			</div>
		</div>
		
		<div class="clear"></div>
		<!--底部-->
		</div>
		<div class="waphtml">
			<wap-login></wap-login>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import wapLogin from "../wap/login.vue" 
	export default {
		name: 'login',
		data() {
			return {
				msg: '用户登录',
				listdata:'', //用户登录数据
				select:'', //搜索
				shop_show: 0
			}
		},
		components: {
			'headers':headers,
			'footers':footers,
			'wapLogin':wapLogin
		},
		props: {
			data: "用户登录"
		},
		created() {
			let that = this
			// this.loadData(); //本地静态json数据
		},
		methods: {
			//静态数据
			async loadData() {
				let that = this
				that.listdata = await that.$url.json('listdata');
				console.log(that.listdata)
			},
			//提交
			sumbit(){
				if(this.select){
					console.log(this.select)
				}
			},
			
		}
	}
</script>

<style scoped>
	@import url("../assets/css/package.css");
	@import url("../assets/css/article.css");
	body{
		background: #fafafa;
	}
</style>
