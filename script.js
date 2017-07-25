/**
 * Created by nhatnk on 7/25/17.
 */
var app =angular.module('myApp', []);

app.controller('MyCtrl', function($scope){
    $scope.title = 'Progress Bar';
    $scope.progress = {value: 10};

    var timer;

    $scope.startProgress = function () {
        timer = setTimeout(function(){
            $scope.progress.value += 10;
            $scope.$apply();
            $scope.startProgress();
            if($scope.progress.value >= 100){
                clearTimeout(timer);
            }
        }, 1000);
    };
});

