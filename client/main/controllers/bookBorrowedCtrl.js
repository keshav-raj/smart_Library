angular.module('smartLibrary')

  .controller('bookBorrowedCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
    books: function(){
    return BorrowedBooks.findOne({_id:$stateParams.bookid});

 }
 });

    $scope.approve = function () {
      console.log("im here");
    BorrowedBooks.update({"_id":$stateParams.bookid},{$set: {"approved":true}});

    var updateBook = BorrowedBooks.findOne({"_id":$stateParams.bookid});
    console.log("dbBookId"+updateBook.dbBookId);
    var dbBook = Books.findOne({"_id":updateBook.dbBookId});
    console.log("Book Availabilty"+dbBook.availability);
    var newAvailability = dbBook.availability-1;
    Books.update({"_id":updateBook.dbBookId},{
      $set: {"availability":newAvailability}
    });
      $state.go("adminTabsController.borrowingBooks");
    }


});
