
myApp.controller('diary2Ctrl',function($scope,$state){
	//all[0]总玩家，all[1]幽灵，all[2]死亡玩家
	$scope.all=JSON.parse(sessionStorage.data);
	console.log($scope.all);
	$scope.days=["第一天","第二天","第三天","第四天","第五条","第六条","第七天","第八天"];
	$scope.blocks=["杀手杀人","警察救人","狙击狙人","医生救人","亡灵发表遗言","玩家依次发言","投票"];
	$scope.day=$scope.days[$scope.all[2].length/2];

	$scope.dSkip=function(){
		if(this.x=="杀手杀人"){
			$state.go('kill');

		}
	}
})