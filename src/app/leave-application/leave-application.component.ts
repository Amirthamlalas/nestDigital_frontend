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
  statusval:any=[]
  
  constructor(private api:ApiService){
    this.empid=localStorage.getItem("empInfo")
    
  }
  status=()=>{
    let data:any={"empid":this.empid}
    this.api.searchStatus(data).subscribe(
      (response:any)=>{
        
        this.statusval=response;
        
        
      }

    )

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
