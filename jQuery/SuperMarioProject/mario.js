var background = document.querySelector('div');
var marioStatic = document.querySelector('#staticmario');
var marioDinamic = document.querySelector('#movingmario');


marioDinamic.addEventListener('moveRight');

function moveRight(event) {
    marioDinamic.style.visibility = "visible";
    background.style.animation = "moveDinamic 9s linear infinite";

}



function stop(event) {
    marioStatic.style.visibility = "hidden";
}





function keyBoard(event) {
    if (event.keyCode === 39) {
        moveRight();
    } else {
        (event.keyCode === 40)
        stop();

    }
}







