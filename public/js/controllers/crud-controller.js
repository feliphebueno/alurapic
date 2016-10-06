/**
 * Created by root on 05/10/2016.
 */
angular.module('alurapic').controller('CrudController', function ($scope, $routeParams, crudSource) {

    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            if ($scope.foto._id) {
                crudSource.update({fotoId: $scope.foto._id}, $scope.foto, function (response) {
                    $scope.mensagem = 'Imagem atualizada com sucesso!';
                }, function (error) {
                    $scope.mensagem = 'Falha ao atualizar sua solicitação!';
                    console.error("API Error: "+ error)
                });

            } else {

                crudSource.save($scope.foto, function (response) {
                    $scope.mensagem = 'Imagem cadastrada com sucesso!';
                    console.log(response);
                }, function (error) {
                    $scope.mensagem = 'Falha ao processar sua solicitação!';
                    console.error("API Error: "+ error)
                });
            }
        }
   }

    //UPDATE
    if($routeParams.fotoId) {console.log($routeParams.fotoId);
        crudSource.get({fotoId: $routeParams.fotoId}, function (xhr) {
            $scope.foto = xhr;
        }, function (error) {
            $scope.mensagem = 'Falha ao processar sua solicitação!';console.error("API Error: "+ error);
        });

/*

 */
    }
});