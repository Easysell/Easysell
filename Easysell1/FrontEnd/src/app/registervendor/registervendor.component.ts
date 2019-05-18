import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registervendor',
  templateUrl: './registervendor.component.html',
  styleUrls: ['./registervendor.component.css']
})
export class RegistervendorComponent implements OnInit {

  form: FormGroup;

    constructor(private fb: FormBuilder,private authService: AuthService) {
        this.form = this.fb.group({
            name:['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

  ngOnInit() {
  }
  registervendor() {
    console.log('Clicked the register button');
    const val = this.form.value;
    this.authService.registervendor(val.name,val.email,val.password);

   
}

}
