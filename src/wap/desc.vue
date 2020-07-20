<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)" class="back_btn"><img src="../assets/wap/images/left.png" height="15" alt=""></a>帮助中心
		</div>
		<div class="container">
			<div class="main_news">
				<h3>更换ip地址的软件</h3>
				<p>
					<div>
						<span style="font-size:16px;">&nbsp; &nbsp; &nbsp;
							更换ip地址的软件，首选肯定是逍遥代理ip软件实际在现在的市面上以及存在非常多，但，由于产品的多样性，大家在选择上也是没有参考，那么今天我就给大家说下怎么选择更换ip地址的软件；</span></div>
					<div>
						&nbsp;</div>
					<div>
						<span style="font-size: 16px;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-size:16px;">前面我已经给大家讲过《换ip软件哪个好？》，那么，本文更深入解读：</span></div>
					<div>
						&nbsp;</div>
					<div>
						<span style="font-size: 16px;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-size:16px;">目前市面主流的代理IP还可以分免费代理IP和收费代理IP，免费这里就不说了，正所谓，免费的就是最贵的，自行体会；那么，主力说说付费的：</span><br />
						&nbsp;
					</div>
					<div>
						<span style="font-size: 16px;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-size:16px;">付费的，也会存在高低，那么是选择高的，还是低的？</span><br />
						&nbsp;
					</div>
					<div>
						<span style="font-size: 16px;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-size:16px;">现在很多更换ip地区的软件，推出非常多的套餐，例如，逍遥动态ip软件，其中，高级会员，超级会员。</span><br />
						&nbsp;
					</div>
					<div>
						<span style="font-size: 16px;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-size:16px;">高级会员包含：动态+静态+直连线路</span><br />
						&nbsp;
					</div>
					<div>
						<span style="font-size: 16px;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-size:16px;">超级会员包含：动态+静态+直连+秒连线路</span><br />
						&nbsp;
					</div>
					<div>
						<span style="font-size: 16px;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-size:16px;">从套餐的展示，就能直观的看到区别，在到线路的使用，就能更直观的体会到速度的差别；</span></div>
					<div>
						&nbsp;</div>
					<div>
						<span style="font-size: 16px;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-size:16px;">在来看看更换ip地址软件的基本功能，这里还是以逍遥代理ip软件为例：</span></div>
					<div>
						&nbsp;</div>
					<div>
						<span style="font-size: 16px;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-size:16px;">特色功能：智能拨号，全国地区，独享线路，多协议支持，混播模式，独特的进程代理等功能一应俱全；<br />
							<br />
							&nbsp;</span><span style="font-size: 16px;">&nbsp; &nbsp; &nbsp;支持的设备：Windows系统，ios，安卓等各大主流系统客户端支持；</span><span
						 style="font-size: 16px;">&nbsp; &nbsp;</span></div>
					<div>
						&nbsp;</div>
					<div style="text-align: center;">
						<span style="font-size:16px;"><img alt="更换ip地址的软件" src="https://www.jiheip.com/uploads/allimg/200509/1-200509112Sab.png"
							 style="width: 680px; height: 419px;" /></span></div>
					<div>
						&nbsp;</div>
					<div>
						<span style="font-size: 16px;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-size:16px;">最后，关于更换ip地址的软件的选择，还是取决于个人的需求，只是用来看看网页，那就只要是一款换ip软件就行，找几个代理ip软件的客服索取一个测试会员账户就能满足；</span><span
						 style="font-size: 16px;">如果您是工作室或企业团队，那么， 还是考虑优先稳定的产品，而且先测试在付费哦。</span>
					</div>

				</p>
			</div>
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
.main_news>h3 {
    font-size: 18px;
    line-height: 24px;
    margin: 20px 0;
    text-align: center;
	color: #333;
	font-weight: bold;
}
.main_news img {
    max-width: 100%;
    height: auto !important;
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
