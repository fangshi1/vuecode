<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)" class="back_btn"><img src="../assets/wap/images/left.png" height="15" alt=""></a>充值会员</div>
		<!-- 暂时隐藏 -->
		<!--  <div class="zq_choose zq_check"><h3>高级专区</h3><p>带宽高，速度快</p></div>
						<div class="zq_choose"><h3>独享专区</h3><p>一人独享线路</p></div>  -->
		<!-- 暂时隐藏 -->
		<div class="clear"></div>
		<div class="container">
			<form action="/users/purchase" method="post" id="myForm">
				<input type="hidden" name="id" value="27">
				<input type="hidden" name="promo_code" value="">
				<input type="hidden" name="channels" value="alipay">
				<div class="lx_title">会员类型</div>
				<ul class="lx_list">
					<li @click="getPackage(0)" :class="lx_check === 0 ? 'lx_check':''">
						<h3>包周<br><br>会员</h3>
					</li>
					<li @click="getPackage(1)" :class="lx_check == 1 ? 'lx_check':''">
						<h3>包月<br><br>会员</h3>
					</li>
					<li @click="getPackage(2)" :class="lx_check == 2 ? 'lx_check':''">
						<h3>包季<br><br>会员</h3>
					</li>
					<li @click="getPackage(3)" :class="lx_check == 3 ? 'lx_check':''">
						<h3>包年<br><br>会员</h3>
					</li>
				</ul>
				<div class="lx_title">选择套餐</div>
				<ul class="tc_list">
					<li onclick="getPackageInfo(27)" class="lx_check" id="goods">包周特惠</li>
				</ul>
				<!--选择套餐结束-->
				<div class="clear"></div>
				<div class="line"></div>
				<div class="buy_input">
					<span class="buy_input_left">使用时长</span>
					<span class="buy_input_right" id="days">7天</span>
				</div>
				<div class="buy_input">
					<span class="buy_input_left">支付金额</span>
					<span class="buy_input_right font_red" id="price">38.00</span>
				</div>
				<div class="pay_title">支付方式</div>
				<ul class="payment select_zhifu">
					<li :class="zfmorn == 'alipay' ? 'item lx_check':'item'" @click="zfdata('alipay')">
						<img src="../assets/wap/images/zfb_s.png" height="28" alt="">
						支付宝扫码
					</li>
					<li :class="zfmorn == 'weixin' ? 'item lx_check':'item'" @click="zfdata('weixin')">
						<img src="../assets/wap/images/wx_s.png" height="28" alt="">
						微信扫码
					</li>
				</ul>
				<div class="clear"></div>
			</form>
		</div>
		<div class="set_bottom"></div>
		<div class="pay_bottom">
			<div class="pay_bottom_left">
				<div :class="agree ? 'gou agree':'gou'" @click="setgou">
					<img src="../assets/wap/images/gou1.png" height="8" alt="">
				</div> 
				同意 
				<a @click="xz_btn" class="xz_btn">《逍遥代理购买须知》</a>
			</div>
			<button class="pay_bottom_right">立即支付</button>
		</div>
		<!--逍遥代理购买须知模态窗-->
		<div :class="zhuce ?'modal zhuce active':'modal zhuce'">
			<div :class="zhuce ?'modal_main big_modal modal_main_show':'modal_main big_modal'">
				<span class="close" @click="xz_btn"></span>
				<p style="font-size: 14px;line-height: 24px;margin-bottom: 10px;color: #858595">本协议是您与逍遥软件相关事宜所订立的契约，请您仔细阅读本注册协议，您点击“同意并继续”后，本协议即构成对双方有约束力的法律文件。
					<br> 一.用户注册
					<br> a. 用户注册是指用户登录逍遥软件，按要求填写相关信息并确认同意本服务协议的过程。
					<br> b. 逍遥软件用户必须是具有完全民事行为能力的自然人。
					<br> c. 本产品一经售出，必须按照购买协议执行。
					<br> 二.用户的帐号，密码和安全性
					<br>
					用户一旦注册成功，成为本站的合法用户。逍遥软件将对用户名和密码安全严格保密，同时用户需保障自己账户密码不外流。此外，每个用户都要对以其用户名进行的所有活动和事件负全责。用户若发现任何非法使用用户帐号或存在安全漏洞的情况，请立即通告本站。
					<br> 三.用户依法言行义务
					<br> 本协议依据国家相关法律法规规章制定，用户同意严格遵守以下义务：
					<br> (1) 不得传输或发表：煽动抗拒、破坏宪法和法律、行政法规实施的言论，煽动颠覆国家政权，推翻社会主义制度的言论，煽动分裂国家、破坏国家统一的的言论，煽动民族仇恨、民族歧视、破坏民族团结的言论；
					<br> (2) 从中国大陆向境外传输资料信息时必须符合中国有关法规；
					<br> (3) 不得利用本站从事洗钱、窃取商业秘密、窃取个人信息等违法犯罪活动；
					<br> (4) 不得干扰本站的正常运转，不得侵入本站及国家计算机信息系统；
					<br> (5) 不得传输或发表任何违法犯罪的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽的、不文明的等信息资料；
					<br> (6) 不得传输或发表损害国家社会公共利益和涉及国家安全的信息资料或言论；
					<br> (7) 不得教唆他人从事本条所禁止的行为；
					<br> (8) 不得利用在本站注册的账户进行牟利性经营活动；
					<br> (9)
					不得发布任何侵犯他人著作权、商标权等知识产权或合法权利的内容；用户应不时关注并遵守本站不时公布或修改的各类合法规则规定。本站保有删除站内各类不符合法律政策或不真实的信息内容而无须通知用户的权利。若用户未遵守以上规定的，
					本站有权作出独立判断并采取暂停或关闭用户帐号等措施。用户须对自己在网上的言论和行为承担法律责任。
					<br> 四.协议更新及用户关注义务
					<br> 根据国家法律法规变化及网站运营需要，逍遥软件有权对本协议条款不时地进行修改，修改后的协议一旦被张贴在本站上即生效，并代替原来的协议。用户可随时登录查阅最新协议；
					用户有义务不时关注并阅读最新版的协议及网站公告。如用户不同意更新后的协议，可以且应立即停止接受网站依据本协议提供的服务；如用户继续使用本网站提供的服务的，即视为同意更新后的协议。逍遥软件建议您在使用本站之前阅读本协议及本站的公告。
					如果本协议中任何一条被视为废止、无效或因任何理由不可执行，该条应视为可分的且并不影响任何其余条款的有效性和可执行性。

					<br> 五.法律管辖和适用
					<br> 本协议的订立、执行和解释及争议的解决均应适用在中华人民共和国大陆地区适用之有效法律（但不包括其冲突法规则）。 如发生本协议与适用之法律相抵触时，则这些条款将完全按法律规定重新解释，而其它有效条款继续有效。
					如缔约方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向有管辖权的中华人民共和国大陆地区法院提起诉讼。
				</p>
				<div class="clear"></div>
				<a @click="xz_btn" class="bottom_btn btn_right" style="width: 200px">我已阅读并同意</a>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'headers',
		props: {
			count: {},
			indclass: {}
		},
		data() {
			return {
				indexdata: [],
				zhuce: false,
				zfmorn:'alipay',
				agree:false,
				lx_check: 0
			}
		},
		created() {
			this.loadData(); //本地静态json数据
		},
		methods: {
			async loadData() {
				let that = this
				that.data = await that.$url.json('header');
				that.logo_n = that.data.logo.logo_n
				that.logo_s = that.data.logo.logo_s
				that.title = that.data.logo.title
			},
			xz_btn() {
				this.zhuce = !this.zhuce
			},
			yzmimg(e) {
				var timestamp = new Date().getTime();
				this.erimg = e + "?t=" + timestamp
			},
			getPackage(e){
				this.lx_check=e
			},
			zfdata(e){
				this.zfmorn=e
			},	
			setgou(){
				this.agree = !this.agree
			}
		}
	}
</script>

<style scoped>
	.header {
		position: relative;
		height: 44px;
		line-height: 44px;
		text-align: center;
		background-color: #856be2;
		color: #fff;
		font-size: 16px;
	}

	.back_btn {
		position: absolute;
		left: 0;
		top: 0;
		display: block;
		height: 44px;
		width: 44px;
		text-align: center;
		line-height: 44px;
	}

	.lx_title {
		font-size: 14px;
		font-weight: 500;
		margin: 30px 0 12px 0;
	}

	.lx_check {
		position: relative;
		background-color: #efebfd !important;
		border-color: #856be2 !important;
		overflow: hidden;
	}

	.lx_check {
		color: #7d33ea !important;
	}

	.lx_list li {
		display: block;
		float: left;
		width: calc(25% - 11px);
		height: 70px;
		background-color: #f8f8f8;
		border: 1px solid #f8f8f8;
		border-radius: 4px;
		margin-right: 12px;
		margin-bottom: 20px;
		text-align: center;
	}

	.lx_check:before {
		content: '';
		display: block;
		position: absolute;
		bottom: -1px;
		right: -1px;
		width: 0px;
		height: 0px;
		border-width: 6px;
		border-style: solid;
		border-color: transparent #856be2 #856be2 transparent;
		z-index: 1;
	}

	.lx_list li>h3 {
		font-size: 16px;
		font-weight: 500;
		margin: 10px 0 12px 0;
		color: #7d33ea;
	}

	.lx_list li:last-child {
		margin-right: 0;
	}

	.container {
		width: calc(100% - 24px);
		margin: 0 auto;
		position: relative;
	}

	.tc_list li {
		display: block;
		float: left;
		width: calc(50% - 8px);
		height: 36px;
		line-height: 36px;
		font-size: 14px;
		background-color: #f8f8f8;
		border: 1px solid #f8f8f8;
		border-radius: 4px;
		margin-right: 12px;
		margin-bottom: 12px;
		text-align: center;
		color: #7d33ea;
		position: relative;
		background-color: #efebfd;
		border-color: #856be2;
		overflow: hidden;
	}

	.line {
		height: 1px;
		background: #eee;
	}

	.buy_input {
		font-size: 14px;
		border-bottom: 1px solid #eee;
		padding: 0 5px;
		height: 54px;
		line-height: 54px;
		font-weight: 500;
	}

	.buy_input_left {
		float: left;
	}

	.buy_input_right {
		float: right;
		text-align: right;
	}

	.yhq {
		display: block;
		background: url(../assets/wap/images/yhq.png) no-repeat;
		background-size: cover;
		height: 24px;
		width: 78px;
		margin-top: 14px;
	}

	.buy_input_right input {
		display: inline-block;
		width: 100%;
		text-align: right;
		background: none;
		border: none;
	}

	.font_red {
		color: #ff6d5a;
	}

	.pay_title {
		position: relative;
		font-size: 14px;
		font-weight: 500;
		margin: 20px 0 15px 0;
	}

	.payment li {
		display: block;
		float: left;
		height: 50px;
		line-height: 50px;
		width: calc(50% - 9px);
		border: 1px solid #f8f8f8;
		background-color: #f8f8f8;
		border-radius: 4px;
		margin-right: 14px;
		margin-bottom: 66px;
		font-weight: 500;
	}
	.payment li:last-child {
	    margin-right: 0;
	}
	.payment li>img {
	    vertical-align: middle;
	    margin: 0 20px 0 15px;
	}
	.set_bottom{
		width: 100%;
		height: 50px;
	}
	.pay_bottom {
	    height: 50px;
	    background-color: #ffffff;
	    border-top: 1px solid #eee;
	    line-height: 50px;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.pay_bottom_left {
	    float: left;
	    margin-left: 16px;
	    font-size: 12px;
	}
	.pay_bottom_right {
	    float: right;
	    display: block;
	    width: 33%;
	    height: 100%;
	    background-color: #856be2;
	    color: #fff;
	    font-weight: 500;
	}
	.gou {
	    display: inline-block;
	    vertical-align: middle;
	    width: 18px;
	    height: 18px;
	    background-color: #fff;
	    border: 1px solid #e5e5e5;
	    margin-right: 8px;
	    border-radius: 10px;
	    text-align: center;
	    line-height: 18px;
	}
	.pay_bottom_left>a {
	    color: #7d33ea;
	}
	

	.login_logo {
		text-align: center;
		margin: 36px 0 48px 0;
	}

	.log_tab {
		margin-bottom: 34px;
	}

	.log_tab a {
		position: relative;
		font-size: 20px;
		font-weight: 500;
		margin-left: 30px;
		color: #4d4d4d;
	}

	.log_check {
		color: #7d33ea;
	}

	.log_check:before {
		content: '';
		display: block;
		position: absolute;
		left: 10px;
		top: 30px;
		width: 20px;
		height: 4px;
		background-color: #7d33ea;
		border-radius: 2px;
	}

	.log_input {
		position: relative;
		height: 40px;
		width: calc(100% - 60px);
		margin: 0 auto 20px auto;
		background-color: #ffffff;
		border-radius: 2px;
		border: solid 1px #e5e5e5;
	}

	.log_input input {
		height: 100%;
		padding: 0 10px;
		width: calc(100% - 20px);
		background: none;
		border: none;
		font-size: 14px;
		color: #333333;
	}

	.check_btn {
		display: block;
		color: #fff;
		width: calc(100% - 60px);
		height: 40px;
		line-height: 40px;
		margin: 30px auto 12px auto;
		text-align: center;
		background-color: #856be2;
		border-radius: 2px;
	}

	.forget_link {
		text-align: center;
		font-size: 12px;
	}

	.forget_link>a {
		color: #856be2;
	}

	.pic_yz {
		position: absolute;
		right: 2px;
		top: 2px;
	}

	.get_yzm {
		width: 100px;
		position: absolute;
		right: 2px;
		top: -2px;
		float: right;
		border-left: 1px rgba(255, 255, 255, 0.2) solid;
		height: 24px;
		line-height: 24px;
		text-align: center;
	}

	.get_yzm .tx_d_i_btn {
		font-size: 12px;
		color: #856be2;
		letter-spacing: 1px;
		transition: all 0.3s ease;
	}

	.yzm_btns {
		display: block;
		position: absolute;
		top: 12px;
		right: 10px;
		color: #7d33ea;
		font-size: 12px;
		font-weight: 500;
	}

	.get_yzm span {
		display: none;
		width: 62px;
		height: 26px;
		line-height: 24px;
		background-color: transparent;
		text-align: center;
		color: #856be2;
		font-size: 12px;
	}

	.log_agree {
		text-align: center;
		font-size: 12px;
		color: #999;
		margin-top: 30px;
	}

	.log_agree>a {
		color: #7d33ea;
	}
	.agree {
	    border-color: #856be2;
	    background-color: #856be2;
	}
	.modal {
		display: none;
		position: fixed;
		z-index: 10000;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		opacity: 0;
		transition: .3s;
	}

	.modal_main {
		position: absolute;
		width: 360px;
		height: auto;
		padding: 30px;
		background: #fff;
		opacity: 0;
		left: 50%;
		top: 30%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		border-radius: 5px;
		transition: .3s;
	}

	.big_modal {
		width: calc(100% - 50px);
		max-height: calc(100% - 50px);
		overflow-y: auto;
	}

	.modal_main {
		padding: 20px;
		width: calc(100% - 50px);
	}

	.close {
		position: absolute;
		display: block;
		right: 6px;
		top: 6px;
		height: 24px;
		width: 24px;
		cursor: pointer;
	}

	.active {
		display: block;
		opacity: 1;
	}

	.modal_main_show {
		top: 50%;
		opacity: 1;
	}

	.close:before {
		content: '\2715';
		font-size: 24px;
		color: #ccc;
	}

	.bottom_btn {
		display: block;
		height: 48px;
		line-height: 48px;
		border-radius: 4px;
		font-size: 18px;
	}

	.btn_right {
		float: right;
		border: 1px solid #856be2;
		background: #856be2;
		color: #fff;
	}
</style>
