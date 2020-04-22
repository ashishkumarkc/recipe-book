import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Italian Pizza', 'This is a very light but strangely filling pizza. It\'s quite quick to put together for a snack and even a full meal. The sauce is also good with pasta but tastes best on these pizzas.', 'assets/images/italian_pizza.jpg', [
      new Ingredient('Pizza Sauce', 2),
      new Ingredient('Dough Mix', 1),
      new Ingredient('Pepperoni', 1)
    ]),
    new Recipe('Summer Salad', 'This fresh and flavorful salad features buttery yellow corn tossed with chunks of tomato and onion with a fresh basil vinaigrette.', 'assets/images/summer_salad.jpg', [
      new Ingredient('Corn', 2),
      new Ingredient('Tomatoes', 4),
      new Ingredient('Onions', 2),
      new Ingredient('White Vinegar', 1)
    ]),
    new Recipe('Pasta Rustica', 'Green Ripe Olives - or even a mixture of both - are tossed into this Pasta Rustica, bringing together the flavors of sweet bell pepper, mellow olive oil, and spicy pepper flakes. Finish with Parmesan cheese, and enjoy!', 'assets/images/pasta_rustica.jpg', [
      new Ingredient('Olive Oil', 1),
      new Ingredient('Pepper', 4),
      new Ingredient('Onions', 1),
      new Ingredient('Parsley', 1)
    ]),
    new Recipe('Sesame Noodles', 'This homemade sauce makes a sweet and spicy foil for linguine. The best sesame noodles that you will ever have!', 'assets/images/sesame_noodles.jpg', [
      new Ingredient('Linguine Pasta', 2),
      new Ingredient('Garlic', 4),
      new Ingredient('Safflower Oil', 1),
      new Ingredient('Chilli Sauce', 1),
      new Ingredient('Sesame Seeds, toasted', 1)
    ])
  ];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
