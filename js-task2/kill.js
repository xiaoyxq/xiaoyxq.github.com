var a,num ,m,b,killers,n,j,c,ol,g,deadghost,allplayers,e,thedead;
function load(){
     var	ql=sessionStorage.us;  //字符串
	num=JSON.parse(ql);//数组(总玩家)


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
	  
            console.log(killers);
            console.log(allplayers);  
            console.log(thedead);   
            console.log(deadghost);

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
		document.getElementById(id).style.backgroundColor="gray";   //设置死亡玩家背景

	}

}


function killplayer(){
	var l=$.inArray(event.target.id,allplayers)
	if (event.target.style.backgroundColor!="gray") {     //选择对象不能为已死亡对象
		if($.inArray(l,killers)>=0){      //不能杀死幽灵
			// event.target.id.onclick=function(){};
		}
		else{															
			if ($.inArray(event.target.id,thedead)>=0) {
				thedead.splice(thedead.length-1,1);   //点击2次取消，即删除上次加入thedead数组的元素
				if(event.target.style.backgroundColor=="white"){     //点击背景颜色互换，表示选中
					event.target.style.backgroundColor="#f5c97b";
							
					}
				else{
					event.target.style.backgroundColor="white";}
			}
			else{					
				if(thedead.length==e){		//不能同时选中2个，e是死亡水民数组长度				
					thedead.push(event.target.id);	
				
					if(event.target.style.backgroundColor=="white"){
						event.target.style.backgroundColor="#f5c97b";								
					}
					else{
						event.target.style.backgroundColor="white";
					}							
				}					
				
			}
		}
	}
console.log(thedead);

}
function sure(){
	console.log(thedead);
	console.log(deadghost);
	sessionStorage.uh=JSON.stringify(thedead);	         //保存死亡水民id
	sessionStorage.uk=JSON.stringify(allplayers);           //保存所有玩家id
	sessionStorage.uu=JSON.stringify(deadghost);	         //保存死亡幽灵id
	if (n-deadghost.length>=m-n-thedead.length) {


		window.location.href="http://localhost/js-task2/good-end.html";    //跳转到杀手胜利页面
	}
	else{				
		if(thedead.length!=e){         //杀人数不能为0 
			window.location.href="http://localhost/js-task2/decrypt.html";    //跳转到黑夜解密
		}
		    
	}
	
}