<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="xiazai"></headers>
		<div class="fl conxiazai">
			<img src="../assets/images/download_banner_copywriting.png" alt=""/>
		</div>
		<div class="clear"></div>
		<div class="container">
			<div class="down_card mt60">
				<ul>
					<li>
						<img src="../assets/images/iphone.png" alt="">
						<span class="downxz">Windows</span>
						<a href="javascript:;"><i class="iconfont icon-apple"></i>立即下载</a>
					</li>
					<li>
						<img src="../assets/images/android.png" alt="">
						<span class="downxz">Android</span>
						<a href="javascript:;"><i class="iconfont icon-android"></i>立即下载</a>
					</li>
					<li>
						<img src="../assets/images/mac.png" alt="">
						<span class="downxz">IOS</span>
						<a href="javascript:;"><i class="iconfont icon-laptopmac"></i>立即下载</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="clear"></div>
		<!--底部-->
		<footers></footers>
		</div>
		<div class="waphtml">
			<wap-index></wap-index>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import wapIndex from "../wap/index.vue"
	export default {
		name: 'xiazai',
		data() {
			return {
				msg: '软件下载',
				shop_show:0
			}
		},
		components: {
			'headers':headers,
			'footers':footers,
			'wapIndex':wapIndex
		},
		props: {
			data: "我是列表页"
		},
		methods: {
			//跳转到首页
			back() {
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped>
	@import url("../assets/css/package.css");
	@import url("../assets/css/down.css");
</style>
