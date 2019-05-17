
// var bgButton = document.querySelector('button');
// var buttonParent = bgButton.parentElement;

// function addClassToParent() {

//     return buttonParent.classList.toggle('change');

// }

// function cancelChange() {
//     return bgButton.removeAttribute('onclick');

// }

// probaj da napravis sa jednom funkcijom ako imas var koja prikazuje stanje true ili false za stanje


var sendButton = document.querySelector('.button');
var inputMessage = document.querySelector('.chat-line');
var messageArea = inputMessage.previousElementSibling;

function setAttr() {
    sendButton.onclick = function () {

        var newChildElement = document.createElement('div');
        var newChildElementSpan = document.createElement('span');
        newChildElement.appendChild(newChildElementSpan);
        newChildElementSpan.textContent = inputMessage.value;

        messageArea.appendChild(newChildElement);

        inputMessage.value = ' ';
    }
}
setAttr();