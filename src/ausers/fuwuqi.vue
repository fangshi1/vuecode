<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="3"></headers>
		<!--搜索-->
		<div class="content center" style="margin-top: 50px;">
			<navs count="5"></navs>
			<div class="right_box">
				<div class="title f20">线路地址</div>
				<div class="account_tips">
					<div class="tips"><span>重要提示：</span>如果您使用直连方式连接线路，必须使用以下账号密码，否则会连接失败！</div>
					<div class="user">
						<p><span>账户：</span>{{userdata.id}}</p>
						<p><span>密码：</span>{{userdata.prm}}</p>
					</div>
				</div>
				<div class="search">
					<form action="">
						<select name="platform" v-model="platform" @change="plat" id="platform">
							<option value="0">请选择使用设备</option>
							<option :value="item.id" v-for="(item,index) in platdata" :key="index">{{item.label}}</option>
						</select>
						<input type="text" name="keyword" value="" placeholder="请输入省份名称，例如：浙江"><button>搜索</button>
					</form>
				</div>
				<ul class="table f14 line_table">
					<li class="fb">
						<div class="table_c">线路名称</div>
						<div class="table_c">线路IP</div>
					</li>
					<li class="table_li" v-for="(item,index) in select" :key="index">
						<div class="table_c">{{item.title}}</div>
						<div class="table_c">{{item.ip}}</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="clear"></div>
		<!--底部-->
		<footers></footers>
		</div> 
		<div class="waphtml">
			<wap-fuwuqi></wap-fuwuqi>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import navs from "../components/navs.vue"
	import wapFuwuqi from "../wap/fuwuqi.vue" 
	export default {
		name: 'users',
		data() {
			return {
				platform:'0',
				platdata:[
					{id:'pc',label:'PC电脑'},
					{id:'ios',label:'苹果系统'},
					{id:'android',label:'安卓系统'}
				],
				userdata:{
					id:'jh_JHTjeVTZ',
					prm:'7986f7e786c57a313900e15873f1a281'
				},
				listdata: '', //列表数据
				select: [
					{title:'[普]上海BGP-2',ip:'101.132.133.8',id:"0"},
					{title:'[普]北京BGP-5',ip:'39.97.229.80',id:"1"},
					{title:'[普]北京BGP-4',ip:'39.97.185.164',id:"2"},
					{title:'[普]北京BGP-3',ip:'39.97.227.120',id:"3"},
					{title:'[普]北京BGP-2',ip:'39.97.227.40',id:"4"},
					{title:'[普]北京BGP-1',ip:'39.106.231.153',id:"5"},
					{title:'[普]丹东电信',ip:'219.149.64.91',id:"6"},
					{title:'[普]德阳联通2',ip:'175.155.75.239',id:"7"},
					{title:'徐州HTTP长效IP',ip:'58.218.155.61',id:"8"},
					{title:'[普]芜湖联通',ip:'58.243.201.36',id:"9"},
					{title:'[普]自贡联通',ip:'221.10.43.247',id:"10"},
					{title:'[普]徐州电信1',ip:'58.218.155.62',id:"22"},
				], //搜索
			}
		},
		components: {
			'headers': headers,
			'footers': footers,
			'navs': navs,
			'wapFuwuqi':wapFuwuqi
		},
		props: {
			data: "线路地址"
		},
		created() {
			let that = this
			document.documentElement.scrollTop = 0; //回到顶部
			// console.log("params传参：", this.$route.params);
			// this.loadData(); //本地静态json数据
		},

		methods: {
			//选择ip
			plat(){
				console.log('您选择了', this.platform)
			},
			//静态数据
			async loadData() {
				let that = this
				that.listdata = await that.$url.json('listdata');
				console.log(that.listdata)
			},
			//提交
			sumbit() {
				if (this.select) {
					console.log(this.select)
				}
			},
			
		}
	}
</script>

<style scoped>
	@import url("../assets/css/package.css");
	@import url("../assets/css/article.css");
	@import url("../assets/css/user.css");
</style>
