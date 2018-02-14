angular.module("smartLibrary")
    .controller('mainCtrl', function($scope,$state,$stateParams,$ionicModal,$meteor,$cordovaCamera) {
        $scope.posts = $meteor.collection(Posts);

        $scope.newPost={};

        $scope.post = function () {
            $scope.newPost.like=0;
            $scope.newPost.comments=[];
            $scope.posts.push( $scope.newPost);
            $scope.newPost={};
            $scope.closePost();

      y7iiii  };

        $scope.likePost= function(index){
            console.log( $scope.posts[index]);
            $scope.posts[index].like += 1;
        };

        $ionicModal.fromTemplateUrl('client/main/views/newpost.ng.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.closePost = function() {
            $scope.modal.hide();
        };

        $scope.openPost = function() {
            $scope.modal.show();
            console.log("im here");
        };
        $scope.doLogoutAction = function() {
            alert("in doLogoutAction");
            $meteor.logout().then(function(_response) {
              $state.go('login');
            });
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
                $scope.newPost.imageData=image.src;

            }, function(err) {
                // error
            });

        };
    });
