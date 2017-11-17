var currentPage_MoreMoive={};

currentPage_MoreMoive.init = function(num,type) {
	console.log("MoreMoive页面初始化...("+num+")");
	currentPage_MoreMoive.getDate(num,type);
	//loadDate();
};

currentPage_MoreMoive.getDate = function(num,type){
	var pathName = FormPath(num);
	$.post(BASE_PATH+"zhifeiji/"+pathName,function(res){
		console.log(res);
		$(".dyContent").empty();
		for(var i=0; i<res.length; i++){
			var liStr= '<li onclick="currentPage_home.loadDetail(\''+res[i].id+'\',\''+type+'\')" style="background-image:url('+BASE_PATH+res[i].dy_fm+')"><div class="chDiv">'+res[i].dy_name+'</div></li>';
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

function loadDate(){
	var invocationData = {
		adapter : "MoiveAdapter",
		procedure : "alertText",
		parameters : []
	};

	WL.Client.invokeProcedure(invocationData, {
		onSuccess: loadCitiesSuccess,
		onFailure: invokeProcedureFailure
	});
}

function loadCitiesSuccess(result){
	alert("获取成功");
}

function invokeProcedureFailure(err){
	console.log(err);
}

function FormPath(numStr){
	if("1"==numStr||1==numStr){
		return "getKehuan";
	}else if("2"==numStr||2==numStr){
		return "getZinan";
	}else if("3"==numStr||3==numStr){
		return "getDongzuo";
	}else if("4"==numStr||4==numStr){
		return "getXiju";
	}else if("5"==numStr||5==numStr){
		return "getKongbu";
	}else if("6"==numStr||6==numStr){
		return "getAiqing";
	}else if("7"==numStr||7==numStr){
		return "getXuanyi";
	}else if("8"==numStr||8==numStr){
		return "getDongman";
	}else{
		return "index";
	}
}