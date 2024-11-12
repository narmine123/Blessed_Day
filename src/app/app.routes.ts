import { Routes } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillComponent } from './skill/skill.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },  
    { path: 'to-do', component: ToDoComponent },
    { path: 'skill', component: SkillComponent },
];