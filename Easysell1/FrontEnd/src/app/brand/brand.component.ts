import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, FormControl,Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  
  categories:any;
  uploadForm: FormGroup;
   constructor(private fb: FormBuilder, private apiservice: ApiService,private httpClient:HttpClient,private router: Router) {
    //this.createForm();
    this.uploadForm = this.fb.group({
      brandname: [''],
      file1: [''],
     category:['']
    });
    
  }
  filedata:any;
  brandname:any;
  category:any;
  fileEvent(e){
          this.filedata=e.target.files[0];
          console.log(e);
  }
  onChangeEvent(ev) {
    this.category=ev.target.value;
    console.log(ev.target.value); // should print option1
}


  ngOnInit() {
    this.apiservice
    .getCategory()
    .subscribe((res) => {
      this.categories = res['category'];
      console.log(res['category']);
      //console.log(res['data']['category'])
  });
  }
  addBrand() {
    let formdata = new FormData();
    console.log(this.uploadForm)
    
    formdata.append("name", this.uploadForm.get('brandname').value)
    formdata.append("file",this.filedata);
    formdata.append("categoryid", this.category);
    this.httpClient
    .post<any>("http://localhost:3000/brand",formdata)
    .subscribe((res)=>{console.log(res);this.router.navigateByUrl('/brandlist');});
}
}
