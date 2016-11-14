
myApp.controller('diaryCtrl',function($scope,$state,$stateParams){
	//all[0]总玩家，all[1]幽灵，all[2]死亡玩家
	$scope.all=JSON.parse(sessionStorage.data);
	console.log($scope.all);
	// $scope.html="<div class='card'><h2 >幽灵</h2>"
	// +"<img src='img/bgd.png'><h4>1号</h4></div>";
	// $scope.htmls=[];
	// // $scope.htmlsscope.htmls.join('-');
	
	// for(var i=0;i<12;i++){
	// 	$scope.htmls[i]=$scope.html;
	// }
	// // $scope.ht=$scope.htmls.replace(/,/g,'');	
	$scope.isshow=true;
	this.isshow=true;
	$scope.clear=[0];
	for(var k=1;k<=$scope.all[0].length;k++){
		for(var j=0;j<=$scope.all[0].length;j++){
			if(k==3*j+1){
				$scope.clear[k]="true";
				break;
				
			}else{
				$scope.clear[k]="false";
				
			}			
		}
	}
	console.log($scope.clear);
	$scope.height=
	$scope.check=function(){

		this.isshow=!this.isshow;
		if($.inArray(this.x,$scope.all[1])>=0){
			this.identify="幽灵";
		}
		else{this.identify="水民";}		
	}	
	$scope.diarySkip=function(){
		$state.go('diary2');
		sessionStorage.data=JSON.stringify($scope.all);
	}
})