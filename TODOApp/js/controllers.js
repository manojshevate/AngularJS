var controllerModule = angular.module('todoAppControllers',[]);

controllerModule.controller('todoController',['$scope','storageService',function($scope,storageService){

	$scope.todoList = storageService.get();

	$scope.todo = '';

	$scope.user = {name: 'Manoj'};


	$scope.addTodo = function(todo,event){
		event.preventDefault();
		$scope.todoList.push(todo);
		$scope.todo = '';
		storageService.set($scope.todoList);
	};

	$scope.removeTodo = function(index,event){
		event.preventDefault();
		$scope.todoList.splice(index,1);
		storageService.set($scope.todoList);
	};

}]);