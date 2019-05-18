import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
   dynamic_id_for_value;
   form: FormGroup;

   constructor(private fb: FormBuilder,private authService: AuthService) {
       this.form = this.fb.group({
        modelname:['', Validators.required],
        itemlogo:['', Validators.required],
        brandname:['', Validators.required],
        ram:['', Validators.required],
        storage:['', Validators.required],
        camera:['', Validators.required],
        battery:['', Validators.required],
        processor:['', Validators.required],
       });
   }


  addvalue(){
    var total=document.getElementsByTagName('INPUT').length;
    var startIndex=document.getElementsByTagName('INPUT')[total-1];
    var newDiv = document.createElement("input");
    var node=document.getElementById('value1');
    let start=startIndex.id.split('.')[0];
    let end:any=startIndex.id.split('.')[1];
    let num:any=parseInt(end)+1;
    let temp_id:any=start+'.'+num;
    newDiv.setAttribute('id',temp_id);
    node.appendChild(newDiv);
  }

  readall(){
    var total=document.getElementsByTagName('INPUT').length;
    var end=parseInt((document.getElementsByTagName('INPUT')[total-1].id).split('.')[1]);
    var startIndex=document.getElementsByTagName('INPUT')[total-1];
    let input_id=startIndex.id;
    for(let i=1;i<=end;i++)
    {
     var temp_value=(document.getElementById(input_id.split('.')[0]+'.'+i) as HTMLInputElement).value;
      alert(temp_value)
    }
  }

  save(){

    if(!this.form.valid){
      document.getElementById('target').hidden=true;
      return false;
    }
    else{
      document.getElementById('target').hidden=false;
    }
    var ramspec = this.form.value.ram;
    var ramarr = ramspec.split(',');
    this.form.value.ram = ramarr;

    var storage = this.form.value.storage;
    var storagearr = storage.split(',');
    this.form.value.storage = storagearr;
    
    console.log(this.form.value);
  }

  ngOnInit() {}
}


