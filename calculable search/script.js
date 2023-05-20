const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
    "Apple",
    "Apricot",
    "Avocado",
    "Banana",
    "Blackberry",
    "Blueberry",
    "Boysenberry",
    "Cantaloupe",
    "Cherry",
    "Clementine",
    "Coconut",
    "Cranberry",
    "Currant",
    "Date",
    "Dragonfruit",
    "Durian",
    "Elderberry",
    "Feijoa",
    "Fig",
    "Grape",
    "Grapefruit",
    "Guava",
    "Honeydew",
    "Jackfruit",
    "Jujube",
    "Kiwi",
    "Kumquat",
    "Lemon",
    "Lime",
    "Lychee",
    "Mango",
    "Mangosteen",
    "Mulberry",
    "Nectarine",
    "Orange",
    "Papaya",
    "Passionfruit",
    "Peach",
    "Pear",
    "Persimmon",
    "Pineapple",
    "Plum",
    "Pomegranate",
    "Raspberry",
    "Redcurrant",
    "Strawberry",
    "Tangerine",
    "Watermelon",
    "Açaí",
    "Acerola",
    "Ackee",
    "Akebia",
    "Almond",
    "Ambarella",
    "Annona",
    "Appleberry",
    "Apricot",
    "Arhat",
    "Bael",
    "Balsam apple",
    "Barbadine",
    "Barberry",
    "Barbados cherry",
    "Bilberry",
    "Bitter melon",
    "Black apple",
    "Black mulberry",
    "Black raspberry",
    "Blackcurrant",
    "Blood orange",
    "Breadfruit",
    "Bunya nut",
    "Cacao",
    "Calamansi",
    "Canary melon",
    "Cantaloupe",
    "Cape gooseberry",
    "Carambola",
    "Cashew apple",
    "Chayote",
    "Che",
    "Chempedak",
    "Cherimoya",
    "Chestnut",
    "Chokeberry",
    "Chokecherry",
    "Cloudberry",
    "Coco plum",
    "Cornelian cherry",
    "Cranberry",
    "Crowberry",
    "Cucumber",
    "Custard apple",
    "Damson",
    "Date palm",
    "Dewberry",
    "Diospyros",
    "Duku",
    "Durian",
    "Eggfruit",
    "Elderberry",
    "Emu apple",
    "Entawak",
    "Farkleberry",
    "Finger lime",
    "Forest berry",
    "Fox grape",
    "Genip",
    "Goji berry",
    "Gooseberry",
    "Granadilla",
    "Grapefruit",
    "Grumichama",
    "Guanabana",
    "Guarana",
    "Guava",
    "Hackberry",
    "Hala fruit",
    "Hawthorn",
    "Hog plum",
    "Honeyberry",
    "Honeydew",
    "Horned melon",
    "Huckleberry",
    "Ice apple",
    "Ice cream bean",
    "Imbe",
    "Indian almond",
    "Indian fig",
    "Indian gooseberry"]

	function search(str) {
		let results = [];
		let lowerCaseStr = str.toLowerCase();
		fruit.forEach((element) => {
			let lowerCaseElement = element.toLowerCase();
			if (lowerCaseElement.includes(lowerCaseStr)) {
				results.push(element);
			}
		})
		return results;
	}
	
	function searchHandler(e) {
		let userSearch = e.target.value;
		let searchResults = search(userSearch);
		showSuggestions(searchResults, userSearch);
	}
	
	function showSuggestions(results, inputVal) {
		if (results.length === 0) {
			suggestions.parentElement.classList.add("hidden");
		}
		else {
			suggestions.parentElement.classList.remove("hidden");
		}
	
		suggestions.innerHTML = "";
	
		results.forEach((fruit) => {
			const lowerCaseFruit = fruit.toLowerCase();
			const index = lowerCaseFruit.indexOf(inputVal);
	
			if (index !== -1) {
				const li  = document.createElement("li")
				const boldSection = "<strong>" + lowerCaseFruit.slice(index, index + inputVal.length) + "</strong>"
				li.innerHTML = lowerCaseFruit.slice(0,index) + boldSection + lowerCaseFruit.slice(index + inputVal.length);
				suggestions.append(li);
			}
		})
	}
	
	function useSuggestion(e) {
		if (e.target.tagName === "LI") {
			input.value = e.target.innerText;
			suggestions.innerHTML = "";
			suggestions.parentElement.classList.add("hidden");
		}
	}
	
	input.addEventListener('keyup', searchHandler);
	suggestions.addEventListener('click', useSuggestion);