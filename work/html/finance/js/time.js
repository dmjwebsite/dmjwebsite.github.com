
common.time={};

/**
 * 时间轴点击收缩的效果
 */
common.time.slide=function (){
	var aBtn=$('.j-time-num');
	var aUl=$('.j-time-list');
	
	aBtn.mousedown(function (){
		return false;
	});
	
	aBtn.each(function(index) {
		var bFlag=true;
		var oldH=aUl.eq(index).height();
		if ($(this).attr('data-flag') != 'false')
		{
			$(this).click(function (){
				if (bFlag)
				{
					aUl.eq(index).stop().animate({'height':0});
					bFlag=false;
				}
				else
				{
					aUl.eq(index).stop().animate({'height':oldH+'px'});
					bFlag=true;
				}
			});
		}
		
	});
};

/**
 * 顶部选项卡
 */
common.time.tab=function (){
	var aBtn=$('.j-top-tab li');
	var aBImg=$('.j-top-bimg .b-img');
	var aSImg=$('.j-top-simg li');
	
	aBtn.each(function (index){
		$(this).mouseenter(function (){
			aBtn.removeClass('active');
			aBImg.removeClass('active');
			aSImg.removeClass('active');
			
			aBImg.eq(index).addClass('active');
			aSImg.eq(index).addClass('active');
			$(this).addClass('active');
		});
	});
};

/*函数调用*/
common.time.slide(); // 时间轴点击收缩的效果 
common.time.tab(); // 顶部选项卡






