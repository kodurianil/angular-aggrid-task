import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class ApiCallsService {
  userIdCount = 0;
  usersList: User[] = [];
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