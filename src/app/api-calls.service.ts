import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class ApiCallsService {
  userIdCount = 0;
  usersList: User[] = [
  {
    "firstName": "asd",
    "lastName": "asdf",
    "mobile": 8989898989,
    "dob": {
      "year": 2020,
      "month": 10,
      "day": 6
    },
    "email": "asf@asdmf",
    "address": "af",
    "pincode": 898989,
    "id": 1
  },
  {
    "firstName": "asf",
    "lastName": "koduru",
    "mobile": 8971335338,
    "dob": {
      "year": 2020,
      "month": 10,
      "day": 1
    },
    "email": "kanil554@gmail.com",
    "address": "adf",
    "pincode": 898989,
    "id": 2
  },
  {
    "firstName": "anil",
    "lastName": "koduru",
    "mobile": 8971335338,
    "dob": {
      "year": 2020,
      "month": 10,
      "day": 6
    },
    "email": "kanil554@gmail.com",
    "address": "sd",
    "pincode": 898989,
    "id": 3
  },
  {
    "firstName": "asf",
    "lastName": "koduru",
    "mobile": 8989898989,
    "dob": {
      "year": 2020,
      "month": 10,
      "day": 6
    },
    "email": "kanil554@gmail.com",
    "address": "sa",
    "pincode": 909090,
    "id": 4
  },
  {
    "firstName": "asf",
    "lastName": "koduru",
    "mobile": 8989898989,
    "dob": {
      "year": 2020,
      "month": 10,
      "day": 6
    },
    "email": "kanil554@gmail.com",
    "address": "sa",
    "pincode": 909090,
    "id": 5
  },
  {
    "firstName": "asf",
    "lastName": "koduru",
    "mobile": 8989898989,
    "dob": {
      "year": 2020,
      "month": 10,
      "day": 6
    },
    "email": "kanil554@gmail.com",
    "address": "sa",
    "pincode": 909090,
    "id": 6
  },
  {
    "firstName": "asf",
    "lastName": "koduru",
    "mobile": 8989898989,
    "dob": {
      "year": 2020,
      "month": 10,
      "day": 6
    },
    "email": "kanil554@gmail.com",
    "address": "sa",
    "pincode": 909090,
    "id": 7
  },
  {
    "firstName": "asf",
    "lastName": "koduru",
    "mobile": 8989898989,
    "dob": {
      "year": 2020,
      "month": 10,
      "day": 6
    },
    "email": "kanil554@gmail.com",
    "address": "sa",
    "pincode": 909090,
    "id": 8
  },
  {
    "firstName": "asf",
    "lastName": "koduru",
    "mobile": 8989898989,
    "dob": {
      "year": 2020,
      "month": 10,
      "day": 6
    },
    "email": "kanil554@gmail.com",
    "address": "sa",
    "pincode": 909090,
    "id": 9
  },
  {
    "firstName": "asf",
    "lastName": "koduru",
    "mobile": 8989898989,
    "dob": {
      "year": 2020,
      "month": 10,
      "day": 6
    },
    "email": "kanil554@gmail.com",
    "address": "sa",
    "pincode": 909090,
    "id": 10
  },
  {
    "firstName": "asf",
    "lastName": "koduru",
    "mobile": 8989898989,
    "dob": {
      "year": 2020,
      "month": 10,
      "day": 6
    },
    "email": "kanil554@gmail.com",
    "address": "sa",
    "pincode": 909090,
    "id": 11
  }
];
  users$: BehaviorSubject<User[]>;
  constructor(
    // private httpClient: HttpClient
  ) {
    this.users$ = new BehaviorSubject(this.usersList);
  }

  addUser(user: User) {
    user.id = ++this.userIdCount;
    this.usersList.push(user);
    this.users$.next(this.usersList);
  }
  getUserIndex(user: User): number {
    return this.usersList.findIndex(luser => luser.id === user.id);
  }
  updateUser(user: User) {
    const userIndex = this.getUserIndex(user);
    this.usersList[userIndex] = user;
    this.users$.next(this.usersList);
  }

  removeUser(user: User) {
    if (confirm('Are you sure want to delete user?')) {
      const userIndex = this.getUserIndex(user);
      this.usersList.splice(userIndex, 1);
      this.users$.next(this.usersList);
    }
  }

  getUsers(): User[] {
    return this.usersList;
  }
}