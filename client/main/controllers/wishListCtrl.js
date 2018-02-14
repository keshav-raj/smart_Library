angular.module('smartLibrary')

  .controller('wishListCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
  Books: function(){
    var userId = Meteor.userId();


    return WishList.find({"userId":userId,"bookAvailable":true});
    }

  })
  $scope.navigate = function(){
    if(!err){
        if(Roles.userIsInRole( Meteor.userId(), 'Administrator' )){
          $state.go('adminTabsController.adminLibrary');
        }else{
          $state.go('tabsController.studLibrary');
        }
    } else{
      alert('Login failed please check the credentials');
    }
  }
  $scope.removeWish = function(){

    WishList.update({dbBookId:$stateParams.bookid},
    {
      $set: {
          bookAvailable: false,
      }
    })

  }

});
