// Input is being used cause 2 properties are being add to app-button which can take inputs
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Output is used for event emitter
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
