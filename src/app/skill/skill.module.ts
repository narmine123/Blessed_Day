// skill.module.ts (or the relevant module file)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { SkillComponent } from './component/skill.component';

@NgModule({
  declarations: [
    SkillComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Add FormsModule here
  ]
})
export class SkillModule { }