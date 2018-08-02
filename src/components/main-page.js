import Component from"./component-base"
import Modal from "./modal"
import devices from "../devices"
import { mount } from "../DOM-helper"

export default class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return `
        <div id="${this._id}" class="main-page">
            <button 
                onclick="document.componentRegistry[${this._id}]
                    .createModal('Elgato Eve Degree Connected')">
                Temprature
            </button>
            <button 
                onclick="document.componentRegistry[${this._id}]
                    .createModal('Xiaomi Yeelight LED Smart Bulb')">
                Light
            </button>
        </div>
        `;
    }

    createModal(device) {
        mount(new Modal(devices[device], this._id), 
            document.getElementById('body'));
    }
}