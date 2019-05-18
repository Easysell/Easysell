import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

 // form: FormGroup;
 uploadForm: FormGroup;
  constructor(private fb: FormBuilder, private apiservice: ApiService,private httpClient:HttpClient,private router: Router) {
    //this.createForm();
    this.uploadForm = this.fb.group({
      catetoryname: [''],
      file1: [''],
      catetorystatus:['']
    });
    
  }
  /*onFileChange($event) {
    let file = $event.target.files[0]; // <--- File Object for future use.
    this.form.controls['file'].setValue(file ? file.name : ''); // <-- Set Value for Validation
}*/
/*uploadForm = new FormGroup ({
  file1: new FormControl()
});*/
//uploadForm: FormGroup;
filedata:any;
catetoryname:any;
catetorystatus:any;

    fileEvent(e){
        this.filedata=e.target.files[0];
        console.log(e);
    }
//filename = '';
  /*createForm() {
    this.form = this.fb.group({
      catetoryname: ['', Validators.required ],
      file: ['', Validators.required ],
      catetorystatus:['',Validators.required]
    });
  }*/

  /* addCategory() {
    const val = this.form.value;
    this.apiservice.addCategory(val.catetoryname,val.file,val.catetorystatus);
  }*/

  addCategory() {
    let formdata = new FormData();
    console.log(this.uploadForm)
    console.log( this.uploadForm.get('catetoryname').value);
   // console.log("name"+this.catetoryname);
    //formdata.append("name", this.uploadForm.get('catetoryname').value);
    formdata.append("name", this.uploadForm.get('catetoryname').value)
    formdata.append("file",this.filedata);
    formdata.append("status", this.uploadForm.get('catetorystatus').value)
    //formdata.append("status", this.uploadForm.get('catetorystatus').value);
    this.httpClient
    .post<any>("http://localhost:3000/category",formdata)
    .subscribe((res)=>{console.log(res);this.router.navigateByUrl('/categorylist');});
  }
  ngOnInit() {
  }

}
