import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass


@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})

export class NavigationBarComponent {
  searchQuery: string = '';
  isValid: boolean = true;

  onSearchChange() {
    // Example validation, you can replace this with your own validation logic
    this.isValid = this.searchQuery.trim().length > 0;
  }
}
