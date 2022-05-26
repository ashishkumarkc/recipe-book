import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    for (let i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].name.toLowerCase() === ingredient.name.toLowerCase()) {
        this.ingredients[i].amount += ingredient.amount;
        this.ingredientsChanged.next(this.ingredients.slice());
        return;
      }
    }
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    let originalMap = {};
    for (let i = 0; i < this.ingredients.length; i++) {
      originalMap[this.ingredients[i].name.toLowerCase()] = this.ingredients[i];
    }
    let finalArray = [], tmpIg, existingIg;
    for (let i = 0; i < ingredients.length; i++) {
      if (!originalMap[ingredients[i].name.toLowerCase()]) {
        originalMap[ingredients[i].name.toLowerCase()] = ingredients[i];
      } else {
        existingIg = originalMap[ingredients[i].name.toLowerCase()];
        tmpIg = new Ingredient(existingIg.name, existingIg.amount + ingredients[i].amount);
        originalMap[ingredients[i].name.toLowerCase()] = tmpIg;
      }
    }
    Object.getOwnPropertyNames(originalMap).forEach((key) => {
      finalArray.push(originalMap[key]);
    });
    this.ingredients = finalArray;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
