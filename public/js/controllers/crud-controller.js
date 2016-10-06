/**
 * Created by root on 05/10/2016.
 */
angular.module('alurapic').controller('CrudController', function ($scope, $routeParams, crudMaster, crudSource) {

    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            crudMaster.insert($scope.foto).then(function (data) {
                $scope.mensagem = data.mensagem;
                if(data.inclusao){
                    $scope.foto = {};
                }

            }).catch(function (error) {
                $scope.mensagem = error.mensagem;
            });
        }
   };

    //UPDATE
    if($routeParams.fotoId) {
        crudSource.get({fotoId: $routeParams.fotoId}, function (xhr) {
            $scope.foto = xhr;
        }, function (error) {
            $scope.mensagem = 'Falha ao processar sua solicitação!';console.error("API Error: "+ error);
        });
    }
});