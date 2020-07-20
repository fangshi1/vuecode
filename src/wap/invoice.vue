<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)" class="back_btn"><img src="../assets/wap/images/left.png" height="15" alt=""></a>发票列表
		</div>
		<div class="inv_top">
			<img src="../assets/wap/images/fp_icon.png" height="28" class="fp_icon" alt="">
			<div class="inv_data">
				<p>未开票金额</p>
				<h3>0</h3>
			</div>
			<div class="inv_data">
				<p>已开票金额</p>
				<h3>0</h3>
			</div>
			<router-link :to="{name:'fapiao'}" class="fp_btn">我要开票</router-link>
			<div class="clear"></div>

		</div>
		<ul class="table f14">
			<li class="fb">
				<div class="table_c">申请时间</div>
				<div class="table_c">申请金额</div>
				<div class="table_c">公司名称</div>
				<div class="table_c">当前状态</div>
				<div class="table_c">详细信息</div>
			</li>
		</ul>
		<div class="of_hd">
			<div class="hd_table">
				<div class="hd_list">10-20</div>
				<div class="hd_list">1000</div>
				<div class="hd_list">XXX</div>
				<div class="hd_list">交易完成</div>
				<div class="hd_list">无</div>
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

	.fp_btn {
		display: block;
		float: right;
		width: 90px;
		height: 32px;
		line-height: 32px;
		text-align: center;
		font-size: 14px;
		background-color: #fcc017;
		box-shadow: 0px 2px 10px 0px rgba(252, 192, 23, 0.35);
		border-radius: 16px;
		color: #fff;
		margin: 22px 12px 0 0;
	}

	.clear {
		clear: both;
	}
	.table {
	    display: table;
	    border: 1px #e9eaec solid;
	    width: 100%;
	}.f14 {
    font-size: 14px;
}.mt20 {
    margin-top: 20px;
}.table li:nth-child(2n+1) {
    background: #f8f8f8;
}.table li {
    display: table-row;
    height: 48px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}.fb {
    font-weight: bold;
}.table .table_c {
    display: table-cell;
    padding: 10px 20px;
    line-height: 1.5;
    vertical-align: middle;
    word-break: break-all;
    width: 20%;
}.of_hd {
    overflow: hidden;
}.hd_table {
    display: block;
    height: auto;
    overflow: hidden;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}.hd_list {
    float: left;
    width: 20%;
    padding: 17px 5px;
	text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #999;
    font-size: 12px;
}
	
</style>
