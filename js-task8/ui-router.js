var myApp=angular.module('myApp',['ui.router' ,'oc.lazyLoad']);
function registerComponents($controllerProvider, $compileProvider, $filterProvider, $provide) {
    'use strict';
    // 将Angular的组件，指令等等的注册接口挂到app对象上，可以在应用程序启动之后任意可以添加功能
    myApp.controller = $controllerProvider.register;

}

myApp.config(registerComponents);

myApp.config(function ($stateProvider,$ocLazyLoadProvider,$urlRouterProvider) {
	var _lazyLoad = function (loaded) {
            	return function ($ocLazyLoad) {
                		return $ocLazyLoad.load(loaded, {serie: true});
            }
        };

	$urlRouterProvider.otherwise("home");
	$stateProvider.state('/',{
		url:'/home',
		templateUrl:'views/home.html',
		controller:'homeCtrl',
		resolve: {
                   		loadMyFile: _lazyLoad(['css/home.css','js/home.js'])
               	}
             
		})
		.state('signup',{
			url:'/signup',
			templateUrl:'views/signup.html',
			controller:'signupCtrl',
			resolve: {
	                   		loadMyFile: _lazyLoad(['css/signup.css','js/signup.js'])
	               	}
		})


		.state('revise',{
			url:'/revise/{id}',
			templateUrl:'views/revise.html',
			controller:'reviseCtrl',
			resolve: {
	                   		loadMyFile: _lazyLoad([
	                   			'css/revise.css',
	                   			'js/revise.js'
	                   			// 'js/filter/htmlContent.js'
	                   			// 'js/directive/compile.js',
	                   			// 'js/directive/diary-d.js'
	                   			])
	               	}
		})

		// .state('diary2',{
		// 	url:'/diary2',
		// 	templateUrl:'views/diary2.html',
		// 	controller:'diary2Ctrl',
		// 	resolve: {
	 //                   		loadMyFile: _lazyLoad(['css/public-tt.css','css/diary2.css','js/diary2.js'])
	 //               	}
		// })

		// .state('kill',{
		// 	url:'/kill',
		// 	templateUrl:'views/kill.html',
		// 	controller:'killCtrl',
		// 	resolve: {
	 //                   		loadMyFile: _lazyLoad(['css/public-tt.css','css/diary.css','css/kill.css','js/kill.js'])
	 //               	}
		// })

		// .state('decrypt',{
		// 	url:'/decrypt',
		// 	templateUrl:'views/decrypt.html',
		// 	controller:'decryptCtrl',
		// 	resolve: {
	 //                   		loadMyFile: _lazyLoad([
	 //                   			'css/public-tt.css',
	 //                   			'css/decrypt.css',
	 //                   			'js/decrypt.js'])
	 //               	}
		// })

		// .state('vote',{
		// 	url:'/vote',
		// 	templateUrl:'views/vote.html',
		// 	controller:'voteCtrl',
		// 	resolve: {
	 //                   		loadMyFile: _lazyLoad([
	 //                   			'css/public-tt.css',
	 //                   			'css/vote.css',
	 //                   			'js/vote.js',
	 //                   			'css/kill.css',
	 //                   			'css/diary.css'
	 //                   			])
	 //               	}
		// })

		// .state('vote-result',{
		// 	url:'/vote-result',
		// 	templateUrl:'views/vote-result.html',
		// 	controller:'vote-resultCtrl',
		// 	resolve: {
	 //                   		loadMyFile: _lazyLoad([
	 //                   			'css/public-tt.css',
	 //                   			'css/decrypt.css',
	 //                   			'js/vote-result.js'
	 //                   			// 'css/kill.css',
	 //                   			// 'css/diary.css'
	 //                   			])
	 //               	}
		// })

		// .state('end',{
		// 	url:'/end',
		// 	templateUrl:'views/end.html',
		// 	controller:'endCtrl',
		// 	resolve: {
	 //                   		loadMyFile: _lazyLoad([
	 //                   			'css/public-tt.css',
	 //                   			'css/end.css',
	 //                   			'js/end.js'
	 //                   			// 'css/kill.css',
	 //                   			// 'css/diary.css'
	 //                   			])
	 //               	}
		// })

})