import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Course } from './models/course.model';
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CourseListComponent, CourseDetailComponent, CommonModule]
})
export class AppComponent {
  selectedCourse: Course | null = null;

  selectCourse(course: Course | null) {
    this.selectedCourse = course;
  }
}
