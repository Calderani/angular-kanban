import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kanban-task-card',
  templateUrl: './kanban-task-card.component.html',
  styleUrls: ['./kanban-task-card.component.scss']
})
export class KanbanTaskCardComponent implements OnInit {

  @Output() public sendDragStart = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  dragStart() {
    this.sendDragStart.emit()
  }

}
