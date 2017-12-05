<template>
	<div class="loginS-page">
		<div class="loginPage-waper">
			<i class="icon" id="loginPage-waper-offBtn" @click="$router.push({name:'home'})"></i>
			<div class="loginPage-content">
				<h4 class="logintext">
					与君一别心挂念，今见其人意尽欢！
				</h4>
				<ul class="loginPage-form">
					<li>
						<div class="loginPage-input" style="border-color: rgb(224, 229, 232);">
							<input placeholder="请输入邮箱／手机号" id="loginPage-tel">
							<label id="loginPage-tel-state">中国大陆手机号或者邮箱帐号</label>
						</div>
					</li>
					<li>
						<div class="loginPage-input">
							<input type="password" class="password-input" placeholder="请输入密码" id="loginPage-pwd">
							<i class="icon-eyes"></i>
							<label id="loginPage-pwd-state">6~16个字符，仅限英文字母或数字</label>
						</div>
					</li>
					<li>
						<button id="loginPage-submit">
						立即登录
						</button>
					</li>
					<li class="loginPage-rAndr">
						<span class="loginpage-rAndr-left" @click="$router.push({name:'register'})">注册帐号
						</span>
						<span class="loginpage-rAndr-right">忘记密码
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}

	}
</script>

<style lang="scss">
	    @import '../../styles/login.scss';
</style>