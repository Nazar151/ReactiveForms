import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  form: FormGroup;
  name =  new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',
    [Validators.required,
      Validators.minLength(3),
      // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')
    ]);
  confirmPassword = new FormControl('')

constructor() {
   this.form = new FormGroup({
     name: this.name,
     email: this.email,
     password: this.password,
     confirmPassword: this.confirmPassword
   },[Validators.required, this.passValidator.bind(this)] )
}



  save(form: FormGroup): void {
    console.log(form.controls);
  }

  passValidator(form: FormGroup){
    const {value: password} = form.controls.password;
    const {value: confirmPassword} = form.controls.confirmPassword;
    return password === confirmPassword ? null : {passwordError: true}

  }

}
