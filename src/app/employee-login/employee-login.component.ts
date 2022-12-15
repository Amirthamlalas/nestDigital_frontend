import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  username=""
  password=""
constructor(private api:ApiService){}
  readValue=()=>{
    let data:any={
      "username":this.username,"password":this.password
    }
this.api.employeeLogin(data).subscribe(
  (response:any)=>{
    if (response.status=="success") {
     let empid=response.employeeid
     console.log(empid)
     localStorage.setItem("empInfo",empid)
      
    } else {
      alert("fail")
    }
  }
)
  }
}
