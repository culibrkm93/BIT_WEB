
$("body").prepend('<div><a href=""><img src="./img/cute1.jpg" alt="" id="first"></a><a href=""><img src="./img/cute2.jpg" alt=""></a><a href=""><img src="./img/cute3.jpg" alt=""></a></div>');
$("body").prepend("<h1>This is our gallery</h1>");
var imgLinks = ['./img.cute1.jpg', './img.cute2.jpg', './img.cute3.jpg'];

$("img").each(function () {
    $(this).css({
        "width": 500 * Math.random() + "px",
        "height": 300 * Math.random() + "px"
    })
    if ($(this).width() < 200 || $(this).height() < 200) {
        $(this).css('border', '2px solid green');
    }
});

var selImg = $('div a img#first')

$("body").append("<h1>This is our second gallery</h1>");
$("body").append('<div><a href=""><img src="./img/bird-1045954_960_720.jpg" alt=""></a><a href=""><img src="./img/kingfisher-2046453_960_720.jpg" alt=""></a><a href=""><img src="./img/spring-bird-2295434_960_720.jpg" alt=""></a></div>');
var imgLinks = ['./img/bird-1045954_960_720.jpg', './img/kingfisher-2046453_960_720.jpg', './img/spring-bird-2295434_960_720.jpg'];

$("img").each(function () {
    $(this).css({
        "width": 200 + "px",
        "height": 200 + "px"
    })
    if ($(this).width() < 200 || $(this).height() < 200) {
        $(this).css('border', '2px solid red');
    }
});
