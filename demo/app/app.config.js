/////////////////////////////////////////////////////////////////////////////////////////////////
// APP configuration - defines the ngRoute routes
////////////////////////////////////////////////////////////////////////////////////////////////
'use strict';

exports.inject = function (app) {
    app.config(['$routeProvider', exports.config]);
};

exports.config = function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/pages/home/home.template.html',
            controller: 'HomeCtrl as vm'
        })
        .when('/Home', {
            templateUrl: 'app/pages/home/home.template.html',
            controller: 'HomeCtrl as vm'
        });

};