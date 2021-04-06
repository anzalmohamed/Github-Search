import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'
import { User } from "../user";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any
  user: User|any
  username: any
 
  getUsers(username: any) {
    interface userResponse {
      id: number,
      login: string,
      avatar_url: string,
      html_url: string,
      repos_url: string,
      public_repos: number,
      followers: number,
      following: number,
      created_at: string,
      updated_at: String
    }

    let promise = new Promise((resolve:any, reject) => {
      this.http.get<userResponse>(`${environment.apiUrl}users/${username}`).toPromise().then(response => {
       
        this.user.id = response.id
        this.user.login = response.login
        this.user. avatar_url = response.avatar_url
        this.user.html_url = response.html_url
        this.user.repos_url = response.repos_url
        this.user.public_repos = response.public_repos    
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.created_at = response.created_at
        this.user. updated_at=response.updated_at

        resolve()
        console.log(response)
      },
        error => {
          this.user.login = "User not found"
          console.log("an error occured")
          reject(error)
        })
    })
    return promise
  }
    
  constructor(private http: HttpClient) { this.users = new User(1, "", "", "", "", 0, 0, 0, "", "") }
 
 
  //getRepos() {
    //return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + this.token)
  //}
  //private username: string ='anzalmohamed'
  //private token: string= environment.tokenAcess
  //`${environment.apiUrl}${username}?access_token${username}?client_id=${environment.apiUrl}`

}
