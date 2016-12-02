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
	$("#tanbg").removeClass("hide");
	$("#login").removeClass("hide").removeClass("bounceOut").addClass("bounceIn");
}