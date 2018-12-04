import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = BOOKS;

  constructor() {
  }

  ngOnInit() {
  }

  onKey(value: string) {
    console.log(value);

    if (value) {
      this.books = BOOKS.filter(x => x.name.includes(value));
    } else {
      this.books = BOOKS;
    }
  }

}