import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  private taskModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  isModalVisible() {
    return this.taskModal
  }

  openModal() {
    const open: boolean = true
    this.taskModal = open
  }

  closeModal() {
    const close: boolean = false
    this.taskModal = close
  }
}
