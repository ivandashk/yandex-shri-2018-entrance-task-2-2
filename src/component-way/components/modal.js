import Component from"./component-base"
import { mount, unmount } from "../DOM-helper"
import ModalContent from "./modal-content"

export default class Modal extends Component {
    constructor(props, overlayId) {
        super();
        
        this.overlayId = overlayId;
        this.state = {
            header: props.header,
            status: props.status,
            indicator: props.indicator,
            controlType: props.controlType,
            data: props.data
        }
    }

    render() {
        this.toggleBlurOnOverlay();

        return `
        <div id="${this._id}" class="modal-layout">
            <div class="modal-form">
            <div class="modal-form__content content">
                <h1 class="content__header">${this.state.header}</h1>
                <div class="content__status">${this.state.status}</div>
                <div class="content__indicator ${this.getIndicatorStyle()}">
                    ${this.state.indicator}
                </div>
                <div class="content__control">
                    ${ new ModalContent(this.state.data).render() }
                </div>
            </div>
            <div class="modal-form__button modal-form__button_apply" onclick="document.componentRegistry[${this._id}].close()">
                Применить
            </div>
            <div class="modal-form__button" onclick="document.componentRegistry[${this._id}].close()">
                Закрыть
            </div>
            </div>
        </div>`;
    }

    getIndicatorStyle() {
        switch (this.state.data.measurement){
            case ("temprature"):
                return "content__indicator_temprature-on";
            case ("light"):
                return "content__indicator_light-off";
            default:
                return "";
        }
    }

    toggleBlurOnOverlay() {
        const overlay = document.getElementById(this.overlayId);
        const blurClass = 'main-page_blurred';
        overlay.classList.contains(blurClass) 
            ? overlay.classList.remove(blurClass)
            : overlay.classList.add(blurClass);
    }

    close() {
        unmount(this._id);
        this.toggleBlurOnOverlay();
    }
}