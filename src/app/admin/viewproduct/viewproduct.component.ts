import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from '../adminservices.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  userdata;
  constructor(private admin:AdminservicesService) { }

  ngOnInit(): void {
    this.admin.getdata()
    .subscribe
    (
       data=>
       {
         this.userdata =data.user;
        console.log(this.userdata);
       }
    )
  }

}
