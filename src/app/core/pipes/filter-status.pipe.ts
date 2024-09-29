import { Pipe, PipeTransform } from '@angular/core';
import { StatusTask } from '@interfaces/status.interface';
import { Task } from '@interfaces/todo.interface';

@Pipe({
  name: 'filterStatus',
  standalone: true,
})
export class FilterStatusPipe implements PipeTransform {
  transform(items: Task[], status: StatusTask): Task[] {
    if (status === StatusTask.ALL) {
      return items;
    }
    return items.filter(
      (t) => t.completed === (status === StatusTask.COMPLETED)
    );
  }
}
