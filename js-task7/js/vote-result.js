
myApp.controller('vote-resultCtrl',function($scope,$state){
	//all[0]总玩家，all[1]幽灵，all[2]死亡玩家
	$scope.all=JSON.parse(sessionStorage.data);
	console.log($scope.all);		
	$scope.leng=$scope.all[2].length-1;
	$scope.number=$scope.all[2][$scope.leng];

	if($.inArray($scope.number,$scope.all[1])>=0){
		$scope.identify=["幽灵"];
		$scope.all[3].push($scope.number);
	}else{
		$scope.identify=["水民"];
	}
	console.log($scope.all);
	$scope.voteReSkip=function(){
		if($scope.all[1].length-$scope.all[3].length>=($scope.all[0].length-$scope.all[2].length)/2 || $scope.all[1].length==$scope.all[3].length){
			$state.go('end');
			sessionStorage.data=JSON.stringify($scope.all);
		}else{
			$state.go('diary2');
			sessionStorage.data=JSON.stringify($scope.all);
		}
		
	}	
})