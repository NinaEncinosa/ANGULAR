import { Injectable } from '@angular/core';
import { Plant } from './plants-list/plant';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantCartService {
  private _cartList: Plant[] = [];
  cartList: BehaviorSubject<Plant[]> = new BehaviorSubject([]); //hago que se vuelva "observavble"

  constructor() {}

  addToCart(plant: Plant) {
    let item: Plant = this._cartList.find((v1) => v1.name == plant.name);
    if (!item) {
      this._cartList.push({ ...plant });
    } else {
      item.quantity += plant.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList); //equivalente al emitt de eventos
  }
}
