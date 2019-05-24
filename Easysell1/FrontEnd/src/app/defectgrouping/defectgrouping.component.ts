import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import $ from "jquery";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-defectgrouping',
  templateUrl: './defectgrouping.component.html',
  styleUrls: ['./defectgrouping.component.css']
})
export class DefectgroupingComponent implements OnInit {
form:FormGroup;
defectlist=[];
defect_group:any=[];
  constructor(private fb:FormBuilder,private serv:ApiService) { 
    this.form=this.fb.group({
      groupname:['',Validators.required],
      defectname:['',Validators.required]
    })
    this.defectlist.push({_id:'mobile',name:'display crack'})
  }

  addFields(){
    let id:string=$('input')[$('input').length-1].id;
    let temp_id=id.split('.')[0]+'.'+(parseInt(id.split('.')[1])+1);
    $("#textboxDiv").append("&nbsp;<input type='text' id="+temp_id+" style='margin-top: 5px'>&nbsp;"); 
}

  removeFields(){
    $("#textboxDiv").children().last().remove();  
  }

  save(){
    let temp=this;
    temp.defect_group.length=0;
    if(!temp.form.valid){
      // document.getElementById('target').hidden=true;
      alert('Empty Fields')
      return false;
    }
    else{
      // document.getElementById('target').hidden=false;
      for(let i=1;i<$('input').length;i++)
      {
        var obj={};
        obj['groupname']=this.form.value.groupname;
        obj['defectname']=this.form.value.defectname;
        obj['description']=(document.getElementById('value'+'.'+(i)) as HTMLInputElement).value;
        temp.defect_group.push(obj);
      }
    }
    console.log(temp.defect_group); 
    temp.serv.defects_group(temp.defect_group).then(res=>{
      alert(res)
    });
  }

  ngOnInit() 
  {
    $("#textboxDiv").append("&nbsp;<input type='text' id='value.1' >&nbsp;"); 
    }

}
