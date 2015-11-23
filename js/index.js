$(function()
{
	//表的效果
	var oClock=$('.clock');
	var oTick=$('.clock .nav li.tick');
	var oRoundBox=$('.clock .round-box');
	var oLayer=$('.layer');
	var oClose=$('.layer .close');
	setInterval(function(){
		tick();
	},1000);
	for(var i=0; i<16; i++)
	{
		var oDiv=$('<div></div>');
		var target=360*i/16;
		oDiv.addClass('round');
		move(oDiv,target,220);
		oRoundBox.append(oDiv);
	}
	var aRound=$('.round');
	function fnJump()
	{	
		oClock.off('animationend',fnJump);
		var index=0;		
		setInterval(function(){
			aRound.removeClass('jump');
			aRound.eq(index).addClass('jump');
			index++;
			if(index==aRound.length)
			{
				index=0;
			}
		},3000);
	}
	oClock.on('WebkitAnimationend',fnJump);
	var aLi=$('.clock .nav li');
	for(var i=0; i<aLi.length-1; i++)
	{
		var target=360*i/5;
		move($(aLi.eq(i)),target,174);
	}
	//表的函数
	function tick()
	{
		oTick.html('');
		var oDate=new Date();
		var h=oDate.getHours();
		var m=oDate.getMinutes();
		var s=oDate.getSeconds();
		var str=toDub(h)+':'+toDub(m)+':'+toDub(s);
		for(var i=0; i<str.length; i++)
		{
			var oSpan=$('<span></span>');
			oSpan.html(str.charAt(i));
			oTick.append(oSpan);
		}
		var aSpan=oTick.children();
		for(var i=0; i<aSpan.length; i++)
		{
			(function(index){
				$(aSpan[i]).mouseover(function(){
					$(this).addClass('beat');
				});	
				$(aSpan[index]).on('WebkitAnimationend',function(){
					$(aSpan[index]).removeClass('beat');
				});
			})(i);	
		}
	}
	//按钮的效果
	(function(){
		var oBtn=$('.btn');
		var aP=oBtn.children();
		var timer=null;
		var aLi=oLayer.find('ul li');
		oBtn.mouseover(function(){
			var i=0;
			timer=setInterval(function(){
				aP.eq(i).addClass('rock');
				i++;
				if(i==aP.length-1)
				{
					clearInterval(timer);
				}
			},300)
		});
		oBtn.mouseout(function(){
			aP.removeClass('rock');
		});
		oBtn.click(function(){
			oLayer.css('display','block');
			//遮罩层效果
			(function(){
				var timer=null;
				var i=0;
				timer=setInterval(function(){
					aLi.eq(i).addClass('fall');
					aLi.eq(i).find('p').addClass('rFall');
					i++;
					if(i==aLi.length)
					{
						clearInterval(timer);
					}
				},300);
			})();
		});
		oClose.click(function(){
			oLayer.css('display','none');
			aLi.removeClass('fall');
		})
	})();

});