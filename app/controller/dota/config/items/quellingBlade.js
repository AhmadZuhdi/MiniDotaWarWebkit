/* 
* @Author: ahmadzuhdi
* @Date:   2015-03-08 11:59:30
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-03-08 12:12:55
*/

'use strict';

define([], function(){

	

	return {

		passive : {

			on : {

				attack : {

					change : 100,

					logic : function(damage, enemyObject, attackerObject){

						damage += (damage * (32/100))

						return damage

					}
				}

			}

		}

	}
})