import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  newUser=new User ("");
  @Output() addUser = new EventEmitter<User>();

  submitUser(){
this.addUser.emit(this.newUser);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
