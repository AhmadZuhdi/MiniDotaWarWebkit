/* 
* @Author: ahmadzuhdi
* @Date:   2015-03-08 12:56:24
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-03-08 13:11:27
*/

'use strict';

define([], function() {

	return {		

		/**
		 * Hero Name
		 * @type {String}
		 */
		name : 'Name',

		/**
		 * Hero Main Attributes
		 * @type {String}
		 */
		mainAttributes : 'strength',

		/**
		 * hero attributes
		 * @type {Object}
		 */
		attributes : {

			/**
			 * Strength
			 * @see http://dota2.gamepedia.com/Strength
			 * @type {Number}
			 */
			strength : 999,

			/**
			 * Streng Grow
			 * @see http://dota2.gamepedia.com/Strength
			 * @type {Number}
			 */
			strengthGrow : 999,

			/**
			 * Agility
			 * @see http://dota2.gamepedia.com/Agility
			 * @type {Number}
			 */
			agility : 999,

			/**
			 * Agility Grow
			 * @see http://dota2.gamepedia.com/Agility
			 * @type {Number}
			 */
			agilityGrow : 999,

			/**
			 * intelligence
			 * @see http://dota2.gamepedia.com/Intelligence
			 * @type {Number}
			 */
			intelligence : 999,

			/**
			 * intelligence grow
			 * @see http://dota2.gamepedia.com/Intelligence
			 * @type {Number}
			 */
			intelligenceGrow : 999,

			/**
			 * Hreo Attack
			 * @type {Number}
			 */
			attack : 999,

			/**
			 * Hero attack speed
			 * @see http://dota2.gamepedia.com/Attack_speed
			 * @type {Number}
			 */
			attackSpeed : 100,

			/**
			 * Hero base attack time
			 * @see http://dota2.gamepedia.com/Attack_speed
			 * @type {Number}
			 */
			baseAttackTime : 1.7,

			/**
			 * hero health
			 * @see http://dota2.gamepedia.com/Health
			 * @type {Number}
			 */
			healthRegen : 0.25,

			/**
			 * hero mana
			 * @see http://dota2.gamepedia.com/Mana
			 * @type {Number}
			 */
			manaRegen : 0.1

		}
	}
})