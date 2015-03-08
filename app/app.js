/* 
* @Author: ahmadzuhdi
* @Date:   2015-02-11 22:19:20
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-02-11 22:19:49
*/

'use strict';

define(['angularAMD'], function(ngAmd) {

	var app = angular.module('app', ['ui.router'])

	return ngAmd.bootstrap(app)

})