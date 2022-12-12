import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() public sendCloseModal = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.sendCloseModal.emit()
  }

}
