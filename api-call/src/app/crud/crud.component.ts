import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  employees = [
    {name:"Sandeep", position:"Programer"},
    {name:"Sandeep", position:"Programer"},
    {name:"Sandeep", position:"Programer"}
  ];
  model:any={};
  model2:any={};
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};

  }

  deleteEmployee(i){
    this.employees.splice(i, 1);
    console.log(i);
  }
  myValue;
  editEmployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k;
  }

  updateEmployee(){
    let k = this.myValue;
    for(let i=0; i<this.employees.length;i++){
      if(i==k){
        this.employees[i]= this.model2;
        this.model2 = {};
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
