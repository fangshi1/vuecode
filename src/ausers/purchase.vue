<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="3"></headers>
		<!--搜索-->
		<div class="content center" style="margin-top: 50px;">
			<navs count="1"></navs>
			<div class="right_box">
				<form action="/users/purchase" method="post" id="myForm">
					<input type="hidden" name="id" value="27">
					<input type="hidden" name="promo_code" value="">
					<input type="hidden" name="channels" value="alipay">
					<div class="title f20">开通会员</div>
					<div class="ul_list member">
						<ul>
							<li class="clear">
								<div class="d1">会员类型</div>
								<div class="d2">
									<div class="select_tab member_type">
										<div @click="agetPackage(item,index)" v-for="(item,index) in getPackage" :key="index" :class="actPackage == index ? 'item active':'item'" style="position: relative;">
											<img src="../assets/images/hy_1.png" alt="">
											<span>{{item.title}}</span>
										</div>
									</div>
								</div>
							</li>
							<li class="clear">
								<div class="d1">选择套餐</div>
								<div class="d2">
									<div class="select_tab member_taocan" id="goods">
										<div onclick="getPackageInfo(this)" class="item active">
											<span>{{titles}}</span>
										</div>
									</div>
								</div>
							</li>
							<li class="clear">
								<div class="d1">使用时长</div>
								<div class="d2 f14">
									<div class="time">
										<span class="f24" id="days">{{auday}}</span> 天 （
										<span id="info">经济型首选</span>）
									</div>
								</div>
							</li>
							<li class="clear">
								<div class="d1">支付金额</div>
								<div class="d2 c_red">
									<div class="money">￥<span class="f24" id="price">{{aupre}}</span>元</div>
								</div>
							</li>
							<li class="clear">
								<div class="d1">支付方式</div>
								<div class="d2">
									<div class="select_tab select_zhifu">
										<div @click="zfalipay('alipay')" :class="zfage == 'alipay' ? 'item active':'item'">
											<img src="../assets/images/zfb_s.png" alt="">
											<span>支付宝扫码</span>
										</div>
										<div @click="zfalipay('weixin')" :class="zfage == 'weixin' ? 'item active':'item'">
											<img src="../assets/images/wx_s.png" alt="">
											<span>微信扫码</span>
										</div>
									</div>
								</div>
							</li>
							<li class="last">
								<div class="d1">&nbsp;</div>
								<div class="d2 ">
									<div class="check_box">
										<div class="check">
											<div @click="check_div" :class="actcheck ? 'check_div active':'check_div'">
												<i class="iconfont icon-right"></i>
											</div>
											<span>同意</span>
										</div>
										<a href="#" class="c_lv">《逍遥代理购买须知》</a>
									</div>
									<input data-type="alipay" type="button" id="sumbit" class="cz_btn active" value="立即支付" />
								</div>
							</li>
						</ul>
					</div>
				</form>

			</div>
		</div>
		<div class="clear"></div>
		<!--底部-->
		<footers></footers>
		</div>
		<div class="waphtml">
			<wap-purchase></wap-purchase>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import navs from "../components/navs.vue"
	import wapPurchase from "../wap/purchase.vue" 
	
	export default {
		name: 'users',
		data() {
			return {
				listdata: '', //列表数据
				select: '', //搜索
				getPackage:[
					{title:'包周特惠',pre:'38.00',day:'7'},
					{title:'包月特惠',pre:'138.00',day:'30'},
					{title:'包季特惠',pre:'438.00',day:'180'},
					{title:'包年特惠',pre:'1138.00',day:'360'}
				],
				zfage:'alipay', //支付
				titles:'包周特惠',
				actcheck:false, //协议
				auday:'7',
				aupre:'38.00',
				actPackage:0,
			}
		},
		components: {
			'headers': headers,
			'footers': footers,
			'navs': navs,
			'wapPurchase':wapPurchase
		},
		props: {
			data: "开通会员"
		},
		created() {
			let that = this
			document.documentElement.scrollTop = 0; //回到顶部
			// console.log("params传参：", this.$route.params);
			// this.loadData(); //本地静态json数据
		},

		methods: {
			//会员选择
			agetPackage(e,i){
				this.actPackage=i
				this.titles=e.title
				this.auday=e.day
				this.aupre=e.pre
			},
			//支付选择
			zfalipay(e){
				this.zfage=e
			},
			//协议
			check_div(){
				this.actcheck=!this.actcheck
			},
			//静态数据
			async loadData() {
				let that = this
				that.listdata = await that.$url.json('listdata');
				console.log(that.listdata)
			},
			//提交
			sumbit() {
				if (this.select) {
					console.log(this.select)
				}
			}
			
		}
	}
</script>

<style scoped>
	@import url("../assets/css/package.css");
	@import url("../assets/css/article.css");
	@import url("../assets/css/user.css");
</style>
