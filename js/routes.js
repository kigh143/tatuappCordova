angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.updates', {
    url: '/updates',
    views: {
      'tab1': {
        templateUrl: 'templates/updates.html',
        controller: 'updatesCtrl'
      }
    }
  })

  .state('tabsController.chat', {
    url: '/chat',
    views: {
      'tab3': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('tabsController.people', {
    url: '/people',
    views: {
      'tab2': {
        templateUrl: 'templates/people.html',
        controller: 'peopleCtrl'
      }
    }
  })

  .state('tabsController.notification', {
    url: '/notification',
    views: {
      'tab4': {
        templateUrl: 'templates/notification.html',
        controller: 'notificationCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('verifyAccount', {
    url: '/verify',
    templateUrl: 'templates/verifyAccount.html',
    controller: 'verifyAccountCtrl'
  })

  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab2': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('chatRoom', {
    url: '/chatRoom',
    templateUrl: 'templates/chatRoom.html',
    controller: 'chatRoomCtrl'
  })

$urlRouterProvider.otherwise('/page1/updates')

  

});