<template>
	<div>
		<div class="section1">
			<div class="container">
				<router-link :to="{name:'index'}"><img src="../assets/wap/images/logo4.png" class="section1_logo" height="30" alt=""></router-link>
				<router-link :to="{name:'purchase'}" class="vip_btn"><img src="../assets/wap/images/hy_3.png" height="12" alt=""> 普通会员</router-link>
				<div class="clear"></div>
				<div class="se1_left">
					<h3>邀请好友注册返利</h3>
					<p>最高可获订单总额20%奖励</p>
				</div>
				<div class="clear"></div>
			</div>
			<img src="../assets/wap/images/pic2.png" class="se1_right" height="85" alt="">
		</div>
		<div class="yuanjiao"></div>
		<div class="section2">
			<div class="se2_list">
				<p>连接数</p>
				<h3>1</h3>
			</div>
			<div class="se2_list">
				<p>到期时间</p>
				<h3>-</h3>
			</div>
			<router-link :to="{name:'purchase'}" class="buy_btn">我要充值</router-link>
			<div class="clear"></div>
		</div>
		<div class="tips1">
			<img src="../assets/wap/images/tip1.png" height="15" alt=""> 多终端数开通，计费方式=套餐单价x连接数。请
			<a href="mqqwpa://im/chat?chat_type=wpa&amp;uin=800193021&amp;version=1&amp;src_type=web&amp;web_src=jiheip.com">联系客服</a>
		</div>
		<div class="down_banner"><a href="#" style="width:100%; height: 100%; display: block"><i class="iconfont icon-xiazai "></i></a></div>
		<div class="section3">
			<div class="container">
				<div class="help_title">产品优势</div>
				<ul class="se3_card">
					<li>
						<h3>独享带宽</h3>
						<p>高带宽主流配置</p>
						<img src="../assets/wap/images/icon1.png" height="40" alt="">
					</li>
					<li>
						<h3>海量IP</h3>
						<p>千万资源布局全国</p>
						<img src="../assets/wap/images/icon2.png" height="40" alt="">
					</li>
					<li>
						<h3>极速连接</h3>
						<p>网络流畅体验畅快</p>
						<img src="../assets/wap/images/icon3.png" height="40" alt="">
					</li>
					<li>
						<h3>高速稳定</h3>
						<p>光速体验安全稳定</p>
						<img src="../assets/wap/images/icon4.png" height="40" alt="">
					</li>
				</ul>
				<div class="clear"></div>
			</div>
		</div>
		<div class="section4">
			<router-link :to="{name:'shezhi'}" class="se4_btn"><img src="../assets/wap/images/icon5.png" height="44" alt=""><br>账号管理</router-link>
			<router-link :to="{name:'dingdan'}" class="se4_btn"><img src="../assets/wap/images/icon6.png" height="44" alt=""><br>充值记录</router-link>
			<router-link :to="{name:'fuwuqi'}" class="se4_btn"><img src="../assets/wap/images/icon7.png" height="44" alt=""><br>线路地址</router-link>
			<a href="mqqwpa://im/chat?chat_type=wpa&amp;uin=800193021&amp;version=1&amp;src_type=web&amp;web_src=jiheip.com" class="se4_btn"><img src="../assets/wap/images/icon8.png" height="44" alt=""><br>在线客服</a>
			<div class="clear"></div>
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
			},
			uptable(e) {
				this.uptab = e
			}
		}
	}
</script>

<style scoped>
	.section1 {
		background: url(../assets/wap/images/bg1.png) no-repeat;
		background-size: cover;
		height: 190px;
	}

	.container {
		width: calc(100% - 24px);
		margin: 0 auto;
		position: relative;
	}

	.se1_right {
		position: absolute;
		right: 0;
		top: 70px;
	}

	.section1_logo {
		float: left;
		margin-top: 12px;
	}

	.vip_btn {
		display: block;
		margin-top: 12px;
		float: right;
		width: 82px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		color: #7d33ea;
		font-size: 12px;
		background-color: #ffffff;
		border-radius: 14px;
		border: solid 1px #7d33ea;
	}

	.clear {
		clear: both;
	}

	.se1_left {
		float: left;
		margin: 20px 0 0 12px;
		color: #fff;
	}

	.se1_left>h3 {
		font-size: 20px;
		font-weight: 500;
		margin-bottom: 12px;
	}

	.se1_left>p {
		font-size: 14px;
		margin-bottom: 16px;
	}

	.se1_left>a {
		display: block;
		width: 90px;
		height: 32px;
		line-height: 32px;
		color: #fff;
		text-align: center;
		background-color: #3bc5ff;
		box-shadow: 0px 2px 5px 0px #3bc5ff;
		border-radius: 16px;
		font-size: 14px;
	}

	.yuanjiao {
		position: relative;
		height: 20px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background: #fff;
		margin-top: -20px;
		z-index: 1;
	}

	.se2_list {
		float: left;
		margin: 0 20px;
	}

	.buy_btn {
		float: right;
		margin: 5px 12px 0 0;
		width: 90px;
		height: 32px;
		line-height: 32px;
		text-align: center;
		background-color: #ff6d5a;
		box-shadow: 0px 2px 10px 0px rgba(255, 109, 90, 0.35);
		border-radius: 16px;
		border: solid 1px #ff6d5a;
		font-size: 14px;
		color: #fff;
	}

	.se2_list>p {
		font-size: 12px;
		color: #999;
		margin-bottom: 12px;
	}

	.se2_list>h3 {
		font-size: 18px;
		letter-spacing: 0;
		font-family: 黑体;
	}

	.tips1 {
		height: 40px;
		line-height: 40px;
		background-color: #f8f8f8;
		font-size: 12px;
		color: #999;
		margin: 6px 0 6px 0;
	}

	.tips1>img {
		vertical-align: middle;
		margin-left: 10px;
		position: relative;
		top: -2px;
	}

	.tips1>a {
		color: #7d33ea;
	}

	.down_banner {
		background: url(../assets/wap/images/down_banner.png) no-repeat;
		background-size: cover;
		height: 81px;
	}

	.help_title {
		font-size: 14px;
		font-weight: 500;
		margin: 15px 0 10px 0;
	}

	.se3_card li {
		position: relative;
		float: left;
		display: block;
		width: calc(50% - 5px);
		height: 76px;
		background-color: #f8f8f8;
		margin-right: 10px;
		margin-bottom: 10px;
	}

	.se3_card li>h3 {
		font-size: 16px;
		font-weight: 500;
		margin: 16px 0 12px 12px;
	}

	.se3_card li>p {
		font-size: 12px;
		color: #999;
		margin: 0 0 0 12px;
	}

	.se3_card li>img {
		position: absolute;
		right: 12px;
		top: 18px;
	}

	.se3_card li:nth-child(even) {
		margin-right: 0;
	}

	.section4 {
		text-align: center;
		padding: 20px 0;
		border-top: 1px solid #eee;
		margin-top: 10px;
	}

	.section4>a {
		float: left;
		display: block;
		width: 25%;
		text-align: center;
		color: #333;
		font-size: 12px;
	}

	.section2 {
		background: #fff;
		padding-bottom: 20px;
	}
</style>
