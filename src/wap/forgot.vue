<template>
	<div>
		<div class="login_logo">
			<router-link :to="{name:'index'}"><img src="../assets/wap/images/login_logo.png" height="120" alt=""></router-link>
		</div>
		<div class="log_tab"><router-link :to="{name:'forgot'}">找回密码</router-link></div>
		<form action="/forgot" method="post" id="myForm">
			<div class="log_input"><input type="text" name="tel" placeholder="请输入手机号"></div>
			<div class="log_input"><input type="text" name="password" placeholder="请输入密码"></div>
			<div class="log_input">
				<input type="text" name="captcha" placeholder="图形验证码">
				<span class="pic_yz">
					<img :src="erimg ? erimg :'https://i.jiheip.com/captcha.html'" @click="yzmimg('https://i.jiheip.com/captcha.html')" class="yzm" width="100" alt="">
				</span>
			</div>
			<div class="log_input">
				<input type="text" name="smsCaptcha" placeholder="短信验证码">
				<span class="get_yzm">
					<a href="javascript:;" onclick="getCaptcha()" class="tx_d_i_btn get_wx_yzm yzm_btns">获取验证码</a>
					<span id="get_yzm_time">剩余<i>60</i>秒</span>
				</span>
			</div>
			<button class="check_btn">立即重置</button>
		</form>
		<div class="forget_link"><router-link :to="{name:'login'}">返回登录</router-link></div>
	</div>

</template>

<script>
	export default {
		name: 'headers',
		props: {
			count: {},
			indclass: {}
		},
		data() {
			return {
				indexdata: [],
				uptab: 0,
				erimg:'',
				
			}
		},
		created() {
			this.loadData(); //本地静态json数据
		},
		
		methods: {
			async loadData() {
				let that = this
				that.data = await that.$url.json('header');
				that.logo_n = that.data.logo.logo_n
				that.logo_s = that.data.logo.logo_s
				that.title = that.data.logo.title
			},
			uptable(e) {
				this.uptab = e
			},
			yzmimg(e){
				var timestamp=new Date().getTime();
				this.erimg=e+"?t="+timestamp
			}
		}
	}
</script>

<style scoped>
	.login_logo {
		text-align: center;
		margin: 36px 0 48px 0;
	}
	
	.log_tab {
		margin-bottom: 34px;
	}
	
	.log_tab a {
		position: relative;
		font-size: 20px;
		font-weight: 500;
		margin-left: 30px;
		color: #4d4d4d;
	}
	
	.log_check {
		color: #7d33ea !important;
	}
	
	.log_check:before {
		content: '';
		display: block;
		position: absolute;
		left: 10px;
		top: 30px;
		width: 20px;
		height: 4px;
		background-color: #7d33ea;
		border-radius: 2px;
	}
	
	.log_input {
		position: relative;
		height: 40px;
		width: calc(100% - 60px);
		margin: 0 auto 20px auto;
		background-color: #ffffff;
		border-radius: 2px;
		border: solid 1px #e5e5e5;
	}
	
	.log_input input {
		height: 100%;
		padding: 0 10px;
		width: calc(100% - 20px);
		background: none;
		border: none;
		font-size: 14px;
		color: #333333;
	}
	
	.check_btn {
		display: block;
		color: #fff;
		width: calc(100% - 60px);
		height: 40px;
		line-height: 40px;
		margin: 30px auto 12px auto;
		text-align: center;
		background-color: #856be2;
		border-radius: 2px;
	}
	
	.forget_link {
		text-align: center;
		font-size: 12px;
	}
	
	.forget_link>a {
		color: #856be2;
	}
	
	.pic_yz {
		position: absolute;
		right: 2px;
		top: 2px;
	}
	
	.get_yzm {
		width: 100px;
		position: absolute;
		right: 2px;
		top: -2px;
		float: right;
		border-left: 1px rgba(255, 255, 255, 0.2) solid;
		height: 24px;
		line-height: 24px;
		text-align: center;
	}
	
	.get_yzm .tx_d_i_btn {
		font-size: 12px;
		color: #856be2;
		letter-spacing: 1px;
		transition: all 0.3s ease;
	}
	
	.yzm_btns {
		display: block;
		position: absolute;
		top: 12px;
		right: 10px;
		color: #7d33ea;
		font-size: 12px;
		font-weight: 500;
	}
	
	.get_yzm span {
		display: none;
		width: 62px;
		height: 26px;
		line-height: 24px;
		background-color: transparent;
		text-align: center;
		color: #856be2;
		font-size: 12px;
	}
	
	.log_agree {
		text-align: center;
		font-size: 12px;
		color: #999;
		margin-top: 30px;
	}
	
	.log_agree>a {
		color: #7d33ea;
	}
</style>
