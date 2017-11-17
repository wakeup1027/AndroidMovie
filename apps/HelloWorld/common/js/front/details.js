var currentPage_details={};

currentPage_details.init = function(num,type) {
	currentPage_details.loadInfo(num,type);
};

currentPage_details.loadInfo = function(num,type){
	$.post(BASE_PATH+"zhifeiji/getDetails",{"num":num,"type":type},function(res){
		console.log(res);
		var oneDate = res.dy;
		var otherDate = res.dyList;
		$("#infoBox").text(oneDate.dy_info);
		$("#mesBox").text(oneDate.dy_mess);
		$("#dy_fmBox").attr("src",BASE_PATH+oneDate.dy_fm);
		$("#XiazaiLink").attr("href",oneDate.dy_url);
		
		$("#guessBox").empty();
		for(var i=0; i<otherDate.length; i++){
			var li = '<li onclick="currentPage_home.loadDetail(\''+otherDate[i].id+'\',\''+type+'\')" style="background-image:url('+BASE_PATH+otherDate[i].dy_fm+')"><div class="chDiv">'+otherDate[i].dy_name+'</div></li>';
			$("#guessBox").append(li);
		}
		
		//js动态调整样式
		var detasMar = $(".homeTj").width()*(0.015);
		var detasMarW = $(".homeTj").width()*(0.323333);
		$(".homeTj li").css("height",detasMarW/0.7544+"px");
		$(".homeTj li").css("marginBottom",detasMar+"px");
		$(".homeTj li .chDiv").css("marginTop",(detasMarW/0.7544)-23+"px");
	});
}
