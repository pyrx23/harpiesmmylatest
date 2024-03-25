console.log("file seen");
var toggleButton;
var harpie_modal;
document.addEventListener("DOMContentLoaded", function () {
    toggleButton = document.getElementById("toggleModal");
    harpie_modal = document.getElementById("connect-modal");
    toggleButton.addEventListener("click", function () {
        console.log("button clickeddd");
        // harpie_modal.style.visibility = "visible";
    });
});
