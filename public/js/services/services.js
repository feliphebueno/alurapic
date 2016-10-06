/**
 * Created by root on 06/10/2016.
 */
angular.module('services', ['ngResource']).factory('crudSource', function ($resource) {
    return $resource('v1/fotos/:fotoId', null, {
        update: {
            method: 'PUT'
        },
        get: {
            method: 'GET'
        }
    });
});