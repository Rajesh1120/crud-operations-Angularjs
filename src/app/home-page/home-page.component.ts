import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentDataComponent } from "../student-data/student-data.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, StudentFormComponent, StudentDataComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  isclicked=false;
  constructor(private router: Router){
    
  }
  navigatetoAddstudentform(){
    this.router.navigate(['/add-student']);
    this.isclicked=true;
  }

}
