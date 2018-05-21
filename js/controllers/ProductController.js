app.controller('ProductController', ['$scope', '$location', '$route', '$firebaseAuth', '$firebaseObject', function($scope, $location, $route, $firebaseAuth, $firebaseObject) {
	
	$scope.item = {}; //holds the shopping cart
	$scope.item_add = {};
	$scope.auth = $firebaseAuth(); //create a firebase auth object
	$scope.uid = $scope.auth.$getAuth().uid;	//pull the uid for binding the cart data with user
	$scope.total = 0;
	$scope.user_data = {};
	$scope.user_data.cart = [];

	//create the firebase object for binding
	var fireRef = firebase.database().ref('users/' + $scope.uid); //get children of certain user id
	var fireObj = $firebaseObject(fireRef); 	//pass in the ref to create object
	fireObj.$bindTo($scope, 'user_data').then(function(){
		console.log("binded cart");
	});

	
	//hopefully can pull from mongoose database at somepoint
	$scope.items = [
		{
			name: 'Spiff Tee',
			//cover: 'spifftee.jpg',
			cover: 'spifftee.jpg',
			description: 'Tee shirts come in black and white.',
			price: 20
		},
		{
			name: 'Spiff Sweater',
			//cover: 'spiffsweater.jpg',
			cover: 'spiffsweater.jpg',
			description: 'Overachieving Underachievers.',
			price: 40
		},
		{
			name: 'Spiff Band',
			//cover: 'spiffband.jpg',
			cover: 'spiffband.jpg',
			description: 'Build Hype',
			price: 10
		}
	];

	$scope.remove_item = function(index){
		$scope.user_data.cart[index].removed = true;
		$scope.user_data.total -= $scope.user_data.cart[index].price;
		console.log("removed");
	};
  	
  	//add item to cart
	$scope.add_item = function(index){
		$scope.item.name = $scope.items[index].name;
		$scope.item.price = $scope.items[index].price;
		$scope.item.size = $scope.item_add.size;
		$scope.item.color = $scope.item_add.color;
		if(!$scope.user_data.total){
			$scope.user_data.total  = $scope.item.price;
		}
		else{
			$scope.user_data.total += $scope.item.price;
		}
		if(!$scope.user_data.cart){
			$scope.user_data.cart = [$scope.item];
		}
		else{
			$scope.user_data.cart.push($scope.item);
		}
		console.log("success");
	};

	//checkout function
	$scope.checkout = function(){
		$location.path('/checkout');
		$route.reload();
		//do some sort of display with the shopping cart
	};

  	//lgout function
  	$scope.logout = function(){
  		$scope.auth.$signOut().then(function(){
  			$location.path('/login');
  		})
  	};

  	//Create the database for holding the products, database manager

}]);