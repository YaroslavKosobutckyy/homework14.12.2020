// 1. Напишіть функцію, що повертає куб числа.
let digitNumber = prompt('input ');
function numberToPowerThree(i) {
	return(i * i * i);
}
console.log(numberToPowerThree(digitNumber));

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

let digitNumber = prompt('input 3 numbers');
	let digitNumber1_1 = Number(digitNumber[0]);
	let digitNumber2_2 = Number(digitNumber[1]);
	let digitNumber3_3 = Number(digitNumber[2]);

if ( digitNumber1_1 !== null || digitNumber2_2 !== null || digitNumber3_3 !== null || digitNumber1_1 !== undefined || 
	digitNumber2_2 !== undefined || digitNumber3_3 !== undefined)
{ 
			function numberTo(digitNumber1,digitNumber2,digitNumber3) {
				return((digitNumber1 + digitNumber2) / digitNumber3);
			}

		console.log(numberTo(digitNumber1_1,digitNumber2_2,digitNumber3_3));
} else console.log('incorect data');

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

// В мене питання, не можу зрозуміти. Що за undefined виводиться консолькою в кінці завжди? Все ж працює і результат 
// виводиться правильно.


// dz.js:16 Thusday
// dz.js:37 undefined

let day = prompt("Input number day of the week");
 day = Number(day);
 
function dayToday(i) {
  let days;
                switch(i) {
					  case 1:
					    days = console.log('Sunday');
					    break;
                      case 2:
                        days = console.log('Monday');
					    break;
					  case 3:
					    days = console.log('Thusday');
					    break;
					  case 4:
					    days = console.log('Wednesday');
					    break;
					  case 5:
			            days = console.log('Thursday');
			            break;
			          case 6:
					    days = console.log('Friday');
					    break;
					  case 7:
					    days = console.log('Seturday');
					    break;
					  default:
					    days = console.log("Incorect data. There is seven days of the week");
					    break;
				}
				return(days);
 }

		console.log(dayToday(day));


// 4. Реалізуйте функцію знаходження факторіала

let factorial = prompt("Input factorial digit");
factorial = Number(factorial);

function functFuctorial(i) {
	let suma = 1;
	for (let j = 1; j <= i; j++) {
		suma = suma * j;
	}
	return (suma);
}

console.log(functFuctorial(factorial));

// 5. Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

let time = prompt("Input time");
let times = time.split(".");
let HH = Number(times[0]);
let MM = Number(times[1]);
let SS = Number(times[2]);

function timeSeconds(h,m,s) {
  return(s + m * 60 + h * 3600);
}


if ( HH !== null &&  HH !== undefined && HH > 0 && MM !== null &&  MM !== undefined && MM > 0
 && SS !== null &&  SS !== undefined && SS > 0) { 

console.log(timeSeconds(HH,MM,SS));
}
  else {console.log("incorrect data")}



// 6.Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс».
 // якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 


 // в мене рахує ще дні, трохи модифікував завдання

let sss = Number(prompt("Input seconds"));
 
 function Secundochky(s)
{
 let days = 0;
 let day = '';
 if (s >= 86399) { days = Math.floor(s / 86400);
 	               s = s - days * 86400;
 	               day = String(days); 
 	               if (days >= 1) { day = "Plus " + day + ' day';} else { day = "Plus " + day + ' days';}
 	              } 

 	let hh = 0;
 	let mm = 0;
 	let ss = 0;
 	
 if (s <= 86399)
		   {
		 	 if (s >= 3600) {
		 	 	              hh = Math.floor(s / 3600);
		 	 	              s = s - hh * 3600;
		 	 	            } 
		 	 if (s < 3600) {
		 	 				 mm = Math.floor(s / 60);
		 	 				 s = s - mm * 60;
		 	 				}
		 	
		 	ss = s; 
		   }
   		
 	return (hh + ':' + mm + ':' + ss + ' /// ' + day);
 }

if ( sss !== null &&  sss !== undefined && sss > 0) { 

 console.log(Secundochky(sss));
}
  else {console.log("incorrect data")}



// або так, як варіант такий як в завданні

let sss = Number(prompt("Input seconds"));

 function Secundochky(s)
{
 	let hh = 0;
 	let mm = 0;
 	let ss = 0;
 	let day = '';
 if (s <= 86399)
		   {
		 	 if (s >= 3600) {
		 	 	              hh = Math.floor(s / 3600);
		 	 	              s = s - hh * 3600;
		 	 	            } 
		 	 if (s < 3600) {
		 	 				 mm = Math.floor(s / 60);
		 	 				 s = s - mm * 60;
		 	 				}
		 	
		 	ss = s; 
		   }
   else {day = 'More than one day'
		}
 	

 	return (hh + ':' + mm + ':' + ss + day);
 }

 if ( sss !== null &&  sss !== undefined && sss > 0) { 

 console.log(Secundochky(sss));
}
  else {console.log("incorrect data")}
