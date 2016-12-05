window.onload = function() {
	InitBottom();
}

window.onresize = function() {
	InitBottom();
}

function InitBottom() {
	if($("body").height() < window.innerHeight) {
		$("#bottom").css({
			"position": "fixed",
			"bottom": "0px",
			"left": "0px"
		});
	}
}

//登录弹窗
function LoginTan(index) {
	//关闭弹窗
	if(index <= 0) {
		$("#tanbg").addClass("hide");
		$("#login").removeClass("bounceIn").addClass("bounceOut").addClass("hide");
		return;
	}
	//登录
	else if(index == 1) {
		$("#login").find(".register,.forget").addClass("hide");
		$("#login").find(".login").removeClass("hide");
	}
	//注册
	else if(index == 2) {
		$("#login").find(".login,.forget").addClass("hide");
		$("#login").find(".register").removeClass("hide");
	}
	//找回密码第一步
	else if(index == 3) {
		$("#login").find(".login,.register,.forget").addClass("hide");
		$("#login").find(".step1").removeClass("hide");
	}
	//找回密码第二步
	else if(index == 4) {
		$("#login").find(".login,.register,.forget").addClass("hide");
		$("#login").find(".step2").removeClass("hide");
	}
	//密码重置成功提示
	else if(index == 5) {
		$("#login").find(".logincontent,.notbind,.notuser").addClass("hide");
		$("#login").find(".pwdcontent").removeClass("hide");
	}
	//号码未绑定提示
	else if(index == 6) {
		$("#login").find(".logincontent,.pwdcontent,.notuser").addClass("hide");
		$("#login").find(".notbind").removeClass("hide");
	}
	//非会员提示
	else if(index == 7) {
		$("#login").find(".logincontent,.notbind,.pwdcontent").addClass("hide");
		$("#login").find(".notuser").removeClass("hide");
	}
	$("#tanbg").removeClass("hide");
	$("#login").removeClass("hide").removeClass("bounceOut").addClass("bounceIn");
}

//参与众筹弹窗
function JoinTan(index) {
	//关闭弹窗
	if(index <= 0) {
		$("#tanbg").addClass("hide");
		$("#join").removeClass("bounceIn").addClass("bounceOut").addClass("hide");
		return;
	}
	//我要参加
	else if(index == 1) {
		$("#join").find(".success").addClass("hide");
		$("#join").find(".add").removeClass("hide");
	}
	//参加成功
	else if(index == 2) {
		$("#join").find(".add").addClass("hide");
		$("#join").find(".success").removeClass("hide");
	}
	$("#tanbg").removeClass("hide");
	$("#join").removeClass("hide").removeClass("bounceOut").addClass("bounceIn");
}