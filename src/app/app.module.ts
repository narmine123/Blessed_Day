import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent  
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
