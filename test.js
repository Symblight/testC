var assert = require('chai').assert;
var fun = require('./bottle.js').Bottles;
var lodash = require('lodash');

describe('Test of Bottle', function(){

	describe(' run Bottles', function(){
		it('app is run', function(){
			let arrayRed = [2,2,3,8,1,6];
			let arrayBlue = [3,5,8,3,6,2];

			let result = fun(arrayRed, arrayBlue);
			assert.isOk(result, 'everything is ok');
		});
	});

	describe(' result Bottles', function(){
		it('app should return objects', function(){
			let arrayRed = [2,2,3,8,1,6];
			let arrayBlue = [3,5,8,3,6,2];

			let result = fun(arrayRed, arrayBlue);

			assert.isOk(lodash.find(result, {
					'changeBottleR': 'Номер красной бутылки: 0 Емкость: 2',
					'changeBottleB': 'Номер синей бутылки: 0 Емкость: 3',
					'trans': 'Перелито: 2 л.'
				}
			));
			//assert.equal(result, Array(9));
		});
	});

	describe(' result Bottles', function(){
		it('app should return array of objects', function(){
			let arrayRed = [2,2,3,8,1,6];
			let arrayBlue = [3,5,8,3,6,2];

			let result = fun(arrayRed, arrayBlue);
			assert.isOk(result, 'Array');
		});
	});

});