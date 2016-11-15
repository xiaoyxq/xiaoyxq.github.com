var type=["CSS","JS","JAVA","运维","DBA","产品","IOS","ANDROID"];
var talent=["学霸","学渣"];
var level=["0基础","修行3个月以内","修行6个月以内","修行1年以内","修行3年以内","修行3年以上"];
var id;
var a,b,c,e;
$(document).ready(function(){
	id=JSON.parse(sessionStorage.us);    //获得学员id
	$.ajax({            //获得该id的学员信息
		type:"GET",
		url:"a/student/"+id,
		dataType:"json",
		success:function(data){
			$("#stname").val(data.name);
			$("#stQQ").val(data.qq);
			$("#stschool").val(data.school);
			$("#stjoinTime").val(data.joinTime);
			$("#stwish").val(data.wish);
			a=data.type;
			b=data.talent;
			c=data.level;    //获得level，便于写入
			e=data.wish;   //获得wish，设置变量便于写入编辑器内
			$(".hide:eq(0)").html(type[data.type]);
			$(".hide:eq(1)").html(talent[data.talent]);
			$(".hide:eq(2)").html(level[data.level]);
			$(".hide:eq(3)").html(data.wish);
		},	
		error:function(jqXHR){
				alert("发生错误："+jqXHR.status);
		},
	})

	$("input").attr("disabled","true");    //编辑前后的样式的更改
	$("input").css("border","none");
	$("input").css("background","white");
	$(".hide").css("display","block");
	$(".type-radio").css("display","none");
	$(".editor").css("display","none");
});

$("#edit").click(function(){
	if($("#edit").html()=="确认"){
		$.ajax({              //更改该id学员的信息
			type:"PUT",
			url:"a/student/"+id,
			dataType:"json",
			data:{
				name:$("#stname").val(),
				qq:$("#stQQ").val(),
				type:$("input[name=typename]:checked").val(),
				school:$("#stschool").val(),
				talent:$("input[name=talentname]:checked").val(),
				level:$("input[name=levelname]:checked").val(),
				joinTime:$("#stjoinTime").val(),
				wish:ue.getContent(),  //获得更改的wish，编辑器内的内容
			},
			success:function(data){
				alert("修改成功");
				window.location.reload();
				
			},				
			error:function(jqXHR){
					alert("发生错误："+jqXHR.status);
			},
		})
	}else{
		$("input").css("border","");     //更改前后样式的更改
		$("input").removeAttr("disabled");
		$(".hide").css("display","none");
		$(".type-radio").css("display","block");
		$(".editor").css("display","block");
		$("#edit").html("确认");
		$("input[name=typename]").eq(a).attr("checked",true);    //选中按钮
		$("input[name=talentname]").eq(b).attr("checked",true);
		$("input[name=levelname]").eq(c).attr("checked",true);
		ue.setContent(e);   //设置编辑器内容，即获得wish
	}
})