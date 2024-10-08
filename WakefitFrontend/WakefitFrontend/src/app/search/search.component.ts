import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // Adjust path if needed
import { Product } from '../product'; // Adjust path if needed

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Optionally, you can initialize the component here
  }

  onSearchTermChange(term: string): void {
    this.searchTerm = term;
  }

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.productService.searchProductsByName(this.searchTerm).subscribe(
        (data: Product[]) => {
          this.products = data;
          // Optionally, handle the search results (e.g., display them in the template)
        },
        error => {
          console.error('Error searching for products', error);
        }
      );
    }
  }
}
