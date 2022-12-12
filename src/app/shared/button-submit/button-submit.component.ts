import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.scss']
})
export class ButtonSubmitComponent implements OnInit {

  @Input() public isLoad: boolean = false
  @Output() public sendClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  
  handleClick() {
    this.sendClick.emit()
  }

}
