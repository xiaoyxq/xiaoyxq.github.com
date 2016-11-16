myApp.controller('reviseCtrl',function($scope,$state,$stateParams,$http,type,level,talent){
	var id=$stateParams.id;
	console.log(id);
	$scope. types = type;
	console.log($scope.types);
	$scope.levels=level;
	console.log($scope.levels);
	$scope.talents=talent;
	$scope.isshow=false;
	$scope.radio=true;
	$scope.buttom="编辑";
	//获得id的data
	$http.get('a/student/'+id).success(function(data){
		$scope.params=data;	
		console.log($scope.params);
		$scope.name=data.name;
		$scope.qq=data.qq;
		$scope.params.type=data.type;
		$scope.school=data.school;
		$scope.talent=data.talent
		$scope.params.level=data.level;
		$scope.jointime=data.joinTime;
		$scope.wish=data.wish;

		$scope.editData=function(){
			$scope.isshow=!$scope.isshow;	
			$scope.radio=!$scope.radio;
	
			if($scope.buttom=="保存"){
				//修改id的data
				$http({
					method:"PUT",
					// url:"a/student/43123/",
					url:"a/student/"+id,
					params:{
						name:$scope.name,
						qq:$scope.qq,					
						type:$scope.params.type,
						school:$scope.school,
						talent:$scope.talent,
						level:$scope.params.level,					
						joinTime:$scope.jointime,				
						wish:$scope.wish
					},
				}).success(function(data){
					alert("修改成功!");
				})

			}
			if($scope.isshow==true){
				$scope.buttom="保存";
			}else{
				$scope.buttom="编辑";
			}
		
		
		}

	})
			$scope.cancel=function(){
				console.log($scope.params.type);
				console.log($scope.talent);
				console.log($scope.params.level);
			
			};


})