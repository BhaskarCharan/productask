import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public products = [];
  constructor(private data: ProductsService ) {}

  ngOnInit() {
    this.products = this.data.getProducts();
  }
}
