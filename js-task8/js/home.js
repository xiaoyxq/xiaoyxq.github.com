
myApp.controller('homeCtrl',function($scope,$state,$http,type){	
	//获得所有data
	$http.get('a/students').success(function(data){
		$scope.params=data.data;
		$scope.types=type;    //修真类型
		console.log($scope.params);
		$scope.titleName="姓名";
		$scope.test=[];
		$scope.delete=function(){
			for(var i=0;i<$scope.params.length;i++){
				if($scope.params[i].logic==true){
					console.log($scope.params[i].logic);
					$scope.test.push($scope.params[i].logic);
					console.log($scope.params[i].id);
					$http({
						method:"POST",
						url:"a/students",
						params:{						
							id:$scope.params[i].id
						},		
					})
					// $scope.cancel=function(){
					// 	console.log($scope.test);
					// }
				
				}
			}				
		}
		
		//获得点击对象的id，并传参到下页面
		$scope.edit=function(){
			$scope.id=this.x.id;
			$state.go('revise',{id:$scope.id});
			
		}

	})
				
	$scope.add=function(){
		$state.go('signup');
		console.log($scope.params);
	}
	

})