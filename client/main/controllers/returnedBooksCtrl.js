angular.module('smartLibrary')

  .controller('returnedBooksCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
  returnedBooks: function () {
    return  BorrowedBooks.find({return:true});
  }
});

});
