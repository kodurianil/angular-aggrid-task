import { Component, Input,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiCallsService } from '../api-calls.service';
import { User } from '../user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  @ViewChild('userForm') userForm: NgForm;
  _user: User;
  @Input()
  set user(value: User) {
    if (value) {
      // console.log(value);
      this._user = JSON.parse(JSON.stringify(value));
    } else {
      this.createNewUser();
    }
  }
  // get user(): User {
  //   return this._user;
  // }
  maxDate;
  constructor(
    private apiCallsService: ApiCallsService
  ) { }
  createNewUser() {
    this._user = {
      firstName: '',
      lastName: '',
      mobile: null,
      dob: '',
      email: '',
      address: '',
      pincode: null,
      id: null
    };
    if (this.userForm) {
      // this.userForm.submitted = false;
      this.userForm.resetForm(this._user);
    }
  }
  addUser() {
    if (this._user.id) {
      this.apiCallsService.updateUser(this._user);
    } else {
      this.apiCallsService.addUser(this._user);
    }
    this.createNewUser();
  }
  clearUser() {
    this.createNewUser();
  }
  ngOnInit() {
    const today = new Date();
    this.maxDate = {
      year: today.getFullYear(),
      month: 1 + today.getMonth(),
      day: today.getDate()
    };
  }

}