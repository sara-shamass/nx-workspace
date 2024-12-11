import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '@nx-workspace/products';

@Component({
  selector: 'lib-customers',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  customers = [
    { name: "Roland", city: "Gilead" },
    { name: "Eddie", city: "New York" },
    { name: "Odetta", city: "New York" },
    { name: "Jake", city: "New York" },
  ];
}
