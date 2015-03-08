/* 
* @Author: ahmadzuhdi
* @Date:   2015-02-11 22:06:02
* @Last Modified by:   ahmadzuhdi
* @Last Modified time: 2015-03-08 17:59:33
*/

'use strict';

define(['async', 'app/controller/dota/items.js', 'app/controller/dota/heroes.js', 'app/controller/dota/engine.js'], function(async, items, heroes, engine) {

	var jobs = {}

	jobs.heroAlchemist = function(c) {

		heroes.getHero('alchemist', function(err, heroAlchemist) {

			if(err){

				c(err)

				return false

			}
			
			async.parallel([

				function(_c) {

					heroAlchemist.addItem(1, 'javelin', function(err) {

						if(err) {

							_c(err)

							return false

						}

						_c(null, null)

					})

				},

				function(_c) {

					heroAlchemist.addItem(2, 'platemail', function(err) {

						if(err) {

							_c(err)

							return false

						}

						_c(null, null)

					})

				},

				function(_c) {

					heroAlchemist.addItem(3, 'platemail', function(err) {

						if(err) {

							_c(err)

							return false

						}

						_c(null, null)

					})

				},

				function(_c) {

					heroAlchemist.addItem(4, 'platemail', function(err) {

						if(err) {

							_c(err)

							return false

						}

						_c(null, null)

					})

				}


			], function(err, result){

				if(err) {

					c(err)

					return false

				}

				c(null, heroAlchemist)

			})
			
		})

	}

	jobs.heroAbaddon = function(c) {

		heroes.getHero('abaddon', function(err, heroAbaddon) {

			if(err){

				return false

			}
			
			async.parallel([

				function(_c) {

					heroAbaddon.addItem(1, 'stoutShield', function(err) {

						if(err) {

							_c(err)

							return false

						}

						_c(null, null)

					})

				},

				function(_c) {

					heroAbaddon.addItem(2, 'claymore', function(err) {

						if(err) {

							_c(err)

							return false

						}

						_c(null, null)

					})

				},

				function(_c) {

					heroAbaddon.addItem(3, 'javelin', function(err) {

						if(err) {

							_c(err)

							return false

						}

						_c(null, null)

					})

				}

			], function(err, result){

				if(err) {

					c(err)

					return false

				}

				c(null, heroAbaddon)

			})	

		})

	}

	async.parallel(jobs, function(err, result) {

		if(err) {

			console.log(err)

			return false
		}

		engine.createBattle(result.heroAlchemist, result.heroAbaddon).start()

	})
})