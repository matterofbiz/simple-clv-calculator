angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('cLVCalculator.calculateCLV', {
    url: '/calculator',
    views: {
      'tab1': {
        templateUrl: 'templates/calculateCLV.html',
        controller: 'calculateCLVCtrl'
      }
    }
  })

  .state('cLVCalculator.aboutCLVCalculator', {
    url: '/about',
    views: {
      'tab2': {
        templateUrl: 'templates/aboutCLVCalculator.html',
        controller: 'aboutCLVCalculatorCtrl'
      }
    }
  })

  .state('cLVCalculator', {
    url: '/tabs',
    templateUrl: 'templates/cLVCalculator.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/tabs/calculator')


});