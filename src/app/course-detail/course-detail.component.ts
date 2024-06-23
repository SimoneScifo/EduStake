import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Course } from '../models/course.model';
import { SafeUrlPipeModule } from '../safe-url.pipe.module';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, SafeUrlPipeModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent {
  @Input() course: Course | null = null;
}
