/**
 * Created by root on 06/10/2016.
 */
angular.module('services', ['ngResource'])
.factory('crudSource', function ($resource) {
    return $resource('v1/fotos/:fotoId', null, {
        update: {
            method: 'PUT'
        },
        get: {
            method: 'GET'
        }
    });
})
.factory('crudMaster', function (crudSource, $q, $rootScope) {

    var service = {};
    var evento = 'insertDone'
    service.insert = function (foto) {
        return $q(function (resolve, rejetc) {
            if(foto._id){
                crudSource.update({fotoId: foto._id}, foto, function (data) {
                    resolve({
                       mensagem: "Imagem atualizada com sucesso",
                       inclusao: false
                    });
                    $rootScope.$broadcast(evento);
                }, function (error) {
                    rejetc({
                        mensagem: "Falha ao processar sua solicitão. \n"+ error,
                        inclusao: false
                    })
                });
            } else {
                crudSource.save(foto, function (data) {
                    resolve({
                        mensagem: "Imagem atualizada com sucesso",
                        inclusao: true
                    });
                    $rootScope.$broadcast('insertDone');
                }, function (error) {
                    rejetc({
                        mensagem: "Falha ao processar sua solicitão. \n"+ error,
                        inclusao: true
                    });
                });

            }
        });
    };

    return service;
});