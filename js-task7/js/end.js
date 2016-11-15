
myApp.controller('endCtrl',function($scope,$state){
	//all[0]总玩家，all[1]幽灵，all[2]死亡玩家
	$scope.all=JSON.parse(sessionStorage.data);
	console.log($scope.all);
	$scope.ghost=$scope.all[3].length;   //死亡幽灵数量
	$scope.day=Math.floor(($scope.all[2].length+1)/2);   //经历的天数
	$scope.ghosts=$scope.all[1].length;    //幽灵总数
	$scope.civilians=$scope.all[0].length-$scope.all[1].length;    //水民总数
	$scope.days=[];     //经历的天数
	if($scope.ghost==$scope.ghosts){    //判断游戏结果
		$scope.result="水民胜利";
		$scope.isshow=true;
	}else{
		$scope.result="幽灵胜利";
		$scope.isshow=false;
	}
	for(var i=1;i<=$scope.day;i++){   //第几天
		$scope.days.push(i);
	}
	console.log($scope.days);
	$scope.identify=[0];
	for(var j=0;j<$scope.all[2].length;j++){
		j++;
		if($.inArray($scope.all[2][j],$scope.all[1])>=0){
			$scope.identify.push("幽灵");
		}
		else{
			$scope.identify.push("水民");
		}
	}
	console.log($scope.identify);

})