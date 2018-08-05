const mainPageContainer = document.getElementById("main-page");
let openedModal;

const registerModalOpeners = () => {
    const modalOpeners = document.getElementsByClassName("open-modal");
    for (let i = 0; i < modalOpeners.length; i++) {
        modalOpeners[i].addEventListener("click", openModal)
    }
}

const openModal = (e) => {
    let initiator = e.target;
    let deviceName;
    do {
        deviceName = initiator.getAttribute('device');
        initiator = initiator.parentElement
        if (!initiator) return;
    } while (!deviceName);

    const deviceId = getDeviceId(deviceName);
    if (!deviceId) return;

    openedModal = document.getElementById(deviceId);
    openedModal.classList.toggle("modal-form__layout_visible");
    mainPageContainer.classList.toggle("main-page_blurred");
}

const getDeviceId = (deviceName) => {
    switch (deviceName) {
        case 'Xiaomi Yeelight LED Smart Bulb':
            return 'xiaomi-yeelight';
        case 'Elgato Eve Degree Connected':
            return 'elgato-eve';
        case 'Xiaomi Warm Floor':
            return 'xiaomi-floor';
        default:
            return;
    }
}

const registerModalClosers = () => {
    const modalClosers = document.getElementsByClassName("modal-form__button");
    for (let i = 0; i < modalClosers.length; i++) {
        modalClosers[i].addEventListener("click", function() {
            openedModal.classList.toggle("modal-form__layout_visible");
            mainPageContainer.classList.toggle("main-page_blurred");
        })
    }
}

registerModalOpeners();
registerModalClosers();