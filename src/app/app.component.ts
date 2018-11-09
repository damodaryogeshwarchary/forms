import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  signUpReactiveForm:FormGroup;
  fullName:string="";
  desgnn:string="";
  companyname:string="";

  constructor(private frmbuilder: FormBuilder) {
    this.signUpReactiveForm = frmbuilder.group({
      fname:['',Validators.required],
      desgn:['',Validators.required],
      company:['',Validators.required],
    });
}

  Register(formdetails: any){
    // debugger;
    let fname = formdetails.controls.fullname.value;
    console.log(fname);
    console.log(formdetails);
  }
  Reactive(signUpReactiveForm: any){
    this.fullName = signUpReactiveForm.controls.fname.value;
    console.log(this.fullName);
    this.desgnn = signUpReactiveForm.controls.desgn.value;
    console.log(this.desgnn);
    this.companyname = signUpReactiveForm.controls.company.value;
    console.log(this.companyname);
    console.log(signUpReactiveForm.controls);


  }
}
