<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="3"></headers>
		<!--搜索-->
		<div class="about_banner">
			<div class="container">
				<div class="about_menu">
					<div class="title">帮助文档</div>
					<div class="text">汇集使用技巧，一分钟上手动态IP，赢在大数据时代，从这里开始。</div>
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
		<!--面包屑-->
		<div class="head_dh">
			<div class="head_menu">
				<strong>当前位置:</strong> 
				<router-link :to="{name:'index'}">主页</router-link> &gt; 
				<router-link :to="{name:'list',params:{cid:1}}">使用帮助</router-link> &gt;
				<router-link :to="{name:'desc',params:{id:1}}">使用教程</router-link> &gt; 列表
			</div>
		</div>
		<div class="list_box">
			<div class="help_list">
				<ul>
					<li v-for="(item,index) in listdata.data" :key="index">
						<router-link :to="{name:'desc',params:{id:item.id}}">
							<h5>{{item.title}}</h5>
							<p class="help_text">
								{{item.cont}}
							</p>
						</router-link>
						<p class="help_info">
							发布时间：{{item.time}} 关注热度：{{item.hot}}
						</p>
					</li>
				</ul>
				<div class="help_page">
					<div class="page_div">
						<li><span class="pageinfo">共 <strong>1</strong>页<strong>7</strong>条记录</span></li>
					</div>
				</div>
			</div>
			<div class="aside_help">
				<dl>
					<dt>热门文章</dt>
					<dd v-for="(item,index) in listdata.tj" :key="index">
						<router-link :to="{name:'desc',params:{id:item.id}}">
							<span>{{index+1}}</span>{{item.title}}
						</router-link>
					</dd>
				</dl>
			</div>
		</div>
		<div class="clear"></div>
		<!--底部-->
		<footers></footers>
		</div> 
		<div class="waphtml">
			<wap-list></wap-list>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import wapList from "../wap/list.vue" 
	export default {
		name: 'list',
		data() {
			return {
				msg: '列表',
				listdata:'', //列表数据
				select:'', //搜索
				shop_show: 0
			}
		},
		components: {
			'headers':headers,
			'footers':footers,
			'wapList':wapList
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
				that.listdata = await that.$url.json('listdata');
				console.log(that.listdata)
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
				// console.log(w)
				this.shop_show = w
			}
		}
	}
</script>

<style scoped>
	@import url("../assets/css/package.css");
	@import url("../assets/css/article.css");
</style>
