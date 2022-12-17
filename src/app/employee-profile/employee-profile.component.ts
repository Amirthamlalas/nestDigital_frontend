import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent {

  empid:any=""
  profile:any=[]

  constructor(private api:ApiService){
    this.empid=localStorage.getItem("empInfo")
  let data:any={"id":this.empid}
  this.api.employeeProfile(data).subscribe(
    (response:any)=>{
      this.profile=response;
      console.log(response)
     
      
      
    }
  )
  }

  

}
