<template>
	<div>
		<div class="login_logo">
			<router-link :to="{name:'index'}"><img src="../assets/wap/images/login_logo.png" height="120" alt=""></router-link>
		</div>
		<div class="log_tab">
			<router-link class="log_check" :to="{name:'login'}">登录</router-link>
			<router-link class="reg_tip" :to="{name:'register'}">注册</router-link>
		</div>
		<form action="/login" method="post" id="myForm">
			<div class="log_input"><input type="text" name="username" placeholder="请输入用户名"></div>
			<div class="log_input"><input type="password" name="password" placeholder="请输入密码"></div>
			<button class="check_btn">登 录</button>
		</form>
		<router-link class="form_reg" :to="{name:'user'}">用户中心</router-link>
		<div class="forget_link"><router-link :to="{name:'forgot'}">忘记密码</router-link></div>
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
</style>
