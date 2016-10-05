/**
 * Created by root on 05/10/2016.
 */
angular.module('alurapic').controller('FotosController', function($scope, $http, $routeParams) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    //GRID
    $http.get('http://localhost:3000/v1/fotos/')
    .success(function (data) {
        $scope.fotos = data;
    }).error(function (error) {
        console.log(error);
    });

    //DELETE
    $scope.excluir = function (foto) {
        $http.delete('v1/fotos/'+ foto._id).success(function (data) {
            $scope.fotos.splice($scope.fotos.indexOf(foto), 1);
            $scope.mensagem = "A foto "+ foto.titulo +" foi removida para todo o sempre";
        }).error(function (error) {
            $scope.mensagem = 'Falha ao processar sua solicitação!';
        });
    }
});