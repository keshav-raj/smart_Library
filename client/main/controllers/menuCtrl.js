angular.module('smartLibrary')

  .controller('menuCtrl', function($scope, $state, $meteor, $stateParams) {

    $scope.logout = function(){
      $meteor.logout();
      $state.go("firstPage");
    };

});
