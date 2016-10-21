var a,m,b,killers,n,c,sm,e;
var allplayers=new Array();             //所有的玩家
var thedead=new Array();             //死亡水民
function load(){
	a=sessionStorage.uk;  //字符串
	allplayers=JSON.parse(a);//数组(总玩家)
	m=allplayers.length;        //m为总玩家数量

	b=sessionStorage.ug; 
	killers= JSON.parse(b);  //（幽灵）
	n=killers.length;         //n为幽灵数量

	c=sessionStorage.uh; 
	thedead= JSON.parse(c);  //死亡水民
	e=thedead.length;
	      
            console.log(killers);
            console.log(allplayers);  
            console.log(thedead);   

            sm=$.inArray(thedead[e-1],allplayers)+1;       //dd是死亡水民的序号，通过thedead(死亡水民数组)中最后一位在所有玩家中的位置来判断
            $(function(){
            	$("#notices").append(
            		sm+'号玩家杀手杀死了，真实身份是水民'
            	)
            });
}

function tovote(){
	window.location.href="http://localhost/js-task2/vote.html";
}