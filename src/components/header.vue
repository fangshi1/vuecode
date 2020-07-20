<template>
	<div :class="count != 'index'? 'upindex':''">
		
		<div v-show="count != 'index'" class="headerdiv"></div>
		<header :class="indclass">
			<div class="container">
				<div class="logo fl">
					<img class="logint" src="../assets/images/logo.png" :alt="title">
					<img class="logint" src="../assets/images/logo1.png" :alt="title">
				</div>
				<div class="h_reg_btn fr">
					<router-link class="btn reg_btn" :to="{name:'register'}">注册成为会员</router-link>
				</div>
				<router-link class="fr btn log_btn mr10" :to="{name:'login'}">登 录</router-link>
				<div class="fr">
					<ul>
						<li :class="count == item.url ? 'actived':''" v-for="(item,index) in data.nav" :key="index">
							<router-link :to="{name: item.url}">{{item.name}}</router-link>
						</li>
					</ul>
				</div>
				<div class="clear"></div>
			</div>
		</header>
	</div>
	
</template>

<script>
	export default {
	  name: 'headers',
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
	@import url("../assets/css/header.css");
</style>
