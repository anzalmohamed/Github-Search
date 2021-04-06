import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
//import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css'],
  providers: [UserService]
})
export class GithubSearchComponent implements OnInit {
  username: any;
  newSearch:string=''
  user:User|any

  constructor(private userService:UserService) { }

  findUsers(){
this.userService.getUsers(this.newSearch)
this.user=this.userService.user
console.log(this.newSearch)

console.log(this.findUsers())
  }

  ngOnInit(): void {
    this.newSearch='anzalmohamed'
    this.userService.getUsers(this.newSearch)
    this.user=this.userService.user
    this.newSearch=''
  }


}

