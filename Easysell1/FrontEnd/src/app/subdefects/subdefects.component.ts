import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-subdefects',
  templateUrl: './subdefects.component.html',
  styleUrls: ['./subdefects.component.css']
})
export class SubdefectsComponent implements OnInit {
  form:FormGroup;
  submitted = false;
  pricelist=[];
  subdefects=[];
  constructor(private fb:FormBuilder,private serv:ApiService) { 
    this.form=this.fb.group({
      defectprice:['',Validators.required],
      subdefect:['',Validators.required,Validators.minLength(6)],
      defectdescription:['',Validators.required]
    })
this.pricelist=[100,200,300,400,500];
this.subdefects=['a','b','c']
  }

  add_subdefects(){
    console.log(this.form.value);
    
    // alert(this.form.value.defectdescription==='')
  }
  ngOnInit() { }




// convenience getter for easy access to form fields
get f() { return this.form.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    this.serv.add_subdefects(this.form.value).then(res=>{
      alert(res)
    })

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value))

}
}


