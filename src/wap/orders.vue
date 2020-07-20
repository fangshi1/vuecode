<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)" class="back_btn"><img src="../assets/wap/images/left.png" height="15" alt=""></a>
			充值记录
			<router-link :to="{name:'fapiao'}" class="right_btn">发票申请</router-link>
		</div>
		<div class="container">
			<div class="buy_list">
				<div class="buy_list_left">
					<h3><img src="../assets/wap/images/tab.png" height="16" alt="">包周会员</h3>
					<p>订单号：2020050914571615986<br>创建时间：2020-05-09 14:57:16</p>
				</div>
				<div class="buy_list_right">
					<div class="zt_pay"><img src="../assets/wap/images/status_04.png"> 未付款</div>
					<h3>￥38.00</h3>
				</div>
				<div class="clear"></div>
			</div>
			<div class="buy_list">
				<div class="buy_list_left">
					<h3><img src="../assets/wap/images/tab.png" height="16" alt="">包周会员</h3>
					<p>订单号：2020050914195543035<br>创建时间：2020-05-09 14:19:55</p>
				</div>
				<div class="buy_list_right">
					<div class="zt_pay"><img src="../assets/wap/images/status_04.png"> 未付款</div>
					<h3>￥38.00</h3>
				</div>
				<div class="clear"></div>
			</div>
			<div class="buy_list">
				<div class="buy_list_left">
					<h3><img src="../assets/wap/images/tab.png" height="16" alt="">包周会员</h3>
					<p>订单号：2020050914183432226<br>创建时间：2020-05-09 14:18:34</p>
				</div>
				<div class="buy_list_right">
					<div class="zt_pay"><img src="../assets/wap/images/status_04.png"> 未付款</div>
					<h3>￥38.00</h3>
				</div>
				<div class="clear"></div>
			</div>
			<div class="tip">
				<div class="tip_title"><img src="images/tip.png" height="15" alt="">温馨提示</div>
				<p>1、如果付款成功，但是订单显示未付款，请您联系客服；
					<br>2、定制会员请联系客服为您开通；
					<br>3、使用其他付款付款方式请联系在线客服：<a href="mqqwpa://im/chat?chat_type=wpa&amp;uin=800193021&amp;version=1&amp;src_type=web&amp;web_src=jiheip.com">800193021</a></p>
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
	}.back_btn {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    height: 44px;
    width: 44px;
    text-align: center;
    line-height: 44px;
}.right_btn {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    height: 44px;
    padding: 0 10px;
    text-align: center;
    line-height: 44px;
    font-size: 12px;
    color: #fff;
}.container {
    width: calc(100% - 24px);
    margin: 0 auto;
    position: relative;
}.buy_list {
    border-bottom: 1px solid #eee;
    padding: 16px 5px;
}.buy_list_left {
    float: left;
}.buy_list_left>h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 14px;
}.buy_list_left>h3>img {
    vertical-align: bottom;
    margin-right: 6px;
}.buy_list_left>p {
    font-size: 12px;
    color: #999;
    line-height: 18px;
}.buy_list_right {
    float: right;
}.buy_list_right .zt_pay {
    float: right;
    width: 60px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-color: #efebfd;
    color: #7d33ea;
    font-size: 12px;
    margin-bottom: 20px;
}.buy_list_right>h3 {
    font-weight: normal;
    font-size: 18px;
    color: #ff6d5a;
}.clear {
    clear: both;
}.tip {
    margin: 40px 0 0 14px;
    font-size: 12px;
}.tip_title {
    color: #7d33ea;
    margin-bottom: 18px;
}.tip_title>img {
    vertical-align: middle;
    margin-right: 8px;
}.tip>p {
    color: #999;
    line-height: 18px;
}.tip>p>a {
    color: #7d33ea;
}
</style>
