import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';

import {ToggleButtonModule} from 'primeng/togglebutton';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {SidebarModule} from 'primeng/sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from '../shared/services/toast.service';
import { CourseService } from '../shared/services/course.service';
import { LoaderService } from '../shared/services/loader.service';


@NgModule({
  declarations: [
    CourseListComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    ToggleButtonModule,
    DropdownModule,
    CalendarModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CourseService, LoaderService, ToastService],
  exports: [CourseListComponent, 
    AddCourseComponent]
})
export class CoreModule { }
