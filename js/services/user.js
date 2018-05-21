app.factory('user', ['$http', '$location', '$route', '$cookies', function ($http, $location, $route, $cookies) {

    var user = {};

    user.logged_in = false;
    user.token = "";
    user.cart = [];

    user.login = function (form_data) {
        return $http.post('/login', form_data)
            .success(function (data) {
                if (data.success) {
                    user.token = data.token;
                    user.user = data.user;
                    user.logged_in = true;
                    user.cart = data.user.cart;

                    //set cookie value for token
                    $cookies.remove("vm-token");
                    $cookies.put("vm-token", data.token);
                }
            })
            .error(function (err) {
                return err;
            });
    };

    user.create_user = function (form_data) {
        return $http.post('/new_user', form_data)
            .success(function (data) {
                if (data.success) {
                    user.token = data.token;
                    user.user = data.user;
                    user.logged_in = true;
                    user.cart = data.user.cart;

                    //again set the new token for cookie
                    $cookies.remove("vm-token");
                    $cookies.put("vm-token", data.token);
                }
                else {
                    return false;
                }
            })
            .error(function (err) {
                return err;
            });
    };

    user.logout = function () {
        user.logged_in = false;
        user.token = false;
        user.user = false;

        $cookies.remove("vm-token");
    };

    user.getToken = function () {
        return this.token;
    };

    user.getUser = function () {
        return this.user;
    };

    user.validateToken = function () {
        user.token = $cookies.get("vm-token");

        return $http.post('/validate_token', { "token": user.token })
            .success(function (data) {
                if (data.success) {
                    user.user = data.user;
                    user.token = data.token;
                    user.logged_in = data.logged_in;
                    user.cart = data.user.cart;
                }
            });
    };

    user.loggedIn = function () {
        return this.logged_in;
    }

    user.getCart = function () {
        return this.cart;
    };

}]);