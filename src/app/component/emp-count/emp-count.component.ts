import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-emp-count',
  templateUrl: './emp-count.component.html',
  styleUrls: ['./emp-count.component.css']
})
export class EmpCountComponent implements OnInit {
  selectedRadioButton: string = 'All';

  @Output()
  onSelectedRadioButton: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  all: number;

  @Input()
  male: number;

  @Input()
  female: number;

  constructor() { }

  ngOnInit() {
  }
recordTheRadioButtonChange() {
  this.onSelectedRadioButton.emit(this.selectedRadioButton);
  console.log(this.selectedRadioButton);
}
}
