(function () {

    var imgRequest = new XMLHttpRequest();
    imgRequest.open('GET', 'https://dog.ceo/api/breeds/image/random');
    imgRequest.send();

    imgRequest.onload = function () {
        var data = JSON.parse(imgRequest.responseText);
        console.log(data);
    }






})();

