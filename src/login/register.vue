<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="3"></headers>
		<!--登录-->
		<div class="logins">
			<div class="modal_main lrz_muban">
				<div class="t_c mb20"><img src="images/logo3.png" alt=""></div>
				<h1 class="f24 t_c green mb20">注册送会员</h1>
				<h4 class="f12 t_c new_red">注册即送试用，最高可达一个月！</h4>
				<div class="form_list">
					<form action="#" method="post" id="myForm">
						<input type="hidden" name="rec" value="">
					<ul>
						<li><i class="iconfont icon-people"></i><input type="text" name="username" placeholder="请输入用户名"></li>
						<li><i class="iconfont icon-lock"></i><input type="text" name="password" placeholder="请输入密码"></li>
						<li><i class="iconfont icon-mobilephone"></i><input type="text" name="tel" placeholder="请输入密保手机"></li>
						<li><i class="iconfont icon-tools"></i><input type="text" name="captcha" placeholder="图形验证码">
							<span><img src="images/verification.jpg" width="100" alt=""></span>
						</li>
						<li><i class="iconfont icon-mobilephone"></i><input type="text" name="smsCaptcha" placeholder="短信验证码">
						<span>
							<div class="get_yzm">
								<a href="javascript:;" class="tx_d_i_btn get_wx_yzm yzm_btn">获取验证码</a>
								<span id="get_yzm_time">剩余<span>60</span>秒</span>
							</div>
						</span>
						</li>
					</ul>
					<div class="f12 mt20 mb20"><label for="reb"><i class="check_on"></i>我同意 <input type="checkbox" id="reb" checked="" hidden=""></label><a class="reg_agree">《用户注册协议》</a></div>
					<button class="btn form_btn">注 册</button>
					<div class="form_tip t_c f14 mt10"><router-link class="form_log" :to="{name:'login'}">已有账号</router-link></div>
					</form>
				</div>
			</div>
		</div>
		
		<div class="clear"></div>
		<!--底部-->
		</div>
		<div class="waphtml">
			<wap-register></wap-register>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import wapRegister from "../wap/register.vue" 
	export default {
		name: 'register',
		data() {
			return {
				msg: '注册',
				listdata:'', //注册数据
				select:'', //搜索
				shop_show: 0
			}
		},
		components: {
			'headers':headers,
			'footers':footers,
			'wapRegister':wapRegister
		},
		props: {
			data: "注册"
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
