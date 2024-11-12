import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillComponent } from './skill/skill.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },  
    { path: 'to-do', component: ToDoComponent },
    { path: 'skill', component: SkillComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
