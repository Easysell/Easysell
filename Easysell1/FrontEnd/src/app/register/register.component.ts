import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
show:boolean;
    constructor(private fb: FormBuilder,private authService: AuthService) {
        this.form = this.fb.group({
            name:['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

  ngOnInit() {}

  register() {
   
    if(this.form.value.password.length<=5)
    {
      this.show=true;
      return;
    }
    else{
      console.log('Clicked the register button');
      const val = this.form.value;
      this.authService.register(val.name,val.email,val.password);
    }

   
}

}
