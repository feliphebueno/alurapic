/**
 * Created by root on 05/10/2016.
 */
angular.module('minhasDiretivas', []).directive('meuPainel', function () {
    var ddo = {};
    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
}).directive('minhaFoto', function () {
    var ddo = {};
    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img src="{{ url }}" alt="{{ titulo }}"/>';

    return ddo;
})
.directive('meuBotaoDanger', function () {
    var ddo = {};
    ddo.restrict = "E";

    ddo.scope = {
        nome: '@',
        acao: '&'
    };

    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{ nome }}</button>';

    return ddo;
})
.directive('focus', function () {
    var ddo = {
        restritc: 'A',
        link: function (scope, element) {
            scope.$on('insertDone', function () {
                element[0].focus();
            })
        }
    };

    return ddo;
});