
/*命名空间*/
/**
 * 按钮点击功能
 */
common.expertComm={};
common.expertComm.next=function()
{
	var aParent=$('.carousel');
	aParent.each(function(index) {
		var oUl=aParent.eq(index).find('.expert-cont-box ul');
		var oNext=aParent.eq(index).find('.next');
		var oPrev=aParent.eq(index).find('.prev');
		var aLi=oUl.find('li');
		var W=aLi.eq(0).outerWidth();
		oUl.css('width',(W+20)*aLi.length);
		var now=0;
		var n=6;
		var nMax=Math.floor(aLi.length/n);
		var total=nMax+1;
		oNext.click(function(){
			now++;
			if(now%total == 0)
			{
				oUl.stop().animate({'left':0});
			}
			else
			{
				oUl.stop().animate({'left':-n*(now%total)*(W+20)+'px'});
			}
		});
		oPrev.click(function(){
			now--;
			if(now%total == -1)
			{
				oUl.stop().animate({'left':-n*nMax*(W+20)+'px'});
			}
			else
			{
				oUl.stop().animate({'left':-n*Math.abs((now%total))*(W+20)+'px'});
			}
		});
	});
};

/*调用选项卡函数*/
common.public.tab();
common.expertComm.next();







