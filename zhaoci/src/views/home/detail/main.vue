<template>
	<div class="home-detail float-l">
		<div class="center">
			<ul class="article-list">
				<li class="item" v-for="(item,index) in list">
					<div class="title clearfix"> 
						<div class="author-message float-l clearfix">
							<a href="javascript:;" class="float-l author-icon">
								<img :src="item.authorIcon" alt="">
							</a>
							<span class="float-l author-mess">
								<a class="name" href="javascript:;">{{ item.authorName }}</a>
								<span class="underwrite">{{ item.authorIntroduce }}</span>
							</span>
						</div>
						<a href="javascript:;" class="badge float-r">
							<span class="icon"></span>
							<span class="text">{{ item.articleType }}</span>
						</a>
					</div>
					<div class="content">
						<a href="javascript:;" class="article-image">
							<img :src="item.articleIMage" alt="">
						</a>
						<h3 class="article-title">
							<a href="javascript:;">{{ item.articleTitle }}</a>
						</h3>
						<p class="article-cont">
							<a href="javascript:;">{{ item.articleContent }}</a>
						</p>
					</div>
					<div class="operate clearfix">
						<div class="article-from float-l"></div>
						<div class="area float-r clearfix">
							<span class="button float-l">
								<span class="button-icon collection"></span>
								<i class="number">{{ item.collection }}</i>
							</span>
							<span class="button float-l">
								<span class="button-icon like"></span>
								<i class="number">{{ item.like }}</i>
							</span>
							<span class="button float-l">
								<span class="button-icon comment"></span>
								<i class="number">{{ item.comment }}</i>
							</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						authorName:'朝辞客服',
						authorIntroduce:'在故事里相遇',
						authorIcon:require('../../../styles/images/head1.jpg'),
						articleTitle:'朝辞',
						articleContent:'朝辞白帝彩云间,千里江陵一日还',
						articleIMage:require('../../../styles/images/article1.jpg'),
						articleType:'童话',
						collection:10,
						like:10,
						comment:10,
					},
					{
						authorName:'朝辞前台',
						authorIntroduce:'目前在致力于开发超光速飞船',
						authorIcon:require('../../../styles/images/head2.jpg'),
						articleTitle:'朽木漂流',
						articleContent:'永恒的生命就意味着永恒的孤独。',
						articleIMage:require('../../../styles/images/article2.jpg'),
						articleType:'言情',
						collection:10,
						like:10,
						comment:10,
					},
					{
						authorName:'朝辞运营',
						authorIntroduce:'我有个大坑，想填给你看。',
						authorIcon:require('../../../styles/images/head3.jpg'),
						articleTitle:'好累',
						articleContent:"如果你喜欢的人不喜欢你，那么就算全世界的人都喜欢你，还是会觉得孤独吧。If the person you like doesn't like you ,wouldn't it still be lonely even if the whole world loves you.",
						articleIMage:require('../../../styles/images/article3.jpg'),
						articleType:'校园',
						collection:10,
						like:10,
						comment:10,
					},
					{
						authorName:'朝辞吉祥物',
						authorIntroduce:'(੭ु≧▽≦)੭ु',
						authorIcon:require('../../../styles/images/head1.jpg'),
						articleTitle:'一个日语客服的每天',
						articleContent:'滚来滚去……~(～o￣▽￣)～o 。。。滚来滚去……o～(＿△＿o～) ~。。',
						articleIMage:require('../../../styles/images/article4.jpg'),
						articleType:'童话',
						collection:10,
						like:10,
						comment:10,
					},
				]
			}
		}
	}
</script>

<style lang="scss">
	
</style>