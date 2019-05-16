// function printMessage() {
//     var message = document.querySelector('li').firstChild.nodeValue
//     alert(message);
// }
// printMessage();
// function replaceText(a) {
//     var textToReplace = document.querySelector('ul').lastElementChild.textContent = a;
//     return textToReplace;
// }

// console.log(replaceText('Menu'));

// var forDeleting = document.querySelector('ul').firstChild;
// var parentEl = forDeleting.parentElement;
// parentEl.removeChild(forDeleting);


// var parentEl = document.getElementsByTagName('body');

var typeOfCars = ['Volvo', 'Saab', 'Mercedes'];

var parentOfDivs = document.querySelector('body');

var firstDivOnPage = document.createElement('div');
parentOfDivs.prepend(firstDivOnPage);

var lastDivOnPage = firstDivOnPage.('div');

// function createNew(cars, parent) {
//     var dropdown = document.createElement('select');

//     for (i = 0; i < array.length; i++) {
//         var str = '';
//         str += document.createTextNode(array[i]);
//         var text = document.createElement('option');
//         dropdown.appendChild(text);
//         text.createTextNode = str;


//     }
//     console.log(dropdown);
// }
// createNew(typeOfCars);


// var parentEl = document.getElementsByTagName('body');
// function createNew() {
//     var newSelectEl = parentEl.createElement('select')
//     newSelectEl = newSelectEl.createElement()
// }



{/* <select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */}