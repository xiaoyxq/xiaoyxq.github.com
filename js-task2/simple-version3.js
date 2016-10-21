var  a,num ,m,b,killers,n,j;
var dt=0;                                      //法官页面天数的累积
var allplayers=new Array();  
var thedead=[];		     //死亡水民，初始为空
var deadghost=[];                      //死亡幽灵
var alldead=[] ;
function load(){
	a=sessionStorage.us;  //字符串
	num=JSON.parse(a);//数组(总玩家)
	m=num.length;        //m为num数组长度，即总玩家数量
	     
	b=sessionStorage.ug; 
	killers= JSON.parse(b);  //（幽灵）
	n=killers.length;         //n为幽灵数量

	for(var y=1;y<=m;y++){
	allplayers[y-1]="player"+y;     //玩家ID
	}
	
	console.log(allplayers);
           console.log(killers) ;   
           for(var i=1;i<=m;i++){
	            	if ($.inArray(i-1,killers)>=0) {     //判断i-1是否在killers数组中，若存在，返回相对数组第一个元素的位置，不存在则返回-1
			             $(function(){
			             	$("#ccc").append(	//append：将后面的内容添加到前面内部
					'<div class="card">'+
					'<div class="identify">幽灵</div>'+
					'<img class="main-img"    src="./js-img/verson6.png">'+
					'<span class="card-number">1号</span></div>'			
					)
			             	} );	
			}
			else{
				$(function(){
			             	$("#ccc").append(	
					'<div class="card">'+
					'<div class="identify">水民</div>'+
					'<img  class="main-img"    src="./js-img/verson6.png">'+
					'<span class="card-number">1号</span></div>'			
					)
			             	 } );
			}
	}		

	for( j=1;j<=m;j++){
	document.getElementsByTagName("span")[j].innerHTML=j+"号";     //给SPAN格子排序，因第一个SPAN是标题，所以从第二个开始

	}
}
function startgame(){
	sessionStorage.date=JSON.stringify(dt);  		//游戏进行天数
	sessionStorage.uh=JSON.stringify(thedead);	         //保存死亡水民id
	sessionStorage.uk=JSON.stringify(allplayers);           //保存所有玩家id
	sessionStorage.uu=JSON.stringify(deadghost);	         //保存死亡幽灵id
	window.location.href="http://localhost/js-task2/diary2.html";
	sessionStorage.mm=JSON.stringify(alldead);

}