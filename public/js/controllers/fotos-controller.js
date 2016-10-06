/**
 * Created by root on 05/10/2016.
 */
angular.module('alurapic').controller('FotosController', function($scope, crudSource) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    //GRID
    crudSource.query(function (data) {
        $scope.fotos = data;
    }, function (error) {
        console.error(error);
    });

    //DELETE
    $scope.excluir = function (foto) {

        crudSource.delete({fotoId: foto._id}, function (xhr) {
            $scope.fotos.splice($scope.fotos.indexOf(foto), 1);
            $scope.mensagem = "A foto "+ foto.titulo +" foi removida para todo o sempre";
        }, function (error) {
            $scope.mensagem = 'Falha ao processar sua solicitação!';
        });
    };

});