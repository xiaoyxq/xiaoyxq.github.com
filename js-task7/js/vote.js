
myApp.controller('voteCtrl',function($scope,$state){
	//all[0]总玩家，all[1]幽灵，all[2]死亡玩家
	$scope.all=JSON.parse(sessionStorage.data);
	console.log($scope.all);		
	$scope.leng=$scope.all[2].length;	//死亡人数
	$scope.identify=[0];			//玩家身份，0占位
	$scope.className=[0];		//身份显示和选中的布尔值，0占位

	for(var i=1;i<=$scope.all[0].length;i++){      //分配身份
		if($.inArray(i,$scope.all[1])>=0){
			$scope.identify.push("幽灵");			
		}
		else{
			$scope.identify.push("水民");
			
		}
	}
	for(var i=1;i<=$scope.all[0].length;i++){    //显示死亡玩家和本轮选中玩家
		if($.inArray(i,$scope.all[2])>=0){
			$scope.className.push("false");
		}
		else{
			$scope.className.push("true");
		}

	}

	// $scope.clear=[0];
	// for(var k=1;k<=$scope.all[0].length;k++){
	// 	for(var j=0;j<=$scope.all[0].length;j++){
	// 		if(k==3*j+1){
	// 			$scope.clear[k]="true";
	// 			break;
				
	// 		}else{
	// 			$scope.clear[k]="false";
				
	// 		}			
	// 	}
	// }
	// console.log($scope.clear);
	for(var k=1;k<=$scope.all[0].length;k++){
		for(var j=0;j<=6;j++){
			if(k==3*j){
				// $(".vote-clear:eq('k')").css("clear","left");
				$(".vote-clear:eq('k')").addClass("clear-left");
			}		
		}
	}
	console.log($scope.identify);
	console.log($scope.className);
	$scope.vote=function(){
		if($scope.all[2].length==$scope.leng){    //本轮未选择时
			if($.inArray(this.x,$scope.all[2])>=0){     //选中已死亡玩家时
				alert("已死亡！");
			}else{                                                  //选中未死亡玩家时
				$scope.className[this.x]=false;    //设选中玩家的布尔值，即背景颜色和边框颜色改变
				$scope.all[2].push(this.x);       //将选中的玩家添加到死亡数组里				
			}			
		}else{						//已选中一人，再次选择时
			if(this.x==$scope.all[2][$scope.all[2].length-1]){     //取消功能，当选择已选中的水民
				$scope.all[2].splice($scope.all[2].length-1,1);    //删除上次选中的水民
				$scope.className[this.x]=true;  		//改变选中的布尔值，即背景颜色和边框颜色改变为初始
			}
			else{alert("只能同时选择1人！");}     //同时选中2人时
		}

		console.log($scope.all[2]);	
	}
	$scope.voteSkip=function(){
		if($scope.leng==$scope.all[2].length){
			alert("请选择投死对象！");
		}
		else{
			$state.go('vote-result');
			sessionStorage.data=JSON.stringify($scope.all);
		}
	}
})