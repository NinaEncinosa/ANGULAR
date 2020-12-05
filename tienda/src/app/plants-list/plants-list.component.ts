import { Component, OnInit } from '@angular/core';
import { Plant } from './plant';
import { PlantCartService } from '../plant-cart.service';
import { PlantDataService } from '../plant-data.service';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.scss'],
})
export class PlantsListComponent implements OnInit {
  //si uso la URI para levantar los datos del back-end declaro plantos asi:
  // plants: Plant[] = [];

  plants: Plant[] = [
    {
      image: 'assets/img/soja.jpg',
      name: 'soja',
      type: 'semilla',
      price: 23,
      stock: 2,
      clearance: false,
      quantity: 0,
    },
    {
      image: 'assets/img/zanahoria.jpg',
      name: 'zanahoria',
      type: 'raiz',
      price: 61,
      stock: 5,
      clearance: false,
      quantity: 0,
    },
    {
      image: 'assets/img/espinaca.jpg',
      name: 'espinaca',
      type: 'hoja',
      price: 25,
      stock: 3,
      clearance: false,
      quantity: 0,
    },
    {
      image: 'assets/img/cebolla.jpeg',
      name: 'cebolla',
      type: 'bulbo',
      price: 55,
      stock: 6,
      clearance: true,
      quantity: 0,
    },
    {
      image: 'assets/img/brocoli.jpg',
      name: 'brocoli',
      type: 'flor',
      price: 42,
      stock: 0,
      clearance: false,
      quantity: 0,
    },
  ];

  constructor(
    private cart: PlantCartService,
    private plantsDataService: PlantDataService
  ) {}

  ngOnInit(): void {
    // this.plantsDataService
    //   .getAll()
    //   .subscribe((plants) => (this.plants = plants));
  }

  addToCart(plant: Plant): void {
    this.cart.addToCart(plant);
    plant.stock -= plant.quantity;
    plant.quantity = 0;
  }

  maxReached(m: string) {
    alert(m);
  }
}
