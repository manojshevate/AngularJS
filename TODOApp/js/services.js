angular.module('todoAppServices',[]).factory('storageService', ['$window',function($window){

	return{
		set:function(todoList){
			$window.localStorage.setItem('todos',angular.toJson(todoList));
		},
		get:function(){
			var str = $window.localStorage.getItem('todos');
			var list =angular.fromJson(str);
			if(!list){
				list = [];
			}
			return list;
		}
	};
}]);;