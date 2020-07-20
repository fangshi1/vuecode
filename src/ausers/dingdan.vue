<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="3"></headers>
		<!--搜索-->
		<div class="content center" style="margin-top: 50px;">
			<navs count="3"></navs>
			<div class="right_box">
				<div class="title f20">充值记录</div>
				<ul class="table f14 mt20">
					<li class="fb">
						<div class="table_c">订单号</div>
						<div class="table_c">会员类型</div>
						<div class="table_c">创建时间</div>
						<div class="table_c">金额</div>
						<div class="table_c">订单状态</div>
					</li>
				</ul>
				<div class="of_hd">
					<div class="hd_table" v-for="(item,index) in thdata" :key="index">
						<div class="hd_list">{{item.kid}}</div>
						<div class="hd_list">{{item.tit}}</div>
						<div class="hd_list">{{item.time}}</div>
						<div class="hd_list">{{item.sum}}</div>
						<div class="hd_list">{{item.tis}}</div>
					</div>
				</div>
				<tis-txt></tis-txt>
			</div>
		</div>
		<div class="clear"></div>
		<!--底部-->
		<footers></footers>
		</div>
		<div class="waphtml">
			<wap-orders></wap-orders>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import navs from "../components/navs.vue"
	import tisTxt from "../components/tisTxt.vue"
	import wapOrders from "../wap/orders.vue" 
	export default {
		name: 'users',
		data() {
			return {
				listdata: '', //列表数据
				thdata:[
					{kid:'8888888888',tit:'普通会员',time:'2020-10-10',sum:'1000',tis:'交易完成'},
					{kid:'8888888888',tit:'普通会员',time:'2020-10-10',sum:'1000',tis:'交易完成'},
					{kid:'8888888888',tit:'普通会员',time:'2020-10-10',sum:'1000',tis:'交易完成'},
					{kid:'8888888888',tit:'普通会员',time:'2020-10-10',sum:'1000',tis:'交易完成'},
					{kid:'8888888888',tit:'普通会员',time:'2020-10-10',sum:'1000',tis:'交易完成'}
				],
			}
		},
		components: {
			'headers': headers,
			'footers': footers,
			'navs': navs,
			'tisTxt':tisTxt,
			'wapOrders':wapOrders
		},
		props: {
			data: "充值记录"
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
		}
	}
</script>

<style scoped>
	@import url("../assets/css/package.css");
	@import url("../assets/css/article.css");
	@import url("../assets/css/user.css");
</style>
