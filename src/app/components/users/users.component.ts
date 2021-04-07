import { FindService } from './../../services/find.service';
import { Repos } from './../../classes/repos';
//import { RepoName } from './../../classes/repo-name';
import { Users } from './../../classes/users';
import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username: any;
  user: Users;
  repos: Repos[];
  reponame: any;


  constructor(private searchService: FindService, private router: Router) { }
  findProfile() {
    this.searchService.userInfoRequest(this.username)
    this.user = this.searchService.user
    this.searchService.userRepoRequest(this.username)
    this.repos = this.searchService.repos
    this.username = ''
   
  }

  findRepos() {
    localStorage.setItem("reponame", this.reponame);
    this.router.navigate(['/repositories']);
    this.reponame = ''
  }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    if(this.username == null) {
      this.username = "anzalmohamed"
    } else {
      this.username = this.username 
    }
   
    this.searchService.userInfoRequest(this.username)
    this.user = this.searchService.user
    this.searchService.userRepoRequest("anzalmohamed")
    this.repos = this.searchService.repos
  }
  }


