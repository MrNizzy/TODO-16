import { Injectable } from '@angular/core';
import { Task } from '@interfaces/todo.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private tasks: Task[] = [];
  private taskSubject = new BehaviorSubject<Task[]>(this.tasks);

  getTasks() {
    return this.taskSubject.asObservable();
  }

  addTask(task: Task) {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
    this.taskSubject.next(this.tasks);
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.taskSubject.next(this.tasks);
  }

  updateTask(task: Task) {
    this.tasks = this.tasks.map((t) => (t.id === task.id ? task : t));
    this.taskSubject.next(this.tasks);
  }
}
