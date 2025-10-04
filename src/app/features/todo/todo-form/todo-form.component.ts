import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnInit {
  form: FormGroup;
  todoId?: string;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      isCompleted: [false]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.todoId = params['id'];
        this.isEdit = true;
        if (this.todoId) {
          this.todoService.getTodoById(this.todoId)
            .subscribe(todo => this.form.patchValue(todo));
        }
        else {
          alert('Error while fetching todo')
        }
      }
    });
  }

  submit() {
    if (this.form.invalid) {
      alert("Please fill all the required information")
    };

    const payload = this.form.value;

    if (this.isEdit && this.todoId) {
      this.todoService.updateTodo(this.todoId, payload).subscribe({
        next: () => this.router.navigate(['/todo']),
        error: () => alert('Update failed')
      });
    } else {
      this.todoService.createTodo(payload).subscribe({
        next: () => this.router.navigate(['/todo']),
        error: () => alert('Create failed')
      });
    }
  }
}