$(function(){
	var oMenu=$('.menu');
	var oMenuBox=$('.menu-box');
	oMenu.click(function(){
		$(this).hide();
		oMenuBox.addClass('move');
	});
	//拉勾
	/*
	var aLi=$('section .html-content li');

	aLi.each(function(index){
		enter(aLi.eq(index));
		leave(aLi.eq(index));
	});
	function enter(oLi)
	{
		var oPos=oLi.find('.pos');
		$(oLi).mouseenter(function(ev){
			var oEvent=ev || event;
			var n=getN(oLi,oEvent);
			//console.log(n);
			switch(n)
			{
				case 1:
					oPos.css({left:'340px',top:0});
					break;
				case 0:
					oPos.css({left:0,top:'220px'});
					break;
				case 3:
					oPos.css({left:'-340px',top:0});
					break;
				case 2:
					oPos.css({left:0,top:'-220px'});
					break;
			}
			move(oPos,{left:0,top:0});
		});
	}
	function leave(oLi)
	{
		var oPos=oLi.find('.pos');
		$(oLi).mouseleave(function(ev){
			var oEvent=ev || event;
			var n=getN(oLi,oEvent);
			//console.log(n);
			switch(n)
			{
				case 1:
					var left=340;
					var top=0;
					break;
				case 0:
					var left=0;
					var top=220;
					break;
				case 3:
					var left=-340;
					var top=0;
					break;
				case 2:
					var left=0;
					var top=-340;
					break;
			}
			move(oPos,{left:left,top:top});
		});
	}*/

	//爆炸
	/*(function(){
		var oBox=$('.h5-content .bomb');	
		var R=4;
		var C=7;
		for(var r=0; r<R; r++){
			for(var c=0; c<C; c++){
				var oSpan=$('<span></span>');
				var W=parseInt(oBox.width())/C;
				var H=parseInt(oBox.height())/R;
				oSpan.css({
					width:W+'px',
					height:H+'px',
					left:c*W+'px',
					top:r*H+'px',
					backgroundPosition:-c*W+'px -'+r*H+'px'
				});
				oSpan.appendTo(oBox);
			}
		}
		var iNow=0;
		var bReady=true;
		oBox.click(function()
		{
			if(bReady==false)return;
			bReady=false;
			iNow++;
			var aSpan=oBox.children();
			aSpan.each(function(index){
				var x=aSpan.eq(index).offset().left+parseInt(aSpan.eq(index).width())/2-parseInt(oBox.width())/2;
				var y=aSpan.eq(index).offset().top+parseInt(aSpan.eq(index).height())/2-parseInt(oBox.height())/2;
				aSpan.eq(index).css({
					transition:'.4s all ease',
					WebKitTransform:'translate3d('+x+'px,'+y+'px,100px) rotateX('+rnd(0,180)+'deg) rotateY('+rnd(0,180)+'deg)',
					opacity:0
				})
			});
			aSpan.eq(0).on('transitionend',function(){
				bReady=true;
				aSpan.each(function(index){
					aSpan.eq(index).css({
						transition:'none',
						WebKitTransform:'translate3d(0px,0px,100px) rotateX(0deg) rotateY(0deg)',
						opacity:1,
						backgroundImage:'url(img/'+iNow%3+'.jpg)'
					});
				});
				oBox.css('background','url(img/'+(iNow+1)%3+'.jpg)');
			});
		});
	})();*/
	//照片墙
	/*(function(){
		var oBox=document.querySelector('.h5-content .bomb');	
		var R=4;
		var C=7;
		for(var r=0; r<R; r++){
			for(var c=0; c<C; c++){
				var oSpan=document.createElement('span');
				oSpan.style.width=oBox.offsetWidth/C+'px';
				oSpan.style.height=oBox.offsetHeight/R+'px';
				oBox.appendChild(oSpan);
				
				oSpan.style.left=c*oSpan.offsetWidth+'px';
				oSpan.style.top=r*oSpan.offsetHeight+'px';
				oSpan.style.backgroundPosition='-'+c*oSpan.offsetWidth+'px -'+r*oSpan.offsetHeight+'px';
			}
		}
		//
		var iNow=0;
		var bReady=true;
		oBox.onclick=function(){
			if(bReady==false)return;
			bReady=false;
			
			iNow++;
			
			var aSpan=oBox.children;
			
			for(var i=0; i<aSpan.length; i++){
				aSpan[i].style.transition='.4s all ease';
				var x=aSpan[i].offsetLeft+aSpan[i].offsetWidth/2-oBox.offsetWidth/2;
				var y=aSpan[i].offsetTop+aSpan[i].offsetHeight/2-oBox.offsetHeight/2;
				
				aSpan[i].style.transform='translate3d('+x+'px,'+y+'px,100px) rotateX('+rnd(0,180)+'deg) rotateY('+rnd(0,180)+'deg)';
				aSpan[i].style.opacity=0;
			}
			
			aSpan[0].addEventListener('transitionend',function(){
				bReady=true;
				for(var i=0; i<aSpan.length; i++){
					aSpan[i].style.transition='none';
					aSpan[i].style.transform='translate3d(0px,0px,100px) rotateX(0deg) rotateY(0deg)';
					aSpan[i].style.opacity=1;
					
					aSpan[i].style.backgroundImage='url(img/'+iNow%3+'.jpg)';
					oBox.style.background='url(img/'+(iNow+1)%3+'.jpg)';
				}
			},false);	
		};
	})();*/

});
