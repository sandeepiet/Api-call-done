import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = [];
  postData : string;
 

  constructor(private _employeeService: EmployeeService) {
    
   }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(resEmployeeData => this.employees = resEmployeeData);
  }

  onSubmit(value : any){
    console.log(value);
    

  }

  onTestPost(){
    this._employeeService.postJSON().subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log("Finished")
    );
  }
  

}
