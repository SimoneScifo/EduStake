import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

@Output() selectedCourse: EventEmitter<Course> = new EventEmitter<Course>();

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
  selectCourse(course: Course): void {
    this.selectedCourse.emit(course);
  }
}
