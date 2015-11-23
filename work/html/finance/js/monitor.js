
/*命名空间*/
common.monitor={};

/**
 * 定义函数 页面滚动吸顶
 */
common.monitor.suctionTop=function (){
	 var oDiv=$('.main-informr');
	 var top=oDiv.offset().top;
	 $(window).scroll(function (){
		var scrollTop=$(document).scrollTop();
		if(scrollTop > top)
		{
			oDiv.css('position', 'fixed');
		}
		else
		{
			oDiv.css('position', '');
		}
	 });
};

/*调用函数*/
common.monitor.suctionTop(); // 右侧吸顶条
common.public.tab({'ev':'mouseenter'}); // 右侧选项卡










