import { Component, OnInit } from '@angular/core';
import { Plant } from './plant';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.scss'],
})
export class PlantsListComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}

  upQuantity(plant: Plant): void {
    if (plant.quantity < plant.stock) plant.quantity++;
  }

  downQuantity(plant: Plant): void {
    if (plant.quantity > 0) plant.quantity--;
  }
}