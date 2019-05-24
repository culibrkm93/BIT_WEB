// var field = document.querySelector('div');
// var player = document.querySelector('#image-player');
// var stopmove = document.querySelector('#stop-moving');

// function movingPlayer(event) {

// player.style.top = event.clientY + "px";
// player.style.left = event.clientX + "px";

// }
// field.addEventListener("click", movingPlayer);




// function stopMoving() {
//     player.style.top = "0px";
//     player.style.left = "0px";
//     field.removeEventListener("click", movingPlayer);

// }

// stopmove.addEventListener('click', stopMoving);




var field = $('div.football-field');
var player = $("img#image-player")
var stopmove = $('input#stop-moving');

$(field).on('mousemove', function (event) {
    $(player).css('top', event.clientY + 'px');
    $(player).css('left', event.clientX + 'px');
});


$(stopmove).on('click', function (event) {
    $(player).css('top', '0px');
    $(player).css('left', '0px');
    $(field).off('mousemove');

});