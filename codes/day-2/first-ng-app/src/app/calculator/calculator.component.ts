import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
    choice = 0
    first = 0
    second = 0
    result = 0
    // setFirst(val: string) {
    //     this.first = Number(val)
    // }
    // setSecond(val: string) {
    //     this.second = Number(val)
    // }
    setChoice(_choice: number) {
        this.choice = _choice
    }
    // submit(frm: NgForm) {
    //     console.log(frm.form.value)
    // }
    calculate() {
        const firstVal = Number(this.first)
        const secondVal = Number(this.second)
        switch (this.choice) {
            case 1:
                this.result = firstVal + secondVal
                break;
            case 2:
                this.result = firstVal - secondVal
                break;
            case 3:
                this.result = firstVal * secondVal
                break;
            case 4:
                this.result = firstVal / secondVal
                break;

            default:
                break;
        }
    }
}