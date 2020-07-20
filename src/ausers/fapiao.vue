<template>
	<div class="hello">
		<div class="pchtml"> 
		<headers count="3"></headers>
		<!--搜索-->
		<div class="content center" style="margin-top: 50px;">
			<navs count="2"></navs>
			<div class="right_box">
				<div class="title f20">发票申请</div>
				<div class="ul_list">
					<!-- <form action="/users/invoice/add.html" method="post" id="myForm"> -->
						<li>
							<div class="d1">可申请金额</div>
							<div class="d2"> {{fpdata.pro}} 元</div>
						</li>
						<li>
							<div class="d1">公司名称</div>
							<div class="d2"> <input name="company" type="text" v-model="fpdata.name" placeholder="请输入公司全称"></div>
						</li>
						<li>
							<div class="d1">纳税人识别号</div>
							<div class="d2"><input name="tax_no" type="text" v-model="fpdata.tax" placeholder="请输入企业唯一识别码"></div>
						</li>
						<li>
							<div class="d1">发票邮寄地址</div>
							<div class="d2"><input name="address" type="text" v-model="fpdata.address" placeholder="请输入收件地址"></div>
						</li>
						<li>
							<div class="d1">联系人姓名</div>
							<div class="d2"><input name="name" type="text"  v-model="fpdata.user" placeholder="请输入收件人姓名"></div>
						</li>
						<li>
							<div class="d1">联系电话</div>
							<div class="d2"><input name="tel" type="text"  v-model="fpdata.tel" placeholder="请输入您的收件人电话"></div>
						</li>
						<li>
							<div class="d1">支付费用</div>
							<div class="d2">{{fpdata.sumpro}}元 （税点:0*0.03 = 0元 + 快递费18元）</div>
						</li>
						<li>
							<div class="d1"> &nbsp;</div>
							<div class="d2"><input style="text-align: center;width: 100px;" @click="sumbit" class="cz_btn active" value="立即申请" /></div>
						</li>
					<!-- </form> -->
				</div>
				<tis-txt></tis-txt>
			</div>
		</div>
		<div class="clear"></div>
		<!--底部-->
		<footers></footers>
		</div>
		<div class="waphtml">
			<wap-fapiao></wap-fapiao>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import navs from "../components/navs.vue"
	import tisTxt from "../components/tisTxt.vue"
	import wapFapiao from "../wap/fapiao.vue" 
	export default {
		name: 'users',
		data() {
			return {
				listdata: '',  //列表数据
				fpdata: {
					pro:0,     //可申请金额
					sumpro:18, //支付费用
					name:'',   //公司名称
					tax:'',    //纳税人识别号
					address:'',//发票邮寄地址
					user:'',   //联系人姓名
					tel:''     //联系电话
				}, //发票
			}
		},
		components: {
			'headers': headers,
			'footers': footers,
			'navs': navs,
			'tisTxt':tisTxt,
			'wapFapiao':wapFapiao
		},
		props: {
			data: "发票申请"
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
				console.log(this.fpdata)
			},
			
		}
	}
</script>

<style scoped>
	@import url("../assets/css/package.css");
	@import url("../assets/css/article.css");
	@import url("../assets/css/user.css");
</style>
