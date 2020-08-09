import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { Employees } from '../model/employees';


@Injectable()
export class EmployeeService {

  private _getUrl="http://localhost:3000/api/lists/";
  constructor(private _http: Http){}

  getEmpList(): Observable<Employees[]> {
    return this._http.get(this._getUrl)
    .map((response:Response) => <Employees[]>response.json()
    )
    .catch(this.handleError);
}
getEmpListByCode(empCode:string): Observable<Employees> {
  return this._http.get(this._getUrl  + empCode)
  .map((response:Response) =>  <Employees>response.json())
  .catch(this.handleError);
}

handleError(error : Response){
  console.log(error);
  return Observable.throw(error);
}
}