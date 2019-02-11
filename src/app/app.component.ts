import { Component } from '@angular/core';
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'ingrid';
  title = 'Calculator App';
  num1: number;
  num2: number;
  result;
  te;
  
 ///
  add() {
this.te=this.num1;
      this.result = this.num1;//+this.num2+"";
  }
  substract() {
      this.result = this.num1 - this.num2;
  }
  multiply() {
      this.result = this.num1 * this.num2;
  }
  divide() {
      this.result = this.num1 % this.num2;
  }
}
