<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)" class="back_btn"><img src="../assets/wap/images/left.png" height="15" alt=""></a>线路地址
		</div>
		<div class="adr_top"></div>
		<div class="container">
			<div class="tips_box">
				<div class="tip_title"><img src="../assets/wap/images/tip.png" height="15" alt="">温馨提示</div>
				<p>如果您使用直连方式连接线路，必须使用以下账号密码，否则会连接失败！<span style="color: red">点击可一键复制</span></p>
				<p style="line-height: 22px;margin-top: 6px">账户： <b class="copy_this">jh_JHTjeVTZ</b>
					<br>密码: <b class="copy_this">7986f7e786c57a313900e15873f1a281</b></p>
			</div>
			<form action="">
				<div class="adr_search">
					<select name="platform" id="platform">
						<option value="0" selected="">请选择使用设备</option>
						<option value="pc">PC电脑</option>
						<option value="ios">苹果系统</option>
						<option value="android">安卓系统</option>
					</select>
					<input type="text" name="keyword" value="" placeholder="请输入省份名称，例如：浙江">
					<button>搜索</button>
				</div>
			</form>
			<ul class="adr_list">
				<li>
					<h3>[荐]连云港电信-3</h3>
					<p class="copy_this">线路IP：61.177.172.64</p>
				</li>
				<li>
					<h3>[普]雅安联通2</h3>
					<p class="copy_this">线路IP：119.6.50.153</p>
				</li>
				<li>
					<h3>[普]雅安联通</h3>
					<p class="copy_this">线路IP：119.6.50.152</p>
				</li>
				<li>
					<h3>[普]雅安联通</h3>
					<p class="copy_this">线路IP：119.6.50.152</p>
				</li>
			</ul>
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

	.adr_top {
		height: 50px;
		background: #856be2;
	}

	.container {
		width: calc(100% - 24px);
		margin: 0 auto;
		position: relative;
	}

	.tips_box {
		height: 120px;
		padding: 15px 18px;
		font-size: 12px;
		margin-top: -50px;
		background: #fff;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
	}

	.tip_title {
		color: #7d33ea;
		margin-bottom: 18px;
	}

	.tips_box>p {
		color: #999;
		line-height: 18px;
	}

	.tips_box>p>b {
		color: #7d33ea;
	}

	.adr_search {
		position: relative;
		height: 48px;
		border: 1px solid #eee;
		margin: 20px 0;
		font-size: 12px;
	}

	.adr_search:before {
		content: '\25BC';
		position: absolute;
		display: block;
		color: #ccc;
		left: 86px;
		top: 15px;
		transform: scale(0.6);
	}

	.adr_search>select {
		position: relative;
		height: 100%;
		width: 104px;
		padding-left: 10px;
		border: none;
		color: #333333;
		background: none;
		font-size: 12px;
		-webkit-appearance: none;
	}

	.adr_search>button {
		display: inline-block;
		float: right;
		height: 100%;
		color: #7d33ea;
		background: none;
		font-weight: 500;
		padding-right: 5px;
	}

	.adr_search>input {
		width: calc(100% - 184px);
		padding-left: 20px;
		border: none;
		color: #333333;
		font-size: 12px;
	}

	.adr_list li {
		display: block;
		float: left;
		width: calc(50% - 5px);
		height: 70px;
		background-color: #f8f8f8;
		border-radius: 4px;
		margin-right: 10px;
		margin-bottom: 10px;
	}

	.adr_list li>h3 {
		position: relative;
		font-weight: 500;
		font-size: 16px;
		margin: 14px 0 12px 16px;
	}

	.adr_list li>p {
		font-size: 12px;
		color: #999;
		margin: 0 0 0 16px;
	}

	.adr_list li:nth-child(even) {
		margin-right: 0;
	}
</style>
