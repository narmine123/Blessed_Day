import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ToDoComponent } from './to-do/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
      WelcomeComponent,
      ToDoComponent
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
