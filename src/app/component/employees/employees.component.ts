import { Component, OnInit } from '@angular/core';
import { Employees } from 'others/model/employees';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'others/service/employee-service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee:Employees;
statusMsg : string;

  constructor(private _empService : EmployeeService,private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
     let empCode : string = this._activatedRoute.snapshot.params['code'];
     console.log("check",empCode);
     this._empService.getEmpListByCode(empCode)
     .subscribe(
       (empData)=>
         this.employee=empData
        //  console.log("try123",empData);
        //  console.log("tryyyy",this.employee[0].code);
       ,
      (err)=>{
        this.statusMsg="Something Went Wrong!!!",
        console.log("err",err);
       }
     )
  }

}
