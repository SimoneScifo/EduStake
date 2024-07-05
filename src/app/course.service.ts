import { Injectable } from '@angular/core';
import { Course } from './models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      title: "Microsoft Excel: dai fondamentali al livello avanzato",
      instructor: "Massimo Zucchini",
      rating: 4.5,
      reviews: 16938,
      price: 84.99,
      imageUrl: "data:image/jpeg;base64,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",
      videoUrl: "https://www.youtube.com/embed/Pwly1cOa2hg?si=AOeArQtKIV9aqSx2"},
    {
      id: 2,
      title: "Python Pro - La Guida Completa, da Zero a...",
      instructor: "Alessandro Bemporad",
      rating: 4.5,
      reviews: 6993,
      price: 89.99,
      imageUrl: "data:image/png;base64,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",
      videoUrl: "https://www.youtube.com/embed/UzqEIcxNAwo?si=ig1zyhKNErC3Kt6K"},
    {
      id: 3,
      title: "Corso completo di inglese da zero!",
      instructor: "Giulia Sparano",
      rating: 4.6,
      reviews: 6073,
      price: 99.99,
      imageUrl: "data:image/png;base64,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",
      videoUrl: "https://www.youtube.com/embed/1yuc4BI5NWU"
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  // Simulate a payment process
  processPayment(courseId: number): Promise<boolean> {
    return new Promise((resolve) => {
      // Simulate payment processing delay
      setTimeout(() => {
        // Here we simulate a successful payment
        resolve(true);
      }, 2000); // Simulate 2 seconds delay for payment processing
    });
  }
}
