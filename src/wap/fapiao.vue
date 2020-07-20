<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)" class="back_btn"><img src="../assets/wap/images/left.png" height="15" alt=""></a>发票申请
		</div>
		<div class="container">
			<form action="/users/invoice/add.html" method="post" id="myForm">
				<div class="buy_input">
					<span class="buy_input_left">可申请金额</span>
					<span class="buy_input_right green">0 元</span>
				</div>
				<div class="buy_input">
					<span class="buy_input_left">公司名称</span>
					<span class="buy_input_right"><input type="text" name="company" placeholder="请输入公司全称"></span>
				</div>
				<div class="buy_input">
					<span class="buy_input_left">纳税人识别号</span>
					<span class="buy_input_right"><input type="text" name="tax_no" placeholder="请输入企业唯一识别码"></span>
				</div>
				<div class="buy_input">
					<span class="buy_input_left">发票邮寄地址</span>
					<span class="buy_input_right"><input type="text" name="address" placeholder="请输入收件地址"></span>
				</div>
				<div class="buy_input">
					<span class="buy_input_left">联系人姓名</span>
					<span class="buy_input_right"><input name="name" type="text" value="" placeholder="请输入收件人姓名"></span>
				</div>
				<div class="buy_input">
					<span class="buy_input_left">联系电话</span>
					<span class="buy_input_right"><input name="tel" type="text" value="13288387329" placeholder="请输入您的收件人电话"></span>
				</div>
				<div class="buy_input">
					<span class="buy_input_left">支付费用</span>
					<span class="buy_input_right red">18元 </span>
				</div>
				<span style="font-size: 13px; float: right">费用明细：税点:0*0.03 = 0元 + 快递费18元</span>
				<button class="main_btn">立即申请</button>
			</form>
			<div class="tip">
				<div class="tip_title"><img src="../assets/wap/images/tip.png" height="15" alt="">温馨提示</div>
				<p>
					1、如果付款成功，但是订单显示未付款，请您联系客服；
					<br>2、定制会员请联系客服为您开通；
					<br>3、使用其他付款付款方式请联系在线客服：
					<a href="mqqwpa://im/chat?chat_type=wpa&amp;uin=800193021&amp;version=1&amp;src_type=web&amp;web_src=jiheip.com">800193021</a>
				</p>
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
	.header {
		position: relative;
		height: 44px;
		line-height: 44px;
		text-align: center;
		background-color: #856be2;
		color: #fff;
		font-size: 16px;
	}

	.inv_top {
		height: 72px;
		background: #856be2;
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

	.container {
		width: calc(100% - 24px);
		margin: 0 auto;
		position: relative;
	}

	.buy_input {
		font-size: 14px;
		border-bottom: 1px solid #eee;
		padding: 0 5px;
		height: 54px;
		line-height: 54px;
		font-weight: 500;
	}

	.buy_input_left {
		float: left;
	}

	.green {
		color: #7d33ea;
	}

	.buy_input_right {
		float: right;
		text-align: right;
	}

	.buy_input_right>input {
		display: inline-block;
		width: 100%;
		text-align: right;
		background: none;
		border: none;
	}

	.red {
		color: #ff6d5a;
	}

	.main_btn {
		margin-top: 30px;
		width: 100%;
		height: 40px;
		background-color: #856be2;
		border-radius: 2px;
		color: #fff;
		font-size: 16px;
		text-align: center;
		line-height: 40px;
	}

	.tip {
		margin: 40px 0 0 0px;
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
</style>
