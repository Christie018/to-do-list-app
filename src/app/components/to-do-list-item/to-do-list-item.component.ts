import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo } from '../../interfaces/toDoList.model';

@Component ({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrl: 'to-do-list-item.component.css',
  standalone: true,
  imports: [CommonModule]
})

export abstract class ToDoListItemComponent {
  @Input() todo: ToDo = {
    task: '',
    completed: false,
    duration: 0
  };

  @Output() markCompleted = new EventEmitter<ToDo>();

  @Output() removeTodo = new EventEmitter<ToDo>;

  constructor(){}

  onMarkCompleted() {
    this.markCompleted.emit(this.todo);
  }
  onRemoveTodo() {
    this.removeTodo.emit(this.todo);
  }
}