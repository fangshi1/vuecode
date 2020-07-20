<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="3"></headers>
		<!--搜索-->
		<div class="content center" style="margin-top: 50px;">
			<navs count="0"></navs>
			<div class="right_box">
				<div class="of_hd">
					<div class="u_c_cz">
						<div class="d1 f16">
							<div class="time">
								<div class="text">1 <span style="font-size: 14px"> 个</span></div>
								<div class="title">连接数</div>
							</div>
							<div class="time">
								<div class="text">-</div>
								<div class="title">到期时间</div>
							</div>
							<div class="cz_btn">
								<router-link :to="{name:'purchase'}" class="a1">我要充值</router-link>
								<router-link :to="{name:'dingdan'}" class="a2">充值记录</router-link>
							</div>
						</div>
						<div class="d2 c_hui f14">
							<i class="iconfont icon-tixing f18"></i>
							提示：多终端数开通，计费方式 = 套餐单价 x 连接数。请
							<a href="#" class="c_hei">联系客服</a>
						</div>
					</div>
					<div class="hd_invite white">
						<div class="title f20">
							邀请好友注册</br>
							获取现金返利
						</div>
						<div class="text f12">最高可获订单总额的20%奖励</div>
						<a class="f16">马上邀请</a>
					</div>
				</div>
				<div class="u_c_banner">
					<div class="d1">
						<div class="f24 fb">下载客户端</div>
						<div class="f18 mt20">海量IP · 自建机房 · 一键切换</div>
					</div>
					<a href="#" class="a1"><i class="iconfont icon-xiazai "></i></a>
				</div>
				<div class="tips_icon nav_tab">
					<div class="title">
						<i class="iconfont icon-dingdan"></i><span class="f18 fb">充值记录</span>
					</div>
					<a data-id="3" class="f14">查看更多</a>
				</div>
				<ul class="table f14">
					<li class="fb">
						<div class="table_c">订单号</div>
						<div class="table_c">订单信息</div>
						<div class="table_c">创建时间</div>
						<div class="table_c">金额</div>
						<div class="table_c">订单状态</div>
					</li>
					<li class="table_li" v-for="(item,index) in thdata" :key="index">
						<div class="table_c">{{item.kid}}</div>
						<div class="table_c">{{item.tit}}</div>
						<div class="table_c">{{item.time}}</div>
						<div class="table_c">{{item.sum}}</div>
						<div class="table_c">{{item.tis}}</div>
					</li>

				</ul>
				<div class="tips_icon">
					<div class="title">
						<i class="iconfont icon-bangzhu"></i><span class="f18 fb">使用帮助</span>
					</div>
				</div>
				<div class="u_c_help">
					<a href="#" target="_blank"><i class="iconfont icon-apple"></i>Apple设备使用教程</a>
					<a href="#"><i class="iconfont icon-android"></i>Android使用教程</a>
					<a href="#"><i class="iconfont icon-windows"></i>Windows使用教程</a>
				</div>
			</div>
		</div>
		<div class="clear"></div>
		<!--底部-->
		<footers></footers>
		</div>
		<div class="waphtml">
			<wap-user></wap-user>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import navs from "../components/navs.vue"
	import wapUser from "../wap/user.vue" 
	export default {
		name: 'users',
		data() {
			return {
				listdata: '', //列表数据
				select: '', //搜索
				thdata: [{
						kid: '8888888888',
						tit: '普通会员',
						time: '2020-10-10',
						sum: '1000',
						tis: '交易完成'
					},
					{
						kid: '8888888888',
						tit: '普通会员',
						time: '2020-10-10',
						sum: '1000',
						tis: '交易完成'
					},
					{
						kid: '8888888888',
						tit: '普通会员',
						time: '2020-10-10',
						sum: '1000',
						tis: '交易完成'
					},
					{
						kid: '8888888888',
						tit: '普通会员',
						time: '2020-10-10',
						sum: '1000',
						tis: '交易完成'
					},
					{
						kid: '8888888888',
						tit: '普通会员',
						time: '2020-10-10',
						sum: '1000',
						tis: '交易完成'
					}
				],
			}
		},
		components: {
			'headers': headers,
			'footers': footers,
			'navs': navs,
			'wapUser':wapUser
		},
		props: {
			data: "个人中心"
		},
		created() {
			let that = this
			document.documentElement.scrollTop = 0; //回到顶部
			// console.log("params传参：", this.$route.params);
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
			sumbit() {
				if (this.select) {
					console.log(this.select)
				}
			},

		}
	}
</script>

<style scoped>
	@import url("../assets/css/package.css");
	@import url("../assets/css/article.css");
	@import url("../assets/css/user.css");
</style>
