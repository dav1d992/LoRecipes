import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor() {}

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Butter Chicken',
      'Indian Dish',
      'https://s3-eu-west-1.amazonaws.com/images-marleyspoon-production/media/recipes/78426/main_photos/large/indisches_curry_butter_chicken-17fd232d7e2d107442b1530acd1da0bc.jpeg'
    ),
    new Recipe(
      'Chicken Curry',
      'Indian Dish',
      'https://tipbuzz.com/wp-content/uploads/Spicy-Chicken-thumbnail-500x500.jpg'
    ),
  ];

  public getRecipes() {
    return this.recipes;
  }
}
