import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../mock-books';
import { Book } from '../book';

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

  add(value: string) {
    console.log(value);
    const ids = BOOKS.map(({ id }) => id);
    const nextId = Math.max(...ids) + 1;
    console.log(nextId);
    const newBook = new Book(nextId, value);

    BOOKS.push(newBook);
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