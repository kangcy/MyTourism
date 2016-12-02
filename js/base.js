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
	if(index == 0) {
		$("#tanbg").addClass("hide");
		$("#login").removeClass("bounceIn").addClass("bounceOut").addClass("hide");
	} else {
		$("#tanbg").removeClass("hide");
		$("#login").removeClass("hide").removeClass("bounceOut").addClass("bounceIn");
	}
}