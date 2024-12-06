import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-patterns',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './patterns.component.html',
  styleUrl: './patterns.component.css'
})
export class PatternsComponent {

}
