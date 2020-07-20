<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="3"></headers>
		<!--搜索-->
		<div class="content center" style="margin-top: 50px;">
			<navs count="2"></navs>
			<div class="right_box">
				<div class="title f20">发票列表
					<div class="f_r">
						<div class="d1">未开票总金额: <span>0</span>元</div>
						<div class="d1">已开票总金额: <span>0</span>元</div>
						<router-link :to="{name:'fapiao'}" class="a1">我要开票</router-link>
					</div>
				</div>
				<ul class="table f14 mt20">
					<li class="fb">
						<div class="table_c">申请时间</div>
						<div class="table_c">申请金额</div>
						<div class="table_c">公司名称</div>
						<div class="table_c">当前状态</div>
						<div class="table_c">详细信息</div>
					</li>
				</ul>
				<div class="of_hd">
					<div class="hd_table" v-for="(item,index) in select" :key="index">
						<div class="hd_list">{{item.time}}</div>
						<div class="hd_list">{{item.pro}}</div>
						<div class="hd_list">{{item.name}}</div>
						<div class="hd_list">{{item.tis}}</div>
						<div class="hd_list">{{item.txt}}</div>
					</div>
				</div>
				<tis-txt></tis-txt>
			</div>
		</div>
		<div class="clear"></div>
		<!--底部-->
		<footers></footers>
		</div> <!--  -->
		<div class="waphtml">
			<wap-invoice></wap-invoice>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import navs from "../components/navs.vue"
	import tisTxt from "../components/tisTxt.vue"
	import wapInvoice from "../wap/invoice.vue" 
	export default {
		name: 'users',
		data() {
			return {
				listdata: '', //列表数据
				select: [
					{time:'2020-10-20',pro:'1000',name:'XXX',tis:'交易完成',txt:'无'},
					{time:'2020-10-20',pro:'1000',name:'XXX',tis:'交易完成',txt:'无'},
					{time:'2020-10-20',pro:'1000',name:'XXX',tis:'交易完成',txt:'无'}
				], //搜索
			}
		},
		components: {
			'headers': headers,
			'footers': footers,
			'navs': navs,
			'tisTxt':tisTxt,
			'wapInvoice':wapInvoice
		},
		props: {
			data: "发票列表"
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
