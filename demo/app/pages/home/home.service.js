///////////////////////////////////////////////////////////////////////////////////////////////////
// Home service - for sharing data common to home-related pages, widgets and modals
//////////////////////////////////////////////////////////////////////////////////////////////////
'use strict'

exports.inject = function (app) {
    app.service('HomeSvc', exports.service);
};

exports.service = function () {
    var home = this;

    // api variables
    home.message = "Hello from the Home Service"
}