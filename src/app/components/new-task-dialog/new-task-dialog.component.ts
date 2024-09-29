import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrls: ['./new-task-dialog.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    NgFor,
  ],
})
export class NewTaskDialogComponent {
  public form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<NewTaskDialogComponent>,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required]],
      limitDate: [null],
      completed: [false],
      priority: [1],
      persons: this.formBuilder.array([
        this.formBuilder.group({
          name: [null, [Validators.required]],
          age: [null, [Validators.required]],
          skills: this.formBuilder.array([
            this.formBuilder.group({
              name: [null, [Validators.required]],
            }),
          ]),
        }),
      ]),
    });
  }

  get persons(): FormArray {
    return this.form.get('persons') as FormArray;
  }

  public getSkills(personIndex: number): FormArray {
    return this.persons.at(personIndex).get('skills') as FormArray;
  }

  public createTask(): void {
    if (this.form.valid) {
      // check if name of person is unique
      const persons = this.form.get('persons') as FormArray;
      const names = persons.controls.map(
        (control) => control.get('name')?.value
      );
      const uniqueNames = new Set(names);
      if (names.length !== uniqueNames.size) {
        this.toastrService.warning(
          'El nombre de la persona debe ser único',
          'Advertencia'
        );
        return;
      }
      this.dialogRef.close(this.form.value);
    }
  }

  public addPerson(): void {
    this.persons.push(
      this.formBuilder.group({
        name: [null, [Validators.required]],
        age: [
          null,
          [Validators.required, Validators.min(1), Validators.max(200)],
        ],
        skills: this.formBuilder.array([
          this.formBuilder.group({
            name: [null, [Validators.required]],
          }),
        ]),
      })
    );
  }

  public addSkill(person: number): void {
    const skills = this.persons.at(person).get('skills') as FormArray;
    skills.push(
      this.formBuilder.group({
        name: [null, [Validators.required]],
      })
    );
  }

  public removeSkill(person: number, skill: number): void {
    if (this.getSkills(person).length === 1) {
      this.toastrService.warning(
        'La persona debe tener al menos una habilidad',
        'Advertencia'
      );
      return;
    }
    const skills = this.persons.at(person).get('skills') as FormArray;
    skills.removeAt(skill);
  }

  public removePerson(index: number): void {
    if (this.persons.length === 1) {
      this.toastrService.warning(
        'La tarea debe tener al menos una persona',
        'Advertencia'
      );
      return;
    }
    this.persons.removeAt(index);
  }
}
