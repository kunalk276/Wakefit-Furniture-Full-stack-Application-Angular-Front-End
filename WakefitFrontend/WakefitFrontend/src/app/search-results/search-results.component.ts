import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  searchTerm: string = '';
  products: Product[] = [];
  error: string | null = null;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        this.searchTerm = params['name'] || '';
        if (this.searchTerm) {
          this.productService.searchProductsByName(this.searchTerm).subscribe(
            (data: Product[]) => {
              this.products = data;
              console.log('Search results:', this.products);
            },
            error => {
              this.error = 'Error searching for products. Please try again later.';
              console.error('Error searching for products', error);
            }
          );
        }
      });
  }

  viewDetails(productId: number | undefined): void {
    if (productId !== undefined) {
      this.router.navigate(['/product-details', productId]);
    } else {
      console.error('Product ID is undefined');
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
