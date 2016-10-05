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
});