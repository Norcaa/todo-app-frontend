import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskFace } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: TaskFace;
  faTimes = faTimes;

  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter;

  onToggle(task: any){
    this.onToggleReminder.emit(task);
  }

  constructor() {}

  ngOnInit(): void {
  }

}
