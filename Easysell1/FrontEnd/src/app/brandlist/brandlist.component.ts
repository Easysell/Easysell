import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.css']
})
export class BrandlistComponent implements OnInit {
  brands:any;

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.getBrandsWithcategory()
    .subscribe((res) => {
      this.brands = res['data']['bran'];
      console.log(res)
      console.log(res['data']['bran']);
      console.log(this.brands)
      //console.log("hai"+res['data']['bran']['output']);
      
  });
  
  }
}