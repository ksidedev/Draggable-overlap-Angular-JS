var extScope;
angular.module('overlap', [])

.controller('overlapCtrl', ['$scope', function ($scope) {
     $scope.area = 0;
     $scope.width = 0;
     $scope.height = 0;
}]);

function getScope(ctrlName) {
    var sel = 'div[ng-controller="' + ctrlName + '"]';
    return angular.element(sel).scope();
}

function over(x,y,z) {
    var $scope = getScope('overlapCtrl');
    $scope.area = x;
    $scope.width = y;
    $scope.height = z;
    $scope.$apply();
}
