angular.module('smartLibrary')

  .controller('signupCtrl', function($scope, $state, $meteor, $stateParams) {

    $scope.createUser = function(UserDetails) {
      $meteor.createUser({
        email: UserDetails.email,
        password: UserDetails.password,
        profile: {
          createdOn: new Date(),
          rollNo:UserDetails.rollNo,
          name:UserDetails.name,
          mobileNo:UserDetails.mobileNo
        }
      }).then(function(_response) {
        console.log('CreateAccountAction success');
        //alert("user created: " + $scope.credentials.username);
        $state.go('tabsController.studLibrary');
      }, function(_error) {
        console.log('Login error - ', _error);
        alert("Error: " + _error.reason);
      });
      return false;
    }

});
