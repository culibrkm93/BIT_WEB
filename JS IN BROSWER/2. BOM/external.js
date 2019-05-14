// function printOut() {
//     console.log(window.navigator.appCodeName);
//     console.log(window.navigator.appVersion);
//     console.log(window.navigator.vendor);
// }
// printOut();

// function isOnLine() {
//     if (window.navigator.onLine === true) {
//         console.log('online')
//     } else {
//         console.log('offline')
//     }
// }
// isOnLine();

// function resolution() {
//     console.log(window.screen.availHeight);
//     console.log(window.screen.availWidth);
//     console.log(window.screen.height);
// }
// resolution();

// function locationPractice() {
//     console.log(window.location.href = 'https://www.google.com/');
//     console.log(window.location.host);
//     console.log(window.location.protocol);
//     console.log(window.location.search);

// }
// locationPractice();


// function memory(key, value) {
//     localStorage.setItem(key, value);
// }
// memory('Mladen', '28');

// function readMemory() {
//     var data = localStorage.getItem('Mladen');

//     if (data.length) {
//         console.log(localStorage.getItem('Mladen'))
//     } else {
//         console.log("There is no data")
//     }

// }
// readMemory('Mladen');


// function deleted() {
//     localStorage.removeItem('Mladen');

// }
// deleted('Mladen');

var win = window.open('https://www.google.com/')
setTimeout(function () {
    win.close();
}, 2000)
