var a,num ,m,b,killers,n,j,c,ol,g,deadghost,allplayers,alldead,aa;
// var allplayers=new Array();             //所有的玩家
// var thedead=[];		     //死亡水民，初始为空
var thedead;	 
// var deadghost=[];                      //死亡幽灵
function load(){
     var	ql=sessionStorage.us;  //字符串
	num=JSON.parse(ql);//数组(总玩家)

     var  tt=sessionStorage.date; 
	dt= JSON.parse(tt);  

	b=sessionStorage.ug; 
	killers= JSON.parse(b);  //（幽灵）
	n=killers.length;         //n为幽灵数量

	c=sessionStorage.uh; 
	thedead= JSON.parse(c);  //（死亡水民）
	e=thedead.length;

	ol=sessionStorage.uu; 
	deadghost= JSON.parse(ol);  //（死亡幽灵）
	g=deadghost.length;

	a=sessionStorage.uk;  //字符串
	allplayers=JSON.parse(a);//数组(总玩家)
	m=allplayers.length;        //m为总玩家数量
	 
	 aa= sessionStorage.mm;
	 alldead=JSON.parse(aa);

            console.log(killers);
            console.log(allplayers);  
            console.log(thedead);   
            console.log(deadghost);
            console.log(dt);
            console.log(alldead);

            if (n==g) {
            	document.getElementsByTagName("h1")[0].innerHTML="水民胜利";
            	document.getElementById("ghost").innerHTML=n;
            	document.getElementById("day-num").innerHTML=dt;

            }
            else{
            	document.getElementsByTagName("h1")[0].innerHTML="幽灵胜利";
            	document.getElementsByClassName("game-end")[0].innerHTML="太棒了，你知道么？在捉鬼游戏中只有20%的幽灵取得游戏的最终胜利哦！";
            }

            document.getElementById("msg-ghost").innerHTML=n;
            document.getElementById("peasant").innerHTML=m-n;

	var a=0;
            for(var i=1;i<=alldead.length;i++){               //与之前随机产生的幽灵序号作比较，判断幽灵	       
		 $(function(){		 	
		 	a++;
		 	var po=$.inArray(alldead[i-1],allplayers)+1;
		 	var pp=$.inArray(alldead[i],allplayers)+1;
		 
			$("#detail").append(	//append：将后面的内容添加到前面内部
				'<span class="bottom-left bottom-top">第</span>'+a+'<span>天</span></p>'+
				'<span class="bottom-left">晚上：</span>'+po+'号被幽灵杀手，'+po+'号是水民</p>'+
				'<span class="bottom-left">白天：</span>'+pp+'号被全民投票死,'+pp+'号是'+'<span class="or"></span></p>'+
				'<div class="bottom-border"></div>'
				)
			 } );
			 if ($.inArray($.inArray(alldead[i],allplayers),killers)>=0) {
		 		document.getElementsByClassName("or")[a-1].innerHTML="幽灵";
		 	}
		 	else{
		 		document.getElementsByClassName("or")[a-1].innerHTML="水民";
		 	}	
		 i++;
		}
	if (alldead.length!=g+e) {
		var cc=$.inArray(thedead[e-1],allplayers)+1;
			 $(function(){		 		 
			$("#detail").append(	//append：将后面的内容添加到前面内部
				'<span class="bottom-left bottom-top">第</span>'+dt+'<span>天</span></p>'+
				'<span class="bottom-left">晚上：</span>'+cc+'号被幽灵杀手，'+cc+'号是水民</p>'			
				)
			 } );
	}
}

function again(){
	window.location.href="http://localhost/js-task2/s-version.html";
}
