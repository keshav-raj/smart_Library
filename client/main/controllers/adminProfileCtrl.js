angular.module('smartLibrary')

  .controller('adminProfileCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
    Users: function(){
      var userId = Meteor.userId();
      return  Meteor.users.findOne({_id:userId});
 }
 });

});
