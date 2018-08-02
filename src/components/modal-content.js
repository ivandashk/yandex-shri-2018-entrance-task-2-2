import Component from"./component-base"

export default class ModalContent extends Component {
    constructor(props) {
        super();
        
        this.state = {
            measurement: props.measurement,
            type: props.type,
            modes: props.modes,
            leftValue: props.leftValue,
            rightValue: props.rightValue
        }
    }

    render() {
        return `
            <ul class="presets">
                ${
                    this.state.modes.map((mode) => { 
                        return `<li class="presets__item">${mode}</li>`
                    }).join('')
                }
            </ul>
            <div class="gradient gradient_temprature">
                <div class="gradient__circle"></div>
                <div class="gradient__value gradient__value_left">
                    ${this.state.leftValue}
                </div>
                <div class="gradient__value gradient__value_right">
                    ${this.state.rightValue}
                </div>
            </div>
            `;
    }
}