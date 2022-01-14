import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipe: Array<Recipe> = [
    new Recipe("test","this is a test desc","this is a test url")
  ];

  constructor() {}

  ngOnInit(): void {}
}
