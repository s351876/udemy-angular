import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'this is a test', 'https://www.bbcgoodfood.com/sites/default/files/2063669_MEDIUM.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
