import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  notSamePassword: boolean = false;
  error: string;
  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    if(this.registrationForm.value.password === this.registrationForm.value.confirmPassword){
      this.notSamePassword = false;
      this.userService.registerUser(this.registrationForm.value).subscribe(val=>{
        if(val.status === "error"){
          this.error = val.message
        }
        else{
          this.router.navigate(['/login']);
          console.log('Registered');
        }
      })
    }
    else{
      this.notSamePassword = true;
    }
  }

}
