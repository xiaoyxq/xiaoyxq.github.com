function gameover(){
	// var data = JSON.parse(localStorage.getItem('userinfo'));
 // alert("name:"+data.name+"\r age:"+data.age+"\r home:"+data.home);
 	// var load =localStorage.getItem("us");
 	// alert(load)

	}
	function meth(){
		var a,b;
		var load =localStorage.getItem("us");
		a=load[0];
		b=load[1];
		
		document.getElementById("num").innerHTML=a;
		document.getElementById("ghost").innerHTML=b;

 		
	}