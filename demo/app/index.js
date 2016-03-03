///////////////////////////////////////////////////////////////////////////////////////////////////
// APP module - defines the core module for the application
//////////////////////////////////////////////////////////////////////////////////////////////////
'use strict';

// require dependent modules
var home = require('./pages/home/home.index.js');

// create master module
var app = angular.module('app', ['ngRoute', 'jh-code-mirror', home.name]);

// require the remaining master modules dependencies
require('./app.service.js').inject(app);
require('./app.config.js').inject(app);
require('./app.controller.js').inject(app);       