/* 
* @Author: ahmadzuhdi
* @Date:   2015-03-08 12:23:50
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-03-08 13:48:29
*/

'use strict';

define(['lodash'], function(__){

	return new function() {

		var _pub = {}

		var _priv = {}

		/**
		 * generate hero attack time
		 * @param  {Number} baseAttackTime      
		 * @param  {Numnber} increaseAttackSpeed 
		 * @return {Number}                     
		 */
		_pub.generateAttackTime = function(baseAttackTime, increaseAttackSpeed) {

			var AT = 0

			AT = baseAttackTime / (1 + (increaseAttackSpeed / 100))

			return AT
		}

		/**
		 * generate armor by total agility
		 * @param  {Number} agility 
		 * @return {Number}         
		 */
		_pub.generateArmor = function(agility) {

			return (parseInt(agility) * 0.14)

		}

		/**
		 * generate health by total strength
		 * @param  {Number} strength 
		 * @return {Number}          
		 */
		_pub.generateHealth = function(strength) {

			return (150 + parseInt(strength) * 19)

		}

		/**
		 * generate mana by total intteligence
		 * @param  {Number} intelligence 
		 * @return {Number}              
		 */
		_pub.generateMana = function (intelligence) {
			
			return (parseInt(intelligence) * 13)

		}

		_pub.generateAttributesWithModifiers = function(attributes, modifiers) {

			var newAttributes = __.cloneDeep(attributes)

			__.each(modifiers, function(value, key) {

				__.each(value, function(v, k){

					newAttributes[k] += v

				})

			})

			return newAttributes
		}

		return _pub

	}

})