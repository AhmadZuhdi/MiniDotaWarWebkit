/* 
* @Author: ahmadzuhdi
* @Date:   2015-02-11 21:27:43
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-03-08 17:23:01
*/

'use strict';

requirejs.config({

	baseUrl : '',

	paths : {

		app : 'app/app',
		route : 'app/config/route',

		// Library
		angularAMD : 'bower_components/angularAMD/angularAMD.min',
		angular : 'bower_components/angular/angular.min',
		'angular-ui-router' : 'bower_components/angular-ui-router/release/angular-ui-router.min',
		lodash : 'bower_components/lodash/lodash.min',
		flight : 'bower_components/flightjs/flight',
		jquery : 'bower_components/jquery/dist/jquery.min',
		async : 'bower_components/async/lib/async',

	},

	shim : {

		flight : ['jquery'],

		'angular-ui-router' : [

			'angular'

		],

		angularAMD : [

			'angular',
			'angular-ui-router'

		]

	},

	deps : ['app/bootstrap.js']

})