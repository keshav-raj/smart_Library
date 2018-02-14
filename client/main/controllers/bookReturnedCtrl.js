angular.module('smartLibrary')

  .controller('bookReturnedCtrl', function($scope, $state, $meteor, $stateParams) {

    $scope.helpers({
      book: function(){
      return BorrowedBooks.findOne({_id:$stateParams.bookid});

   }
   });

      $scope.approve= function () {
        console.log("working");

         BorrowedBooks.update({"_id":$stateParams.bookid},{$set: {"return":false,active:"false"}});

        var updateBook = BorrowedBooks.findOne({"_id":$stateParams.bookid});
      //  console.log("dbBookId"+updateBook.dbBookId);
        var dbBook = Books.findOne({"_id":updateBook.dbBookId});
      //  console.log("Book Availabilty"+dbBook.availability);
        var newAvailability = dbBook.availability+1;
            Books.update({"_id":updateBook.dbBookId},{
                $set: {"availability":newAvailability}

        })
          var wish =  WishList.findOne({"dbBookId":updateBook.dbBookId});

              if (wish) {

                        WishList.update({_id:wish._id},
                          {
                           $set: {"bookAvailable":true}
                         })
                      $state.go("adminTabsController.returnedBooks");

                      }
              }

              $scope.deny= function () {
                console.log("working");

                 BorrowedBooks.update({"_id":$stateParams.bookid},{$set: {"return":false,active:true}});

                      }



});
