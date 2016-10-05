/**
 * Created by root on 05/10/2016.
 */
angular.module('alurapic').controller('CrudController', function ($scope, $http, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            if ($scope.foto._id) {
                $http.put('v1/fotos/'+ $scope.foto._id, $scope.foto)
                    .success(function (data) {
                        $scope.mensagem = 'Imagem atualizada com sucesso!';
                    })
                    .error(function (error) {
                        $scope.mensagem = 'Falha ao atualizada sua solicitação!';
                    })
            } else {
                $http.post('v1/fotos', $scope.foto)
                    .success(function (data) {
                        $scope.foto = {};
                        $scope.formulario = {};
                        $scope.mensagem = 'Imagem cadastrada com sucesso!';
                    })
                    .error(function (error) {
                        $scope.mensagem = 'Falha ao processar sua solicitação!';
                    })
            }
        }
   }

    //UPDATE
    if($routeParams.fotoId) {
        $http.get('http://localhost:3000/v1/fotos/'+ $routeParams.fotoId)
            .success(function (data) {
                $scope.foto = data;
            }).error(function (error) {
            $scope.mensagem = 'Falha ao processar sua solicitação!';
            console.log(error);
        });
    }
});