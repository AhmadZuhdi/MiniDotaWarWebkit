/* 
* @Author: ahmadzuhdi
* @Date:   2015-03-08 11:01:51
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-03-08 12:13:16
*/

'use strict';

define(['lodash'], function(__) {

	return new function() {

		/**
		 * Item Library
		 * @type {Object}
		 */
		var _public = {}

		/**
		 * Private Library
		 * @type {Object}
		 */
		var _private = {}

		_private.aliasMap = {

			
		}
		
		/**
		 * get item information
		 * @return {[type]} [description]
		 */
		_public.getItem = function(itemName, callback) {

			try {

				requirejs(['app/controller/dota/config/items/' + itemName + '.js'], function(item) {

					if(typeof callback == 'function') {

						callback(null, item)
					}
					
				}, function(err) {

					if(typeof callback == 'function') {

						callback(err)

					}

				})

			} catch (e) {

				if(typeof callback == 'function') {

					callback(e)

				}
			}

		}

		return _public

	}

})