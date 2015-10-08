angular.module('todoAppDirectives',[]).directive('demoDirective',function(){
	return {
		link: function(scope, element, attrs, controller) {
			element.on('click', function(e){
				console.log('clicked');
			})
		}
	};

});