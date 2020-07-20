<template>
	<div class="hello" v-if="isRouterAlive">
		<div class="pchtml">
		<div class="section1">
			<!--头部-->
			<headers count="index" :indclass="indclass"></headers>
			<div class="clear"></div>
			<!--广告-->
			<div class="container">
				<div class="consot">
					<h1 class="f40">代理IP金牌服务商 新用户免费试用</h1>
					<p class="f18 lh200 mt20 mb60">逍遥代理满足你业务的多样性和无限的可能性<br> 自建服务器节点，长期稳定在线，多省市IP任意切换</p>
					<router-link :to="{name:'index'}" class="btn f14 ib more_btn">点击购买</router-link>
					<span style="color: #fff;" @click="tis()">消息提示</span>
					<span style="color: #fff;" @click="open()">模态框提示</span>
				</div>
			</div>
			<!--/广告-->
		</div>
		<div class="section2">
			<div class="container">
				<div class="down_list">
					<ul>
						<li v-for="(item,index) in indexdata.downdata1" :key="index">
							<img v-if="index == 0" src="../assets/images/down1.png" alt="Windows下载" />
							<img v-if="index == 1" src="../assets/images/down2.png" alt="IOS下载" />
							<img v-if="index == 2" src="../assets/images/down3.png" alt="安卓下载" />
							<div class="mt30">
								<p class="f18 fb mb15">{{item.title}}</p>
								<p class="f12 lh150">大小：{{item.txt1}}<br>系统：Win7及以上系统</p>
							</div>
							<a :href="item.href">立即下载</a>
						</li>
						
					</ul>
					<div class="clear"></div>
				</div>
				<div class="mt100 mb100 tc">
					<h3 class="mb10 f30">高质量HTTP代理IP服务商</h3>
					<p class="f16 op65">海量资源全国覆盖，轻松一点，百万ip到手！</p>
				</div>
				<img src="../assets/images/se2_left.png" alt="代理服务器" class="fl se2_left mb100 " data-aos="fade-right" />
				<div class="se2_list fr" data-aos="fade-left">
					<ul>
						<li v-for="(item,index) in indexdata.downdata2" :key="index">
							<img v-if="index == 0" class="busin_icon" src="../assets/images/se2_right_one.png" alt="" />
							<img v-if="index == 0" class="busin_icon" src="../assets/images/se2_right_one_c.png" alt="" />
							<img v-if="index == 1" class="busin_icon" src="../assets/images/se2_right_tow.png" alt="" />
							<img v-if="index == 1" class="busin_icon" src="../assets/images/se2_right_tow_c.png" alt="" />
							<img v-if="index == 2" class="busin_icon" src="../assets/images/se2_right_three.png" alt="" />
							<img v-if="index == 2" class="busin_icon" src="../assets/images/se2_right_three_c.png" alt="" />
							<div class="busin_txt">
								<p class="f16 mb20">{{item.title}}</p>
								<p class="f14 op65">{{item.txt}}</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<div class="section3">
			<div class="container">
				<div class="fl mt80" style="width: 100%;">
					<h3 class="mb30 f30 titleft">我们能为您提供什么</h3>
					<p class="titright lh180 op65 f16 mb60 ml20">
						<span class="tittext">逍遥ip的代理模式，以专用私有技术，带给您从未有过的极速代理体验 众多的选择，满足您业务无限的可能性</span>
						<span class="xiangtiao"></span>
					</p>
				</div>
				<ul class="fl mt40" style="width: 100%;" data-aos="fade-right">
					<li v-for="(item,index) in indexdata.intro" :key="index">
						<img v-if="index == 0" src="../assets/images/icon1.png" :alt="item.title" />
						<img v-if="index == 1" src="../assets/images/icon2.png" :alt="item.title" />
						<img v-if="index == 2" src="../assets/images/icon3.png" :alt="item.title" />
						<img v-if="index == 3" src="../assets/images/icon4.png" :alt="item.title" />
						<div class="fl">
							<p class="f16 mb15">{{item.title}}</p>
							<p class="f14 lh180 op65">{{item.txt1}}<br>{{item.txt2}}</p>
						</div>
						<div class="clear"></div>
					</li>
					
				</ul>

			</div>
		</div>
		<div class="section4">
			<div class="container">
				<div class="mt150 mb80 tc">
					<h3 class="mb30 f30">帮助中心</h3>
				</div>
				<ul data-aos="fade-up">
					<li v-for="(item,index) in indexdata.desc" :key="index">
						<div class="news_bg">
							<img v-if="index == 0" src="../assets/images/new_bg_one.png" :alt="item.title" />
							<img v-if="index == 1" src="../assets/images/new_bg_two.png" :alt="item.title" />
							<img v-if="index == 2" src="../assets/images/new_bg_three.png" :alt="item.title" />
							<span>{{item.title}}</span>
						</div>
						<div class="news_title">
							<router-link :to="{name:'desc',params:{id:item.data[0].id}}">{{item.data[0].title}}</router-link>
						</div>
						<p v-if="i>0" class="lh200 f14 ml10 mt10" v-for="(val,i) in item.data" :key="i">
							[<router-link :to="{name:'list',params:{cid:item.id}}">{{item.title}}</router-link>]
							<router-link :to="{name:'desc',params:{id:val.id}}">{{val.title}}</router-link>
							<br>
						</p>
						
					</li>
					
				</ul>
				<div class="clear"></div>
			</div>
		</div>
		<!--底部-->
		<footers count='true'></footers>
		<!-- 轮播图 -->
		<!-- <upswiper count="0"></upswiper> -->
		</div>
		<div class="waphtml">
			<wap-index></wap-index>
		</div>
	</div>
</template>
<script>
	import headers from "../components/header.vue" //头部
	import wapIndex from "../wap/index.vue" 
	import upswiper from "../components/upswiper.vue" //轮播图
	import footers from "../components/footer.vue" //底部
	import JQ from "../assets/js/jquery.min.js"
	import AOS from 'aos'
	import Axios from 'axios' //接口
	import 'aos/dist/aos.css'
	export default {
		name: 'index',
		data() {
			return {
				indclass: '',
				indexdata:'', //首页数据
				isRouterAlive: true
			}
		},
		components: {
			'headers': headers,
			'footers': footers,
			'upswiper': upswiper,
			'wapIndex':wapIndex
		},
		watch: {

		},
		//生命周期钩子-页面加载完成执行
		mounted() {
			AOS.init({
				offset: 300,
				duration: 1500,
				easing: 'ease-out-back',
				delay: 100,
				disable: 'mobile',
				once: false,
				anchor: 'top-center',
			});
		},
		created() {
			let that = this
			// document.documentElement.scrollTop = 0; //回到顶部
			// location.reload(); //刷新页面
			this.onLoad(); //服务器接口数据
			this.loadData(); //本地静态json数据
			// window.document.title = "222222222" //标题替换
			that.wscroll()
			
		},
		methods: {
			
			//跳转链接
			go() {
				this.$router.push('/shop')
			},
			// 消息提示框  
			tis() {
				const h = this.$createElement; //创建dom新节点
				this.ElementUI.Message({
					message: h('p', null, [
						h('span', {
							style: 'color: #666'
						}, '消息提示 '),
						// h('i', { style: 'color: red' }, 'VNode')
					]),
					customClass: 'uementUI'
				});
			},
			//模态框
			open() {
				this.MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					})
					.then(() => {
						this.ElementUI.Message({
							type: 'info',
							message: '保存修改'
						});
					})
					.catch(() => {
						this.ElementUI.Message({
							type: 'info',
							message: '已取消删除'
						})
					});
			},

			//滚动监听
			wscroll() {
				let that = this
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				if (scrollTop > 0) {
					that.indclass = 'header_bg'
				}
				$(window).scroll(function() {
					var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
					if (scrollTop > 1) {
						that.indclass = 'header_bg'
					}
					if (scrollTop <= 1) {
						that.indclass = ''
					}
				});
			},
			//静态数据
			async loadData() {
				let that = this
				that.indexdata = await that.$url.json('index');
				console.log(that.indexdata)
			},
			// 获取数据            
			onLoad() {
				//调用api接口，并且提供了参数       
				var data = {
					// prod: 'll',
				} //参数/api/news
				this.$api.get('/api/news', data)
				.then(res => {
					console.log(res.data)
				}) //接口
				
				// this.$api.get('/index/Index/Get_Feedback', data)
				// .then(res => {
				// 	console.log(res)
				// }) //接口
				
// 				Axios.get('/apis/api/news')
//                   .then(res => {
//                         console.log(res.data);
//                    }).catch(err => {
//                         console.log('请求失败');
//                    });
				
			}

		}
	}
</script>

<!-- Add "scoped" 私有样式 -->
<style scoped>
	@import url("../assets/css/index.css");
</style>
