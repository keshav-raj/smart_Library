angular.module('smartLibrary')

  .controller('detailsOfBookCtrl', function($scope, $state, $meteor, $stateParams) {
  $scope.credentials = {};
  $scope.helpers({
    book: function(){
    return Books.findOne({_id:$stateParams.bookid});

 },


 });

  $scope.borrow = function () {
    var userId = Meteor.userId();
    var userDetails = Meteor.users.findOne({_id:userId});
//console.log("User details"+userDetails.profile.rollNo)
//console.log("Book Id"+$stateParams.bookId)
    var bookDetails = Books.findOne({_id:$stateParams.bookid});
    console.log("Book details"+bookDetails.name+bookDetails.bookId+bookDetails.author+bookDetails.department);
    var mydate = new Date();
    var numberOfDaysToAdd = 25;
    var newdate = mydate.setDate(mydate.getDate() + numberOfDaysToAdd);
    console.log(newdate);
    var newdate1 = new Date(newdate);
    console.log("newdate"+newdate1);


    var borrowBook = {
      name:bookDetails.name,
      id:bookDetails.id,
      authorName:bookDetails.authorName,
      department:bookDetails.department,
      userId:userId,
      userName:userDetails.profile.name,
      rollNo:userDetails.profile.rollNo,
      approved:false,
      dbBookId:bookDetails._id,
      active:true,
      return:false,
      borrowedAt: new Date(),
      dueDateIs: newdate1,
      imageData:bookDetails.imageData,

    }

    BorrowedBooks.insert(borrowBook);
    $state.go("tabsController.studLibrary")


      }

    $scope.wishList =function (){
      var userId = Meteor.userId();
      var userDetails = Meteor.users.findOne({_id:userId});
      var bookDetails = Books.findOne({_id:$stateParams.bookid});

      // console.log("Book details"+bookDetails.name+bookDetails.book_id+bookDetails.author+bookDetails.department);
      var wish = {
        name:bookDetails.name,
        book_id:bookDetails.book_id,
        author:bookDetails.author,
        department:bookDetails.department,
        userId:userId,
        userName:userDetails.profile.name,
        rollNo:userDetails.profile.rollNo,
        bookAvailable:false,
        dbBookId:bookDetails._id,
        borrowedAt: new Date(),
      }
      WishList.insert(wish);
      $state.go("tabsController.studLibrary")

    }

    $scope.checkAvailability = function() {
      var bookDetails = Books.findOne({_id:$stateParams.bookid});
      // console.log(bookDetails.availability);
       availability  = bookDetails.availability;
       // console.log("ccc"+availability);
      if (parseInt(availability) < 1) {
        return true

      } else {
        return false
      }
  }

  $scope.wishBtnCtrl = function() {
    var bookDetails = Books.findOne({_id:$stateParams.bookid});
    // console.log(bookDetails.availability);
     availability  = bookDetails.availability;
     // console.log("ccc"+availability);
    if (parseInt(availability) > 0) {
      return true

    } else {
      return false
    }
}




});
