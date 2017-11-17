var currentPage_findall={};

currentPage_findall.init = function() {
	console.log("初始化电影搜索界面");
	currentPage_findall.getDate();
};

currentPage_findall.getDate = function(){
	$.post(BASE_PATH+"zhifeiji/findallPage",function(res){
		console.log(res);
		$(".dyContent").empty();
		for(var i=0; i<res.length; i++){
			var liStr= '<li onclick="currentPage_home.loadDetail(\''+res[i].id+'\',\'dyTable\')" style="background-image:url('+BASE_PATH+res[i].dy_fm+')"><div class="chDiv">'+res[i].dy_name+'</div></li>';
			$(".dyContent").append(liStr);
		}
		
		//js动态调整样式
		var moreMar = $(".dyContent").width()*(0.015);
		var moreMarW = $(".dyContent").width()*(0.323333);
		$(".dyContent li").css("height",moreMarW/0.7544+"px");
		$(".dyContent li").css("marginBottom",moreMar+"px");
		$(".dyContent li .chDiv").css("marginTop",(moreMarW/0.7544)-23+"px");
	});
}