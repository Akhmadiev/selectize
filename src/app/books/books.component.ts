import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  allBooks: Book[] = [];
  id: number = 1;

  constructor() {
  }

  ngOnInit() {
  }

  onAdd(value: string) {
    const valueArr = value.split(' ');
    const newValue = valueArr[valueArr.length - 1] + ' ';
    const names = this.allBooks.map(({ name }) => name);
    
    if (newValue == ' ' || names.includes(newValue)) {
      return;
    }
    
    const newBook = new Book(this.id++, newValue, false);

    this.allBooks.push(newBook);
    this.books = this.allBooks;
  }

  onRemove() {
    const books = this.books.filter(x => !x.checked);
    this.books = books;
    this.allBooks = books;
  }

  onSelect(value: number) {
    const book = this.books.filter(x => x.id === value)[0];
    book.checked = !book.checked;
  }

  onFilter(value: string) {
    value = value.toLowerCase();

    if (value && value != ' ') {
      this.books = this.allBooks.filter(x => x.name.toLowerCase().includes(value));
    } else {
      this.books = this.allBooks;
    }
  }

}
