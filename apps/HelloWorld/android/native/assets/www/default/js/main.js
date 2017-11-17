
/* JavaScript content from js/main.js in folder common */
var pagesHistory = true;
var nowPages = [];
var currentPage_main={};
var path = "";
var BASE_PATH = "http://192.168.0.16:8080/zfjService/";

function wlCommonInit(){
	
	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
	    path = "/www/default/";
	}
	
	//默认加载的页面
	nowPages.push(path + "front/home.html");
	$("#wrapper").load(path + "front/home.html", function(){
		currentPage_home.init();
	});

	//监听手机后退的按钮
	document.addEventListener("backbutton", onBackKeyDown, false);
	
	//监听屏幕的旋转
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
	    if (window.orientation === 180 || window.orientation === 0) {
	        $("#wrapper").show();
	        $("#hwrapper").hide();
	    }
	    if (window.orientation === 90 || window.orientation === -90 ){
	        $("#hwrapper").show();
	        $("#wrapper").hide();
	    }
	}, false);
	
	//监听网络是否连接，已经连接就...
	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);
}

function onOnline() {
	currentPage_home.init();
	$("#bigdiv").css({"display":"none"});
}

function onOffline(){
	$("#bigdiv").css({"height":$("#wrapper").height(),"display":"block"});
}

function onBackKeyDown() {      
	if(pagesHistory){
		WL.SimpleDialog.show("消息提示", "是否退出应用？", 
				[{
					text: '确定',
					handler : function(){
						navigator.app.exitApp();
					} 
				},
				{
					text : '取消',
					handler : function(){
						
					} 
				}]
		);
	}else{
		$("#wrapper").load(path + "front/home.html", function(){
			currentPage_home.init();
			$("body").css("background","#fff");
		});
		pagesHistory = true;
	}
	
} 

currentPage_main.nonetalert = function(){
	WL.Toast.show("无网络连接！");
}

currentPage_main.backHome = function(){
	$("#wrapper").load(path + "front/home.html", function(){
		currentPage_home.init();
		$("body").css("background","#fff");
	});
	pagesHistory = true;
}

currentPage_main.loadPage = function(){
	nowPages.push(path + "admin/login.html");
	$("#wrapper").load(path + "admin/login.html", function(){
		$("body").css("background","#43536D");
	});
	pagesHistory = false;
};

currentPage_main.findall = function(){
	nowPages.push(path + "front/findall.html");
	$("#wrapper").load(path + "front/findall.html", function(){
		currentPage_findall.init();
		$("body").css("background","#fff");
	});
	pagesHistory = false;
};

currentPage_main.findkey = function(inc){
	$.post(BASE_PATH+"zhifeiji/findallOnePage",{"valkey":$(inc).text()},function(res){
		console.log(res);
		$(".dyContent").empty();
		for(var i=0; i<res.length; i++){
			var liStr= '<li onclick="currentPage_home.loadDetail(\''+res[i].id+'\',\'dyTable\')" style="background-image:url('+BASE_PATH+res[i].dy_fm+')"><div class="chDiv">'+res[i].dy_name+'</div></li>';
			$(".dyContent").append(liStr);
		}
		$("#keyList").hide();
		
		//js动态调整样式
		var moreMar = $(".dyContent").width()*(0.015);
		var moreMarW = $(".dyContent").width()*(0.323333);
		$(".dyContent li").css("height",moreMarW/0.7544+"px");
		$(".dyContent li").css("marginBottom",moreMar+"px");
		$(".dyContent li .chDiv").css("marginTop",(moreMarW/0.7544)-23+"px");
	});
};

currentPage_main.showFind = function(){
	if($("#keyIpt").val()==""||$("#keyIpt").val()=="null"||$("#keyIpt").val()==null){
		$("#keyList").hide();
	}else{
		$("#keyList").show();
		$("#keyList>#btnFind").text($("#keyIpt").val());
	}
}

/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}