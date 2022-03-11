function addLogoButton() {
    "use strict";
    let logo = document.querySelector(".logo");
    logo.addEventListener("click", function() {
        this.setAttribute("style", "color: red");
        this.classList.add("clicked");
        setTimeout(function(logo) {
            logo.setAttribute("style", "");
            logo.classList.remove("clicked");
        }.bind(null, this), 1000);
    });
}

function addDetailText() {
    let exampleArr = Array.from(document.querySelectorAll(".example"));
    exampleArr.forEach(function(example) {
        example.addEventListener("click", function () {
            let text = this.querySelector('.detail-text');
            text.classList.toggle("active");
        });
    });
}

function initialize() {
    "use strict";
    addLogoButton();
    addDetailText();
}

initialize();