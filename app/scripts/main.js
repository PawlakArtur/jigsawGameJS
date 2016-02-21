function moveBlock(){
	var el = document.getElementsByClassName("field");
	var i = 1;
	var tmp 
	[].forEach.call(el, function(field){
		field.addEventListener("mouseenter", (function(position){
			return function(){
				checkNumber(position);
				console.log("hi " + position);
			}
		})(i));
		i++;
	});
}

function checkNumber(arg){
	console.log("numer " + arg);
	var result = [];
	var i = arg;
	var one = i + 1;
	var two = i + 3;
	var three = i - 1;
	var four = i -3;
	var tmp = 0;
	if(one > 0 && one < 10){
		if(i % 3 === 0 && i < 9){

		}else{
			console.log("+1: " + one);
			result.push(one);
		}
	}
	if(two > 0 && two < 10){
		console.log("+3: " + two);
		result.push(two);
	}

	if(i % 3 === 0 && i < 9){
		tmp = i + 1;
	}

	if(three > 0 && three < 10){
		if(i === tmp){

		}else{
			console.log("-1: " + three);
			result.push(three);
		}
	}

	if(four > 0 && four < 10){
		console.log("+3 : " + four);
		result.push(four);
	}
}

moveBlock();
// check();

// function check(){
// 	var i = 1;
// 	var j = 1;
// 	var k = 1;
// 	var l = 1;
// 	var wyniki = 0;
// 	var wynikj = 0;
// 	var wynikk = 0;
// 	var wynikl = 0;
// 	var tmp = 0;
// 	for(var a = 0; a < 9; a++){
// 		if(i % 3 === 0 && i < 9){
// 			wyniki = 0;
// 		} else{
// 			wyniki = i + 1;
// 		}
// 		wyniki = i + 1;
// 		wynikj = j + 3;
// 		if(wyniki < 10){
// 			if(i % 3 === 0 && i < 9){

// 			}else{
// 				console.log("'+1' " + i + " " + wyniki);
// 			}
// 		}
// 		if(wynikj < 10){
// 			console.log("'+3' " + j + " " + wynikj);
// 		}
// 		i++;
// 		j++;

// 		wynikk = k - 1;
// 		wynikl = l - 3;

// 		if(k % 3 === 0 && k < 9){
// 			tmp = k + 1;
// 		}
// 		if(wynikk > 0){
// 			if(k === tmp){

// 			}else{
// 				console.log("'-1' " + k + " " + wynikk);
// 			}
// 		}
// 		if(wynikl > 0){
// 			console.log("'-3' " + l + " " + wynikl);
// 		}
// 		k++;
// 		l++;
// 	}
// }