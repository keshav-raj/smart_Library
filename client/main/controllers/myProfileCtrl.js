angular.module('smartLibrary')

  .controller('myProfileCtrl', function($scope, $state, $meteor, $stateParams) {

    $scope.logout = function(){
      $meteor.logout();
      $state.go("firstPage");
    };

});
