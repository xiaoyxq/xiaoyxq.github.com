myApp.controller('reviseCtrl',function($scope,$state,$stateParams,$http,type,level,talent,$filter){
	var id=$stateParams.id;
	$scope. types = type;
	$scope.levels=level;
	$scope.talents=talent;

	$scope.isshow=false;
	$scope.radio=true;
	$scope.buttom="编辑";
	$('#selectDate').datepicker();
	//获得id的data
	$http.get('a/student/'+id).success(function(data){

		$scope.params=data;
		$scope.name=data.name;
		$scope.qq=data.qq;
		$scope.params.type=data.type;
		$scope.school=data.school;
		$scope.talent=data.talent
		$scope.params.level=data.level;
		$scope.jointime=data.joinTime;
		$scope.wish=data.wish;
		//过滤器转化成日期
		$scope.date=$filter('date')($scope.jointime,'yyyy-MM-dd');

		$scope.editData=function(){
			$scope.isshow=!$scope.isshow;	
			$scope.radio=!$scope.radio;

			if($scope.buttom=="保存"){
				$scope.jointime=$('#selectDate').val(); //获得日期
				$scope.date=(new Date($scope.jointime)).getTime(); //将日期转化成毫秒
				console.log($scope.date);
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
						joinTime:$scope.date,
						wish:$scope.wish
					},
				}).success(function(data){
					alert("修改成功!");
					window.location.reload()
				})
			}
			if($scope.isshow==true){
				$scope.buttom="保存";
			}else{
				$scope.buttom="编辑";
			}

		}

	})

})