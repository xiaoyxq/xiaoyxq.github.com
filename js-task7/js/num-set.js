// var myApp = angular.module('myApp',[]);
myApp.controller('numsetCtrl',function($scope,$state){
	$scope.killers=0;
	$scope.civilians=0;
	$scope.polices=0;
	$scope.doctors=0;
	$scope.nums=4;
	$scope.all=new Array();
	//设定人数

	$scope.down=function(){
		if($scope.nums>4 && $scope.nums<=18){
			$scope.nums--;
		}
		else{
			alert("最少人数为4！")
		}
	}
	$scope.up=function(){
		if($scope.nums>=4 && $scope.nums<18){
			$scope.nums++;
		}
		else{
			alert("最多人数为18！")
		}
	}
	//分配人数
	$scope.numset=function(){
		$scope.killers=Math.floor($scope.nums/4);
		$scope.civilians=$scope.nums-$scope.killers;
		//定义所有玩家
		for(var k=0;k<3;k++){
			$scope.all[k]=new Array;
		}
		
		for(var i=1;i<=$scope.nums;i++){
			$scope.all[0][i-1]=i;
		}
		//定义幽灵
		for(var j=1;j<=$scope.killers;j++){
			var c=Math.floor(Math.random()*$scope.nums+1);
			if($.inArray(c,$scope.all[1])>=0){
				j--;
			}
			else{
				$scope.all[1].push(c);
			}	
		}
		//定义死亡玩家，初始为空
		$scope.all[2]=[];
		$scope.all[3]=[];
		console.log($scope.all);
		console.log($scope.all[1]);

	}

	//跳转页面并通过URL传递all数组
	$scope.setSkip=function(){
		if($scope.all[1]!=null){
			// $state.go('check',{all:all});
			sessionStorage.data=JSON.stringify($scope.all);	
			$state.go('check',{reload:true});
		}
		else{
			alert("请设置玩家人数");
		}		
	}



})