/* 
* @Author: ahmadzuhdi
* @Date:   2015-03-08 12:23:50
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-03-08 18:06:00
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

		_pub.createBattle = function(unitA, unitB) {

			var battle = {}

			var b = {}

			b.intervalAttack = {}

			b.PRD = {}

			b.PRD.A = {}
			b.PRD.B = {}

			b.getAllChangeItemAndSkills = function() {

				__.each(unitA.getItem(), function(value, key){

					if(value.attributes && value.attributes.passive && value.attributes.passive.on) {

						__.each(value.attributes.passive.on, function(v, k) {

							b.PRD.A[k] = b.PRD.A[k] || []

							v.originalChange = v.change

							b.PRD.A[k].push(v)

						})

					}

				})

				__.each(unitB.getItem(), function(value, key){

					if(value.attributes && value.attributes.passive && value.attributes.passive.on) {

						__.each(value.attributes.passive.on, function(v, k) {

							b.PRD.B[k] = b.PRD.B[k] || []

							v.originalChange = v.change

							b.PRD.B[k].push(v)

						})

					}

				})



			}

			b.createIntervaAttack = function() {

				console.log(unitA.getAttribute())
				console.log(unitB.getAttribute())

				var attackTimeA = unitA.getAttribute('attackTime') * 1000
				var attackTimeB = unitB.getAttribute('attackTime') * 1000

				var aHealth = unitA.getAttribute('health')
				var bHealth = unitB.getAttribute('health')

				var aArmor = unitA.getAttribute('armor')
				var bArmor = unitB.getAttribute('armor')

				var aAttack = __.random(0,9990)
				var bAttack = __.random(0,9990)

				var attackCountA = 0
				var attackCountB = 0

				console.log(b.PRD)

				b.intervalAttack[aAttack] = setInterval(function() {

					var damage = unitA.getAttribute('attack')

					attackCountA++

					var rng = Math.random()

					if(b.PRD.A.attack) {

						__.each(b.PRD.A.attack, function(v, k) {

							if(rng < (v.change / 100)) {

								v.change = v.originalChange

								damage = v.logic(damage, unitB, unitA)

							} else {

								v.change += (v.originalChange / 2)

							}

						})

					}

					if(b.PRD.B.attacked) {

						__.each(b.PRD.B.attacked, function(v, k) {

							if(rng < (v.change / 100)) {

								v.change = v.originalChange

								damage = v.logic(damage, unitB, unitA)

							} else {

								v.change += (v.originalChange / 2)

							}

						})

					}

					if(bArmor > 0) {

						damage -= (0.06 * bArmor) / (1 + 0.06 * bArmor)

					}

					console.log('a attack b', damage)

					bHealth -= damage

					if(bHealth < 0) {

						console.log('unit a menang')
						clearInterval(b.intervalAttack[aAttack])
						clearInterval(b.intervalAttack[bAttack])
					}

				}, attackTimeA)

				b.intervalAttack[bAttack] = setInterval(function() {

					var damage = unitB.getAttribute('attack')

					attackCountB++

					var rng = Math.random()

					if(b.PRD.B.attack) {

						__.each(b.PRD.B.attack, function(v, k) {

							if(rng < (v.change / 100)) {

								v.change = v.originalChange

								damage = v.logic(damage, unitB, unitA)

							} else {

								v.change += (v.originalChange / 2)

							}

						})

					}

					if(b.PRD.A.attacked) {

						__.each(b.PRD.A.attacked, function(v, k) {

							if(rng < (v.change / 100)) {

								v.change = v.originalChange

								damage = v.logic(damage, unitB, unitA)

							} else {

								v.change += (v.originalChange / 2)

							}

						})

					}

					if(aArmor > 0) {

						damage -= (0.06 * aArmor) / (1 + 0.06 * aArmor)

					}

					console.log('b attack a', damage)

					aHealth -= damage

					if(aHealth < 0) {

						console.log('unit b menang')
						clearInterval(b.intervalAttack[aAttack])
						clearInterval(b.intervalAttack[bAttack])
					}

				}, attackTimeB)

			}

			battle.start = function() {

				b.getAllChangeItemAndSkills()

				b.createIntervaAttack()

			}

			return battle

		}

		return _pub

	}

})