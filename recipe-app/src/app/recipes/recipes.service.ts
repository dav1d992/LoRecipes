import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { Recipe } from '../models/recipe';
import { ShoppingService } from '../shopping/shopping.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private shoppingService: ShoppingService) {}

  recipes: Recipe[] = [
    new Recipe(
      'Butter Chicken',
      'Indian Dish',
      'https://s3-eu-west-1.amazonaws.com/images-marleyspoon-production/media/recipes/78426/main_photos/large/indisches_curry_butter_chicken-17fd232d7e2d107442b1530acd1da0bc.jpeg',
      [
        new Ingredient('Butter', 1),
        new Ingredient('Chicken', 1),
        new Ingredient('Tomato', 2),
      ]
    ),
    new Recipe(
      'Chicken Curry',
      'Indian Dish',
      'https://tipbuzz.com/wp-content/uploads/Spicy-Chicken-thumbnail-500x500.jpg',
      [new Ingredient('Chicken', 1), new Ingredient('Curry', 3)]
    ),
  ];

  public getRecipes() {
    return this.recipes;
  }

  public getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  public updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  public deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
