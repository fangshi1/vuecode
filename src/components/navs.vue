<template>
	<div class="left_box f14" style="height: 1020px;">
		<div class="user_info t_c">
			<div class="user_name">
				<span class="f18">13288387329</span>
			</div>
			<a href="#" class="user_state active">
				<img src="../assets/images/hy_3.png" alt="" class="active_img">
				<span>普通会员</span>
			</a>
		</div>
		<div class="nav_tab">
			<router-link :class="count == 0 ? 'active':''" :to="{name:'user'}"><i class="iconfont icon-wode"></i><span>用户中心</span></router-link>
			<router-link :class="count == 1 ? 'active':''" :to="{name:'purchase'}"><i class="iconfont icon-VIP"></i><span>开通会员</span></router-link>
			<router-link :class="count == 2 ? 'active':''" :to="{name:'jinbi'}"><i class="iconfont icon-jinbi"></i><span>发票申请</span></router-link>
			<router-link :class="count == 3 ? 'active':''" :to="{name:'dingdan'}"><i class="iconfont icon-dingdan"></i><span>订单管理</span></router-link>
			<router-link :class="count == 4 ? 'active':''" :to="{name:'shezhi'}"><i class="iconfont icon-shezhi"></i><span>账号管理</span></router-link>
			<router-link :class="count == 5 ? 'active':''" :to="{name:'fuwuqi'}"><i class="iconfont icon-fuwuqi"></i><span>主机地址</span></router-link>
		</div>
		<router-link :to="{name:'index'}" class="out_btn"><i class="iconfont icon-caozuo-tuichu"></i><span>安全退出</span></router-link>
	</div>
	
</template>

<script>
	export default {
	  name: 'navs',
	  props: {
	  	count:{},
		indclass:{}
	  },
	  data () {
	    return {
			data:[],
			logo_n:'',
			logo_s:'',
			title:''
	    }
	  },
	  created () {
	  	this.loadData(); //本地静态json数据
	  },
	  methods:{
	     async loadData() {
	     	let that=this
	     	that.data = await that.$url.json('header');
			that.logo_n = that.data.logo.logo_n
			that.logo_s = that.data.logo.logo_s
			that.title = that.data.logo.title
	     }, 
		  
	  }
	}
</script>

<style scoped>
	@import url("../assets/css/user.css");
</style>
