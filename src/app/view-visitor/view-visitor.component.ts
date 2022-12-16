import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-visitor',
  templateUrl: './view-visitor.component.html',
  styleUrls: ['./view-visitor.component.css']
})
export class ViewVisitorComponent {
constructor(private api:ApiService){
  api.viewVisitorlog().subscribe(
    (response:any)=>{
      this.data=response;
    }
  )
}
  data:any=[]

}
