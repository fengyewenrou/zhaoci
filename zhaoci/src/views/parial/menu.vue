<template>
	<div class="page-menu">
		<div class="logo">
			<img src="../../styles/images/logo.png"  alt="logo">
		</div>
		<div class="nav-list">
			<ul class="menu clearfix">
				<li v-for="(item,index) in list" class="float-l item">
					<a href="javascript:;" @click="$router.push({name:item.name})">
						<span>{{ item.text }}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="operate-area">
			<ul class="form clearfix">
				<li class="item float-l" v-for="(item,index) in buttonArea" :class="index===2?'write':''">
					<a href="javascript:;">
						{{ item }}
					</a>
				</li>
				<li class="item float-l user">
				    <div>
				        <span class="badge">
				        	<i>{{ username.substr(0,2).toLocaleUpperCase() }}</i>
				        </span>
				        <span class="text">{{ username }}</span>
				        <div class="nav-body">
				            <ul>
				                <li><a @click="gotoPerson()">个人中心</a></li>
				                <li><a @click="logout()">退出</a></li>
				            </ul>
				        </div>
				    </div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import menuOptions from './navBar.js';

	export default {
		data() {
			return {
				username:'admin',
				buttonArea:['登陆','注册','写故事']
			}
		},
		computed:{
			list() {
				return menuOptions;
			}
		}
	}
</script>

<style lang="scss">
	@import '../../styles/home.scss'
</style>