function d2a(a)
{
	return a*Math.PI/180;
}
function toDub(n)
{
	return n<10?'0'+n:''+n;
}
//圆的运动框架
function move(obj, target,R)
{
	var start=0;
	var dis=target-start;
	var count=Math.floor(1000/30);
	var n=0;
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		n++;
		var a=start+dis*n/count;
		var x=R+Math.sin(d2a(a))*R;
		var y=R-Math.cos(d2a(a))*R;
		
		obj.css({left:x+'px',top:y+'px'});
		if (n == count)
		{
			clearInterval(obj.timer);
		}
	}, 30);
}
function getN(obj,ev)
{
	var x=parseInt(obj.css('width'))/2-ev.clientX+obj.offset().left;
	var y=parseInt(obj.css('height'))/2-ev.clientY+obj.offset().top-$(document).scrollTop();
	return Math.round((getD(Math.atan2(x,y))+180)/90)%4;
}
function getD(d)
{
	return d*180/Math.PI;
}
function getDis(obj1, obj2)
{
	var a=obj1.offset().left+obj1.width()/2-(obj2.offset().left+obj2.width()/2);
	var b=obj1.offset().top+obj1.height()/2-(obj2.offset().top+obj2.height()/2);
	
	return Math.sqrt(a*a+b*b);
}
function rnd(n,m){
	return parseInt(Math.random()*(m-n)+n);
}