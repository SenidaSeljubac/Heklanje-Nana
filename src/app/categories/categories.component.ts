import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";  // Import FormsModule for ngModel
import { Router } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],  // Import necessary modules
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']  // Fix typo: styleUrls
})
export class CategoriesComponent {
  filters = {
    igracke: false,
    pamucne: false,
    plisane: false,
    interaktivne: false,
    baby: false,
    zvecke: false,
    glodalice: false,
    babyBox: false,
    mamaKcerka: false,
    premium: false
  };

  // Properties to manage the expanded state for categories
  isIgrackeExpanded: boolean = false;

  // Constructor
  constructor(private router: Router) {
    // Any initialization logic can go here
  }

  // Function to toggle Igračke subcategories
  toggleIgracke() {
    this.isIgrackeExpanded = !this.isIgrackeExpanded;
  }

  openIgracka(product: any) {
    this.router.navigateByUrl('product/' + product.id)
  }


  sortOption: string = 'default';

  products = [
    {
      id: 1,
      name: 'Naziv igračke',
      price: 39.00,
      category: 'igracke',
      subcategory: 'pamučne',  // Add subcategory to products
      image: 'assets/meda.jpeg'
    },
    {
      name: 'Plišana igračka',
      price: 25.00,
      category: 'igracke',
      subcategory: 'plišane',
      image: 'assets/meda.jpeg'
    },
    {
      name: 'Interaktivna igračka',
      price: 50.00,
      category: 'igracke',
      subcategory: 'interaktivne',
      image: 'assets/meda.jpeg'
    },
    {
      name: 'Baby igračka',
      price: 25.00,
      category: 'baby',
      subcategory: 'zvečke',
      image: 'assets/meda.jpeg'
    },
    {
      name: 'Glodalica',
      price: 20.00,
      category: 'baby',
      subcategory: 'glodalice',
      image: 'assets/meda.jpeg'
    },
    {
      name: 'Baby Box',
      price: 60.00,
      category: 'baby',
      subcategory: 'babyBox',
      image: 'assets/meda.jpeg'
    },
    {
      name: 'Mama i Kćerka set',
      price: 50.00,
      category: 'mamaKcerka',
      image: 'assets/meda.jpeg'
    },
    {
      name: 'Premium igračka',
      price: 100.00,
      category: 'premium',
      image: 'assets/meda.jpeg'
    }
  ];





  filteredProducts() {
    let filtered = this.products;

    // Apply main category filters
    if (this.filters.igracke) {
      filtered = filtered.filter(product => product.category === 'igracke' &&
        (this.filters.pamucne ? product.subcategory === 'pamučne' : true) &&
        (this.filters.plisane ? product.subcategory === 'plišane' : true) &&
        (this.filters.interaktivne ? product.subcategory === 'interaktivne' : true)
      );
    }
    if (this.filters.baby) {
      filtered = filtered.filter(product => product.category === 'baby' &&
        (this.filters.zvecke ? product.subcategory === 'zvečke' : true) &&
        (this.filters.glodalice ? product.subcategory === 'glodalice' : true) &&
        (this.filters.babyBox ? product.subcategory === 'babyBox' : true)
      );
    }
    if (this.filters.mamaKcerka) {
      filtered = filtered.filter(product => product.category === 'mamaKcerka');
    }
    if (this.filters.premium) {
      filtered = filtered.filter(product => product.category === 'premium');
    }

    // Apply sorting logic
    if (this.sortOption === 'priceAsc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'priceDesc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }


}


