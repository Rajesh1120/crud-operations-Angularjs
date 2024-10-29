import { Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    // {
    //     path:"student-form",
    //     component: StudentFormComponent
    // },
    {
        path:'',
        component:HomePageComponent
    },
    {
        path:'add-student',
        component: StudentFormComponent
    }

];
