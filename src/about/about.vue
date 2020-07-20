<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="about"></headers>
		<div class="gener">
			<div class="container">
				<div class="fl mt90 genbag">
					<p class="f30 mb30 fbold">逍遥代理</p>
					<p class="f20 mb10">专注于提供网络推广和网络营销解决方案</p>
					<p class="f12 mb40">Focus on online promotion and online solutions</p>
					<a href="goumai.html" class="jh_gen">立即购买</a>
				</div>
				<div class="clear"></div>
				<div class="down_card mt50 new_card">
					<p class="new_title_card">专业的我们，只做高品质</p>
					<ul>
						<li v-for="(item,index) in aboutlist" :key="index">
							<img v-if="index == 0" src="../assets/images/tg_1.png" alt="">
							<img v-if="index == 1" src="../assets/images/tg_2.png" alt="">
							<img v-if="index == 2" src="../assets/images/tg_3.png" alt="">
							<p class="p1">{{item.tit}}</p>
							<p class="p2">{{item.cent}}</p>
						</li>
					</ul>
				</div>`
			</div>
		</div>
		<div class="container">
			<div class="tg_introduce genbox">
				<img src="../assets/images/us_contact.png" alt="">
				<ul>
					<li class="gentit">联系我们</li>
					<li><img src="../assets/images/us_contact_one.png">公司地址：广州市天河区天河软件园</li>
					<li><img src="../assets/images/us_contact_tow.png">联系电话：4009989776</li>
					<li><img src="../assets/images/us_contact_three.png">联系QQ：2578037309</li>
					<li><img src="../assets/images/us_contact_four.png">服务时间：9:00 - 23:00</li>
				</ul>
			</div>
		</div>
		<div class="clear"></div>
		<!--底部-->
		<footers></footers>
		</div> 
		<div class="waphtml">
			<wap-user></wap-user>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import wapUser from "../wap/user.vue" 
	export default {
		name: 'about',
		data() {
			return {
				msg: '关于我们',
				aboutdata:'', //数据
				aboutlist:[
					{tit:'理念',cent:'推动互联网产业的发展，为广大客户提供网络 时代全方位的革新性生活方式'},
					{tit:'行业前瞻性',cent:'专注互联网行业，独特的市场洞察力 深度挖掘客户需求'},
					{tit:'持续创新',cent:'秉承着诚信经营的初衷，持续创新，让客户获得专业 又及时的服务，给客户带来更大的利益'}
				],
				shop_show: 0
			}
		},
		components: {
			'headers':headers,
			'footers':footers,
			'wapUser':wapUser
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	@import url("../assets/css/package.css");
	@import url("../assets/css/down.css");
</style>
