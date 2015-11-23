
/*命名空间*/
var common={};
common.public={}; // 公共部分

/**
 * 页面顶部搜索框
 * 搜索功能需要后台接口，暂时没写
 */
common.public.search=function (){
	var oDiv=$('#search');
	var oPlaceholder=oDiv.find('.placeholder')[0];
	var oInp=oDiv.find('.txt')[0];
	
	oInp.onfocus=oPlaceholder.onclick=function (){
		oInp.focus();
		$(oPlaceholder).hide();
	};
	
	oInp.onblur=function (){
		var str=$.trim(this.value);
		if (str.length == 0)
		{
			$(oPlaceholder).show();
		}
	};
	
	// 提交
	var oSubBtn=oDiv.find('.sub');
	var oForm=oDiv.find('form');
	oSubBtn.click(function (){
		alert('数据：['+$.trim(oInp.value)+'] 马上去提交');
		oForm.submit();
	});
};

/**
 * 导航
 */
common.public.nav=function (){
	var aBtn=$('#nav .nav-item');
	var options={'easing':'easeInQuint', 'duration':100};

	aBtn.hover(function (){
		$(this).addClass('active').stop().animate({
			'height':'48px', 'line-height':'48px', 'margin-top':'-4px'
		}, options);
	}, function (){
		if ($(this).hasClass('cur')) return;
		$(this).removeClass('active').stop().animate({
			'height':'44px', 'line-height':'44px', 'margin-top':0
		}, options);
	});
};

/**
 * 选项卡
 * @param options json 选项卡的参数
 */
common.public.tab=function (options){
	options=options || {};
	var ev=options.ev || 'click';
	
	var oParent=$('.j-tab');
	var aBtn=oParent.find('.j-tab-btn');
	var aCont=oParent.find('.j-tab-cont');
	
	aBtn.on(ev, function (){
		var index=$(this).index('.j-tab-btn');

		aBtn.removeClass('active');
		aCont.removeClass('active');
		
		$(this).addClass('active');
		aCont.eq(index).addClass('active');

	});
};

/**
 * 名称或描述
 * @param a number 测试参数1
 * @param b string 测试参数2
 * @param c boolean 测试参数3
 * 
 *　@return string 返回字符串
 */
function demo(a, b, c)
{
	return 'abc';
}


/*公共部分调用*/
common.public.nav(); // 导航效果
common.public.search(); // 搜索框














