import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordRetailerService } from '../services/forgotpasswordretailer.service';
import { PasswordCheck } from '../validators/passwordcheck';

@Component({
  selector: 'app-forgotpasswordretailer',
  templateUrl: './forgotpasswordretailer.component.html',
  styleUrls: ['./forgotpasswordretailer.component.css']
})
export class ForgotpasswordretailerComponent implements OnInit {

  forgetPasswordretailerOTPForm: FormGroup;
  otpstatus : boolean = false;
  buttonname : any ='Get OTP';
 
  userotp : any;
  checkotp : number=0;

  otppattern : string = "^[0-9]{4}";

  // submitted=false;
  
  constructor(private formBuilder:FormBuilder,private forgotpassretailerService:ForgotPasswordRetailerService) {  
    this.forgetPasswordretailerOTPForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.forgetPasswordretailerOTPForm = this.formBuilder.group({

      email : new FormControl('',[Validators.required, Validators.email]),
      otp : new FormControl('',[Validators.required,Validators.pattern(this.otppattern)]),
      newpassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmnewpassword : new FormControl('',[Validators.required,Validators.minLength(6)])
    }
    ,
    {
      validators: PasswordCheck("newpassword", "confirmnewpassword")
    }
    );
  }
  
  get l() { return this.forgetPasswordretailerOTPForm.controls; }

  doChange(){
    if(this.checkotp == this.forgetPasswordretailerOTPForm.value.otp && this.forgetPasswordretailerOTPForm.valid){
      this.forgotpassretailerService.UpdateRetailer(this.forgetPasswordretailerOTPForm.value.retaileremail,this.forgetPasswordretailerOTPForm.value.npass)
    //   .subscribe(
    //     data => { 
    //       if(data == "Valid"){
    //         alert("Password changed successfully");
    //         this.router.navigate(['userlogin'])
    //       }
    //      }
    //   )
    //   this.forgetPasswordOTPForm.reset();
    }
    // if(this.checkotp != this.forgetPasswordOTPForm.value.otp && this.forgetPasswordOTPForm.valid){
    //   alert("Invalid OTP. Please enter correct OTP");
    // }
    console.log("changed");
  }

  GetOtp()
  {
    this.otpstatus = !this.otpstatus
    this.forgotpassretailerService.SendOTP(this.forgetPasswordretailerOTPForm.value.retaileremail)
    var data=1
    if(data == 0){
      alert('Please enter correct email id');
      this.buttonname = 'Get OTP';
      this.otpstatus = !this.otpstatus
      this.forgetPasswordretailerOTPForm.reset();
    }else{
      alert("Please check your email for OTP");
      this.buttonname = 'Enter OTP';
      this.checkotp = data;
    }
    // .subscribe(
    //   data => {
    //     console.log(data);
    //     if(data == 0){
    //       alert('Please enter correct email id');
    //       this.buttonname = 'Get OTP';
    //       this.otpstatus = !this.otpstatus
    //       this.forgetPasswordOTPForm.reset();
    //     }else{
    //       alert("Please check your email for OTP");
    //       this.buttonname = 'Enter OTP';
    //       this.checkotp = data;
    //     }
    //   }
    // );
  }

}
