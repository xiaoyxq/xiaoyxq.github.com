
myApp.controller('homeCtrl',function($scope,$state,$http,type){	
	//获得所有data
	$http.get('a/students').success(function(data){
		$scope.params=data.data;
		$scope.types=type;    //修真类型
		$scope.cancelData=[];

		$scope.delete=function(){
			//删除
			for(var i=0;i<$scope.params.length;i++){
				if($scope.params[i].logic==true || $scope.all==true){
					$scope.cancelData.push($scope.params[i].id);	
				}
			}
			$scope.cancelString=$scope.cancelData.join(",");
			//删除学员
			$http.post('a/students?id='+$scope.cancelString)
				.success(function () {
				alert("删除成功！");
				window.location.reload();
			})
		}
		
		//获得点击对象的id，并传参到下页面
		$scope.edit=function(){
			$scope.id=this.x.id;
			$state.go('revise',{id:$scope.id});
		}

	})
				
	$scope.add=function(){
		$state.go('signup');
	}

})