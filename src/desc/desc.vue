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
			<div class="head_menu"><strong>当前位置:</strong> <router-link :to="{name:'index'}">主页</router-link> &gt; <router-link :to="{name:'list',params:{cid:2}}">使用帮助</router-link> &gt;
				<router-link :to="{name:'desc',params:{id:2}}">使用教程</router-link> &gt; 列表
			</div>
		</div>
		<div class="list_box">
			<div class="article_div">
				<div class="article_content">
					<div class="article_c_title">
						<h1>经验分享——逍遥动态IP软件都能做什么？</h1>
						<p> 发布时间：2018-10-31 17:40 作者：逍遥代理</p>
					</div>
					<div class="article_c_text">
						<div>一.软件限制解除</div>
						<div>在某些游戏或者软件限制了单个IP只能登陆1个账号的时候，使用逍遥动态IP软件可以实现稳定的多开功能。从而达到更高效更迅捷的目的。</div>
						<div>&nbsp;</div>
						<div>二.游戏交易限制解除</div>
						<div>在目前的游戏市场上，存在一些游戏是不能在同一IP上交易多开的。为了避免玩家创建过多小号作为大号成长的基石，游戏公司也是煞费苦心。当遇到这种情况，可以使用逍遥州动态IP软件的IP功能，在同一台机器上实现多开交易的操作，省时省力。</div>
						<div>&nbsp;</div>
						<div>三.解决异地登录的冻结问题</div>
						<div>许多的社交软件在脱离了常用的登录地点和机器时，往往会防止盗号的情况发生，会有异地登录的验证。在验证过程中如果出现不符甚至会冻结账号等，解决起来非常麻烦。有了逍遥动态IP软件，使用固定地点的IP再也不用担心验证问题，让你在天南地北都可以随心登录自己的账号。</div>
						<div>&nbsp;</div>
						<div>四.优化、发布信息等问题</div>
						<div>在无法使用单IP多次重复操作的情况下，仅需使用逍遥动态IP软件就可能在自己的电脑上完成多次重复的操作。此功能同样完美适用于SEO优化、竞价优化、网站注册等功能。也让你在社交媒体上发布信息而不受限制。在足不出户的情况下，掌控全国。</div>
						<div>&nbsp;</div>
						<div>五.进程局部代理</div>
						<div>当你只想改变一个程序的ip，不想更改其他正常运行的程序，当遇到这问题的时候，直接可以使用逍遥动态ip软件，把您需要更改ip的程序添加到进程代理里面了，连接线路那么您的电脑里面就这个程序ip变更了，不影响电脑的其他程序。市面有此功能的动态软件很少的哦。</div>
						<div>&nbsp;</div>
						<div>六.其他功能</div>
						<div>在逍遥动态IP软件的强大功能支持下，用户可在个人的电脑单个IP的情况下，完成许多需要其他IP参与的工作。</div>
						<div>&nbsp;</div>
						<div>更多有趣的功能等待您和我们共同发掘</div>

					</div>
				</div>
				<div class="article_share">
					<div class="dianzan_div ">
						<div class="dianzan_btn">
							<i class="iconfont icon-praise"></i>有用<span>101</span>
						</div>
					</div>
					<span>分享到：</span>
					<a href="#"><img src="../assets/images/down1.png" alt=""></a>
				</div>
				<div class="article_switch">
					<div class="s_1">
						上一篇：<router-link :to="{name:'desc'}">新手教程--IOS手机线路直连方法：</router-link>
					</div>
					<div class="s_2">
						下一篇：<router-link :to="{name:'desc'}">逍遥代理之程序进程代理特殊功能讲解</router-link>
					</div>
				</div>
				<div class="article_about_text">
					<b>相关阅读</b>
					<ul class="text_list">
						<li><router-link :to="{name:'desc'}"><span>10-10</span>新手教程--电脑客户端使</router-link></li>
						<li><router-link :to="{name:'desc'}"><span>10-10</span>新手教程--逍遥动态ip注</router-link></li>
					</ul>
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
			<wap-desc></wap-desc>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import wapDesc from "../wap/desc.vue" 
	export default {
		name: 'descs',
		data() {
			return {
				listdata:'', //列表数据
				select:'', //搜索
				shop_show: 0
			}
		},
		components: {
			'headers':headers,
			'footers':footers,
			'wapDesc':wapDesc
		},
		props: {
			data: "详情页"
		},
		created() {
			let that = this
			document.documentElement.scrollTop = 0; //回到顶部
			console.log("params传参：",this.$route.params);
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
			
		}
	}
</script>

<style scoped>
	@import url("../assets/css/package.css");
	@import url("../assets/css/article.css");
</style>
