import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products :any =[]

  public grandTotal !: number ;
  constructor(private router: Router, private cartService :CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);

  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  checkout(){
    this.emptycart()
    this.router.navigate(['products'])
    alert("Successful purchase!!")
  }
  

}
