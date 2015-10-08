var controllerModule = angular.module('todoAppControllers',[]);

controllerModule.controller('todoController',['$scope',function($scope){

	$scope.todoList = ['Test TODO','Demo TODO'];

	$scope.todo = '';

	$scope.user = {name: 'Manoj'};


	$scope.addTodo = function(todo,event){
		event.preventDefault();
		$scope.todoList.push(todo);
		$scope.todo = '';
	};

}]);