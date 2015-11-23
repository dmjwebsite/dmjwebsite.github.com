window.onload=function(){
	var oClose=document.getElementById('hd_banner_close');
	var oBanner=document.getElementById('hd_banner');
	oClose.onclick=function()
	{
		oBanner.style.display='none';
	};
	var aImgBtn=document.getElementsByClassName('img_btn');
	var aImgCont=document.getElementsByClassName('img_cont');
	for(var i=0; i<aImgBtn.length; i++)
	{
		var aBtn=aImgBtn[i].getElementsByTagName('a');
		var aCont=aImgCont[i].getElementsByTagName('img');
		tab(aBtn,aCont);
	}
	function tab(aBtn,aCont)
	{
		for(var j=0; j<aBtn.length; j++)
		{
			(function(index){
				aBtn[j].onclick=function()
				{
					for(var i=0; i<aBtn.length; i++)
					{
						aBtn[i].className='fl';
						aCont[i].parentNode.style.display='none';
					}
					this.className='fl active';
					aCont[index].parentNode.style.display='block';
				};
			})(j);
		}
	}
	var oHdBox=document.getElementById('hd_box');
	var aPos=oHdBox.getElementsByClassName('pos');
	for(var i=0; i<aPos.length; i++)
	{
		(function(index){
			aPos[i].parentNode.onmouseover=function()
			{
				aPos[index].parentNode.className='fl active clearFix';
				aPos[index].style.display='block';
			}
		})(i);
		(function(index){
			aPos[i].parentNode.onmouseout=function()
			{
				aPos[index].parentNode.className='fl clearFix';
				aPos[index].style.display='none';
			}
		})(i);
	}
	var oContBottom=document.getElementById('cont_bottom');
	var aContUl=oContBottom.getElementsByTagName('ul')
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');
	var now=0;
	oNext.onclick=function()
	{
		now++;
		for(var i=0; i<aContUl.length; i++)
		{
			aContUl[i].className='clearFix cont';
		}
		if(now==aContUl.length)
		{
			now=0;
		}
		aContUl[now].className='clearFix cont active';
		oNext.innerHTML=(now+1)+'/'+aContUl.length+'>';
	};
	oPrev.onclick=function()
	{
		now--;
		for(var i=0; i<aContUl.length; i++)
		{
			aContUl[i].className='clearFix cont';
		}
		if(now<0)
		{
			now=aContUl.length-1;
		}
		aContUl[now].className='clearFix cont active';
		oNext.innerHTML=(now+1)+'/'+aContUl.length+'>';
	};
	var oContLeft=document.getElementById('cont_left');
	var aLi=oContLeft.getElementsByTagName('li');
	var aLiPos=oContLeft.getElementsByClassName('pos');
	for(var i=0; i<aLi.length; i++)
	{
		(function(index){
		aLi[i].onmouseover=function()
		{
			for(var i=0; i<aLi.length; i++)
			{
				aLi[i].className='clearFix';
				aLiPos[i].className='pos';
			}
			this.className='clearFix active';
			aLiPos[index].className='pos active';
		};
		})(i);
	}
	for(var i=0; i<aLi.length; i++)
	{
		aLi[i].onmouseout=function()
		{
			for(var i=0; i<aLi.length; i++)
			{
				aLi[i].className='clearFix';
				aLiPos[i].className='pos';
			}
		};
	}
	var oTime=document.getElementById('time');
	var aSpan=oTime.getElementsByTagName('span');
	
	tick();
	setInterval(tick,1000);
	function tick()
	{
		var oDate=new Date();
		var n1=oDate.getTime();
		var oTarget=new Date();
		oTarget.setDate(oDate.getDate()+3);
		oTarget.setHours(3,2,1,0);
		var n2=oTarget.getTime();
		var total=parseInt((n2-n1)/1000);
		var h=Math.floor(total/3600);
		total%=3600;
		var m=Math.floor(total/60);
		total%=60;
		var s=total;
		var str=toDub(h)+toDub(m)+toDub(s);
		//alert(n1);
		for(var i=0; i<str.length; i++)
		{
			aSpan[i+1].innerHTML=str[i];
		}
		function toDub(n)
		{
			return n<10 ? '0'+n : ''+n;
		}
	}
	var oListCont=document.getElementById('linklist_cont');
	var aUl=oListCont.getElementsByTagName('ul');
	var oPrev1=document.getElementById('prev1');
	var oNext1=document.getElementById('next1');
	var num=0;
	//alert(typeof oNext1)
	oNext1.onclick=function()
	{
		num++;
		for(var i=0; i<aUl.length; i++)
		{
			aUl[i].className='clearFix fl';
		}
		if(num==aUl.length)
		{
			num=0;
		}
		aUl[num].className='clearFix fl active';
		oNext1.innerHTML=(num+1)+'/'+aUl.length+'>';
	};
	oPrev1.onclick=function()
	{
		num--;
		for(var i=0; i<aUl.length; i++)
		{
			aUl[i].className='clearFix fl';
		}
		if(num<0)
		{
			num=aUl.length-1;
		}
		aUl[num].className='clearFix fl active';
		oNext1.innerHTML=(num+1)+'/'+aUl.length+'>';
	};
	//吸顶条
	var oPosPic=document.getElementById('pos_pic');
	var top=oPosPic.offsetTop;
	window.onscroll=function(){
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		if(top<scrollTop)
		{
			oPosPic.style.position='fixed';
			oPosPic.style.top=0;
		}
		else
		{
			oPosPic.style.position='absolute';
			oPosPic.style.top='1300px';
		}
	}
};

















