import { Component } from '@angular/core';
import { StudentDetails } from './studentdetails.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentDataComponent } from '../student-data/student-data.component';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule, CommonModule,StudentDataComponent],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  studentData: StudentDetails={
    rollno:null,
    studentname:"",
    gender:"",
    phonenumber:null,
    email:"",
    branch:""
  }
  StudentsData:StudentDetails[]=[];

  onSubmit(){
    
    this.StudentsData.push({...this.studentData});
    console.log(this.StudentsData);
  }
  
}
