import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityName',
  standalone: true,
})
export class PriorityNamePipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Baja';
      case 2:
        return 'Media';
      case 3:
        return 'Alta';
      default:
        return 'Desconocida';
    }
  }
}
