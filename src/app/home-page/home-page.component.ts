import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, CommonModule, FooterComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  // Array to hold FAQ data, adding an 'isOpen' property for each FAQ
  faqs = [
    {
      question: 'Kako funkcioniše proces naručivanja?',
      answer: 'Naručivanje je jednostavno! Izaberite igračku koju želite, i dodajte u korpu. Nakon toga, pratite uputstva na ekranu.',
      isOpen: false
    },
    {
      question: 'Koliko vremena je potrebno za izradu igračke?',
      answer: 'Izrada igračke može potrajati između 5 i 10 dana, zavisno od kompleksnosti.',
      isOpen: false
    },
    {
      question: 'Da li mogu da vratim ili zamenim igračke?',
      answer: 'Igračke možete vratiti u roku od 30 dana od datuma kupovine.',
      isOpen: false
    },
    {
      question: 'Kako mogu da se obratim za dodatna pitanja?',
      answer: 'Za dodatna pitanja, možete nas kontaktirati putem e-pošte ili telefona.',
      isOpen: false
    }
    
  ];

   // Define arrays for each column with the same type as `faqs`
   leftColumnFaqs: { question: string; answer: string; isOpen: boolean }[] = [];
   rightColumnFaqs: { question: string; answer: string; isOpen: boolean }[] = [];
 
   constructor() {
     // Split the FAQs between left and right columns
     this.leftColumnFaqs = this.faqs.filter((_, i) => i % 2 === 0);
     this.rightColumnFaqs = this.faqs.filter((_, i) => i % 2 !== 0);
   }
 
   // Toggle the isOpen property for the specific FAQ item
   toggleFAQ(faq: { question: string; answer: string; isOpen: boolean }): void {
     faq.isOpen = !faq.isOpen;
   }
}