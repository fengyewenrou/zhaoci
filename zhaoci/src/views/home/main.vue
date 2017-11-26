<template>
	<div class="page-content home">
		<div class="banner"></div>
		<div class="home-content clearfix">
			<home-detail></home-detail>
			<home-list></home-list>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import banner1 from '../../styles/images/banner1.jpg';
	import banner2 from '../../styles/images/banner2.jpg';
	import banner3 from '../../styles/images/banner3.jpg';
	import banner4 from '../../styles/images/banner4.jpg';
	import homeDetail from './detail/main.vue'
	import homeList from './toplist/main.vue'

	export default {
		data() {
			return {
				srcOptions:[
					{url:banner1},
					{url:banner2},
					{url:banner3},
					{url:banner4},
				],
				bSince:false,
			}
		},
		mounted() {
			let $banner = $('.banner');
			$banner.css({height:$(window).height() - 60,"background-image":"url("+this.srcOptions[parseInt(4*Math.random())].url+")"});

			this.scroll();
		},
		methods:{
			scroll() {
				//滚动
			    $(window).scroll(function () {
			        //$(window).scrollTop()这个方法是当前滚动条滚动的距离
			        let oHeight = $(window).scrollTop();

			        if(this.bSince)return;

			        if (oHeight >= 60){
			        	$(window).scrollTop($('.banner').height());
			        	this.bSince = true;
			        }

			    });
			},
		},
		components:{
			homeDetail,
			homeList
		}
	}
</script>

<style lang="scss">

</style>