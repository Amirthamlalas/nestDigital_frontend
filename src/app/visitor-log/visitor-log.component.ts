import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitor-log',
  templateUrl: './visitor-log.component.html',
  styleUrls: ['./visitor-log.component.css']
})
export class VisitorLogComponent {

  name=""
 purpose=""
  whom_to_meet=""
   entry_time=""
  exit_time=""
  date=""
constructor(private api:ApiService){}
  readValue=()=>{
    let data:any={
      "name":this.name,"purpose":this.purpose,"whom_to_meet":this.whom_to_meet,"entry_time":this.entry_time,"exit_time":this.exit_time,"date":this.date
    }
this.api.visitorLog(data).subscribe(
  (response:any)=>{
    if (response.status=="success") {
      alert("Visitor added successfully")
      
    } else {
      alert("Failed to add visitor")
    }
  }
)
    
  }

}
