import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SkillComponent } from "./skill/component/skill.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
    {path: '', component: AppComponent, children: [
        { path: 'skill', component: SkillComponent },

    ]},
    { path: '**', component: AppComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  