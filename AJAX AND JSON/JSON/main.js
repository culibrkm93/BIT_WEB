var btn = document.querySelector('.btn');
var $body = document.querySelector('body');
var $div = document.querySelector('.divic');



function handler(e) {
    var imgRequest = new XMLHttpRequest();
    imgRequest.open('GET', 'https://dog.ceo/api/breeds/image/random');
    imgRequest.send();
    imgRequest.onload = function () {
        var data = JSON.parse(imgRequest.responseText);
        $div.innerHTML = '';

        var imgURL = data.message;
        var newImg = document.createElement('img');
        newImg.setAttribute('src', imgURL);
        $div.append(newImg);
    }

}


btn.addEventListener('click', handler);