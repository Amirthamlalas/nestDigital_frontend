import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent {
  empid:any=""
  leavetype=""
  remarks=""
  from_data=""
  to_date=""
  constructor(private api:ApiService){
    this.empid=localStorage.getItem("empInfo")
  }

  readValue=()=>{
    let data:any={"leavetype":this.leavetype,"remarks":this.remarks,"from_data":this.from_data,"to_date":this.to_date,"empid":this.empid

    }
this.api.applyLeave(data).subscribe(
  (response:any)=>{
    if (response.status=="success") {
      alert("Leave applied successfully")
      
    } else {
      alert("something went wrong")
    }
  }
)

  }
}
