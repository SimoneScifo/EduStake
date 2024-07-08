import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Course } from './models/course.model';
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { CommonModule } from '@angular/common';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, CourseListComponent, CourseDetailComponent, CommonModule, LoginPopupComponent]
})
export class AppComponent {
  selectedCourse: Course | null = null;

  constructor(public popupService: PopupService) {}

  selectCourse(course: Course | null) {
    this.selectedCourse = course;
  }

  togglePopup() {
    this.popupService.togglePopup();
  }
}
