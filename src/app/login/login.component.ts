import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', Validators.required],
    rememberMe:['']
  });
  error: string;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.loginUser(this.loginForm.value).subscribe(val=>{
      if(val.status === "error"){
        this.error = val.message
      }
      else{
        localStorage.setItem('token', val)
        this.router.navigate(['/home']);
        console.log('loged in');
      }
    })
    console.log(this.loginForm.value);
  }
}
