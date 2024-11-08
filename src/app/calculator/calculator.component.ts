import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  standalone: true,  // Make sure this component is standalone
  imports: [FormsModule]  // Add FormsModule to imports
})

export class CalculatorComponent {
  display: string = '';
  currentOperator: string | null = null;
  firstOperand: number | null = null;

  appendNumber(num: string) {
    this.display += num;
  }

  clear() {
    this.display = '';
    this.currentOperator = null;
    this.firstOperand = null;
  }

  performOperation(operator: string) {
    if (this.display) {
      this.firstOperand = parseFloat(this.display);
      this.currentOperator = operator;
      this.display = '';
    }
  }

  calculate() {
    if (this.currentOperator && this.firstOperand !== null) {
      const secondOperand = parseFloat(this.display);
      switch (this.currentOperator) {
        case '+':
          this.display = (this.firstOperand + secondOperand).toString();
          break;
        case '-':
          this.display = (this.firstOperand - secondOperand).toString();
          break;
        case '*':
          this.display = (this.firstOperand * secondOperand).toString();
          break;
        case '/':
          this.display = (this.firstOperand / secondOperand).toString();
          break;
      }
      this.currentOperator = null;
      this.firstOperand = null;
    }
  }
}
