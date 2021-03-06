import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Carrots', 2),
    new Ingredient('Tomatoes', 15),
  ];
  constructor() {}

  ngOnInit() {}
}
