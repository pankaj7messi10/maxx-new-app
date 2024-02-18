import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr : Array<Date> = new Array();
  displayDetails = true;
  
  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.arr.push(new Date());
  }

  getBgColor(item) {
    if(this.arr.indexOf(item) >=4) return 'blue';
  }

  getClass(item) {
    if(this.arr.indexOf(item) >=4) return 'whiteColor';
  }
}
