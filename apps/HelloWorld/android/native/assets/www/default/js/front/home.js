
/* JavaScript content from js/front/home.js in folder common */
/**
 * 
 */
var currentPage_home={};

currentPage_home.init = function() {
	console.log("home页面初始化...");
	$("body").css("background","#fff");
	//判断用户是否连接网络
	if(networkInfo()){//无网络
		currentPage_home.nonetdate();//加载缓存数据
	}else{//有网络
		currentPage_home.getDate();//初始化数据
	}
	
};

currentPage_home.getDate = function(){
	$.post(BASE_PATH+"zhifeiji/index",function(res){
		var dyBan = res.dyBanner;
		var dyDapian = res.dyDapianHome;
		var dyHollywood = res.dyHollywoodHome;
		var dyKehuan = res.dyKehuanHome;
		var dyNe = res.dyNew;
		var dyReme = res.dyRemen;
		$("#swiperBox").empty();
		for(var i=0; i<dyBan.length; i++){
			var divBan = '<div class="swiper-slide blue-slide" onclick="currentPage_home.loadDetail(\''+dyBan[i].id+'\',\'DyBanner\')"><img src="'+BASE_PATH+dyBan[i].dy_fmBanner+'" style="width:100%; font-size:0"/><div style="background:rgba(0,0,0,0.8); color:#fff; line-height:30px; margin-top: -34px; position: relative; font-size: 12px; padding-left: 10px;">'+dyBan[i].dy_title+'</div></div>';
			$("#swiperBox").append(divBan);
		}
		
		$("#zxDyBox").empty();
		for(var i=0; i<dyNe.length; i++){
			var divNew = '<li onclick="currentPage_home.loadDetail(\''+dyNe[i].id+'\',\'DyNew\')" style="background-image:url('+BASE_PATH+dyNe[i].dy_fm+')"><div class="chDiv">'+dyNe[i].dy_name+'</div></li>';
			$("#zxDyBox").append(divNew);
		}
		
		$("#rmDyBox").empty();
		for(var i=0; i<dyReme.length; i++){
			var divReme = '<li onclick="currentPage_home.loadDetail(\''+dyReme[i].id+'\',\'DyRemen\')" style="background-image:url('+BASE_PATH+dyReme[i].dy_fm+')"><div class="chDiv">'+dyReme[i].dy_name+'</div></li>';
			$("#rmDyBox").append(divReme);
		}
		
		$("#KehuanBan").empty();
		$("#kehuanUl").empty();
		for(var i=0; i<dyKehuan.length; i++){
			if(i==0){
				var divKehuanBane = '<div class="smallBanner" onclick="currentPage_home.loadDetail(\''+dyKehuan[i].id+'\',\'DyKehuanHome\')" style="background-image:url('+BASE_PATH+dyKehuan[i].dy_fmBanner+');"><div class="chDiv">'+dyKehuan[i].dy_name+'</div></div>';
				$("#KehuanBan").append(divKehuanBane);
			}else{
				var divKehuan = '<li onclick="currentPage_home.loadDetail(\''+dyKehuan[i].id+'\',\'DyKehuanHome\')" style="background-image:url('+BASE_PATH+dyKehuan[i].dy_fm+')"><div class="chDiv">'+dyKehuan[i].dy_name+'</div></li>';
				$("#kehuanUl").append(divKehuan);
			}
		}

		$("#dapianBan").empty();
		$("#dapianUl").empty();
		for(var i=0; i<dyDapian.length; i++){
			if(i==0){
				var divdapianBane = '<div class="smallBanner" onclick="currentPage_home.loadDetail(\''+dyDapian[i].id+'\',\'DyDapianHome\')" style="background-image:url('+BASE_PATH+dyDapian[i].dy_fmBanner+');"><div class="chDiv">'+dyDapian[i].dy_name+'</div></div>';
				$("#dapianBan").append(divdapianBane);
			}else{
				var divdapian = '<li onclick="currentPage_home.loadDetail(\''+dyDapian[i].id+'\',\'DyDapianHome\')" style="background-image:url('+BASE_PATH+dyDapian[i].dy_fm+')"><div class="chDiv">'+dyDapian[i].dy_name+'</div></li>';
				$("#dapianUl").append(divdapian);
			}
		}

		$("#hoolBan").empty();
		$("#hoolUl").empty();
		for(var i=0; i<dyHollywood.length; i++){
			if(i==0){
				var divhoolBan = '<div class="smallBanner" onclick="currentPage_home.loadDetail(\''+dyHollywood[i].id+'\',\'DyHollywoodHome\')" style="background-image:url('+BASE_PATH+dyHollywood[i].dy_fmBanner+');"><div class="chDiv">'+dyHollywood[i].dy_name+'</div></div>';
				$("#hoolBan").append(divhoolBan);
			}else{
				var divhoolUl = '<li onclick="currentPage_home.loadDetail(\''+dyHollywood[i].id+'\',\'DyHollywoodHome\')" style="background-image:url('+BASE_PATH+dyHollywood[i].dy_fm+')"><div class="chDiv">'+dyHollywood[i].dy_name+'</div></li>';
				$("#hoolUl").append(divhoolUl);
			}
		}
		
		//初始化banner
		var mySwiper = new Swiper('.swiper-container',{
		    loop: true,
			autoplay: 3000,
			autoplayDisableOnInteraction: false,
			pagination: '.swiper-pagination',
		    paginationClickable: true
		});
		
		var btMar = $(".homeTj").width()*(0.015);
		var btMarW = $(".homeTj").width()*(0.323333);
		var banH = $(".smallBanner").width()*0.5142;
		$(".smallBanner").css("height",banH+"px");
		$(".homeTj li").css("marginBottom",btMar+"px");
		$(".homeTj li").css("height",btMarW/0.7544+"px");
		$(".homeTj li .chDiv").css("marginTop",(btMarW/0.7544)-23+"px");
		
		//缓存数据
		cordova.exec(CacheSucced, CacheFailure, "DoCache", "admin", [res]);
	});
	
}

function CacheSucced(date){
	alert("数据缓存成功！");
}

function CacheFailure(date){
	alert("数据缓存失败！");
}

currentPage_home.nonetdate = function(){
	cordova.exec(getCacheSucced, getCacheFailure, "GetCache", "admin", ["start"]);
	$("#bigdiv").css({"height":$("#wrapper").height(),"display":"block"});
}

function nonetalert(){
	WL.Toast.show("无网络连接！");
}

function getCacheSucced(res){
	var dyBan = res.dyBanner;
	var dyDapian = res.dyDapianHome;
	var dyHollywood = res.dyHollywoodHome;
	var dyKehuan = res.dyKehuanHome;
	var dyNe = res.dyNew;
	var dyReme = res.dyRemen;
	$("#swiperBox").empty();
	for(var i=0; i<dyBan.length; i++){
		var divBan = '<div class="swiper-slide blue-slide" onclick="nonetalert()"><img src="'+dyBan[i].dy_fmBanner+'" style="width:100%; font-size:0"/><div style="background:rgba(0,0,0,0.8); color:#fff; line-height:30px; margin-top: -34px; position: relative; font-size: 12px; padding-left: 10px;">'+dyBan[i].dy_title+'</div></div>';
		$("#swiperBox").append(divBan);
	}
	
	$("#zxDyBox").empty();
	for(var i=0; i<dyNe.length; i++){
		var divNew = '<li onclick="nonetalert()" style="background-image:url('+dyNe[i].dy_fm+')"><div class="chDiv">'+dyNe[i].dy_name+'</div></li>';
		$("#zxDyBox").append(divNew);
	}
	
	$("#rmDyBox").empty();
	for(var i=0; i<dyReme.length; i++){
		var divReme = '<li onclick="nonetalert()" style="background-image:url('+dyReme[i].dy_fm+')"><div class="chDiv">'+dyReme[i].dy_name+'</div></li>';
		$("#rmDyBox").append(divReme);
	}
	
	$("#KehuanBan").empty();
	$("#kehuanUl").empty();
	for(var i=0; i<dyKehuan.length; i++){
		if(i==0){
			var divKehuanBane = '<div class="smallBanner" onclick="nonetalert()" style="background-image:url('+dyKehuan[i].dy_fmBanner+');"><div class="chDiv">'+dyKehuan[i].dy_name+'</div></div>';
			$("#KehuanBan").append(divKehuanBane);
		}else{
			var divKehuan = '<li onclick="nonetalert()" style="background-image:url('+dyKehuan[i].dy_fm+')"><div class="chDiv">'+dyKehuan[i].dy_name+'</div></li>';
			$("#kehuanUl").append(divKehuan);
		}
	}

	$("#dapianBan").empty();
	$("#dapianUl").empty();
	for(var i=0; i<dyDapian.length; i++){
		if(i==0){
			var divdapianBane = '<div class="smallBanner" onclick="nonetalert()" style="background-image:url('+dyDapian[i].dy_fmBanner+');"><div class="chDiv">'+dyDapian[i].dy_name+'</div></div>';
			$("#dapianBan").append(divdapianBane);
		}else{
			var divdapian = '<li onclick="nonetalert()" style="background-image:url('+dyDapian[i].dy_fm+')"><div class="chDiv">'+dyDapian[i].dy_name+'</div></li>';
			$("#dapianUl").append(divdapian);
		}
	}

	$("#hoolBan").empty();
	$("#hoolUl").empty();
	for(var i=0; i<dyHollywood.length; i++){
		if(i==0){
			var divhoolBan = '<div class="smallBanner" onclick="nonetalert()" style="background-image:url('+dyHollywood[i].dy_fmBanner+');"><div class="chDiv">'+dyHollywood[i].dy_name+'</div></div>';
			$("#hoolBan").append(divhoolBan);
		}else{
			var divhoolUl = '<li onclick="nonetalert()" style="background-image:url('+dyHollywood[i].dy_fm+')"><div class="chDiv">'+dyHollywood[i].dy_name+'</div></li>';
			$("#hoolUl").append(divhoolUl);
		}
	}
	
	//初始化banner
	var mySwiper = new Swiper('.swiper-container',{
	    loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		pagination: '.swiper-pagination',
	    paginationClickable: true
	});
	
	var btMar = $(".homeTj").width()*(0.015);
	var btMarW = $(".homeTj").width()*(0.323333);
	var banH = $(".smallBanner").width()*0.5142;
	$(".smallBanner").css("height",banH+"px");
	$(".homeTj li").css("marginBottom",btMar+"px");
	$(".homeTj li").css("height",btMarW/0.7544+"px");
	$(".homeTj li .chDiv").css("marginTop",(btMarW/0.7544)-23+"px");
}

function getCacheFailure(date){
	alert("接收缓存数据失败！");
}

currentPage_home.loadChPages = function(id,type){
	nowPages.push(path + "front/MoreMoive.html");
	$("#wrapper").load(path + "front/MoreMoive.html", function(){
		currentPage_MoreMoive.init(id,type);
	});
	pagesHistory = false;
}

currentPage_home.loadDetail = function(uuid,type){
	$("#wrapper").load(path + "front/details.html", function(){
		currentPage_details.init(uuid,type);
	});
	pagesHistory = false;
}

function networkInfo() {
	var networkState = navigator.connection.type;
	var states = {};
	
	states[Connection.UNKNOWN]  = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection'; //以太网
	states[Connection.WIFI]     = 'WiFi connection'; //wifi
	states[Connection.CELL_2G]  = 'Cell 2G connection'; //2G流量
	states[Connection.CELL_3G]  = 'Cell 3G connection'; //3G流量
	states[Connection.CELL_4G]  = 'Cell 4G connection'; //4G流量
	states[Connection.CELL]     = 'Cell generic connection';
	states[Connection.NONE]     = 'NONE'; //无网络连接
	if(states[networkState]=="NONE"){
		return true;
	}else{
		return false;
	}
}
