
angular.module('smartLibrary')


  .controller('addBooksCtrl', function($scope, $state, $meteor, $stateParams, $meteor,$cordovaCamera) {
    $scope.book = $meteor.collection(Books);
    $scope.newbook={};
  $scope.credentials = {};

  $scope.bookDetails = function () {
      $scope.book.push( $scope.newbook);
      state.go('adminTabsController.adminLibrary');
      // $scope.newbook={};
      // $scope.closePost();

  };
  $scope.getPhoto = function(){

      var options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: false,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 500,
          targetHeight: 500,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('myImage');
          image.src = "data:image/jpeg;base64," + imageData;
          $scope.newbook.imageData=image.src;

      }, function(err) {
          // error
      });

  };

  // $scope.addBook =function(bookDetails){
  //   console.log(bookDetails + $scope.bookDetails.imageData);
  //  Books.insert({
  //     name:bookDetails.name,
  //     author:bookDetails.authorName,
  //     book_id:bookDetails.id,
  //     department:bookDetails.department,
  //     availability:bookDetails.availability,
  //     createdAt: new Date(),
  //     imageData: bookDetails.imageData,
  //
  //   })
  // };

});
