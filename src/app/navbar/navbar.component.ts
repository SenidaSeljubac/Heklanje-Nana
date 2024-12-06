import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
openPatterns() {
  this.router.navigateByUrl('patterns');
}
  categories = false;
  subcategories: boolean = false;
  igracke: boolean = false;
  baby: boolean = false;

  searchVisible: boolean = false; // Controls visibility of the search input
  searchQuery: string = ''; // Holds the search query

  @ViewChild('searchInput') searchInput!: ElementRef;  // Get reference to the search input element
  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) {

  }

    // Function to toggle the visibility of the search input
    toggleSearchInput(): void {
      this.searchVisible = !this.searchVisible;
    }
  
    // Function that gets triggered when search input changes
    onSearchChange(): void {
      console.log(this.searchQuery); // Handle search logic here (e.g., filter items or navigate)
    }

  openCategories() {
    this.categories = !this.categories;
    this.igracke = false;
    this.baby = false;
  }

  openIgracke() {
    this.igracke = !this.igracke;
    this.baby = false;
  }

  openBaby() {
    this.baby = !this.baby;
    this.igracke = false;
  }

  goToCategories() {
    this.router.navigate(['/categories']);
  }
  
 openContactForm() {
  this.router.navigateByUrl('contact')
 }
}
