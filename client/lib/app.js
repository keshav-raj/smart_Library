import { Meteor } from 'meteor/meteor';
import { _meteorAngular } from 'meteor/angular';
import 'angular-component';
angular.module('smartLibrary', ['angular-meteor',
                            'ui.router',
                            'ionic',
                            'ngCordova'])
.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
    $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch when the $requireUser promise is rejected and redirect to login state
    if (error === 'AUTH_REQUIRED') {
      event.preventDefault();
      console.log("no user");
      $state.go('login');
    }
  });
});

function onReady() {
    angular.bootstrap(document, ['smartLibrary']);
}

if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
}
else {
    angular.element(document).ready(onReady);
}
