/* 
* @Author: ahmadzuhdi
* @Date:   2015-03-08 11:59:58
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-03-08 12:13:23
*/

'use strict';

define([], function(){

	

	return {

		passive : {

			on : {

				/**
				 * listen when hero are attacked
				 * @type {Object}
				 */
				attacked : {

					change : 53,

					/**
					 * [logic description]
					 * @param  {Number} damage         incoming damage from enemy
					 * @param  {Object} enemyObject    attacker object
					 * @param  {Object} attackerObject hero object
					 * @return {Number}                result damage
					 */
					logic : function(damage, enemyObject, attackerObject) {

						damage -= 20

						return damage

					}

				}

			}

		}

	}
})