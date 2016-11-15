var type=["CSS","JS","JAVA","运维","DBA","产品","IOS","ANDROID"];
$(document).ready(function(){
	// function getmsg(){
		$.ajax({
			type:"GET",
			url:"a/students",
			dataType:"json",
			success:function(data){
				$(function(){
					$("#researchResult").append('<tr id="title"><th>姓名</th><th>修真类型</th><th>报名时间</th></tr>');
				});	
				
				for(var i=0;i<data.data.length;i++){
					$(function(){
						$("#researchResult").append('<tr><td class="show" ><input  type="checkbox" value="123"><span onclick="change()"></span></td><td></td><td></td></tr>');
					});
					// $("td:eq("+3*i+"):span").append(data.data[i].name); //获取name并添加到表格第一列
					$("span:eq("+i+")").append(data.data[i].name); //获取name并添加到表格第一列
					$("span:eq("+i+")").val(data.data[i].id);      //把学员ID添加到第一列（姓名）中的VALUE属性中
					var j=3*i+1;			//选中表格第二列
					$("td:eq("+j+")").html(type[data.data[i].type]);       //获取type并添加到表格第二行                     
					var k=3*i+2;                     //选中表格第三列

					var tim=data.data[i].createAt;                 //获得报名时间的毫秒数
					var oTime;
					$(function(){           //将报名时间由毫秒转为显示时间
						var oDate=new Date(tim),
						oYear=oDate.getFullYear(),
						oMonth=oDate.getMonth()+1,
						oDay=oDate.getDate(),
						oHour=oDate.getHours(),
						oMin=oDate.getMinutes(),
						oSen=oDate.getSeconds();
						oTime=oYear+'-'+oMonth+'-'+oDay+'-'+oHour+'-'+oMin+'-'+oSen;
						// return oTime;
					});					
					$("td:eq("+k+")").html(oTime);       //将转化后的报名时间添加到表格的第三列
				
					$("input:eq("+i+")").val(data.data[i].id);    //获得id并赋值给相对应的checkbox
				}			
			},
			error:function(jqXHR){
				alert("发生错误："+jqXHR.status);
			},
		});
	// }
	// getmsg();
});

$("#delete").click(function(){
	var checked=[];        //删除学员时选中的数组，checkbox
	if (document.getElementById("cancel").style.display=="block"){      //当选择删除后执行
		$("input:checkbox:checked").each(function(){          //获得被选中的checkbox的val值，即相对应的id
			checked.push($(this).val());		       //把获得的id添加到checked数组里去							
		});
		for(var y=0;y<checked.length;y++){
			$.ajax({						//删除数组里的id
				type:"POST",
				url:"a/students",
				dataType:"json",
				data:{
					id:checked[y]    
				}
			});
		}		
		$("input").css("opacity","0");    //设置checkbox按钮不可见
		$("#delete").html("删除");       
		$("#cancel").css("display","none");	
		// window.location.reload();	//重新加载页面	
	}else{
		$("input").css("opacity","1");
		$("#delete").html("确定");
		$("#cancel").css("display","block");
	}
})
$("#cancel").click(function(){
	$("input").css("opacity","0");
	$("#cancel").css("display","none");
	$("#delete").html("删除");
})

// $(".show").click(function(event){
// 	// $(".show").each(function(){
// 	// 	var id=$(this).val();
// 	// 	alert(id);
// 	// })
// 	alert(1);
	
// })

// $(".show").click(function(){
// 	var id=$(this).val();
// 	alert(id);
// })

function change(){
	var id=event.target.value;
	sessionStorage.us=JSON.stringify(id);
	// alert(id);
	window.location.href="index3.html";
}

