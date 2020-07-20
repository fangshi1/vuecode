<template>
  <swiper id="swiper_container" class="swiper" :options="swiperOption">
    <swiper-slide>
		<img src="../assets/images/home_banner.jpg" alt=""/>
	</swiper-slide>
    <swiper-slide>
    	<img src="../assets/images/home_banner.jpg" alt=""/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
	import 'swiper/css/swiper.min.css'
	export default {
	  name: 'upswiper',
	  title: 'RTL layout',
	  components: {
		Swiper,
		SwiperSlide
	  },
	  props: {
	  	count:{
	  		
	  	}
	  },
	  data () {
	   return {
		   swiperOption: {
			 spaceBetween: 0, /*slide之间的距离*/
			 centeredSlides: true, /*设定为true时，活动块会居中，而不是默认状态下的居左。*/
			 speed:1000,  /*slider自动滑动开始到结束的时间*/
			 zoom: true, /*双击slide会放大/缩小*/
			 loop: true, /*无限循环*/
			 slidesPerView: 'auto', /*根据slide的宽度自动调整展示数量。此时需要设置slide的宽度，如下style所示*/
			 loopedSlides: 5, /*可视slide有5个*/
			 autoplay: { /*自动轮播*/
			   delay: 1000, /*时间*/
			   disableOnInteraction: false /*用户操作swiper之后，是否禁止autoplay。默认为true：停止。*/
			 },
			 pagination: {  /* 使用分页器导航。分页器可使用小圆点样式（默认）、分式样式或进度条样式。*/
			   el: '.swiper-pagination',
			   clickable: true /* 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。*/
			 },
			 paginationClickable: true, /* 分页器是否可点击*/
			 nested: true, /* 禁止父级滑块自动滑动功能*/
			 navigation: {  /*获取前进按钮的HTML元素*/
			   nextEl: '.swiper-button-next', /*下一个*/
			   prevEl: '.swiper-button-prev'  /*上一个*/
			 }
		   }
		 }
	  },
	  mounted() {
		  let that = this
		  /*鼠标移入停止轮播*/
		  var comtainer = document.getElementById('swiper_container');
		  comtainer.onmouseover = function () {
			  this.swiper.autoplay.stop()
		  };
		  /*鼠标离开 继续轮播*/
		  comtainer.onmouseout = function () {
			  this.swiper.autoplay.start()
		  }
	  },
	  methods:{
		  
	  }
	}
</script>

<style scoped>
	.swiper{
		height: auto;
	}
</style>

