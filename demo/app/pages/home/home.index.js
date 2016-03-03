///////////////////////////////////////////////////////////////////////////////////////////////////
// Home module - defines the module that encapsulates the home page
//////////////////////////////////////////////////////////////////////////////////////////////////

'use strict';

// require dependent modules

// define the module
var app = angular.module('afHome', []);

// require all immediate dependencies
require('./home.service.js').inject(app);
require('./home.controller.js').inject(app);

// export for main module to require
module.exports = app;