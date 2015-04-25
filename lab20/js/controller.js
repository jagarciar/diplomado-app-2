angular.module('lab20.controller', [])

.controller('mobileController', function($scope){
	$scope.mobile_message = 'Algún Mensaje';
})

.controller('smartphoneController', function($scope){
	$scope.smartphone_message = 'Otro Mensaje';
});