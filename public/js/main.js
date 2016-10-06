/**
 * Created by root on 05/10/2016.
 */
angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'services']).config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
        'templateUrl': 'partials/home.html',
        'controller': 'FotosController'
    });

    $routeProvider.when('/fotos/insert', {
        'templateUrl': 'partials/crud.html',
        'controller': 'CrudController'
    });

    $routeProvider.when('/fotos/update/:fotoId', {
        'templateUrl': 'partials/crud.html',
        'controller': 'CrudController'
    });

    $routeProvider.otherwise({ redirectTo: '/fotos'});
})