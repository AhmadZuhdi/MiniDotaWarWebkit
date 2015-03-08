/* 
* @Author: ahmadzuhdi
* @Date:   2015-03-08 11:50:43
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-03-08 13:50:19
*/

'use strict';

define(['lodash', 'app/controller/dota/items.js', 'app/controller/dota/engine.js'], function (__, items, engine) {
	
	return new function() {

		var _pub = {}

		var _priv = {}

		_priv.createHeoObject = function(heroObject) {

			var hero = {}

			var h = _.cloneDeep(heroObject)

			h.items = {}

			h.attributes.health = engine.generateHealth(h.attributes.strength)

			h.attributes.mana = engine.generateMana(h.attributes.intelligence)

			h.attributes.armor = engine.generateArmor(h.attributes.agility)

			h.attributes.attackTime = engine.generateAttackTime(h.attributes.baseAttackTime, h.attributes.agility)

			console.log(h)

			hero.addItem = function(slot, itemName, callback) {

				items.getItem(itemName, function(err, itemObject){

					if(err) {

						if(typeof callback == 'function'){

							callback(err)

						}

						return false

					}

					h.items[slot] = {

						name : itemName,

						attributes : itemObject
					}

					if(typeof callback == 'function') {

						var newAttributes = engine.generateAttributesWithModifiers(h.attributes, (function(){

							var modifers = []

							__.each(h.items, function(value, key) {

								modifers.push(value.attributes)

							})

							return modifers

						})())

						h.attributes = newAttributes

						callback()

					}


				})


			}

			hero.getItem = function(slot) {

				if(!slot) {

					return h.items

				}

				return h.items[slot]
			}

			hero.getAttribute = function(attributesName) {

				if(attributesName) return h.attributes[attributesName]

				return h.attributes

			}

			return hero

		}

		_pub.getHero = function(heroName, callback) {

			try {

				requirejs(['app/controller/dota/config/heroes/' + heroName + '.js'], function(hero) {

					if(typeof callback == 'function') {

						callback(null, _priv.createHeoObject(hero))
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

		return _pub
	}

})