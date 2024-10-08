import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Product } from '../product';
import { Category } from '../category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit, OnDestroy, OnInit {
  title: string = '';
  searchTerm: string = '';
  products: Product[] = [];
  categories: Category[] = [];
  error: string | null = null;
  isOpen: boolean = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  ngAfterViewInit(): void {
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
      logoContainer.addEventListener('click', this.toggleFlip);
    }
  }

  ngOnDestroy(): void {
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
      logoContainer.removeEventListener('click', this.toggleFlip);
    }
  }

  fetchCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => {
        this.categories = data; 
      },
      (error) => {
        console.error('Error fetching categories:', error);
        this.error = error; 
      }
    );
}

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/search-results'], {
        queryParams: { name: this.searchTerm }
      });
      this.searchTerm = ''; 
      this.toggleSearch(); 
    } else {
      this.error = 'Please enter a search term.';
    }
  }

  toggleFlip = (): void => {
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
      logoContainer.classList.toggle('clicked');
    }
  }

  toggleSearch(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => {
        const input = document.querySelector('.search-input') as HTMLInputElement;
        if (input) {
          input.focus();
        }
      }, 0);
    }
  }
}
