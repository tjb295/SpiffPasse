app.controller('CheckoutController', ['$scope', '$location', '$route', '$firebaseAuth', function($scope, $location, $route, $firebaseAuth){

	//begin using variables for the current user, ie. Cart items, Total Prices, 
	//Perhaps have user put in shipping address?
	var auth = $firebaseAuth();
	$scope.uid = $scope.auth.$getAuth().uid;	//pull the uid for binding the cart data with user
	$scope.user_data = {};

	//create the firebase object for binding
	var fireRef = firebase.database().ref('users/' + $scope.uid); //get children of certain user id
	var fireObj = $firebaseObject(fireRef); 	//pass in the ref to create object
	fireObj.$bindTo($scope, 'user_data').then(function(){
		console.log("binded cart");
	});

	$scope.remove_item = function(index){
		//This function will remove something from shopping cart
		$scope.user_data[index].removed = true;
		console.log("Removed");
	};

	$scope.checkout = function(){

	};






}])