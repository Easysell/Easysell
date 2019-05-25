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
  category_list=[];
  uploadForm: FormGroup;
   constructor(private fb: FormBuilder, private apiservice: ApiService,private httpClient:HttpClient,private router: Router) {
    this.uploadForm = this.fb.group({
      brandname: ['',Validators.required],
      file1: ['',Validators.required],
     category:['',Validators.required]
    });
    this.category_list.push('mobile');
    this.category_list.push('laptop');    
console.log(this.categories);

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
    console.log(this.uploadForm.value);
    
    let formdata = new FormData();
    console.log(this.uploadForm)
    alert(this.uploadForm.value.brandname)
    alert(this.uploadForm.value.file1)
    alert(this.uploadForm.value.category)
    formdata.append("name", this.uploadForm.value.brandname)
    formdata.append("file",this.uploadForm.value.file1);
    formdata.append("categoryid", this.uploadForm.value.category);
    this.httpClient.post<any>("http://localhost:3000/brand",formdata)
    .subscribe((res)=>{console.log(res);this.router.navigateByUrl('/brandlist');});
}
}
