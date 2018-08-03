const mainPageContainer = document.getElementById("main-page");
const modalOpeners = document.getElementsByClassName("open-modal");
const modalClosers = document.getElementsByClassName("modal-form__button");

let openedModal;

for (let i = 0; i < modalOpeners.length; i++) {
    modalOpeners[i].onclick = (e) => {
        let deviceId = e.target.getAttribute('device');
        openedModal = document.getElementById(deviceId);
        openedModal.style.display = "grid";
        mainPageContainer.classList.add("main-page_blurred");
    }
}

for (let i = 0; i < modalClosers.length; i++) {
    modalClosers[i].onclick = () => {
        openedModal.style.display = "none";
        mainPageContainer.classList.remove("main-page_blurred");
    }
}
