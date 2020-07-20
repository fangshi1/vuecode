 <template>
	<div class="get404">
		<p><img src="../assets/404.jpg" alt=""></p>
		<p class="setint"><button @click="back">返回首页</button>&nbsp;&nbsp;&nbsp;&nbsp;{{times}}秒后返回首页</p>
	</div>
</template>
     
<script>
export default {
	name: 'n404',
	data () {
		return {
			msg: '404',
			times:5
		}
	},
	created () {
		let that = this;
		let upTime=setInterval(function(){
			if(that.times>1){
				that.times -= 1
			}else{
				window.clearInterval(upTime);
				that.$router.push('/')
			}
			
		},1000);
	},
	methods:{
		back(){
			this.$router.push('/')
		}
	}
}
</script>
<style scoped>
	.get404{
		text-align: center;
		padding: 100px 0;
	}
	.updown{
		font-size: 120px;
		font-weight: bold;
		color: #999;
		display: inline-block;
	}
	.setint{
		padding-top: 40px;
		color: #999;
		font-size: 12px;
	}
	.setint button{
		background: #007AFF;
		border-radius: 5px;
		outline: 0;
		border: 0;
		color: #fff;
		cursor: pointer;
		padding: 5px 12px;
	}
</style>