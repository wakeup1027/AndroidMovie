
/* JavaScript content from js/login.js in folder common */
var currentPage_login={};

currentPage_login.loginUser = function(){
	var name = $("#userName").val();
	var pass = $("#passWork").val();
	cordova.exec(sayHelloSuccess, sayHelloFailure, "LoginUser", "admin", [name,pass]);
}

function sayHelloSuccess(data){
	WL.Toast.show("欢迎回来："+data[0]);
}

function sayHelloFailure(data){
	if(data.stutas=="0"||data.stutas==0){
		WL.Toast.show("登录失败！请检查账号或密码是否正确");
	}
}
