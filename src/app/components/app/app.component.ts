import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  // name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('',
  //   [Validators.required,
  //     Validators.minLength(3),
  //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')
  //   ]);
  name: any;
  email: any;
  password: any;


  constructor(private formBuilder : FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3),
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]]
    })
  }

  save(form: FormGroup): void {
    console.log(form);
  }
}
