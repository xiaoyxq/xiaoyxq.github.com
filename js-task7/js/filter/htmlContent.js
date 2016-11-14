
myApp.filter('htmlContent',['$sce',function($sce){
	return function(input){
			return $sce.trustAsHtml(input);
		}
}]);
