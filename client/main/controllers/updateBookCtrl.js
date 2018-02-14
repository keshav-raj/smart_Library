angular.module('smartLibrary')

  .controller('updateBookCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
    book: function(){
      return  Books.findOne({_id:$stateParams.bookid});

 }
 });


 $scope.updateBook =function(book){
console.log("im working");
       Books.update({_id:$stateParams.bookid},
       {
         $set: {
           name:book.name,
           author:book.authorName,
           book_id:book.id,
           department:book.department,
           availability:book.availability,
         }
       })



       var borrowBook = BorrowedBooks.findOne({dbBookId:$stateParams.bookid});
console.log(borrowBook._id);
       if (borrowBook) {
         console.log("working");
         BorrowedBooks.update({_id:borrowBook._id},
         {
           $set: {
             name:book.name,
             author:book.author,
             book_id:book.book_id,
             department:book.department,

           }
         })

       }
     }

});
