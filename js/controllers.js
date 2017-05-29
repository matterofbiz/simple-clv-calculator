angular.module('app.controllers', [])
  
.controller('calculateCLVCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.advanced = false;

    $scope.data = {
        'turnover': '',
        'customers': '',
        'churn': '',
        'gross': '',
        'interest': '' 
    }

    $scope.toggleCheck = function(){
        if ($scope.advanced === false){
            $scope.advanced = true
        }else{
             $scope.advanced = false
        }
        $scope.clv = '';
    }

    $scope.calculate = function(){
        //console.log($scope.advanced);
        if ($scope.data.customers < 1) {
            $scope.clv = 'Check Customers!'
            return;
        }
        if ($scope.data.churn < 1 || $scope.data.churn > 100) {
            $scope.clv = 'Check Churn!'
            return;
        }
        
        $scope.simple = ($scope.data.turnover/$scope.data.customers)*(100/$scope.data.churn);
        if ($scope.advanced === false) {
            $scope.clv = 'CLV is ' + Math.round($scope.simple)
            mixpanel.track("Calculate CLV", {"advanced": "no"});
        }
        
        if ($scope.advanced === true) {
            if ($scope.data.gross < 1) {
                $scope.clv = 'Check Gross margin!'
                return;
            }
            retention = (100 - $scope.data.churn)/100
            discount = ($scope.data.interest/12)/100
            $scope.clv = 'CLV is ' + Math.round($scope.simple*($scope.data.gross/100)*(retention/(1+discount-retention)))        
            mixpanel.track("Calculate CLV", {"advanced": "yes"});
        }
    };
}])
   
.controller('aboutCLVCalculatorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    