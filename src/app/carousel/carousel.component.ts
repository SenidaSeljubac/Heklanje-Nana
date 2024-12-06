import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;  // Get reference to the carousel element
  scrollAmount: number = 0;
  cardWidth: number = 635;  // Adjust based on the card width + margin
  scrollSpeed: number = 1000;  // Time between scrolls in milliseconds

  constructor() {}

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  startAutoScroll(): void {
    setInterval(() => {
      this.scrollAmount += this.cardWidth;
  
      // Check if we've reached the end of the carousel
      if (this.scrollAmount >= this.carousel.nativeElement.scrollWidth) {
        // Smoothly transition to the beginning
        this.carousel.nativeElement.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
  
        // Reset the scroll amount for the next loop
        this.scrollAmount = 0;
      } else {
        this.carousel.nativeElement.scrollTo({
          left: this.scrollAmount,
          behavior: 'smooth'
        });
      }
    }, this.scrollSpeed);
  }
}
