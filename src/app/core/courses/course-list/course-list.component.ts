import { Component, OnInit } from '@angular/core';

import Course from '../../models/course.model';
import { CourseService } from '../../../shared/services/course.service';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }
}
