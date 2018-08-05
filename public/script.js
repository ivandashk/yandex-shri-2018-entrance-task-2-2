const mainPageContainer = document.getElementById("main-page");
const modalOpeners = document.getElementsByClassName("open-modal");
const modalClosers = document.getElementsByClassName("modal-form__button");

let openedModal;

for (let i = 0; i < modalOpeners.length; i++) {
    modalOpeners[i].onclick = (e) => {
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
