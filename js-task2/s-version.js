var sum,n;

 
// function notes(){
// 	alert("人数在3～18人哦～！");
// }
function numb(){
	sum=parseInt(document.getElementById("get-num").value); 
	if (sum>=6 && sum<=18) {
		if(sum<=8){
			n=1;
		}else if (sum>=9 && sum<=11) {
			n=2;
		}else if (sum>=12 && sum<=15) {
			n=3;
		}
		else {
			n=4;
		}

		document.getElementById('text1').value=n;
		document.getElementById('text2').value=sum-n;
	}
	else
	{
		alert("人数不满足!");

	}
}

 function skip(){
 	window.location.href="http://localhost/js-task2/simple-version2.html";
 	var nums=new Array();
 	for (var i = 0; i<sum; i++) {
 		nums[i]=i+1;
 	}

	 var a,c;

	 c=n;                    //n是已定义变量

	 var killer=[];

	 for(var j=killer.length;j<c;j++){             //产生一个0～sum且长度为n的随机数组

	  	a=Math.floor(Math.random()*sum);	//sum是已定义变量  	

	  	killer.push(a);	  	

	  	if(killer.length>1){                             //killer数组长度>1时，判断是否存在和a相同的数，若存在，则删除a

		  	for(var b=0;b<killer.length-1;b++){

		  		if(killer[b]==a){

		  			killer.splice(j-1,1);

		  			c++;

		  			// return  

		  		}

		  	}	

	  	}  

	 }
	 sessionStorage.us=JSON.stringify(nums);	  
	 sessionStorage.ug=JSON.stringify(killer);
	
	 console.log(killer);
	
}