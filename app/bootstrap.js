/* 
* @Author: ahmadzuhdi
* @Date:   2015-02-11 22:06:02
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-03-08 13:50:55
*/

'use strict';

define(['app/controller/dota/items.js', 'app/controller/dota/heroes.js'], function(items, heroes) {

	heroes.getHero('alchemist', function(err, heroAlchemist) {

		if(err){

			console.log(err)

			return false
		}

		console.log(heroAlchemist.getAttribute())

		heroAlchemist.addItem(1, 'claymore', function(err) {

			if(err) {

				console.log(err)

				return false

			}

			console.log(heroAlchemist.getAttribute())

		})
	})


})