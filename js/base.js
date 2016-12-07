window.onload = function() {
	InitBottom();
}

window.onresize = function() {
	InitBottom();
}

window.onscroll = function() {
	var t = document.documentElement.scrollTop || document.body.scrollTop; //获取距离页面顶部的距离
	if(t > 170) {
		$("#subtitle").slideDown();
	} else {
		$("#subtitle").slideUp();
	}
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
	var $login = $("#login");
	$login.find(".logincontent,.pwdcontent,.notuser,.notbind").addClass("hide");
	//关闭弹窗
	if(index <= 0) {
		$("#tanbg").addClass("hide");
		$login.removeClass("bounceIn").addClass("bounceOut").addClass("hide");
		return;
	}
	//登录
	else if(index == 1) {
		$login.find(".register,.forget").addClass("hide");
		$login.find(".login,.logincontent").removeClass("hide");
	}
	//注册
	else if(index == 2) {
		$login.find(".login,.forget").addClass("hide");
		$login.find(".register,.logincontent").removeClass("hide");
	}
	//找回密码第一步
	else if(index == 3) {
		$login.find(".login,.register,.forget").addClass("hide");
		$login.find(".step1,.logincontent").removeClass("hide");
	}
	//找回密码第二步
	else if(index == 4) {
		$login.find(".login,.register,.forget").addClass("hide");
		$login.find(".step2,.logincontent").removeClass("hide");
	}
	//密码重置成功提示
	else if(index == 5) {
		$login.find(".logincontent,.notbind,.notuser").addClass("hide");
		$login.find(".pwdcontent").removeClass("hide");
	}
	//号码未绑定提示
	else if(index == 6) {
		$login.find(".logincontent,.pwdcontent,.notuser").addClass("hide");
		$login.find(".notbind").removeClass("hide");
	}
	//非会员提示
	else if(index == 7) {
		$login.find(".logincontent,.notbind,.pwdcontent").addClass("hide");
		$login.find(".notuser").removeClass("hide");
	}
	$("#tanbg").removeClass("hide");
	$login.removeClass("hide").removeClass("bounceOut").addClass("bounceIn");
}

//参与众筹弹窗
function JoinTan(index) {
	var $join = $("#join");
	//关闭弹窗
	if(index <= 0) {
		$("#tanbg").addClass("hide");
		$join.removeClass("bounceIn").addClass("bounceOut").addClass("hide");
		return;
	}
	//详细信息
	if(index == 1) {
		$join.find(".add,.success").addClass("hide");
		$join.find(".detail").removeClass("hide");
	}
	//我要参加
	else if(index == 2) {
		$join.find(".detail,.success").addClass("hide");
		$join.find(".add").removeClass("hide");
	}
	//参加成功
	else if(index == 3) {
		$join.find(".detail,.add").addClass("hide");
		$join.find(".success").removeClass("hide");
	}
	$("#tanbg").removeClass("hide");
	$join.removeClass("hide").removeClass("bounceOut").addClass("bounceIn");
}

//立即订购弹窗
function OrderTan(index) {
	var $order = $("#order");
	//关闭弹窗
	if(index <= 0) {
		$("#tanbg").addClass("hide");
		$order.removeClass("bounceIn").addClass("bounceOut").addClass("hide");
		return;
	}
	//详细信息
	if(index == 1) {
		$order.find(".add,.success").addClass("hide");
		$order.find(".detail").removeClass("hide");
	}
	//我要参加
	else if(index == 2) {
		$order.find(".detail,.success").addClass("hide");
		$order.find(".add").removeClass("hide");
	}
	//参加成功
	else if(index == 3) {
		$order.find(".detail,.add").addClass("hide");
		$order.find(".success").removeClass("hide");
	}
	$("#tanbg").removeClass("hide");
	$order.removeClass("hide").removeClass("bounceOut").addClass("bounceIn");
}

//提醒弹窗
function RemindTan(index) { //关闭弹窗
	var $remind = $("#remind");
	if(index <= 0) {
		$("#tanbg").addClass("hide");
		$remind.removeClass("bounceIn").addClass("bounceOut").addClass("hide");
		return;
	}
	//添加提醒
	else if(index == 1) {
		$remind.find(".success").addClass("hide");
		$remind.find(".add").removeClass("hide");
	}
	//添加成功
	else if(index == 2) {
		$remind.find(".add").addClass("hide");
		$remind.find(".success").removeClass("hide");
	}
	$("#tanbg").removeClass("hide");
	$remind.removeClass("hide").removeClass("bounceOut").addClass("bounceIn");
}

//页面跳转
function Link(index) {
	if(index == 1) {
		window.location.href = "index.html"; //首页
	} else if(index == 2) {
		window.location.href = "exclusive.html"; //会员专享
	} else if(index == 3) {
		window.location.href = "personal.html"; //私人订制
	} else if(index == 4) {
		window.location.href = "travelchips.html"; //旅游众筹
	} else if(index == 5) {
		window.location.href = "order.html"; //订购/退订
	}
}

//跳转限时秒杀列表页
function Seckills() {
	window.open("seckills.html")
}
//跳转会员特卖列表页
function Sales() {
	window.open("sales.html")
}
//跳转豪团尾单列表页
function Groups() {
	window.open("groups.html")
}
//跳转众筹列表页
function Travels() {
	window.open("travelchips.html")
}

//跳转众筹详情页
function Travel(id) {
	window.open("travelchip.html?id=" + id)
}

//跳转产品详情页
function Product(id) {
	window.open("productdetail.html" + id)
}