$(document).ready(function () {

})

$(function () {
    console.log('Hello World!')
})


var middle = Math.ceil(('ul li').length / 2); // vratie prirodan broj, ne indeks. Ako koristimo kao index moramo oduzeti 1!!
$('li.first').css("border-bottom", "3px solid black");
$('li').css('text-transform', 'uppercase');
$('li.active').css('color', 'red');
$('ul li').eq(middle - 1).css('background-color', 'purple');
// $('li:eq(2)').css('background-color', 'purple');