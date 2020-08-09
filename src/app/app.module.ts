import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { FormsModule } from '@angular/forms';
import { EmployeesListComponent } from './component/employees-list/employees-list.component';
import { EmpModifyPipe } from './component/employees-list/custom/emp-modify.pipe';
import { EmpCountComponent } from './component/emp-count/emp-count.component';

import {HttpModule,Response} from '@angular/http';
import { HomeComponent } from './component/home/home.component';
import {RouterModule,Routes} from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { EmployeeService } from 'others/service/employee-service';

const appRoutes : Routes =[
  {path : 'home',component : HomeComponent},
  {path : 'employees',component : EmployeesListComponent},
  {path : 'employees/:code',component : EmployeesComponent},
  {path : '',redirectTo : 'home' ,pathMatch:'full'},
  {path : '**',component : PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeesListComponent,
    EmpModifyPipe,
    EmpCountComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,{'useHash':true})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
