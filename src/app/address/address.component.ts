import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressForm = this.fb.group({
    name: ['', [ Validators.required ]],
    address: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addAddress(){
    console.log('added')
  }
}
