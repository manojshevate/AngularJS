describe('TODO App Controller Spec',function(){

	describe('todo Controller', function(){

		var scope;

		beforeEach(module('todoApp'));

		beforeEach(inject(function($rootScope, $controller) {
	      scope = $rootScope.$new();
	      $controller('todoController', {$scope: scope});
	    }));

	    it('should set the default value of todo', function() {
	      expect(scope.todo).toBe('');
	    });

	    it('should set the default value of User', function() {
	      expect(scope.user.name).toBe('Manoj');
	    });

	});
});