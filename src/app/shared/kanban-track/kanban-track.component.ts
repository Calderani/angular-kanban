import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kanban-track',
  templateUrl: './kanban-track.component.html',
  styleUrls: ['./kanban-track.component.scss']
})
export class KanbanTrackComponent implements OnInit {

  @Output() public sendOpenTaskModal = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  openTaskModal() {
    this.sendOpenTaskModal.emit()
  }

}
