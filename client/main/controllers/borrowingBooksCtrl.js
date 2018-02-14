angular.module('smartLibrary')

  .controller('borrowingBooksCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
  borrowedBooks: function () {
    return  BorrowedBooks.find({approved:false});
  }
});

});
