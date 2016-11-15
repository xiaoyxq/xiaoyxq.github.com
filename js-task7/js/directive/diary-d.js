
// myApp.directive("repeat",function(){
// 	//all[0]总玩家，all[1]幽灵，all[2]死亡玩家	
// 	return{
// 		restrict:'AE',
// 		template:'<div class="content" id="box" ></div>',
	
// 		// temlateUrl:'repeat.html',
// 		replace:true,
// 		link:function(scope,element,arrs){	
// 			scope.all=JSON.parse(sessionStorage.data);
// 			console.log(scope.all);
// 			console.log(scope.num);
// 			for(var i=0;i<scope.all[0].length;i++){        
// 				 element.append(
// 					"<div class='card'><h2 >幽灵</h2><img src='img/bgd.png'>"
// 					+"<h4>{{num}}</h4></div>"   
// 				);


// 			}
// 		}
// 	}
// });