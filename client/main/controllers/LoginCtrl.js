angular.module('smartLibrary')
  .controller('LoginCtrl', function LoginCtrl($scope, $state, $meteor, $stateParams) {

  $scope.login = function(UserDetails) {
    var emailVar = UserDetails.email;
    var passwordVar = UserDetails.password;
    console.log(UserDetails);

    Meteor.loginWithPassword(emailVar, passwordVar, function(err){
          if(!err){
            toastr["success"]("login successfull", "welcome")

 toastr.options = {
   "closeButton": true,
   "debug": false,
   "newestOnTop": false,
   "progressBar": false,
   "positionClass": "toast-bottom-center",
   "preventDuplicates": false,
   "showDuration": "300",
   "hideDuration": "1000",
   "timeOut": "5000",
   "extendedTimeOut": "1000",
   "showEasing": "swing",
   "hideEasing": "linear",
   "showMethod": "fadeIn",
   "hideMethod": "fadeOut"
 }
             // toastr.success(Welcome, Login successfull);
              if(Roles.userIsInRole( Meteor.userId(), 'Administrator' )){
                $state.go('adminTabsController.adminLibrary');
              }else{
                $state.go('tabsController.studLibrary');
              }
          } else{
            alert('Login failed please check the credentials');
          }
        });
    /*$meteor.loginWithPassword(Userdetails.email, UserDetails.password)
      .then(function() {
        console.log('Login success ');
        alert("logged in: " + UserDetails.email);
        $state.go('tabsController.studLibrary');
      }, function(_error) {
        console.log('Login error - ', _error);
        alert("Error: " + _error.reason);
      });
    return false;  */
  }
});
