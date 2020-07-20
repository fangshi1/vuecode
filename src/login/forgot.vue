<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="3"></headers>
		<!--登录-->
		<div class="logins">
			<div class="modal_main lrz_muban">
				<div class="t_c mb20"><img src="images/logo3.png" alt=""></div>
				<h1 class="f24 t_c green">找回密码</h1>
				<div class="form_list">
					<form action="#" method="post" id="myForm">
					<ul>
						<li><i class="iconfont icon-people"></i><input type="text" name="username" placeholder="请输入您的用户名"></li>
						<li><i class="iconfont icon-mobilephone"></i><input type="text" name="tel" placeholder="请输入您的密保手机"></li>
						<li>
							<i class="iconfont icon-tools"></i><input type="text" name="captcha" placeholder="图形验证码">
							<span><img src="images/verification.jpg" width="100" alt=""></span>
						</li>
						<li>
							<i class="iconfont icon-mobilephone"></i><input type="text" name="smsCaptcha" placeholder="短信验证码">
							<span>
								<div class="get_yzm">
									<a href="javascript:;" class="tx_d_i_btn get_wx_yzm yzm_btn">获取验证码</a>
									<span>剩余<span>60</span>秒</span>
								</div>
							</span>
						</li>
						<li><i class="iconfont icon-lock"></i><input type="text" name="password" placeholder="请输入新密码"></li>
					</ul>
					<button class="btn form_btn mt20 mb10">立即重置</button>
					</form>
					<div class="form_tip t_c f14 mt10"><router-link class="form_reg" :to="{name:'login'}">返回登陆</router-link></div>
				</div>
			</div>
		</div>
		
		<div class="clear"></div>
		<!--底部-->
		</div>
		<div class="waphtml">
			<wap-forgot></wap-forgot>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import wapForgot from "../wap/forgot.vue"
	export default {
		name: 'forgot',
		data() {
			return {
				msg: '忘记密码',
				listdata:'', //列表数据
				select:'', //搜索
				shop_show: 0
			}
		},
		components: {
			'headers':headers,
			'footers':footers,
			'wapForgot':wapForgot
		},
		props: {
			data: "忘记密码"
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
