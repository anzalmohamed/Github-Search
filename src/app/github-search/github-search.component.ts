import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  users:User[] = [
    new User("")];
  addNewUser(user: User){
    let userLength = this.users.length;
    user.id = userLength+1;
    //user.completeDate = new Date(user.completeDate)
    this.users.push(user)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
