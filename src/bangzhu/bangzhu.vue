<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="bangzhu"></headers>
		<div class="about_banner">
			<div class="container">
				<div class="about_menu">
					<div class="title">帮助中心</div>
					<div class="text">易读、易懂、易用的产品文档，为您提供更加专业的服务</div>
					<!-- <form name="formsearch" action="bangzhu.html"> -->
						<input type="hidden" name="searchtype" value="title">
						<div class="search">
							<img src="images/ss.png" alt="">
							<input type="text" name="sel" autocomplete="off" v-model="select" placeholder="输入关键字搜索"><button @click="sumbit">搜索</button>
						</div>
					<!-- </form> -->
				</div>
			</div>
		</div>
		<div class="head_dh">
			<div class="head_menu"><strong>当前位置:</strong> <router-link :to="{name:'index'}">主页</router-link> &gt; 帮助中心</div>
		</div>
		<div class="help_box">
			<dl class="help_two" v-for="(item,index) in bzdata" :key="index">
				<dt><router-link :to="{name:'list',params:{cid:item.id}}">{{item.title}}</router-link></dt>
				<dd class="help_text" v-for="(val,i) in item.data" :key="i">
					<router-link :to="{name:'desc',params:{id:val.id}}">
						<h6>{{val.title}}</h6>
						<span>{{val.time}}</span>
					</router-link>
				</dd>
				<dd class="help_all"><router-link :to="{name:'list',params:{cid:item.id}}">- 查看更多 -</router-link></dd>
			</dl>
		</div>
		<!--底部-->
		<footers></footers>
		</div> 
		<div class="waphtml">
			<wap-bangzhu></wap-bangzhu>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import wapBangzhu from "../wap/bangzhu.vue" 
	export default {
		name: 'bangzhu',
		data() {
			return {
				msg: '帮助中心',
				bzdata:'', //数据
				select:'', //搜索
				shop_show: 0
			}
		},
		components: {
			'headers':headers,
			'footers':footers,
			'wapBangzhu':wapBangzhu
		},
		props: {
			data: "我是列表页"
		},
		created() {
			let that = this
			this.loadData(); //本地静态json数据
		},
		methods: {
			//静态数据
			async loadData() {
				let that = this
				that.bzdata = await that.$url.json('bangzhu');
				console.log(that.bzdata)
			},
			//提交
			sumbit(){
				if(this.select){
					console.log(this.select)
				}
			},
			back() {
				this.$router.push('/')
			},
			taocang(w) {
				this.shop_show = w
			}
		}
	}
</script>

<style scoped>
	@import url("../assets/css/article.css");
</style>
