// var myApp = angular.module('myApp',[]);
myApp.controller('checkCtrl',function($scope,$state,$stateParams){
	//all[0]总玩家，all[1]幽灵，all[2]死亡玩家
	// var all=$stateParams.all;
	$scope.all=JSON.parse(sessionStorage.data);
	console.log($scope.all);
	$scope.number=1;
	$scope.isshow=true;
	$scope.content="查看"+$scope.number+"号的身份";
	$scope.change=function(){
		$scope.isshow=!$scope.isshow;
		if($scope.isshow==true){
			if($scope.number==$scope.all[0].length){
				// $state.go('diary',{all:all});
				$state.go('diary',{reload:true});
				sessionStorage.data=JSON.stringify($scope.all);	
				console.log($scope.all);
			}else{
				$scope.number++;
				$scope.content="查看"+$scope.number+"号的身份";
			}
		}else{	
			if($scope.number==$scope.all[0].length){
				$scope.content="查看法官日志";
			}else{
				if($.inArray($scope.number,$scope.all[1])>=0){  //判断是否在幽灵数组内
				$scope.identify="幽灵";                                                                                                 
				}else{
					$scope.identify="水民";
				}	
				$scope.number2=$scope.number+1;	
				$scope.content="隐藏并传递给"+$scope.number2+"号";
			}
			
		}
		
	}
		
})