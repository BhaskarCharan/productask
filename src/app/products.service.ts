import { Injectable } from '@angular/core';

// Product Interface
export interface IProduct {
  info: string,
  text: string,
  discount: string,
  img: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  getProducts() {
    let Products = [];

    let item1: IProduct = {
      info:"use supercoins",
      text:"get offers on fashion",
      discount:"EXTRA $200 OFF",
      img:"https://memoproject.s3.ap-south-1.amazonaws.com/aws/kwickbox.jpg"
    }
    let item2: IProduct = {
      info:"use supercoins",
      text:"get offers on fashion",
      discount:"EXTRA $200 OFF",
      img:"https://memoproject.s3.ap-south-1.amazonaws.com/charan.jpg"
    }
    let item3: IProduct = {
      info:"use supercoins",
      text:"get offers on fashion",
      discount:"EXTRA $200 OFF",
      img:"https://memoproject.s3.ap-south-1.amazonaws.com/charan.jpg"
    }
    let item4: IProduct = {
      info:"use supercoins",
      text:"get offers on fashion",
      discount:"EXTRA $200 OFF",
      img:"https://memoproject.s3.ap-south-1.amazonaws.com/aws/kwickbox.jpg"
    }

    Products.push(item1, item2, item3, item4);

    return Products;
  }
  constructor() { }
}
