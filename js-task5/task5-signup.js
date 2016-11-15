
$(document).ready(function(){
	$("#save").click(function(){
		$.ajax({
			type:"POST",
			url:"a/student",
			dataType:"json",
			data:{
				name:$("#stname").val(),
				qq:$("#stQQ").val(),
				type:$("input[name=typename]:checked").val(),
				school:$("#stschool").val(),
				talent:$("input[name=talentname]:checked").val(),
				level:$("input[name=levelname]:checked").val(),
				joinTime:$("#stjoinTime").val(),
				// wish:$("#stwish").html(),
				wish:ue.getContent()，   //从编辑器获得内容
			},
			success:function(data){
				
				alert("报名成功");
				// window.location.reload();
				
			},
			error:function(jqXHR){
				alert("发生错误："+jqXHR.status);
			},
		});
	});
});