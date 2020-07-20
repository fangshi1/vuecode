<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)" class="back_btn"><img src="../assets/wap/images/left.png" height="15" alt=""></a>账号管理
		</div>
		<div class="inv_top">
			<img src="../assets/wap/images/user_icon.png" height="28" class="fp_icon" alt="">
			<div class="inv_data">
				<p>我的账户</p>
				<h3>13288387329</h3>
			</div>
			<a href="index.html" class="exit_btn">退出登录</a>
			<div class="clear"></div>
		</div>
		<div class="container">
			<div class="acc_card">
				<img src="../assets/wap/images/acc1.png" width="28" alt="">
				<h3>登录密码</h3>
				<p>建议定期更改密码以保护账户安全</p>
				<a href="javascript:;" @click="popout('0')" class="xg_btn set_password">修改密码</a>
			</div>
			<div class="acc_card">
				<img src="../assets/wap/images/acc2.png" width="28" alt="">
				<h3>密保邮箱</h3>
				<p>未填写</p>
				<a href="javascript:;" @click="popout('1')" class="xg_btn set_email">新增</a>
			</div>
			<div class="acc_card">
				<img src="../assets/wap/images/acc3.png" width="28" alt="">
				<h3>收款信息</h3>
				<p>未填写</p>
				<a href="javascript:;" @click="popout('2')" class="xg_btn set_name">新增</a>
			</div>
			<div class="tip">
				<div class="tip_title"><img src="../assets/wap/images/tip.png" height="15" alt="">注意事项</div>
				<p>
					1、密码要牢记在心里，不要透露给别人；
					<br>2、如果忘记了密码，可以通过邮箱找回；
					<br>3、收款信息请认真填写，只能填写一次；
					<br>4、如需帮助请联系在线客服：
					<a href="mqqwpa://im/chat?chat_type=wpa&amp;uin=800193021&amp;version=1&amp;src_type=web&amp;web_src=jiheip.com">800193021</a>
				</p>
			</div>
		</div>
		<!--弹框-->
		<div :class="poutTop ? 'popout poutTop': 'popout' " >
			<div class="poutcolor" @click="rempout()"></div>
			<div class="poutBox" v-show="borde[0].up">
				<form action="" method="post">
					<input class="poutinp" type="text" name="oldpass" id="oldpass" value="" placeholder="请输入旧密码" />
					<input class="poutinp" type="text" name="newpass" id="newpass" value="" placeholder="请输入新密码" />
					<input class="poutinp" type="text" name="confirmpass" id="confirmpass" value="" placeholder="请输入确认新密码" />
					<input class="poutsum" @click="sumbits('0')" type="button" value="确定" />
					<input class="poutrem" @click="rempout()" type="button" value="取消" />
				</form>
			</div>
			<div class="poutBox" v-show="borde[1].up">
				<form action="" method="post">
					<h2 class="poutH2">请输入您的密保邮箱</h2>
					<div class="poutdesc">
						密保邮箱用于找回密码，请认真填写
					</div>
					<input class="poutinp" type="text" name="email" id="email" value="" placeholder="请输入邮箱" />
					<input class="poutsum" @click="sumbits('1')" type="button" value="确定" />
					<input class="poutrem" @click="rempout()" type="button" value="取消" />
				</form>
			</div>
			<div class="poutBox" v-show="borde[2].up">
				<form action="" method="post">
					<h2 class="poutH2">请输入收款信息</h2>
					<input class="poutinp" type="text" name="realname" id="realname" value="" placeholder="请输入真实姓名" />
					<input class="poutinp" type="text" name="alipay" id="alipay" value="" placeholder="请输入支付宝账号" />
					<input class="poutsum" @click="sumbits('2')" type="button" value="确定" />
					<input class="poutrem" @click="rempout()" type="button" value="取消" />
				</form>
			</div>
		</div>
		
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
				zhuce: false,
				zfmorn: 'alipay',
				agree: false,
				lx_check: 0,
				poutTop:false,
				borde:[{up:true},{up:false},{up:false}],
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
			popout(w) {
				this.poutTop=true
				this.borde=this.borde.filter(val => {
					val.up=false
					return val
				})
				this.borde[w].up=true
				var y= 1;
				if (function f(){}) {
					y += typeof f;
					}
					console.log(y); 
			},
			rempout(){
				this.poutTop=false
			},
			xz_btn() {
				this.zhuce = !this.zhuce
			},
			yzmimg(e) {
				var timestamp = new Date().getTime();
				this.erimg = e + "?t=" + timestamp
			},
			getPackage(e) {
				this.lx_check = e
			},
			zfdata(e) {
				this.zfmorn = e
			},
			setgou() {
				this.agree = !this.agree
			}
		}
	}
</script>

<style scoped>
	.header {
		position: relative;
		height: 44px;
		line-height: 44px;
		text-align: center;
		background-color: #856be2;
		color: #fff;
		font-size: 16px;
	}

	.back_btn {
		position: absolute;
		left: 0;
		top: 0;
		display: block;
		height: 44px;
		width: 44px;
		text-align: center;
		line-height: 44px;
	}

	.inv_top {
		height: 72px;
		background: #856be2;
	}

	.fp_icon {
		float: left;
		margin: 22px 30px 0 16px;
	}

	.inv_data {
		float: left;
		margin: 16px 30px 0 0;
		color: #fff;
	}

	.inv_data>p {
		font-size: 12px;
		opacity: 0.8;
		margin-bottom: 12px;
	}

	.inv_data>h3 {
		font-size: 18px;
		font-weight: 500;
		font-family: Arial;
	}

	.exit_btn {
		display: block;
		float: right;
		width: 90px;
		height: 32px;
		line-height: 32px;
		text-align: center;
		font-size: 14px;
		border: 1px solid rgba(255, 255, 255, 0.6);
		border-radius: 16px;
		color: #fff;
		margin: 22px 12px 0 0;
	}

	.clear {
		clear: both;
	}

	.container {
		width: calc(100% - 24px);
		margin: 0 auto;
		position: relative;
	}

	.acc_card {
		position: relative;
		margin-bottom: 12px;
		height: 80px;
		background-color: #f8f8f8;
		border-radius: 4px;
		border: solid 1px #eeeeee;
		margin-top: 12px;
	}

	.acc_card>img {
		position: absolute;
		left: 20px;
		top: 27px;
	}

	.acc_card>h3 {
		margin: 20px 0 0 64px;
	}

	.acc_card>p {
		margin: 12px 0 0 64px;
		font-size: 12px;
		color: #999;
	}

	.xg_btn {
		position: absolute;
		right: 15px;
		top: 26px;
		display: block;
		width: 65px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		background-color: #7c26e9;
		border-radius: 2px;
		color: #fff;
		font-size: 12px;
		font-weight: 500;
	}

	.tip {
		margin: 40px 0 0 14px;
		font-size: 12px;
	}

	.tip_title {
		color: #7d33ea;
		margin-bottom: 18px;
	}

	.tip>p {
		color: #999;
		line-height: 18px;
	}

	.tip_title>img {
		vertical-align: middle;
		margin-right: 8px;
	}

	.tip>p>a {
		color: #7d33ea;
	}
	.popout {
		/*background-color: rgba(0, 0, 0, 0.4);*/
		display: none;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		/* padding: 10px; */
		/*background-color: transparent;*/
		z-index: 1060;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
	}
	
	.poutcolor {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.4);
		height: 100vh;
		width: 100%;
	}
	
	.poutBox {
		display: block;
		position: relative;
		flex-direction: column;
		justify-content: center;
		width: 80%;
		max-width: 100%;
		padding: 25px;
		border-radius: 0.3125em;
		background: #fff;
		font-family: inherit;
		font-size: 1rem;
		box-sizing: border-box;
		z-index: 888;
		top: -50vh;
		-webkit-transition: all 0.3s linear;
		-moz-transition: all 0.3s linear;
		-o-transition: all 0.3s linear;
		transition: all 0.3s linear;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.poutinp {
		width: 100%;
		transition: border-color .3s, box-shadow .3s;
		border: 1px solid #d9d9d9;
		border-radius: 0.1875em;
		font-size: 1.125em;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);
		box-sizing: border-box;
		height: 2.625em;
		padding: 0 0.75em;
		margin: 0.45em 0;
	}
	
	.poutsum {
		border: 0;
		border-radius: 0.25em;
		background: initial;
		background-color: #9271ff;
		color: #fff;
		font-size: 1.0625em;
		margin: 1em .3125em .3125em .3125em;
		padding: .75em 2em;
		font-weight: 500;
		box-shadow: none;
		cursor: pointer;
		float: left;
		width: 100px;
		box-sizing: border-box;
		text-align: center;
	}
	
	.poutrem {
		border: 0;
		border-radius: 0.25em;
		background: initial;
		background-color: #AAAAAA;
		color: #fff;
		font-size: 1.0625em;
		margin: 1em .3125em .3125em .3125em;
		padding: .75em 2em;
		font-weight: 500;
		box-shadow: none;
		cursor: pointer;
		float: right;
		width: 100px;
		box-sizing: border-box;
		text-align: center;
	}
	
	.poutsum:hover {
		background-color: #7C38C7;
	}
	
	.upbody .popout {
		display: flex !important;
	}
	
	.poutTop {
		width: 100%;
		position: fixed;
		top: 0 !important;
		height: 100vh;
		z-index: 9999;
		display: block;
	}
	
	.hello {
		background: #fafafa;
	}
	
	.poutTop .poutBox {
		top: 30vh;
	
	}

</style>
