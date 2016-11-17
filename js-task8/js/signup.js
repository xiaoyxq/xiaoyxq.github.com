myApp.controller('signupCtrl',function($scope,$state,$stateParams,$http,type,level){
	$scope. types = type;
	$scope.levels=level;
	$scope.stType=function(){		
		$scope.te=this.x.value;		
	}

	$scope.stLevel=function(){
		$scope.ll=this.x.value;		
	}

	$('#selectDate').datepicker(); //时间选择器

	$scope.signUp=function(){
		//$scope.date=(new Date($scope.jointime)).getTime();
		// 添加
		$scope.jointime=$('#selectDate').val(); //获得日期
		$scope.date=(new Date($scope.jointime)).getTime(); //将日期转化成毫秒
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
				joinTime:$scope.date,
				wish:$scope.wish
			},
		
		}).success(function(data){
			alert("添加成功");
		})
	}

})

