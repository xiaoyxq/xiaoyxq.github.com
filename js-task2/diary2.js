 var dt;
function load(){
	var   tt=sessionStorage.date; 
	       dt= JSON.parse(tt);  
	dt++;         //dt初值设置为0
	console.log(dt);

	 for(var i=1;i<=dt;i++){
	            $(function(){
			$("#cont").append(	
			'<div class="date"><h3 class="dates" >第一天</h3><img onclick="hide()" class="nav"  src="./js-img/diary1.png"></div>'+			
			'<div class="process" id="process" ><div class="options margintop" onclick="kill()">'+
			'<div class="arrow"></div><input type="button" name="" value="杀手杀人"></div><div class="options"><div class="arrow"></div>'+
			'<input type="button" name="" value="警察救人"></div><div class="options"><div class="arrow"></div>'+
			'<input type="button" name="" value="狙击狙人"></div><div class="options"><div class="arrow"></div>'+
			'<input type="button" name="" value="医生救人"></div><div class="options margintop">'+
			'<div class="arrow"></div><input type="button" name="" value="亡灵发表遗言"></div>'+
			'<div class="options"><div class="arrow"></div><input type="button" name="" value="玩家依次发言"></div>'+
			'<div class="options"><div class="arrow"></div><input type="button" name="" value="投票"></div>'+
			'<div class="day"><img class="icon" style="text-align: center;"  src="./js-img/diary2.png"></div>'+
			'<div class="night day"><img class="icon"  src="./js-img/diary3.png"></div></div>'
			)
			 });				
	}
		
var mydate=["第一天","第二天","第三天","第四天","第五天","第六天","第七天","第八天"];

for(var kl=1;kl<=dt;kl++){		 
	var ids=document.getElementsByClassName("process");
	ids[kl-1].id="d"+kl;	
	}
for(var kl=1;kl<=dt;kl++){		    
	var ids=document.getElementsByClassName("dates");
		ids[kl-1].id="ds"+kl;	
	}

for(var m=1;m<=dt;m++){
var ddd="ds"+m;
document.getElementById(ddd).innerHTML=mydate[m-1];    //第几天显示
}

var ids="d"+dt;
document.getElementById(ids).style.display="block";    //第几天内容显示

}
function kill(){
	window.location.href="http://localhost/js-task2/kill.html";
	sessionStorage.date=JSON.stringify(dt);  
}