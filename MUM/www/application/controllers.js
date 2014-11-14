app.controller('loginCtrl', function ($scope, $http) {


});


app.controller('settingsCtrl', function ($scope, $location,$state) {
	$scope.login = function()
	{
		$state.go('home.main');
	}


	if($location.$$url =="/login")
	{
		$scope.ShowHeader = false;
	}
	else
	{
		$scope.ShowHeader = true;
	}
});


// app.controller('settingsCtrl', function () {
// 	alert('');
// 	// if($location.absUrl() =="login")
// 	// {
// 	// 	$scope.ShowHeader = false;
// 	// }
// 	// else
// 	// {
// 	// 	$scope.ShowHeader = true;
// 	// }
// });
