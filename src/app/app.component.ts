import { Component } from '@angular/core';
import { ToDo } from './interfaces/toDoList.model';
import { ToDoListFormComponent } from './components/to-do-list-form/to-do-list-form.component';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';
import { CommonModule } from '@angular/common';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ToDoListFormComponent, ToDoListItemComponent, CommonModule]
})

export class AppComponent {
  todo: ToDo[] = [
    { 
      task: 'Clean my room',
      completed: false,
      duration: 1
    },

    {
      task: 'Finish GC C# HMWK',
      completed: true,
      duration: 3
    },

    {
      task: 'Workout',
      completed: false,
      duration: 1
    }
  ]

  addToDo(newTodo: ToDo) {
    console.log(newTodo)
    this.todo.push(newTodo);
  }

  markCompleted(todo: ToDo) {
    const index = this.todo.findIndex(t => t ===todo);

    if (index !== -1)
      {
        this.todo[index].completed = !this.todo[index].completed;
      }
  }

  removeToDo(todo: ToDo) {
    this.todo = this.todo.filter (t => t !== todo);
  }
}