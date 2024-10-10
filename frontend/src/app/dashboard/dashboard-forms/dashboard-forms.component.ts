import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-forms',
  templateUrl: './dashboard-forms.component.html',
  styleUrls: ['./dashboard-forms.component.css']
})
export class DashboardFormsComponent {
    form:FormGroup;

    constructor(private fb:FormBuilder){
      this.form = this.fb.group({
        email: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required,Validators.minLength(8)]]
      });
    }

    onSubmit(){
      if(this.form.valid){
        console.log(this.form.value);
        
      }
    }
}
 