import { Component, OnInit } from '@angular/core';
import { Task } from '@interfaces/todo.interface';
import { TodoService } from '@services/todo.service';
import { MatTableModule } from '@angular/material/table';
import { DatePipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewTaskDialogComponent } from 'src/app/components/new-task-dialog/new-task-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { FilterStatusPipe } from '@pipes/filter-status.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    NgFor,
    DatePipe,
    NgIf,
    JsonPipe,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FilterStatusPipe,
    NgClass,
  ],
})
export class HomeComponent implements OnInit {
  public tasks: Task[] = [];
  public status = 1;

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.todoService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  public changeFilter(status: number): void {
    this.status = status;
  }

  completeTask(task: Task): void {
    task.completed = true;
    this.toastr.info('Tarea completada correctamente', 'Tarea completada');
    this.todoService.updateTask(task);
  }

  uncompleteTask(task: Task): void {
    task.completed = false;
    this.toastr.info('Tarea marcada como incompleta', 'Tarea incompleta');
    this.todoService.updateTask(task);
  }

  addTask(): void {
    const dialogRef = this.dialog.open(NewTaskDialogComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.toastr.success('Tarea añadida correctamente', 'Tarea añadida');
          this.todoService.addTask(res);
        }
      },
      error: () => {
        this.toastr.error('Ha ocurrido un error al añadir la tarea', 'Error');
      },
    });
  }

  removeTask(task: Task): void {
    this.todoService.removeTask(task.id);
  }
}
