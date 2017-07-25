/**
 * Created by nhatnk on 7/25/17.
 */
app.directive('progressBar', [function () {

    function ProgressCtrl($scope){
        $scope.defaultColor = 'blue';
    }

    return {
        scope: {
            value: '=value',//=, &, @
            color: '=color'
        },
        templateUrl: 'directives/progress-bar/progress-bar.html',
        controller: ProgressCtrl
    };
}]);
