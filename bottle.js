module.exports = {
	Bottles: function(arrR, arrB){
		let resArray = new Array();

		let indexR=0, j=0;
		let changeBottleR = arrR[0]; 
		let changeBottleB = arrB[0];
		let MAX = arrR.length;
		let ostatokB = 0;
		let ostatokR = 0;
		let raznost = 0;

		while(MAX>indexR){
			
			raznost = changeBottleR - changeBottleB;

			if (raznost<0){
				if (changeBottleB<changeBottleR)
						raznost=changeBottleB; else 
					raznost=changeBottleR;
			};

			if (raznost>changeBottleB  || raznost==0) {raznost=changeBottleB; } 


			ostatokR = changeBottleR - raznost; 
			ostatokB = changeBottleB - raznost;
			
			let obj ={
				changeBottleR: 'Номер красной бутылки: '+ indexR + ' Емкость: ' + (changeBottleR),
				changeBottleB: 'Номер синей бутылки: ' + j + ' Емкость: ' + (changeBottleB),
				trans: 'Перелито: ' + raznost + ' л.'
			};
			resArray.push(obj);

			if (ostatokB==0) {j+=1;changeBottleB = arrB[j]; } else {changeBottleB = ostatokB}
			if (ostatokR==0) {indexR+=1; changeBottleR=arrR[indexR];} else {changeBottleR = ostatokR}
		}

		return resArray;
	},

	getBottles: function(resArray){
		for(let index = 0; index<resArray.length; index++){
			console.log(resArray[index]);
		}
	}
};