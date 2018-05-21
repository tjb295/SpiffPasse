app.controller('IndexController', ['$scope', function($scope ,$route) {

	$scope.products = [
		{
			name: 'Follow Us',
			cover: 'css/history.jpg',
			description: 'Instagram',
			price: 1,
			likes: 0,
			dislikes: 0
		}
	];

	
		


	$scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);