require('angular'); // import/require angular
require("angular-route");

var sprite      = require('./directives/sprite');
var progressbar = require('./directives/progressbar'); // barra de progresso

var spriteCtrl   = require('./controllers/spriteCtrl');      // view
var scrollBar    = require('./controllers/scrollBar');     // view
var radioButtons = require('./controllers/radioButtons');  // view
var checkBox     = require('./controllers/checkBox');      // view
var vouf         = require('./controllers/vouf');          // view

var run        = require('./configurations/ngrun');  // paginador
var config     = require('./configurations/config'); // paginador



// modulo
var app = angular.module('app',['ngRoute']); 

// directivas
app.directive('sprite', ['$compile', sprite]);
app.directive('progressbar',['$compile','$rootScope', progressbar]);



// controller
app.controller('spriteCtrl',['$scope','$http', spriteCtrl]);
app.controller('scrollBar', ['$scope', '$http', scrollBar]);
app.controller('radioButtons', ['$scope', radioButtons]);
app.controller('checkBox', ['$scope', checkBox]);
app.controller('vouf', ['$scope', vouf]);

app.run(['$rootScope', '$location', run]);
app.config(['$routeProvider', config]);
