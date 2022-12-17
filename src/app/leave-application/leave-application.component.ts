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
  sta:any=""
  id:any={}
  constructor(private api:ApiService){
    this.id=localStorage.getItem("userid")
    
    
  }
  
  status=()=>{
   
    let data:any={"id":this.id}
    this.api.searchStatus(data).subscribe(
      (response:any)=>{
        
        this.statusval=response;
       
      }

    )

  }

  readValue=()=>{
    this.empid=localStorage.getItem("empcode")
    let data:any={"leavetype":this.leavetype,"remarks":this.remarks,"from_data":this.from_data,"to_date":this.to_date,"empid":this.empid

    }
    console.log(data)
this.api.applyLeave(data).subscribe(
  (response:any)=>{
    if (response.status=="success") {
      alert("Leave applied successfully")
      localStorage.setItem("userid",response.id)
     
      console.log(response.id)
    } else {
      alert("something went wrong")
    }
  }
)

  }
}
