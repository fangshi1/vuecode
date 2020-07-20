<template>
	<div>
		<div class="top_map"></div>
		<div class="toptt">
			<img src="../assets/wap/images/logo2.png" class="top_logo" height="30" alt="">
			<router-link class="log_btn" :to="{name:'login'}">登录/注册</router-link>
			<div class="clear"></div>
		</div>
		<div class="logo1"></div>
		<div class="slog1">一站式动态IP解决方案</div>
		<div class="slog2">更懂你的代理IP软件</div>
		<a href="#" class="down_btn">立即下载<span>送试用特权</span></a>
		<div class="more">了解更多</div>
		<div class="down_icon"></div>
		<div class="foot_pic"></div>
		<div class="foot_down">
			<div class="foot_down_left">
				<img src="../assets/wap/images/logo3.png" height="50" alt="">
				<div class="down_txt">
					<h3>下载逍遥代理APP</h3>
					<p>免费试用换IP功能</p>
				</div>
				<div class="clear"></div>
			</div>
			<a href="#" class="foot_down_btn">立即下载</a>
		</div>
		<div class="mid_title">产品优势</div>
		<div class="mid_title_line"></div>
		<div class="container">
			<div class="pro_card pro_card1">自有机房 独享带宽</div>
			<div class="pro_card pro_card2">海量IP 布局全国线路</div>
			<div class="pro_card pro_card3">极速连接 网速流畅</div>
			<div class="pro_card pro_card4">光速体验 安全稳定 </div>
		</div>
		<div class="mid_title1">应用场景</div>
		<div class="mid_title_line"></div>
		<ul class="yy_list">
			<li><img src="../assets/wap/images/yy1.png" height="100" alt="">
				<h3>网络营销</h3>
				<p>电子商务/数据分析<br>定制化推广营销</p>
			</li>
			<li><img src="../assets/wap/images/yy2.png" height="100" alt="">
				<h3>数据采集</h3>
				<p>大数据/数据爬取<br>SEO优化/金融理财</p>
			</li>
			<li><img src="../assets/wap/images/yy3.png" height="100" alt="">
				<h3>注册试用</h3>
				<p>注册登录/登榜排名<br>网页投票/明星打榜</p>
			</li>
			<li><img src="../assets/wap/images/yy4.png" height="100" alt="">
				<h3>电商优化</h3>
				<p>网站采集/论坛发帖<br>游戏测试/营销优化</p>
			</li>
		</ul>
		<div class="clear"></div>
		<div class="f_line"></div>
		<div class="mid_title1">逍遥资讯</div>
		<div class="mid_title_line"></div>
		<ul class="news_tab">
			<li v-for="(item,index) in indexdata" :key="index" :class="uptab == index ?'tab_check':''" @click="uptable(index)">{{item.title}}</li>
		</ul>
		<div class="container">
			<ul class="news_list" v-show="uptab == index" v-for="(item,index) in indexdata" :key="index">
				<li v-for="(val,i) in item.data" :key="i">
					<router-link :to="{name:'desc',params:{id:val.id}}">
						<p><img src="../assets/wap/images/hot.png" height="16" alt="">{{val.title}}</p>
						<span><img src="../assets/wap/images/right.png" height="10" alt=""></span>
						<div class="clear"></div>
					</router-link>
				</li>
			</ul>
		</div>
		<router-link class="more_news" :to="{name:'list',params:{cid:0}}">查看更多</router-link>
		<div class="f_line"></div>
		<div class="footer">
			<img src="../assets/wap/images/ewm.png" height="90" alt="">
			<div class="footer_right">
				<h3>关注我们，了解更多</h3>
				<p>企业QQ：800193021<br>电话 ：0712-5319406 转 2</p>
			</div>
		</div>
		<div style="height: 80px"></div>
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
				indexdata: [
					{
						id:"0",
						title:'逍遥动态',
						data:[
							{id:'100',title:'更换ip地址的软件'},
							{id:'101',title:'代理ip协议有哪些类型？最详细讲解'},
							{id:'102',title:'ip 代理软件的线路出现高延迟不稳定情况'},
							{id:'103',title:'什么是动态IP拨号服务器？有什么用途？'},
							{id:'104',title:'爬虫ip代理哪家比较好？大数据时代必备软件'}
						]
					},
					{
						id:"1",
						title:'使用教程',
						data:[
							{id:'110',title:'​Mac OS PPTP/L2TP连接逍遥动态ip软件教程'},
							{id:'111',title:'逍遥代理之程序进程代理特殊功能讲解'},
							{id:'112',title:'新手教程--IOS手机线路直连方法：'},
							{id:'113',title:'一文告诉你什么是动态ip，什么是静态ip'},
							{id:'114',title:'经验分享——逍遥动态IP软件都能做什么？'}
						]
					},
					{
						id:"2",
						title:'常见问题',
						data:[
							{id:'120',title:'windows 无法启动Remote Access Connection Manager服务'},
							{id:'121',title:'逍遥代理ip软件客户端连接提示711错误解决方法'},
							{id:'122',title:'安卓客户端不显示验证码怎么解决？'},
							{id:'123',title:'IP代理有什么用？适用哪些场景？'},
							{id:'124',title:'使用代理IP，别人能查到真实地址吗?'}
						]
					}
				],
				uptab:0, 
				
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
			uptable(e){
				this.uptab=e
			}
		}
	}
</script>

<style scoped>
	.top_map {
		position: absolute;
		top: 0;
		background: url(../assets/wap/images/top-map.png) no-repeat;
		background-size: cover;
		height: 187px;
		width: 100%;
		z-index: 0;
	}

	.top_logo {
		float: left;
		margin: 11px 0 0 12px;
	}
	.toptt{
		position: relative;
	}
	.log_btn {
		float: right;
		margin: 12px 12px 0 0;
		line-height: 28px;
		color: #fff;
		font-size: 12px;
		text-align: center;
		width: 82px;
		height: 28px;
		background-image: linear-gradient(-90deg, #8264f1 0%, #7c25e8 100%);
		border-radius: 2px;
	}

	.clear {
		clear: both;
	}

	.logo1 {
		background: url(../assets/wap/images/logo1.png) no-repeat;
		background-size: cover;
		width: 140px;
		height: 166px;
		margin: 20px auto 30px auto;
	}

	.slog1 {
		font-size: 24px;
		text-align: center;
		margin: 30px 0 20px 0;
	}

	.slog2 {
		width: 150px;
		height: 32px;
		line-height: 32px;
		font-size: 14px;
		text-align: center;
		color: #7d33ea;
		background-color: #efebfd;
		margin: 0 auto 40px auto;
	}

	.down_btn {
		position: relative;
		display: block;
		margin: 0 auto;
		width: 190px;
		height: 44px;
		line-height: 44px;
		/* background-color: #fcc017; */
		/* box-shadow: 0px 2px 10px 0px rgba(252, 192, 23, 0.35); */
		border-radius: 4px;
		font-size: 18px;
		color: #ffffff;
		font-weight: 500;
		background-image: linear-gradient(-90deg, #3bc5ff 0%, #1d97ff 100%);
	}

	.more {
		text-align: center;
		margin: 30px 0 20px 0;
		font-size: 14px;
		color: #999999;
	}

	.down_icon {
		background: url(../assets/wap/images/down.png) no-repeat;
		background-size: cover;
		height: 6px;
		width: 11px;
		margin: 0 auto;
	}

	.foot_pic {
		position: absolute;
		left: 12px;
		bottom: 70px;
		background: url(../assets/wap/images/pic1.png) no-repeat;
		background-size: cover;
		height: 88px;
		width: calc(100% - 24px);
		z-index: 0;
	}

	.foot_down {
		position: fixed;
		width: 100%;
		bottom: 0;
		height: 70px;
		border-top: 1px solid #e5e5e5;
		background: #fff;
		z-index: 1000;
	}

	.foot_down_left {
		float: left;
	}

	.foot_down_left>img {
		float: left;
		margin: 10px 12px 0 12px;
	}

	.down_txt {
		float: left;
	}

	.down_txt>h3 {
		font-size: 18px;
		font-weight: normal;
		margin: 17px 0 8px;
	}

	.down_txt>p {
		font-size: 12px;
		font-weight: normal;
		color: #999;
	}

	.foot_down_btn {
		display: block;
		float: right;
		margin: 17px 12px 0 0;
		width: 100px;
		height: 36px;
		line-height: 36px;
		background-image: linear-gradient(-90deg, #8264f1 0%, #7c25e8 100%);
		border-radius: 4px;
		color: #fff;
		font-size: 16px;
	}

	.mid_title {
		text-align: center;
		font-weight: 500;
		font-size: 22px;
		color: #333333;
		margin: 180px 0 15px 0;
	}

	.mid_title_line {
		width: 25px;
		height: 4px;
		background-color: #7d33ea;
		border-radius: 2px;
		margin: 0 auto 24px auto;
	}

	.container {
		width: calc(100% - 24px);
		margin: 0 auto;
		position: relative;
		overflow: hidden;
	}

	.pro_card {
		height: 91px;
		line-height: 91px;
		padding-left: 44px;
		width: calc(100% - 44px);
		font-size: 18px;
		font-weight: 500;
		color: #7d2ce9;
		margin-bottom: 10px;
	}

	.pro_card1 {
		background: url(../assets/wap/images/card1.png) top center no-repeat;
		background-size: cover;
	}

	.pro_card2 {
		background: url(../assets/wap/images/card2.png) top center no-repeat;
		background-size: cover;
	}

	.pro_card3 {
		background: url(../assets/wap/images/card3.png) top center no-repeat;
		background-size: cover;
	}

	.pro_card4 {
		background: url(../assets/wap/images/card4.png) top center no-repeat;
		background-size: cover;
	}

	.mid_title1 {
		text-align: center;
		font-weight: 500;
		font-size: 22px;
		color: #333333;
		margin: 60px 0 15px 0;
	}

	.mid_title_line {
		width: 25px;
		height: 4px;
		background-color: #7d33ea;
		border-radius: 2px;
		margin: 0 auto 24px auto;
	}

	.yy_list li {
		float: left;
		width: 50%;
		text-align: center;
		margin-bottom: 50px;
	}

	.yy_list li>img {
		margin-bottom: 20px;
	}

	.yy_list li>h3 {
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 15px;
	}

	.yy_list li>p {
		font-size: 14px;
		line-height: 18px;
		color: #666;
	}

	.f_line {
		height: 10px;
		background-color: #fafafa;
	}

	.news_tab {
		text-align: center;
		margin-bottom: 24px;
	}

	.news_tab li {
		display: inline-block;
		margin-right: 20px;
		width: 80px;
		height: 32px;
		line-height: 32px;
		color: #666;
		font-size: 14px;
		background-color: #f4f4f4;
		border-radius: 4px;
	}

	.tab_check {
		background-color: #ffffff;
		border-radius: 4px;
		background-color: #7d33ea !important;
		border: solid 2px #7d33ea;
		font-weight: 500;
		color: #fff !important;
	}

	.container {
		width: calc(100% - 24px);
		margin: 0 auto;
		position: relative;
		overflow: hidden;
	}

	.news_list li {
		height: auto;
		font-size: 14px;
		border-bottom: 1px solid #eee;
	}
	.news_list li a{
		display: block;
		text-align: left;
		color: #666;
	}
	.news_list li a p {
		float: left;
		width: calc(100% - 40px);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 46px;
	}

	.news_list li a span {
		display: block;
		height: 46px;
		width: 20px;
		line-height: 46px;
		float: right;
	}

	.more_news {
		display: block;
		text-align: center;
		font-size: 14px;
		color: #7d33ea;
		margin: 20px 0 30px 0;
	}

	.footer {
		height: 130px;
		background-color: #ffffff;
	}

	.footer>img {
		float: left;
		margin: 20px 40px 0 35px;
	}

	.footer_right>h3 {
		font-size: 14px;
		font-weight: 500;
		margin: 28px 0 24px 0;
	}

	.footer_right {
		float: left;
	}

	.footer_right>h3 {
		font-size: 14px;
		font-weight: 500;
		margin: 28px 0 24px 0;
	}

	.footer_right>p {
		font-size: 12px;
		line-height: 20px;
		color: #666;
	}
</style>
