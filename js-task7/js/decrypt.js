
myApp.controller('decryptCtrl',function($scope,$state){
	//all[0]总玩家，all[1]幽灵，all[2]死亡玩家
	$scope.all=JSON.parse(sessionStorage.data);
	console.log($scope.all);	
	$scope.leng=$scope.all[2].length-1;
	$scope.number=$scope.all[2][$scope.leng];
	$scope.decryptSkip=function(){
		if($scope.all[1].length-$scope.all[3].length>=($scope.all[0].length-$scope.all[2].length)/2){
			$state.go('end');
		}else{
			$state.go('vote');
			sessionStorage.data=JSON.stringify($scope.all);
		}
		
	}
})