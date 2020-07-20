<template>
	<!--底部-->
	<div class="mt100">
		<div class="foot1 tc">
			24小时联系热线 <b class="f24">4009989776 转1</b><br>
			<a href="#" class="btn ib">
				<img src="../assets/images/qq_icon.png" alt="点击打开webQQ" class="vm mr20">联系客服
			</a>
		</div>
		<div class="foot2 white">
			<div class="container">
				<ul>
					<li><img src="../assets/images/logo2.png" alt="逍遥代理" class="mt20"></li>
					<li>
						<p class="mb30 f16"><img src="../assets/images/lx_icon1.png" alt="联系我们">联系我们</p>
						<p class="op65 f12 lh200">企业QQ：2578037309<br>电话 ：4009989776 转1</p>
					</li>
					<li>
						<p class="mb30 f16"><img src="../assets/images/lx_icon2.png" alt="关于我们">关于我们</p>
						<p class="op65 f12 lh200">公司地址：广州市天河区天河软件园<br>服务时间：9:00～23:00</p>
					</li>
					<li>
						<p class="mb30 f16"><img src="../assets/images/lx_icon3.png" alt="商务合作">商务合作</p>
						<p class="op65 f12 lh200">大客户经理<br>QQ：1829380381<br>电话／微信 ：13318873961</p>
					</li>
				</ul>
				<div class="clear"></div>
				<div class="yq" v-show="count">
					<p class="yqleft">友情链接：</p>
					<p class="yqright">
						<a href='#' target='_blank'>动态ip</a>
						<a href='#' target='_blank'>代理服务器</a>
						<a href='#' target='_blank'>拨号vps</a>
					</p>
				</div>
			</div>
		</div>
		<div class="foot3 tc">
			<p class="white op30 f12 lh150">
				逍遥代理仅提供代理ip技术服务，用户使用逍遥代理从事的任何行为均不代表逍遥代理的意志和观点，与逍遥代理的立场无关。
				<br>严禁用户使用逍遥代理从事任何违法犯罪行为，产生的相关责任用户自负，对此逍遥代理不承担任何法律责任。
				<br>Copyright © 壹零软件. www.xiaoyaoip.com 版权所有 <br>
			</p>
		</div>
	</div>
	
</template>

<script>
	export default {
	  name: 'headers',
	  props: {
	  	count:{
	  		
	  	}
	  },
	  data () {
	    return {
			
	    }
	  },
	  
	  methods:{
	      
		  
	  }
	}
</script>

<style scoped>
	@import url("../assets/css/header.css");
</style>
