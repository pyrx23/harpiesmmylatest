console.log("file seen");

let toggleButton: HTMLElement;
let harpie_modal: HTMLElement;

document.addEventListener("DOMContentLoaded", () => {
  toggleButton = document.getElementById("toggleModal") as HTMLElement;

  harpie_modal = document.getElementById("connect-modal") as HTMLElement;
  toggleButton.addEventListener("click", () => {
    console.log("button clickeddd");
    // harpie_modal.style.visibility = "visible";
  });
});
