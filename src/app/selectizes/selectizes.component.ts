import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Selectize } from '../selectize';

@Component({
  selector: 'app-selectizes',
  templateUrl: './selectizes.component.html',
  styleUrls: ['./selectizes.component.css']
})
export class SelectizesComponent implements OnInit {
  selectizes: Selectize[] = [];
  allselectizes: Selectize[] = [];
  selectizeremovevisible = false;
  id = 1;

  items: Selectize[] = [];

  @Input()
  get selectize() {
    return this.selectizes;
  }
  set selectize(val) {
    this.selectizes = val;
    this.allselectizes = this.selectizes;

    if (this.selectize.length) {
      const ids = this.selectizes.map(x => x.id);
      const id = Math.max(...ids);
      this.id = id + 1;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

  onAdd(value: string) {
    const valueArr = value.split(' ');
    const newValue = valueArr[valueArr.length - 1] + ' ';
    const names = this.allselectizes.map(({ name }) => name);

    if (newValue === ' ' || names.includes(newValue)) {
      return;
    }

    const newselectize = new Selectize(this.id++, newValue, false);

    this.allselectizes.push(newselectize);
    this.selectizes = this.allselectizes;
  }

  onRemove() {
    const selectizes = this.selectizes.filter(x => !x.checked);
    this.allselectizes = selectizes;
    this.selectizes = this.allselectizes;
    this.selectizeremovevisible = false;
  }

  onSelect(value: number) {
    const selectize = this.selectizes.filter(x => x.id === value)[0];
    selectize.checked = !selectize.checked;

    if (this.selectize.filter(x => x.checked).length) {
      this.selectizeremovevisible = true;
    } else {
      this.selectizeremovevisible = false;
    }
  }

  onFilter(value: string) {
    value = value.toLowerCase();

    if (value && value !== ' ') {
      this.selectizes = this.allselectizes.filter(x => x.name.toLowerCase().includes(value));
    } else {
      this.selectizes = this.allselectizes;
    }
  }

}
