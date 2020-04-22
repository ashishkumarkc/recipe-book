import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        environment.dbUrl,
        recipes
      )
      .subscribe(response => {
        console.log(response);
      }, error => {
        let message="An error occured";
        if(error && error.error && error.error.error && error.error.error) {
          message = error.error.error;
        }
        alert("Saving of data to DB failed !\nReason: " + message);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        environment.dbUrl
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }
}
