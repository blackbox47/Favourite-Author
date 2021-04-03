import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-authors',
  templateUrl: './favorite-authors.component.html',
  styleUrls: ['./favorite-authors.component.css']
})
export class FavoriteAuthorsComponent implements OnInit {

  authors = [];

  constructor() {
    for (let i = 0; i < localStorage.length; i++) {
      this.authors.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }

  ngOnInit(): void {
  }

}
