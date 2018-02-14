angular.module('smartLibrary')

  .controller('myBookDetailsCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
    book: function(){
      return BorrowedBooks.findOne({_id:$stateParams.bookid});
    }
    

    // bookdate: function(){
    //         var bookd = BorrowedBooks.findOne({_id:$stateParams.bookid});
    //         console.log("bookd"+bookd);
    //         var mydate = bookd.borrowedAt;
    //
    //           var numberOfDaysToAdd = 25;
    //           var newdate = mydate.setDate(mydate.getDate() + numberOfDaysToAdd);
    //      console.log(newdate);
    //      var newdate1 = new Date(newdate);
    //      console.log("newdate"+newdate1);
    //    }
     });

       $scope.return = function () {
         console.log("im here");
         BorrowedBooks.update({"_id":$stateParams.bookid},{$set: {"return":true}});
        $state.go("tabsController.borrowedBooks");
      }


      });
