$(function () {

});


$('body').prepend('<div></div>');
var gallery = $('div');
gallery.addClass('box');
gallery.prepend('<span> </span>');
var span = $('div span');
span.addClass('first');
$('.first').css({
    'position': 'relative',
    'display': 'block',
    'width': '350px',
    'height': '350px',
    'background-color': 'red'
});

