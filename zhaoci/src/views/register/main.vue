<template>
	<div class="registerS-page">
		<div class="regPage-waper">
			<i class="icon" id="loginPage-waper-offBtn" @click="$router.push({name:'home'})"></i>
			<div class="regPage-content">
				<h4 class="regText">
					与君初相识&nbsp,&nbsp犹如故人归&nbsp！
				</h4>
				<ul class="regPage-form">
					<li>
						<div class="regPage-input">
							<input placeholder="昵称" title="请输入昵称" id="registerPage-name">
							<label id="registerPage-name-state">1-20个中文字符或英文字符</label>
						</div>
					</li>
					<li>
						<div class="regPage-input">
							<input placeholder="请输入邮箱／手机号" title="请输入邮箱／手机号" id="registerPage-tel">
							<label id="registerPage-tel-state">中国大陆手机号或者邮箱帐号</label>
						</div>
					</li>
					<li>
						<div class="regPage-input">
							<input type="password" class="password-input" placeholder="请输入密码" id="loginPage-pwd">
							<i class="icon-eyes"></i>
							<label id="loginPage-pwd-state">6~16个字符，仅限英文字母或数字</label>
						</div>
					</li>
					<!-- <li>
						<div class="regPage-input">
							<input placeholder="右侧图片验证码" class="vifiimginput" title="请输入右侧图片验证码" id="registerPage-imgVifi">
							<b class="vifImg" title="点击更换验证码" id="registerPage-getImgVifi"><img src="/api/user/verify_code?random=0.3320158539139044"></b>
							<label id="registerPage-imgVifi-state">
								请输入右侧验证码
							</label>
						</div>
					</li> -->
					<li>
						<div class="regPage-input">
							<input placeholder="短信／邮箱验证码" class="vifiinput" disabled="" title="请输入短信／邮箱验证码" id="registerPage-messVifi">
							<div class="upVifi" id="registerPage-getmessVifi">
								<span id="registerPage-text">发送验证码</span>
								<span id="registerPage-numdowm"></span>
							</div>
							<label id="registerPage-messVifi-state">
							请输入短信验证码
							</label>
						</div>
					</li>
					<li>
						<button id="regPage-submit">
						立即登录
						</button>
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
	@import '../../styles/register.scss';
</style>