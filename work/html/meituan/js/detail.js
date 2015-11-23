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
};