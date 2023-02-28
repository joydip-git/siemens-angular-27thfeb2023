import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-calculation',
    templateUrl: './calculation.component.html',
    styleUrls: ['./calculation.component.css']
})
export class CalculationComponent {
    result = 0
    choice = 2
    calcForm = new FormGroup({
        add: new FormControl(1),
        subtract: new FormControl(2),
        multiply: new FormControl(3),
        divide: new FormControl(4),
        first: new FormControl(0),
        second: new FormControl(0)
    })
    setChoice(_choice: number) {
        this.choice = _choice
    }
    get first() {
        return this.calcForm.get('first')
    }
    get second() {
        return this.calcForm.get('second')
    }
    calculate() {
        const firstValue = Number(this.first?.value)
        const secondValue = Number(this.second?.value)

        switch (this.choice) {
            case 1:
                this.result = firstValue + secondValue
                break;
            case 2:
                this.result = firstValue - secondValue
                break;
            case 3:
                this.result = firstValue * secondValue
                break;
            case 4:
                this.result = firstValue / secondValue
                break;
            default:
                break;
        }
    }
}