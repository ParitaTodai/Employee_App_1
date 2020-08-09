import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader = 'Employee details';
  onClick() : void {
    console.log("You Clicked mE!!");
  }
}
