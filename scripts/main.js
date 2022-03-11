function addLogoButton() {
    "use strict";
    let logo = document.querySelector(".logo");
    console.log(logo);
    logo.addEventListener("click", function() {
        console.log("clicked logo");
        this.classList.add("clicked");
        console.log(this);
        setTimeout(function(logo) {
            logo.classList.remove("clicked");
            console.log(logo);
        }.bind(null, this), 1000);
    });
}

function initialize() {
    "use strict";
    addLogoButton();
}

initialize();