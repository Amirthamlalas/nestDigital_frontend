import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empid=""
  name=""
  designation=""
 email=""
  phoneno=""
  salary=""
  username=""
 password=""
constructor(private api:ApiService){}
 readValue=()=>{
  let data:any={"empid":this.empid,
    "name":this.name,
    "designation":this.designation,
   "email" :this.email,
    "phoneno" :this.phoneno,
    "salary" :this.salary,
    "username" : this.username,
  "password" : this.password}

  this.api.addEmployee(data).subscribe(

  
    (response:any)=>{
      if (response.status=="success") {
        alert("employee added successfully")

        
      } else {
        alert("something went wrong")
      }
    }
  )
 }

}
