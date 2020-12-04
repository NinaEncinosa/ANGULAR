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
    },
    {
      image: 'assets/img/zanahoria.jpg',
      name: 'zanahoria',
      type: 'raiz',
      price: 61,
      stock: 5,
    },
    {
      image: 'assets/img/espinaca.jpg',
      name: 'espinaca',
      type: 'hoja',
      price: 25,
      stock: 3,
    },
    {
      image: 'assets/img/cebolla.jpeg',
      name: 'cebolla',
      type: 'bulbo',
      price: 55,
      stock: 6,
    },
    {
      image: 'assets/img/brocoli.jpg',
      name: 'brocoli',
      type: 'flor',
      price: 42,
      stock: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
