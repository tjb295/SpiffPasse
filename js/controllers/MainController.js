app.controller('MainController', ['$scope', function($scope) {
	$scope.products = [
		{
			name: 'Instagram',
			cover: 'css/history.jpg',
			description: 'Follow Us!',
			price: 1,
			likes: 0,
			dislikes: 0
		},
	];

	$scope.realproducts = [
		{
			product: 'Spiff Tee',
			cover: 'spifftee.jpg',
			description: 'Tee shirts come in black and white.',
			price: 20
		}
		

	]
	$scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);