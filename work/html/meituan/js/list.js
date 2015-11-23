window.onload=function(){
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
	var oBannerCont=document.getElementById('banner_cont');
	var aUl=oBannerCont.getElementsByTagName('ul');
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');
	var oPos=document.getElementById('pos');
	var aA=oPos.getElementsByTagName('a');
	var now=0;
	for(var i=0; i<aUl.length; i++)
	{
		(function(index){
			aA[i].onclick=function()
			{
				now=index;
				tab();
			};
		})(i);
	}
	oNext.onclick=function ()
	{
		now++;
		if(now==aUl.length)
		{
			now=0;
		}
		tab();
	};
	oPrev.onclick=function ()
	{
		now--;
		if(now<0)
		{
			now=aUl.length-1;
		}
		tab();
	};
	function tab()
	{
		for(var i=0; i<aUl.length; i++)
		{
			aUl[i].className='clearFix';
			aA[i].className='fl';
		}
		aA[now].className='fl active';
		aUl[now].className='clearFix active';
	}
};

















