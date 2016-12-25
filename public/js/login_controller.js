app.controller('LoginController', function($scope, LoginService, $location, $cookies) {

  $scope.submitSignUp = function(newUser) {
    LoginService.signup.save(newUser, function(returnedObject) {
      let user = newUser
      if (user.length === undefined) {
        $cookies.putObject('loggedIn', user)
        $scope.newUser = {}
        $scope.signUp.$setPristine()
        $location.url('/')
      } else if (user.length !== 0) {
        $scope.error = user
      }
    })
  }

  $scope.submitLogIn = function(returningUser) {
    LoginService.login.save(returningUser, function(returnedObject) {
      if (!returnedObject.message) {
        $cookies.putObject('loggedIn', returnedObject)
        $location.url('/')
      } else {
        $scope.error = returnedObject.message
      }
    })
  }
})
