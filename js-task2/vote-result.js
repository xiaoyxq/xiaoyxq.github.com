var a,m,b,killers,n,c,e,dd,ol,g;
var allplayers=new Array();             //所有的玩家
var thedead=new Array();             //死亡玩家
var deadghost=new Array();                      //死亡幽灵
function load(){
	a=sessionStorage.uk;  //字符串
	allplayers=JSON.parse(a);//数组(总玩家)
	m=allplayers.length;        //m为总玩家数量

	b=sessionStorage.ug; 
	killers= JSON.parse(b);  //（幽灵）
	n=killers.length;         //n为幽灵数量

	c=sessionStorage.uh; 
	thedead= JSON.parse(c);  //（死亡水民）
	e=thedead.length;

	ol=sessionStorage.uu; 
	deadghost= JSON.parse(ol);  //（死亡幽灵）
	g=deadghost.length;

      var	pl=sessionStorage.d; 
	dd= JSON.parse(pl);  //本轮投票死亡玩家序号，从1开始

	  
            console.log(killers);
            console.log(allplayers);  
            console.log(thedead);   
            console.log(deadghost);
         
            if ($.inArray(dd-1,killers)>=0) {
	            $(function(){                                  //判断死亡玩家是否在幽灵数组内
	            	$("#notices").append(
	            		dd+'号玩家被投死了，真实身份是幽灵'
	            	)
	            });
	 }
	 else{
	 	$(function(){
	            	$("#notices").append(
	            		dd+'号玩家被投死了，真实身份是水民'
	            	)
	            });
	 }
}

function nextday(){

	if (n-deadghost.length>=m-n-thedead.length || n==deadghost.length) {
				
			window.location.href="http://localhost/js-task2/good-end.html";    //跳转到胜利页面
			}
	else{
		window.location.href="http://localhost/js-task2/diary2.html";   //跳转到第二天
		console.log(dt);
	}


	
}