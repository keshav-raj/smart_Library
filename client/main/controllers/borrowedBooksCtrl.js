angular.module('smartLibrary')

  .controller('borrowedBooksCtrl', function($scope, $state, $meteor, $stateParams, $meteor) {

  $scope.credentials = {};
  $scope.helpers({
  Books: function(){
    var myId = Meteor.userId();
    return BorrowedBooks.find({"approved":true,"userId":myId,"active":true});
  },
  checkUser: function(){
    //check wheather user is logged in
    if(!Meteor.userId()){
      $state.go('login');
    };
  }
  });
  $scope.notify= function () {
    cordova.plugins.notification.local.schedule({
    title: 'My first notification',
    text: 'Thats pretty easy...',
    foreground: true
});

  }

});
