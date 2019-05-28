(function () {
    // var newXHR = new XMLHttpRequest();

    // newXHR.open('GET', 'http://www.geoplugin.net/xml.gp?ip=82.117.204.106');
    // newXHR.send();

    // newXHR.onload = function () {
    //     // if (newXHR.status === 200) {
    //     //     console.log(newXHR.responseText);
    //     // }
    //     var wholeXML = newXHR.responseXML;
    //     var country = wholeXML.querySelector("geoplugin_countryName").textContent;

    //     var title = document.createElement('h1');
    //     title.textContent = country;

    //     var wholeDOC = document.body;
    //     wholeDOC.appendChild(title);


    // }

    var mainButton = document.querySelector('#button');
    var mainInput = document.querySelector('#input');

    mainButton.addEventListener('click', function () {
        var newXHR = new XMLHttpRequest();
        newXHR.open('GET', 'http://www.geoplugin.net/xml.gp?ip=' + mainInput.value);
        newXHR.send();

        newXHR.onload = function () {
            var wholeXML = newXHR.responseXML;
            var country = wholeXML.querySelector("geoplugin_countryName").textContent;

            var title = document.createElement('h1');
            title.textContent = country;

            var wholeDOC = document.body;
            wholeDOC.appendChild(title);
        }

    })

})();



