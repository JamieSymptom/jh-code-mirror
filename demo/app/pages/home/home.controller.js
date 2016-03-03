///////////////////////////////////////////////////////////////////////////////////////////////////
// HOME page controller
//////////////////////////////////////////////////////////////////////////////////////////////////
'use strict';

exports.inject = function (app) {
    app.controller('HomeCtrl', ['HomeSvc', exports.controller])
};

exports.controller = function (HomeSvc) {

    var vm = this;
    vm.svc = HomeSvc;

    // scope variables
    vm.example = 1;

    // watches    

    // hoisted functions       

};