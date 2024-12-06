import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {


  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}
  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.product = this.productService.getProductById(productId);
  }

  quantity: number = 1;

increaseQuantity(): void {
  this.quantity++;
}

decreaseQuantity(): void {
  if (this.quantity > 1) {
    this.quantity--;
  }

}

redirectToPlaceOrder() {
  this.router.navigate(['/place-order']);
}

}
