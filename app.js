var funbottles = require('./bottle.js');

const arrayRed = [2,2,3,8,1,6];
const arrayBlue = [3,5,8,3,6,2];

const res = funbottles.Bottles(arrayRed, arrayBlue);
funbottles.getBottles(res);

/*Асимптотический анализ алгоритма Bottles
* 8*f(n^2)
*/