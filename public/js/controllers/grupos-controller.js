/**
 * Created by root on 06/10/2016.
 */
angular.module('alurapic').controller('GruposController', function ($scope, $http) {

    $http.get('/v1/grupos/')
    .success(function (data) {
            $scope.grupos = data;
    })
    .error(function (error) {
        console.error(error);
    })
});