// Selecting
var secondList = document.getElementById('second');

function backgroundchange() {
    secondList.className = 'second-list';
}
backgroundchange();



function listChange() {
    var liss = document.querySelectorAll('li');

    for (var i = 0; i < liss.length; i++) {
        liss[i].className = 'new-class';
    }
}
listChange();

function newListChange() {
    var newlist = document.querySelectorAll('#third li');

    for (var i = 0; i < newlist.length; i++) {
        newlist[i].className = 'third-class';
    }
}
newListChange();

// Traversing

function changeLiProperties() {
    var activeLi = document.querySelector('.active');
    activeLi.className = '';
    var nn = activeLi.parentElement;
    var mm = nn.parentElement;
    var ee = mm.previousElementSibling;
    var ww = ee.firstElementChild;
    var tt = ww.firstElementChild;
    tt.classList = 'active'

}
changeLiProperties();