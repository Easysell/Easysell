import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
declare let require:any;
import $ from "jquery";
import { ApiService } from '../api.service';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
   form: FormGroup;
    filedata:File;
    description_arr:any=[]
    brandlist:any=[];
   constructor(private fb: FormBuilder,private authService: AuthService,private serv:ApiService) {
       this.form = this.fb.group({
        modelname:['', Validators.required],
        itemlogo:['', Validators.required],
        brandname:['', Validators.required],
       });
       this.brandlist.push('apple');
       this.brandlist.push('sony');
       this.brandlist.push('nokia');
   }

   fileEvent(e){
    this.filedata=e.target.files[0];
    console.log(e);
}

   addvalue(){
    var total=document.getElementsByTagName('INPUT').length;
    var startIndex=document.getElementsByTagName('INPUT')[total-1];
    var newDiv = document.createElement("input");
    var node=document.getElementById('value.1');
    let start=startIndex.id.split('.')[0];
    let end:any=startIndex.id.split('.')[1];
    let num:any=parseInt(end)+1;
    let temp_id:any=start+'.'+num;
    newDiv.setAttribute('id',temp_id);
    alert(temp_id);
    node.appendChild(newDiv);
    alert(newDiv);
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

   addFields(){

       let sid:string=$('input')[$('input').length-1].id;
       let spec_id=sid.split('.')[0]+'.'+(parseInt(sid.split('.')[1])+1);
       let id:string=$('textarea')[$('textarea').length-1].id;
       let temp_id=id.split('.')[0]+'.'+(parseInt(id.split('.')[1])+1);
    //  $("#textboxDiv").append("<div><br><textarea id="+temp_id+"></textarea><br></div>");
    $("#textboxDiv").append("<div class='form-group'><label class='col-md-2 control-label'>specification</label><div class='col-md-3'><input type='text' id="+spec_id+"></div>\
    <label class='col-md-2 control-label'>description</label><div class='col-md-5'><textarea id="+temp_id+"></textarea>\
    </div></div>"); 
}


readFields(){
  this.description_arr.length=0;
  for(let i=0;i<$('textarea').length;i++){
    var spec_obj={};
    spec_obj['specification']=(document.getElementById('spec'+'.'+(i+1)) as HTMLInputElement).value
    spec_obj['description']=(document.getElementById('value'+'.'+(i+1)) as HTMLInputElement).value;
    this.description_arr.push(spec_obj);
  };
  console.log(this.description_arr);
  
}


removeFields(){
  $("#textboxDiv").children().last().remove();  
}

  save(){
    this.description_arr.length=0;
    if(!this.form.valid){
      document.getElementById('target').hidden=true;
      alert('Empty Fields')
      return false;
    }
    else{
      document.getElementById('target').hidden=false;
      for(let i=0;i<$('textarea').length;i++)
      {
        alert(this.form.value.brandname);
        var obj={};
        obj['brandname']=this.form.value.brandname;
        obj['itemlogo']=this.form.value.itemlogo;
        obj['modelname']=this.form.value.modelname;
        obj['specification']=(document.getElementById('spec'+'.'+(i+1)) as HTMLInputElement).value;
        obj['description']=(document.getElementById('value'+'.'+(i+1)) as HTMLInputElement).value;
        this.description_arr.push(obj);
      }
    }
    console.log(this.description_arr); 
    this.serv.additem(this.description_arr).then
  }

  ngOnInit() {
      $("#textboxDiv").append(" <div class='form-group'>\
        <div class='col-md-5'>\
        <div class='col-md-4'>\
            <label class=' control-label'>specification</label>\
        </div>\
        <div class='col-md-1'>\
            <input type='text' id='spec.1' autocomplete=off>\
        </div>\
      </div>\
      <div class='col-md-7'>\
        <div class='col-md-3'>\
            <label class='control-label'>description</label>\
        </div>\
        <div class='col-md-4' class='form-group'>\
            <textarea id='value.1'></textarea>&nbsp;\
        <button id='add'>+</button>&nbsp;&nbsp;<button id='remove'>-</button>\
        </div>\
      </div>\
  </div> "); 

  $("#add").click(()=> {
    this.addFields();
  });

  
  $("#remove").click(()=> {
    this.removeFields();
  });
}
}


