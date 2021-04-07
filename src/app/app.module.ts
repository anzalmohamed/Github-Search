import { ReposComponent } from './components/repos/repos.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { JoinedPipe } from './pipe/joined.pipe';
import { ClickDirective } from './Directives/click.directive';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReposComponent,
    JoinedPipe,
    ClickDirective
    
 
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
