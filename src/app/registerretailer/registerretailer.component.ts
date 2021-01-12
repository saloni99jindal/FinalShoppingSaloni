import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Retailer } from '../models/retailer.model';
import { RetailerService } from '../services/retailer.service';
import { PasswordCheck } from '../validators/passwordcheck';

@Component({
  selector: 'app-registerretailer',
  templateUrl: './registerretailer.component.html',
  styleUrls: ['./registerretailer.component.css']
})
export class RegisterretailerComponent implements OnInit {


  registerForm:FormGroup;
  status:any;
  RetailerRegister:Retailer;
  retailer:any;
  msg :any;
  
  constructor(private retailerService:RetailerService,private formBuilder:FormBuilder,private router:Router) { 
    this.RetailerRegister=new Retailer();
    this.registerForm = formBuilder.group({})
  }

  register()
  {
    this.status = this.retailerService.RetailerRegistration(this.RetailerRegister).subscribe(
      data =>{
        if(data=="valid"){
            console.log(this.registerForm.value.retaileremail);
            sessionStorage.setItem('retaileremail',this.registerForm.value.retaileremail);
            alert('Registration Successful');
            this.router.navigate(['loginRetailer']);
        }else{
          alert('Registration Unsuccessful... try again');
        }
      })
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      remail:['',[Validators.required,Validators.email]],
      rname:['',[Validators.required,Validators.minLength(4)]],
      rpassword : ['',[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/)]],
      confirmpassword : ['',[Validators.required,Validators.minLength(8)]]
    })
  //  ,{
  //   validators: PasswordCheck("rpassword", "checkpassword"),
      
  // }
}
    
  get f() { 
    return this.registerForm.controls; 
  }


}
