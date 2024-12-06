import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo.service';
import { SkillService } from './Skill.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Obligatoire pour Toastr
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Durée de la notification en millisecondes
      positionClass: 'toast-top-right', // Position de la notification
      preventDuplicates: true, // Éviter les duplications
    }),
  ],
  providers: [TodoService,SkillService],
  

  bootstrap: [AppComponent]
})
export class AppModule { }
