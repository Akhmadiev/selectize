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

  addedBooksValue = '';

  constructor() {
    const me = this;
    BOOKS.forEach(function(value) {
      me.addedBooksValue += value.name + ' ';
    });
  }

  ngOnInit() {
  }

  onAdd(value: string) {
    const me = this;
    const valueArr = value.split(' ');
    const newValue = valueArr[valueArr.length - 1] + ' ';
    me.addedBooksValue += newValue;
    me.add(newValue);
  }

  onRemove() {
    const books = BOOKS.filter(x => !x.checked);
    this.books = books;

    // const book = BOOKS[BOOKS.length - 1];
    // const me = this;
    // me.addedBooksValue = '';
    // BOOKS.splice(this.selectedItems.indexOf(book), 1);
    // BOOKS.forEach(function(value) {
    //   me.addedBooksValue += value.name + ' ';
    // });
  }

  add(value: string) {
    console.log(value);
    const ids = BOOKS.map(({ id }) => id);
    const nextId = Math.max(...ids) + 1;
    console.log(nextId);
    const newBook = new Book(nextId, value, false);

    this.books.push(newBook);
  }

  // select(value: number, checked: boolean) {
  //   const me = this;
  //   const book = BOOKS.filter(x => x.id === value)[0];

  //   if (checked) {
  //     book.checked = true;
  //     me.selectedItems.push(book);
  //   } else {
  //     book.checked = false;
  //     me.selectedItems.splice(this.selectedItems.indexOf(book), 1);
  //   }
  //   me.selected = '';
  //   me.selectedItems.forEach(function(selectedItem) {
  //     me.selected += selectedItem.name + ' ';
  //   });
  // }

  select(value: number) {
    const book = this.books.filter(x => x.id === value)[0];
    book.checked = !book.checked;
  }

  onKey(value: string) {
    console.log(value);
    const me = this;
    value = value.toLowerCase();

    if (value) {
      this.books = BOOKS.filter(x => x.name.toLowerCase().includes(value));
    } else {
      this.books = BOOKS;
    }

    me.addedBooksValue = '';
    this.books.forEach(function(selectedItem) {
      me.addedBooksValue += selectedItem.name + ' ';
    });
  }

}
