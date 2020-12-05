import { Component, OnInit } from '@angular/core';
import { PlantCartService } from '../plant-cart.service';
import { Plant } from '../plants-list/plant';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cartList$: Observable<Plant[]>;

  constructor(private cart: PlantCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {}
}
