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
  selectedItems: Book[] = [];
  selected = '';

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

  select(value: number, checked: boolean) {
    const me = this;
    const book = BOOKS.filter(x => x.id === value)[0];

    if (checked) {
      me.selectedItems.push(book);
    } else {
      me.selectedItems.splice(this.selectedItems.indexOf(book), 1);
    }
    me.selected = '';
    me.selectedItems.forEach(function(selectedItem) {
      me.selected += selectedItem.name + ' ';
    });
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
