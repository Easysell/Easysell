import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-defectadding',
  templateUrl: './defectadding.component.html',
  styleUrls: ['./defectadding.component.css']
})
export class DefectaddingComponent implements OnInit {
form:FormGroup;
  constructor(private fb:FormBuilder,private serv:ApiService) {
    this.form=this.fb.group({
      name:['',Validators.required],
      description:['',Validators.required]
    })
   }

  add(){
   var x=(document.getElementById('defectname') as HTMLInputElement).value;
   var y=(document.getElementById('defectdescription') as HTMLInputElement).value;
   if(x==''||y==''){
     alert('invalid details')
   }
   else{
     this.serv.adddefects({x,y}).then(result=>{

     })
   }
    console.log(this.form.value)
  }
  cancel(){
    this.form.reset();
    (document.getElementById('defectname') as HTMLInputElement).value='';
    (document.getElementById('defectdescription') as HTMLInputElement).value='';
    console.log(this.form.value)
  }
  ngOnInit() {
  }

}
