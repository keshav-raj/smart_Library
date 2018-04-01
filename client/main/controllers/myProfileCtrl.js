angular.module('smartLibrary')

  .controller('myProfileCtrl', function($scope, $state, $meteor, $stateParams) {

    $scope.helpers({
      Users: function(){
        var userId = Meteor.userId();
        return  Meteor.users.findOne({_id:userId});
   }
   });


    $scope.logout = function(){
      $meteor.logout();
      $state.go("firstPage");
    };

});
