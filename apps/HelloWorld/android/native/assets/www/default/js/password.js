
/* JavaScript content from js/password.js in folder common */
/**
 * 
 */
//添加cookie，存储期限为7天 登陆成功后调用
function saveCookie(loginname,password) {
	console.log("保存账号密码："+loginname+"/"+password);
    $.cookie('loginname', loginname, {
        expires : 7
    });
   
    $.cookie('mypassword', password, {
        expires : 7
    });
}
	
//自动填充账号密码
$(function(){
	var loginCode = $.cookie("loginname"); //获取cookie中的用户名  
    var pwd =  $.cookie("mypassword"); //获取cookie中的登陆密码  
    if(pwd){//密码存在的话把“记住用户名和密码”复选框勾选住  
        $("[name='checkbox']").attr("checked","true");  
    } 
    
    if(loginCode){//用户名存在的话把用户名填充到用户名文本框  
        $('[name="userName"]').val(loginCode);  
    }  
    
    if(pwd){//密码存在的话把密码填充到密码文本框  
        $('[name="passWork"]').val(pwd);  
    }  
});