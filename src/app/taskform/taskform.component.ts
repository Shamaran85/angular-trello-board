import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task, StatusType } from '../constants';


@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
  @Output() taskAdded = new EventEmitter<Task>();

  constructor() { }
  task: Task = {
    title: '',
    description: '',
    id: null,
    status: StatusType.NotStarted
  };

  saveTask() {
    this.taskAdded.emit(this.task);

  }
}
