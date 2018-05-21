app.controller('AuthController', ['$scope', '$location', '$route', '$firebaseAuth', function($scope, $location, $route, $firebaseAuth){

    //if the host is already loggedin redirect to the home
    var auth = $firebaseAuth();
    if( auth.$getAuth()) {
        $location.path('/home');
    }

    //create a new user
    $scope.create_user = function() {
            console.log("made it here");
            if($scope.account.password != $scope.account.password2){
                $scope.error = "Passwords do not match. Please enter again";
                document.getElementById("create_error").style.visibility = "visible";
                document.getElementById("password").select();
                return false;
            }
            console.log($scope.account.email);
            auth.$createUserWithEmailAndPassword($scope.account.email, $scope.account.password).then(function(firebaseUser){
            $scope.firebaseUser = firebaseUser;
            $location.path('/home');
            $route.reload();
        }).catch(function(error){
            $scope.error = error;
        });
    };

    //login function
    $scope.login = function() {
        auth.$signInWithEmailAndPassword($scope.account.email, $scope.account.password).then(function(firebaseUser) {
            $scope.firebaseUser = firebaseUser;
            $location.path('/home');
            $route.reload();
        }).catch(function(error){
            $scope.error = error;
            document.getElementById("login_error").style.visibility = "visible";
            docuent.getElementById("email").select();
        });
    };

}]);