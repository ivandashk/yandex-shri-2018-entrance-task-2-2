"use strict";
// Combobox (Появляется в секции "Избранные устройства" в мобильной версии)

const replaceSelectElementsWithCustom = () => {
    let customSelect, i, j, element, customElement;
    customSelect = document.getElementsByClassName("combobox__container");
    for (i = 0; i < customSelect.length; i++) {
        element = customSelect[i].getElementsByTagName("select")[0];
        customElement = document.createElement("div");
        customElement.setAttribute("class", "combobox__selected");
        customElement.innerHTML = element.options[element.selectedIndex].innerHTML;
        customSelect[i].appendChild(customElement);

        const itemsList = document.createElement("div");
        itemsList.setAttribute("class", "combobox__items-list combobox__items-list_hidden");
        for (j = 0; j < element.length; j++) {
            createItems(element, j, itemsList);
        }
        
        customSelect[i].appendChild(itemsList);
        customElement.addEventListener("click", onComboboxClick);
    }
}

const createItems = (element, index, itemsList) => {
    const item = document.createElement("div");
    item.innerHTML = element.options[index].innerHTML;
    item.addEventListener("click", onItemClick);
    itemsList.appendChild(item);
}

function onItemClick () {
    const select = this.parentNode.parentNode.getElementsByTagName("select")[0];
    const selectContainer = this.parentNode.previousSibling;
    
    for (let i = 0; i < select.length; i++) {
        if (select.options[i].innerHTML == this.innerHTML) {
            select.selectedIndex = i;
            selectContainer.innerHTML = this.innerHTML;
            break;
        }
    }
    selectContainer.click();
}

function onComboboxClick(e) {
    e.stopPropagation();
    closeAllComboboxesExceptActive(this);
    this.nextSibling.classList.toggle("combobox__items-list_hidden");
}

const closeAllComboboxesExceptActive = (element) => {
    const items = document.getElementsByClassName("combobox__items-list");
    const selectedItem = document.getElementsByClassName("combobox__selected");
    const currentItemsList = [];
    for (let i = 0; i < selectedItem.length; i++) {
        if (element == selectedItem[i]) {
            currentItemsList.push(i)
        }
    }
    for (let i = 0; i < items.length; i++) {
        if (currentItemsList.indexOf(i)) {
            items[i].classList.add("combobox__items-list_hidden");
        }
    }
}

document.addEventListener("click", closeAllComboboxesExceptActive);
replaceSelectElementsWithCustom();