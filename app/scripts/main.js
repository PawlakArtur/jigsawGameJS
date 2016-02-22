var noNr = 9;
setNumbers();
moveBlock();

function setNumbers(){
	var number = 0;
	var numbers = [];
	for(var i = 0; i < 8; i++){
		number = Math.floor((Math.random() * 9) + 1);
		if(numbers[number] === undefined){

		}
	}

	[].forEach.call(numbers, function(nr){
		console.log(nr);
	});
}

function moveBlock(){
	var el = document.getElementsByClassName("field");
	var i = 1;
	var tmp 
	[].forEach.call(el, function(field){
		field.addEventListener("click", (function(position){
			return function(){
				checkNumber(position);
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
			//console.log("+1: " + one);
			result.push(one);
		}
	}
	if(two > 0 && two < 10){
		//console.log("+3: " + two);
		result.push(two);
	}

	if(i % 3 === 0 && i < 9){
		tmp = i + 1;
	}

	if(three > 0 && three < 10){
		if(i === tmp){

		}else{
			//console.log("-1: " + three);
			result.push(three);
		}
	}

	if(four > 0 && four < 10){
		//console.log("+3 : " + four);
		result.push(four);
	}
	
	console.log("puste pole: " + noNr);
	var el = document.getElementsByClassName("id" + arg);
	var el2 = document.getElementsByClassName("id" + noNr);
	var m = [];
	var pozycja = 0;
	for(var il = 0; il <= result.length; il++){
		m[il] = result[il] - arg;	
	}
	for(var jk = 0; jk <= m.length; jk++){
		if(m[jk] === 1 && noNr === (arg + 1)){
			// el[0].style.left = 109 + "px";
			pozycja = (el[0].offsetLeft - 1);
			el[0].style.left = pozycja + 53 + "px";
			console.log("ruszam w prawo");
			setTimeout(function()
			{ 
				el[0].style.display = "none";
				el2[0].style.display = "inline-block";
				el2[0].innerHTML = el[0].innerHTML;
				el[0].style.left = pozycja + "px";
				el[0].innerHTML = "";
			}, 301);
			
			// el[0].classList.add("id" + noNr);
			// el[0].classList.remove("id" + arg);
			noNr = arg;
			console.log("puste pole: " + noNr);
		}else if(m[jk] === -1 && noNr === (arg - 1)){
			// el[0].style.left = 3 + "px";
			pozycja = (el[0].offsetLeft - 1);
			el[0].style.left = pozycja - 53 + "px";
			console.log("ruszam w lewo");
			setTimeout(function()
			{ 
				el[0].style.display = "none";
				el2[0].style.display = "inline-block";
				el2[0].innerHTML = el[0].innerHTML;
				el[0].style.left = pozycja + "px";
				el[0].innerHTML = "";
			}, 301);

			// el[0].classList.add("id" + noNr);
			// el[0].classList.remove("id" + arg);
			noNr = arg;
			console.log("puste pole: " + noNr);
		}else if(m[jk] === 3 && noNr === (arg + 3)){
			// el[0].style.top = 109 + "px";
			pozycja = (el[0].offsetTop - 1);
			el[0].style.top = pozycja + 53 + "px";
			console.log("ruszam w dół");
			setTimeout(function()
			{ 
				el[0].style.display = "none";
				el2[0].style.display = "inline-block";
				el2[0].innerHTML = el[0].innerHTML;
				el[0].style.top = pozycja + "px";
				el[0].innerHTML = "";
			}, 301);

			// el[0].classList.add("id" + noNr);
			// el[0].classList.remove("id" + arg);
			noNr = arg;
			console.log("puste pole: " + noNr);
		}else if(m[jk] === -3 && noNr === (arg - 3)){
			// el[0].style.top = 3 + "px";
			pozycja = (el[0].offsetTop - 1);
			el[0].style.top = pozycja - 53 + "px";
			console.log("ruszam w górę");
			setTimeout(function()
			{ 
				el[0].style.display = "none";
				el2[0].style.display = "inline-block";
				el2[0].innerHTML = el[0].innerHTML;
				el[0].style.top = pozycja + "px";
				el[0].innerHTML = "";
			}, 301);

			// el[0].classList.add("id" + noNr);
			// el[0].classList.remove("id" + arg);
			noNr = arg;
			console.log("puste pole: " + noNr);
		}
	}
}

function check(){
	var el = document.getElementsByClassName("field");
	var tab = ["1", "2", "3", "4", "5", "6", "7", "8"];
	var tmp = [];
	for(var i = 0; i < 8; i++){
		tmp[i] = el[i].innerHTML;
	}
	if(tab.toString() === tmp.toString()){
		alert("Wygrana");
		console.log("równe");
	}else{
		console.log("nierówne");
	}
	// if(flag === true){
	// 	console.log("Wygrałeś!");
	// 	alert("Wygrałeś!");
	// }else if(flag === false){
	// 	console.log("Przegrałeś!");
	// }
}