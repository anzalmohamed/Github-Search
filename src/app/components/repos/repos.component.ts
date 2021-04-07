import { FindService } from './../../services/find.service';
import { Repos } from './../../classes/repos';
import { RepoName } from './../../classes/repo-name';
import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  username:any;
  reponame: any;
  repos: Repos[];
  reposByName: RepoName[];

  constructor(private searchService: FindService, private router: Router ) { }
  findRepoName(){
    this.searchService.repoSearchName(this.reponame)
    this.repos = this.searchService.reposByName
    this.reponame = ''
  }
findProfile() {
  localStorage.setItem("username", this.username);
  this.router.navigate(['/users']);
  this.username = ''
}



  ngOnInit(): void {
  }




  
}
