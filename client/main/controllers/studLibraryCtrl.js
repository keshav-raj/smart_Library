angular.module('smartLibrary')

  .controller('studLibraryCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
  Books: function(){


    return Books.find()

  },
  checkUser: function(){
    //check wheather user is logged in
    if(!Meteor.userId()){
      $state.go('login');
    };
  }
  });

});
