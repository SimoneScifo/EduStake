import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [CommonModule]
})

export class HomePageComponent {
  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    if (sidebar && mainContent) {
      sidebar.classList.toggle('expanded');
      mainContent.classList.toggle('expanded');
    }
  }
}
