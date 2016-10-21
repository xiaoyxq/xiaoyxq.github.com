var a,m,b,killers,n,c,e,dd,ol,g,alldead,aa,thedead,e;
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

	aa= sessionStorage.mm;
	alldead=JSON.parse(aa);

	alldead.push(thedead[thedead.length-1]);  
            console.log(killers);
            console.log(allplayers);  
            console.log(thedead);   
           console.log(deadghost);
           console.log(alldead);   

            for(var i=1;i<=m;i++){               //与之前随机产生的幽灵序号作比较，判断幽灵
	            if ($.inArray(i-1,killers)>=0) {     //判断i-1是否在killers数组中，若存在，返回相对数组第一个元素的位置，不存在则返回-1
			$(function(){
			           $("#ccc").append(	//append：将后面的内容添加到前面内部
				'<div class="card" >'+
				'<div class="identify" onmousedown="killplayer()">幽灵</div>'+					
				'<span class="card-number">1号</span></div>'			
				)
			           } );	
		}
		else{
			$(function(){
			           $("#ccc").append(	
				'<div class="card" >'+
				'<div class="identify"  onmousedown="killplayer()">水民</div>'+					
				'<span class="card-number">1号</span></div>'			
				)
			           } );
			}
	}

	for(var kl=1;kl<=m;kl++){		    //给玩家格子设置id
	var ids=document.getElementsByClassName("identify");
		ids[kl-1].id="player"+kl;	
	}

	for( j=1;j<=m;j++){
	document.getElementsByTagName("span")[j].innerHTML=j+"号";     //给SPAN格子排序，因第一个SPAN是标题，所以从第二个开始
	}

	for(var l=0;l<thedead.length;l++){
		var id=thedead[l];
		document.getElementById(id).style.backgroundColor="gray";
	}
	for(var k=0;k<deadghost.length;k++){
		var id=deadghost[k];
		document.getElementById(id).style.backgroundColor="gray";
	}
}

function killplayer(){                     
	if (event.target.style.backgroundColor!="gray") {        //判断是否是死亡玩家，不是则继续执行
		if ($.inArray(event.target.id,thedead)>=0) {      // 
			thedead.splice(thedead.length-1,1);   //点击2次取消，即删除上次加入thedead数组的元素
			if(event.target.style.backgroundColor=="white"){     //点击背景颜色互换，表示选中
				event.target.style.backgroundColor="#f5c97b";							
			}
			else{
				event.target.style.backgroundColor="white";
			}
		}
		else if($.inArray(event.target.id,deadghost)>=0){
			deadghost.splice(deadghost.length-1,1);   //点击2次取消，即删除上次加入tdeadghost数组的元素
			if(event.target.style.backgroundColor=="white"){     //点击背景颜色互换，表示选中
				event.target.style.backgroundColor="#f5c97b";							
			}
			else{
				event.target.style.backgroundColor="white";
				}
			}

		else{					
			if(thedead.length==e &&deadghost.length==g ){		//不能同时选中2个，e是死亡水民数组长度，g是死亡幽灵数量				
				dd=$.inArray(event.target.id,allplayers)+1;    //本次死亡玩家序号。从1开始
				if ($.inArray(dd-1,killers)>=0) {        //死亡玩家下标在幽灵数组内，则把该玩家加入死亡幽灵数组								
					deadghost.push(event.target.id);			
						}
				else{
					 thedead.push(event.target.id);          //不再幽灵数组内，加入死亡水民数组
					}					

				if(event.target.style.backgroundColor=="white"){
					event.target.style.backgroundColor="#f5c97b";								
				}
				else{
					event.target.style.backgroundColor="white";
					}							
			}					
				
		}
	}
console.log(thedead);
console.log(deadghost); 
console.log(dd);

}

function vote(){	    
	if(thedead.length!=e || deadghost.length!=g){    //投票数不能为0                                 
		if(thedead.length!=e){                    //将thedead和deadghost合并，为了结果页面的记录
			alldead.push(thedead[thedead.length-1]);
		}
		else{
			alldead.push(deadghost[deadghost.length-1]);
		}	
		sessionStorage.mm=JSON.stringify(alldead);	
		sessionStorage.uh=JSON.stringify(thedead);	         //保存死亡水民id
		sessionStorage.uu=JSON.stringify(deadghost);           //保存死亡幽灵
		sessionStorage.d=JSON.stringify(dd);           //保存死亡幽灵
	
	window.location.href="http://localhost/js-task2/vote-result.html";	
	}
	console.log(deadghost);
	console.log(thedead);
	console.log(alldead);   
}