var  col,nine,box,tim,box0,three,i;
box="box"+nine;
tim=1000;
function loop(){
	nine=Math.floor(Math.random()*9)+1;
	box="box"+nine;
	col= document.getElementById(box);
	three=Math.floor(Math.random()*3)+1;
	switch(three){
		case 1 :col.style.backgroundColor="red";
		break;
		case 2 :col.style.backgroundColor="white";
		break;
		default:col.style.backgroundColor="green";
	}
	console.log(box)
	for(i=1;i<10;i++){		
		box0="box"+i;
		if(box0!=box){	
			console.log(box0)
			document.getElementById(box0).style.backgroundColor="orange";
		}
	}		
}
loop();

