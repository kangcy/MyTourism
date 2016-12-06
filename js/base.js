window.onload = function() {
	InitBottom();
}

window.onresize = function() {
	InitBottom();
}

//初始化底部
function InitBottom() {
	if($("body").height() < window.innerHeight) {
		$("#bottom").css({
			"position": "fixed",
			"bottom": "0px",
			"left": "0px"
		});
	}
}

//返回顶部
function Totop() {
	$("html,body").animate({
		scrollTop: 0
	}, 500);
}

//收藏
function Favorite() {
	var url = "http://www.baidu.com.com";
	var title = "百度";
	try {
		window.external.AddFavorite(url, title);
		layer.msg("添加收藏成功")
	} catch(e) {
		try {
			window.sidebar.addPanel(title, url, "");
			layer.msg("添加收藏成功")
		} catch(e) {
			layer.msg("加入收藏失败,请使用Ctrl+D进行添加或者是按照您当前浏览器的操作方法将本页添加到收藏夹！");
		}
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
	//详细信息
	if(index == 1) {
		$("#join").find(".add,.success").addClass("hide");
		$("#join").find(".detail").removeClass("hide");
	}
	//我要参加
	else if(index == 2) {
		$("#join").find(".detail,.success").addClass("hide");
		$("#join").find(".add").removeClass("hide");
	}
	//参加成功
	else if(index == 3) {
		$("#join").find(".detail,.add").addClass("hide");
		$("#join").find(".success").removeClass("hide");
	}
	$("#tanbg").removeClass("hide");
	$("#join").removeClass("hide").removeClass("bounceOut").addClass("bounceIn");
}