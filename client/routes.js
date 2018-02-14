angular.module("smartLibrary")
    .config(function($stateProvider, $urlRouterProvider) {
      // For any unmatched url, send to /login
      $urlRouterProvider.otherwise("/firstPage");
        $stateProvider.state('login', {
                url: '/login',
                // loaded into ui-view of parent's template
                templateUrl: 'client/main/views/login.ng.html',
                controller : 'LoginCtrl'
            });
        $stateProvider.state('main', {
                url: '/main',
                templateUrl: 'client/main/views/main.ng.html',
                controller: 'mainCtrl',
                resolve:{
                  "currentUser": function($meteor) {
                    return $meteor.requireUser();
                  }
                }
            });

        $stateProvider.state('firstPage', {
                url: '/firstPage',
                templateUrl: 'client/main/views/firstPage.ng.html',
                controller: 'firstPageCtrl'
            });

        $stateProvider.state('wishList', {
                url: '/wishList',
                templateUrl: 'client/main/views/wishList.ng.html',
                controller: 'wishListCtrl'
            });


        $stateProvider.state('signup', {
                url: '/signup',
                templateUrl: 'client/main/views/signup.ng.html',
                controller: 'signupCtrl'
            });

        $stateProvider.state('tabsController', {
                url: '/tab',
                templateUrl: 'client/main/views/tabsController.ng.html',
                abstract:true
            });

        $stateProvider.state('tabsController.studLibrary', {
                url: '/page2',
                views: {
                  'tab1': {
                    templateUrl: 'client/main/views/studLibrary.ng.html',
                    controller: 'studLibraryCtrl'
                  }
                }
            });

      $stateProvider.state('tabsController.borrowedBooks', {
                url: '/page3',
                views: {
                  'tab2': {
                    templateUrl: 'client/main/views/borrowedBooks.ng.html',
                    controller: 'borrowedBooksCtrl'
                  }
                }
            });

      $stateProvider.state('tabsController.myProfile', {
              url: '/page4',
              views: {
                'tab3': {
                  templateUrl: 'client/main/views/myProfile.ng.html',
                  controller: 'myProfileCtrl'
                }
              }
          });

          $stateProvider.state('tabsController.myBookDetails', {
                url: '/myBookDetails/:bookid',
                views: {
                  'tab2': {
                    templateUrl: 'client/main/views/myBookDetails.ng.html',
                    controller: 'myBookDetailsCtrl'
                  }
                }
              });

          $stateProvider.state('tabsController.detailsOfBook', {
                url: '/detailsOfBook/:bookid',
                views: {
                  'tab1': {
                    templateUrl: 'client/main/views/detailsOfBook.ng.html',
                    controller: 'detailsOfBookCtrl'
                  }
                }
              });


         $stateProvider.state('addBooks', {
                url:'/addBooks',
                templateUrl:'client/main/views/addBooks.ng.html',
                controller:'addBooksCtrl'
              });

          $stateProvider.state('admintabsController.adminHome', {
      url: '/adminHome',
      views: {
        'tab4': {
          templateUrl: 'client/main/views/adminHome.ng.html',
          controller: 'adminHomeCtrl'
        }
      }
    })

          $stateProvider.state('adminTabsController.adminLibrary', {
      url: '/adminLibrary',
      views: {
        'tab1': {
          templateUrl: 'client/main/views/adminLibrary.ng.html',
          controller: 'adminLibraryCtrl'
        }
      }
      })

      $stateProvider.state('adminProfile', {
      url: '/adminProfile',
          templateUrl: 'client/main/views/adminProfile.ng.html',
          controller: 'adminProfileCtrl'
      })

      $stateProvider.state('adminTabsController', {
      url: '/adminTab',
      templateUrl: 'client/main/views/adminTabsController.ng.html',
      abstract:true
      })

      $stateProvider.state('adminTabsController.addBooks', {
      url: '/addbooks',
      views: {
        'tab1': {
          templateUrl: 'client/main/views/addBooks.ng.html',
          controller: 'addBooksCtrl'
        }
      }
      })

      $stateProvider.state('adminTabsController.updateBook', {
      url: '/updateBook/:bookid',
      views: {
        'tab1': {
          templateUrl: 'client/main/views/updateBook.ng.html',
          controller: 'updateBookCtrl'
        }
      }
      })

      $stateProvider.state('adminTabsController.borrowingBooks', {
      url: '/page7',
      views: {
        'tab4': {
          templateUrl: 'client/main/views/borrowingBooks.ng.html',
          controller: 'borrowingBooksCtrl'
        }
      }
      })

      $stateProvider.state('adminTabsController.returnedBooks', {
      url: '/page8',
      views: {
        'tab3': {
          templateUrl: 'client/main/views/returnedBooks.ng.html',
          controller: 'returnedBooksCtrl'
        }
      }
      })

      $stateProvider.state('adminTabsController.bookDetailBorrowed', {
      url: '/bookBorrowed/:bookid',
      views: {
        'tab4': {
          templateUrl: 'client/main/views/bookBorrowed.ng.html',
          controller: 'bookBorrowedCtrl'
        }
      }
      })

      $stateProvider.state('adminTabsController.bookDetailReturned', {
      url: '/page10/:bookid',
      views: {
        'tab3': {
          templateUrl: 'client/main/views/bookReturned.ng.html',
          controller: 'bookReturnedCtrl'
        }
      }
      })



      });
