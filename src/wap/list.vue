<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)" class="back_btn"><img src="../assets/wap/images/left.png" height="15" alt=""></a>列表
		</div>
		<div class="container">
			<ul class="news_list">
				<li>
					<router-link :to="{name:'desc',params:{id:'0'}}">
						<p>怎么样更换ip浏览网页怎么样更换ip浏览网页</p>
						<span><img src="../assets/wap/images/right.png" height="10" alt=""></span>
						<div class="clear"></div>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'desc',params:{id:'0'}}">
						<p>怎么样更换ip浏览网页怎么样更换ip浏览网页</p>
						<span><img src="../assets/wap/images/right.png" height="10" alt=""></span>
						<div class="clear"></div>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'desc',params:{id:'0'}}">
						<p>怎么样更换ip浏览网页怎么样更换ip浏览网页</p>
						<span><img src="../assets/wap/images/right.png" height="10" alt=""></span>
						<div class="clear"></div>
					</router-link>
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
		background-color: #7d33ea;
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

	.help_kf {
		position: relative;
		height: 128px;
		background: #7d33ea;
	}

	.help_kf_left {
		float: left;
		margin: 14px 0 0 20px;
		color: #fff;
	}

	.help_kf_left>h3 {
		font-size: 18px;
		margin-bottom: 8px;
	}

	.help_kf_left>p {
		font-size: 12px;
		margin-bottom: 14px;
	}

	.help_kf_left>a {
		display: block;
		width: 80px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		background-color: #fcc017;
		box-shadow: 0px 2px 10px 0px rgba(252, 192, 23, 0.35);
		border-radius: 14px;
		color: #fff;
		font-size: 12px;
		font-weight: 500;
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

	.search {
		height: 44px;
		background-color: #f6f6f6;
		border-radius: 4px;
		border: solid 1px #e5e5e5;
	}

	.search>img {
		float: left;
		margin: 15px 12px;
	}

	.search>input {
		border: none;
		background: none;
		font-size: 12px;
		line-height: 44px;
		width: calc(100% - 110px);
	}

	.search>a {
		display: block;
		float: right;
		font-size: 14px;
		color: #333;
		line-height: 44px;
		font-weight: 500;
		width: 60px;
	}

	.help_nav {
		text-align: center;
		margin-top: 22px;
		margin-bottom: 20px;
	}

	.help_nav li {
		display: inline-block;
		margin: 0 30px;
		color: #999;
		font-size: 12px;
		text-align: center;
	}

	.help_nav li>img {
		display: block;
		margin: 0 auto 10px auto;
	}

	.f_line {
		height: 10px;
		background-color: #fafafa;
	}

	.help_title {
		font-size: 14px;
		font-weight: 500;
		margin: 15px 0 10px 0;
	}
	.news_list li {
	    height: auto;
		overflow: hidden;
	    font-size: 14px;
	    border-bottom: 1px solid #eee;
	}
	.news_list li a{
		display: block;
		text-align: left;
		color: #666;
		font-size: 14px;
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
		text-align: center;
	}

	.clear {
		clear: both;
	}
</style>
