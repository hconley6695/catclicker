(function () {
	var num_one = 0;
	var num_two = 0;
	var name_one, name_two;

	document.getElementById('click-img1').addEventListener('click', catClick);
	document.getElementById('click-img2').addEventListener('click', secondCatClick);

	function catClick() {
		// alert('You clicked a cat.');
		num_one++;
		document.getElementById('click-number1').innerHTML = num_one;
	}

	function secondCatClick() {
		num_two++;
		document.getElementById('click-number2').innerHTML = num_two;
	}



})();