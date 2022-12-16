import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-visitor-log',
  templateUrl: './search-visitor-log.component.html',
  styleUrls: ['./search-visitor-log.component.css']
})
export class SearchVisitorLogComponent {

  constructor(private api:ApiService){}
date=""

searchdata:any=[]
readValue=()=>{
  let data:any={"date":this.date}

  this.api.searchVisitorlog(data).subscribe(
    (response:any)=>{
      this.searchdata=response;
    }
  )

}

}
