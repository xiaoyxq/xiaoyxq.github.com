
myApp.controller('signupCtrl',function($scope,$state,$stateParams,$http,type,level){	
	$scope. types = type;
	console.log($scope.types);
	$scope.levels=level;
	$scope.stType=function(){		
		$scope.te=this.x.value;		
	}

	$scope.stLevel=function(){
		$scope.ll=this.x.value;		
	}
	$scope.signUp=function(){

		// 添加学生
		$http({
			method:"POST",
			url:"a/student",
			params:{
				name:$scope.name,
				qq:$scope.qq,
				type:$scope.te,
				school:$scope.school,
				talent:$scope.tt,
				level:$scope.ll,
				joinTime:$scope.jointime,
				wish:$scope.wish
			},
		
		})
	}	
})

