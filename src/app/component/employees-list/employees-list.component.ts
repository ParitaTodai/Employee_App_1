import { Component, OnInit } from '@angular/core';
import { Employees } from 'others/model/employees';
import { EmployeeService } from 'others/service/employee-service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
emp:Employees[];
// list:Employees[][];
statusMsg:string="Loading Data. Please Wait........";

reflectedRadioButton:string="All";

constructor(private _empService : EmployeeService){ 

}
ngOnInit() {  //long task preferred in ngOnInit

this._empService.getEmpList()
.subscribe(
  (empData)=> {
    this.emp=empData;
    // this.list = Array.of(this.emp);

    console.log("data",this.emp);
    console.log("data",this.emp.length);

  },
  error=>{
    this.statusMsg="Problem with loading data.Please try agn after sometime";
    console.error("error",error.responseText);
  });
}
// console.log("data",this.emp.length);

getTotalEmployeeCount() : number{
  return this.emp.length;
}

getTotalMaleEmployeeCount() : number{
  return this.emp.filter(e=>e.gender==="Male").length;
}

getTotalFemaleEmployeeCount() : number{
  return this.emp.filter(e=>e.gender==="Female").length;
}

onReflectedradioButton(selectedRadioButton : string) : void{
  this.reflectedRadioButton=selectedRadioButton;
}

}
