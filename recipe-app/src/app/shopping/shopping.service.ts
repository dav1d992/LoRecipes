import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Carrots', 2),
    new Ingredient('Tomatoes', 15),
  ];
  constructor() {}

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
