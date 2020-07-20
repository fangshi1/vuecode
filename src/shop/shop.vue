<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="shop"></headers>
		<div class="pk_banner white tc"></div>
		<div class="pk_card">
			<ul>
				<li v-for="(item,index) in hotdata" :key="index">
					<img v-if="index == 0" src="../assets/images/icon4.png" alt="" class="fl mr30">
					<img v-if="index == 1" src="../assets/images/icon1.png" alt="" class="fl mr30">
					<img v-if="index == 2" src="../assets/images/icon3.png" alt="" class="fl mr30">
					<div>
						<p class="f18 fb mb15">{{item.title}}</p>
						<p class="f14 op65">{{item.txt}}</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="container mt100" style="width:1400px;">
			<div class="buy_card">
				<ul>
					<li :class="shop_show == index ? 'actived' : ''" @mousemove="taocang(index)" v-for="(item,index) in shopdata" :key="index">
						<div class="price">
							<p class="mons mb20">{{item.title}}<span></span></p>
							<p class="nums mb20 yellow tc">{{item.pro}}</p>
							<p class="f14 fb op65 tc lt">原价：{{item.outpro}}元</p>
						</div>
						<div class="pk_txt">
							<ul>
								<li v-for="(val,i) in item.data" :key="i">
									<span>{{val.name}}</span><span class="op65">{{val.title}}</span>
									<div class="clear"></div>
								</li>
							</ul>
						</div>
						<a class="btn buy_btn" :href="item.href">{{item.hretit}}</a>
					</li>
					
				</ul>
			</div>
		</div>
		<div class="clear"></div>
		<!--底部-->
		<footers></footers>
		</div>
		<div class="waphtml">
			<wap-purchase></wap-purchase>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import wapPurchase from "../wap/purchase.vue" 
	export default {
		name: 'shop',
		data() {
			return {
				msg: '套餐购买',
				hotdata:[
					{id:'0',title:'海量库存',txt:'遍布全国的服务器节点, 可指定城市IP'},
					{id:'1',title:'一键切换',txt:'独家加速引擎，闪电式切换IP'},
					{id:'2',title:'质量保证',txt:'专业团队，7*24小时不间断提供IP'}
				],
				shopdata:[
					{
						id:'0',
						href:'#1',
						hretit:'立即购买',
						title:'包周套餐',
						pro:'38',
						outpro:'68',
						data:[
							{name:'使用期限',title:'7天'},
							{name:'支持终端',title:'手机｜电脑多平台使用'},
							{name:'支持线路',title:'高级线路，不限速'},
							{name:'在线终端',title:'1个终端在线'}
						],
					},
					{
						id:'1',
						href:'#2',
						hretit:'立即购买',
						title:'包月套餐',
						pro:'118',
						outpro:'158',
						data:[
							{name:'使用期限',title:'30天'},
							{name:'支持终端',title:'手机｜电脑多平台使用'},
							{name:'支持线路',title:'高级线路，不限速'},
							{name:'在线终端',title:'1个终端在线'}
						],
					},
					{
						id:'2',
						href:'#3',
						hretit:'立即购买',
						title:'包季套餐',
						pro:'236',
						outpro:'354',
						data:[
							{name:'使用期限',title:'90天'},
							{name:'支持终端',title:'手机｜电脑多平台使用'},
							{name:'支持线路',title:'高级线路，不限速'},
							{name:'在线终端',title:'1个终端在线'}
						],
					},
					{
						id:'3',
						href:'#4',
						hretit:'立即购买',
						title:'包年套餐',
						pro:'868',
						outpro:'1888',
						data:[
							{name:'使用期限',title:'90天'},
							{name:'支持终端',title:'手机｜电脑多平台使用'},
							{name:'支持线路',title:'高级线路，不限速'},
							{name:'在线终端',title:'1个终端在线'}
						],
					},
				],
				shop_show:0
			}
		},
		components: {
			'headers':headers,
			'footers':footers,
			'wapPurchase':wapPurchase
		},
		methods: {
			taocang(w){
				this.shop_show=w
			}
		}
	}
</script>

<style scoped>
	@import url("../assets/css/package.css");
</style>
