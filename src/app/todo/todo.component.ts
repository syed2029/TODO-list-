import { Component } from '@angular/core';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        id: this.tasks.length + 1,
        text: this.newTask.trim(),
        completed: false,
      };
      this.tasks.push(newTask);
      this.newTask = '';
    }
  }

  updateTask(task:Task) {
    task.completed = !task.completed;
  }

  removeTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
