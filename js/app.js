var app = angular.module('myApp', ['ngRoute', 'firebase']);
//in order to route user to sign in
app.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
        //if we have an error we can redirect to the sign in
        if(error === "AUTH_REQUIRED") {
            $location.path('/home');
        }
    });
}]);


app.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
        controller: 'ProductController',
        templateUrl: 'views/index.html',
        resolve: {
            "currentAuth": ["Auth", function(Auth){
                return Auth.$requireSignIn();
            }]
        }
    })
    .when('/products',{
         controller: 'ProductController',
         templateUrl: 'views/products.html'
        })
        .when('/login', {
            controller: 'AuthController',
            templateUrl: 'views/login.html'
        })
        .when('/new_user', {
            controller: 'AuthController',
            templateUrl: 'views/new_user.html'
        })
        .when('/checkout', {
            controller: 'CheckoutController',
            templateUrl: 'views/checkout.html'
        })
        .when('/user_info', {
            controller: 'InformationController',
            templateUrl: 'views/user_info.html'
        })

        .otherwise({
         redirectTo: '/login'
  });
});

app.factory("Auth", ["$firebaseAuth", function($firebaseAuth){
    return $firebaseAuth();
}])


