import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    { name: "Bread", price: 1.5 },
    { name: "Shirt", price: 60 },
    { name: "Water", price: 0.99 },
    { name: "Table", price: 200 },
  ];

  title = input("");
}
