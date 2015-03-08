/* 
* @Author: ahmadzuhdi
* @Date:   2015-03-08 11:58:46
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-03-08 12:12:04
*/

'use strict';

define([], function(){

	

	return {

		/**
		 * increased damage
		 * @type {Number}
		 */
		attack : 21,

		/**
		 * passive ability owned by item
		 * @type {Object}
		 */
		passive : {

			/**
			 * listener to trigger passive
			 * available listener :
			 * 	- attack
			 * 	- attacked
			 * @type {Object}
			 */
			on : {

				/**
				 * on hero attack, trigger this passive
				 * @type {Object}
				 */
				attack : {

					/**
					 * change to trigger this passive
					 * @type {Number}
					 */
					change : 20,

					/**
					 * [logic description]
					 * @param  {Number} damage      total hero damage
					 * @param  {Object} enemyObject enemy hero object
					 * @param  {Object} attackerObject  attacker object
					 * @return {Number}             result damage
					 */
					logic : function(damage, enemyObject, attackerObject) {

						damage += 40

						return damage

					}

				}

			}

		}

	}
})