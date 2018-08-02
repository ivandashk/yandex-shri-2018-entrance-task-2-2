const mainPageContainer = document.getElementById("main-page");
const tempratureSliderModal = document.getElementById("temprature-slider-modal");

const openTempratureModal = () => {
    tempratureSliderModal.style.display = "grid";
    mainPageContainer.classList.add("main-page_blurred");
}

const closeTempratureModal = () => {
    tempratureSliderModal.style.display = "none";
    mainPageContainer.classList.remove("main-page_blurred");
}