<template>
	<div class="home-list float-r">
		<ul class="content">
			<li class="item">
				<h3 class="title">热门类型</h3>
				<div class="badges clearfix">
					<span class="badge float-l" v-for="(item,index) in badgeList">
						<i class="text">{{ item.text }}</i>
					</span>
				</div>
			</li>
			<li class="item">
				<h3 class="title clearfix">
					<span>今日最佳</span>
					<a class="more" href="javascript:;">查看更多</a>
				</h3>
				<div class="toplist">
					<ul>
						<li v-for="(item,index) in list" class="clearfix">
							<span class="index float-l">{{ index+1 }}</span>
							<span class="cont float-l">
								<span class="a-title">{{ item.title }}</span>
								<span class="author">{{ item.author }}</span>
							</span>	
						</li>
					</ul>
				</div>
			</li>
			<li class="item" style="border:none">
				<p>闽 B2-21050084·闽 ICP 备 14007660 号 -1 © 犀牛故事2016</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import badgeMess from './badgeMess.js';

	export default {
		data() {
			return {
				list:[
					{
						title:'淤青',
						url:'',
						author:'朝辞客服',
					},
					{
						title:'心动只有5秒',
						url:'',
						author:'朝辞前台',
					},
					{
						title:'像我这样的人',
						url:'',
						author:'朝辞运营',
					},
					{
						title:'相逢少年时',
						url:'',
						author:'朝辞财务',
					},
					{
						title:'陈二狗的妖孽人生',
						url:'',
						author:'朝辞吉祥物',
					}
				]
			}
		},
		computed:{
			badgeList() {
				return badgeMess;
			}
		}
	}
</script>

<style lang="scss">
	
</style>