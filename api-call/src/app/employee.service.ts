import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EmployeeService {
  private _url: string = "assets/employeedata.json";

  headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
      
    }



  getEmployees(){
    return this._http.get('http://zingotesting.azurewebsites.net/api/cities')
    .map((response: Response) => response.json());
  }

postJSON(){
  var json = { 
    CityName : "Bangalore",
    Country : "India",
    ProfileId : 2,
    State : "Karnatakkkk"

  };
  var params = 'json=' + json;
  
  var headers = new Headers();

  
  //let headers = new Headers({'Content-Type':'application/json'});
  console.log(json);
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
 // let options = new RequestOptions({headers: headers});
  //headers.append('Authorization', 'Basic c3VwZXJhZG1pbjo5OTk5MDkwMDI5');
  return this._http.post('http://zingotesting.azurewebsites.net/api/Cities/AddCity', json)
  .map(res => res.json());
  
}   










  }
