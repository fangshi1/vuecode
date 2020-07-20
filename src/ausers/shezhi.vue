<template>
	<div class="hello">
		<div class="pchtml">
		<headers count="4"></headers>
		<!--搜索-->
		<div class="content center" style="margin-top: 50px;">
			<navs count="4"></navs>
			<div class="right_box">
				<div class="title f20">账号管理</div>
				<div class="ul_list">
					<li>
						<div class="d1">登录密码</div>
						<div class="d2 c_red f14">
							互联网账号存在被盗风险，建议您定期更改密码以保护账户安全。
							<a href="javascript:;" @click="popout('0')" class="set_btn set_password">修改</a>
						</div>
					</li> 
					<li>
						<div class="d1">密保邮箱</div>
						<div class="d2">未填写<a @click="popout('1')" href="javascript:;" class="set_btn set_email">新增</a></div>
					</li>
					<li>
						<div class="d1">收款人姓名</div>
						<div class="d2">未填写<a @click="popout('2')" href="javascript:;" class="set_btn set_name">新增</a></div>
					</li>
					<li>
						<div class="d1">收款账号</div>
						<div class="d2">未填写</div>
					</li>
				</div>
				<tis-txt></tis-txt>
			</div>
		</div>
		<div class="clear"></div>
		<!--底部-->
		<footers></footers>
		<!--弹框-->
		<div :class="poutTop ? 'popout poutTop': 'popout' " >
			<div class="poutcolor" @click="rempout()"></div>
			<div class="poutBox" v-show="borde[0].up">
				<form action="" method="post">
					<input class="poutinp" type="text" name="oldpass" id="oldpass" value="" placeholder="请输入旧密码" />
					<input class="poutinp" type="text" name="newpass" id="newpass" value="" placeholder="请输入新密码" />
					<input class="poutinp" type="text" name="confirmpass" id="confirmpass" value="" placeholder="请输入确认新密码" />
					<input class="poutsum" @click="sumbits('0')" type="button" value="确定" />
					<input class="poutrem" @click="rempout()" value="取消" />
				</form>
			</div>
			<div class="poutBox" v-show="borde[1].up">
				<form action="" method="post">
					<h2 class="poutH2">请输入您的密保邮箱</h2>
					<div class="poutdesc">
						密保邮箱用于找回密码，请认真填写
					</div>
					<input class="poutinp" type="text" name="email" id="email" value="" placeholder="请输入邮箱" />
					<input class="poutsum" @click="sumbits('1')" type="button" value="确定" />
					<input class="poutrem" @click="rempout()" value="取消" />
				</form>
			</div>
			<div class="poutBox" v-show="borde[2].up">
				<form action="" method="post">
					<h2 class="poutH2">请输入收款信息</h2>
					<input class="poutinp" type="text" name="realname" id="realname" value="" placeholder="请输入真实姓名" />
					<input class="poutinp" type="text" name="alipay" id="alipay" value="" placeholder="请输入支付宝账号" />
					<input class="poutsum" @click="sumbits('2')" type="button" value="确定" />
					<input class="poutrem" @click="rempout()" value="取消" />
				</form>
			</div>
		</div>
		</div> <!--  -->
		<div class="waphtml">
			<wap-info></wap-info>
		</div>
	</div>
</template>

<script>
	import footers from "../components/footer.vue"
	import headers from "../components/header.vue"
	import navs from "../components/navs.vue"
	import tisTxt from "../components/tisTxt.vue"
	import wapInfo from "../wap/info.vue" 
	export default {
		name: 'info',
		data() {
			return {
				listdata: '', //列表数据
				select: '', //搜索
				poutTop:false,
				borde:[{up:true},{up:false},{up:false}],
			}
		},
		components: {
			'headers': headers,
			'footers': footers,
			'navs': navs,
			'tisTxt':tisTxt,
			'wapInfo':wapInfo
		},
		props: {
			data: "账号管理"
		},
		created() {
			let that = this
			document.documentElement.scrollTop = 0; //回到顶部
			// console.log("params传参：", this.$route.params);
			// this.loadData(); //本地静态json数据
		},

		methods: {
			//静态数据
			async loadData() {
				let that = this
				that.listdata = await that.$url.json('listdata');
				console.log(that.listdata)
			},
			popout(w) {
				this.poutTop=true
				this.borde=this.borde.filter(val => {
					val.up=false
					return val
				})
				this.borde[w].up=true
				// this.ElementUI.Message({
				// 	type: 'info',
				// 	message: '保存修改'
				// });
				var y= 1;
				if (function f(){}) {
					y += typeof f;
					}
					console.log(y); 
			},
			rempout(){
				this.poutTop=false
			},
			sumbits(e){
				console.log(e)
			}
		}
	}
</script>

<style scoped>
	@import url("../assets/css/package.css");
	@import url("../assets/css/article.css");
	@import url("../assets/css/user.css");
</style>
