import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products: any;
  constructor() { }

  ngOnInit() {
    this.products = [{id: 1001, name: 'MOBILE', description: 'No cost EMI from ₹1,499/month. Standard EMI also availableView Plans',
    price: 19999.99,  imagePath: 'assets/images/10001.jpg'},
     {id: 1002, name: 'MOBILE', description: 'Nokia A6 Pro Brand', price: 13499.99,
     imagePath: 'assets/images/10002.jpg'},
     {id: 1003, name: 'MOBILE', description: 'Samsung J7 Pro Second Edition', price: 19999.99,
     imagePath: 'assets/images/10003.jpg'},
     {id: 1004, name: 'MOBILE', description: 'Get upto ₹11400 off on exchangeBuy with Exchange Special PriceGet extra ₹2000 off ',
     price: 13499.99, imagePath: 'assets/images/10004.jpg'},
     {id: 1005, name: 'MOBILE', description: 'Samsung J7 Pro Second Edition', price: 19999.99,
     imagePath: 'assets/images/10005.jpg'},
     {id: 1006, name: 'MOBILE', description: 'Nokia A6 Pro Brand', price: 13499.99,
     imagePath: 'assets/images/10006.jpg'},
    ];

  }

}
