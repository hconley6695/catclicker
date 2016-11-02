(function () {
	var num = 0;
	
	document.getElementById('click-img').addEventListener('click', catClick);

	function catClick() {
		// alert('You clicked a cat.');
		num++;
		document.getElementById('click-number').innerHTML = num;
	}



})();