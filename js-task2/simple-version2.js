var a,num ,m,b,killers,n;
function load(){
	a=sessionStorage.us;  //字符串
	num=JSON.parse(a); //数组(总玩家)
	m=num.length;        //m为num数组长度，即总玩家数量
	b=sessionStorage.ug; 
	killers=JSON.parse(b);  //（幽灵）
	n=killers.length;         //n为幽灵数量
           console.log(killers) ;   
           console.log(num) ;   
 }      
	var cn=1;                      //cn是玩家序号
	function check(){
		document.getElementById("show").style.display="none"; 
		document.getElementById("hide").style.display="block";           //查理角色身份
		document.getElementById("show-submit").style.display="none"; 
		document.getElementById("hide-submit").style.display="block";  //显示隐藏按钮

		for(var i=0;i<n;i++){     //判断玩家是幽灵还是水民
			var d=killers[i];
			var c=num[d];
			if (c==cn) {
				document.getElementById("identify").innerHTML="角色：幽灵";
				return false;     //若出现相同数，即幽灵，则跳出循环，若没有return，则会一直到循环结束，输出最后一次判断
			}
			else{
				document.getElementById("identify").innerHTML="角色：水民";
			}
		}
	}
	function handdown(){
		if (cn<m) {
			document.getElementById("show").style.display="block"; 
			document.getElementById("hide").style.display="none";  
			document.getElementById("show-submit").style.display="block";
			document.getElementById("hide-submit").style.display="none"; 

			cn++;
			document.getElementById("card-num").innerHTML=cn;   
			document.getElementById("show-submit").value="查看"+cn+"号的身份"; 
			var q=cn+1;
			
			if (cn<m) {
				document.getElementById("hide-submit").value="隐藏并传递给"+q+"号";     
			}
			else{
				document.getElementById("hide-submit").value="查看法官日记";     
			}

		}
		else{
			window.location.href="http://localhost/js-task2/simple-version3.html";
		}
	}

