<template>
	<!--底部-->
	<div class="tips_list">
		<div class="title">温馨提示</div>
		<p>a、如果付款成功，但是订单显示未付款，请您联系客服；</p>
		<p>b、定制会员请提供您的订单编号给客服。联系客服为您开通；</p>
		<p>c、银行卡转账，充值卡等付款方式请联系<a href="tencent://message/?uin=800193021&amp;Site=www.jiheip.com&amp;Menu=yes" class="c_lv">在线客服</a></p>
	</div>

</template>

<script>
	export default {
		name: 'tisTxt',
		props: {
			count: {

			}
		},
		data() {
			return {

			}
		},

		methods: {
			back() {
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped>
	.content .right_box .tips_list {
		margin-top: 40px;
		border-top: 1px #e9eaec solid;
		padding: 0 10px;
		color: #7b7b8a;
	}

	.content .right_box .tips_list .title{
		font-size: 16px;
		margin-top: 40px;
	}

	.content .right_box .tips_list p{
		font-size: 14px;
		margin-top: 20px;
	}

	.c_lv{
		color: #9271ff;
	}
</style>
