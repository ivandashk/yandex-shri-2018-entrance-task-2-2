const presetsItems = document.getElementsByClassName('presets__item');
const presets = document.getElementsByClassName('presets');

for (let i = 0; i < presets.length; i++) {
    presets[i].children[0].classList.toggle('presets__item_active');
}

for (let i = 0; i < presetsItems.length; i++) {
    presetsItems[i].addEventListener('click', (e) => {
        for (let j = 0; j < e.target.parentNode.children.length; j++) {
            e.target.parentNode.children[j].classList.remove('presets__item_active');
        }
        e.target.classList.toggle('presets__item_active');
    })
}