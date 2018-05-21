app.controller('InformationController', ['$scope', '$location', '$route', '$firebaseAuth', '$firebaseObject',  function($scope, $location, $route, $firebaseAuth, $firebaseObject){
	//This controller will allow the user to enter information such as
	//Address, and shipping info
	$scope.account = {};
	$scope.info = {};
	$scope.auth = $firebaseAuth();
	$scope.uid = $scope.auth.$getAuth().uid;
	$scope.user_data = {};
	$scope.message = "";
	


	//create the firebase object for binding
	var fireRef = firebase.database().ref('users/' + $scope.uid); //get children of certain user id
	var fireObj = $firebaseObject(fireRef); 	//pass in the ref to create object
	fireObj.$bindTo($scope, 'user_data').then(function(){
		console.log("binded cart");
	});


	

	$scope.add_information = function(){
		//for now do nothing

		if($scope.account.str_add == ""){
			$scope.message = "Street address was left blank";
			document.getElementById("str_add").style.visibility = "visible";
			document.getElementById("str_add").select();
			return false;
		}
		if($scope.account.city == ""){
			document.getElementById("city").style.visibility = "visible";
			document.getElementById("city").select();
			return false;
		}
		if($scope.account.state == ""){
			document.getElementById("state").style.visibility = "visible";
			document.getElementById("state").select();
			return false;
		}
		if($scope.account.zip == ""){
			document.getElementById("zip").style.visiblity = "visible";
			document.getElementById("zip").select();
			return false;
		}

		$scope.info.street = $scope.account.str_add;
		$scope.info.city = $scope.account.city;
		$scope.info.state = $scope.account.state;
		$scope.info.zip = $scope.account.zip;

		console.log($scope.info.street);


	};
}]);