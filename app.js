
	
// this is the Model - it's an object
	var data = {
		firstCat: null,
		cats: [
			{
			catName: 'Stripey',
			clickCt: 0,
			image: 'catpic.jpg'
			},
			{
			catName: 'Shy Cat',
			clickCt: 0,
			image: 'catpic2.jpg'
			},
			{
			catName: 'Twins',
			clickCt: 0,
			image: 'twins.jpeg'
			}],

		}

	var octopus = {

		init: function() {
			// on page load, use first cat on list
			data.firstCat = data.cats[0];

			// need views
			singleCat.init();
			listOfCats.init();
		},

		getCurrentCat: function() {
			return data.firstCat;
		},

		getListCats: function() {
			return data.cats;
		},

		setCurrentCat: function(cat) {
			data.firstCat = cat;
		},

		addClicks: function() {
			data.firstCat.clickCt++;
			catView.render();
		}
	}

	// VIEWS

	var singleCat = {
		init: function() {
			this.cat = document.getElementById('cat');
			this.catImg = document.getElementById('cat-pic');
			this.catNamer = document.getElementById('cat-name');
			this.counter = document.getElementById('cat-count');

			this.catImg.addEventListener('click', function() {
				octopus.addClicks();
			});

			this.render();
		},

		render: function() {
			var currentCat = octopus.getCurrentCat();

			this.counter.textContent = currentCat.clickCt;
			this.catImg.src = currentCat.image;
			this.catNamer.textContent = currentCat.catName;
		}
	}


	var listOfCats = {
		init:function() {
			this.listCats = document.getElementById('cat-list');

			this.render();
		},
		render: function() {
			var cat, liElem, i;
			var catList = octopus.getListCats();

			this.listCats.innerHTML = '';

			cats.forEach(function (cat) {
				liElem = document.createElement('li');

				liElem.textContent = cat.catName;

				liElem.addEventListener('click', function(animal) {
					return function() {
						octopus.setCurrentCat();
						singleCat.render();
					}
				});

				this.listCats.appendChild(liElem);
			})
		}
	}

octopus.init();


