import { Component, Input } from '@angular/core';
import { StudentDetails } from '../student-form/studentdetails.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.css'
})
export class StudentDataComponent {

  @Input() studentsData: StudentDetails[]=[];

  constructor(){
    console.log(this.studentsData)
  }
  onDeleteStudent(rollno:number|null){
    this.studentsData=this.studentsData.filter(student=> student.rollno !== rollno);
    console.log(this.studentsData);
  } 

}
