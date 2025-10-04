import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoService } from '../todo.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  loading = false;
  error = '';

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.loading = true;
    this.error = '';
    this.todoService.getTodos().subscribe({
      next: (data) => { this.todos = data; this.loading = false; },
      error: (err) => { this.error = 'Failed to load todos'; this.loading = false; }
    });
  }

  viewTodo(todo: Todo) {
    this.router.navigate(['/todo', todo.id]);
  }

  editTodo(todo: Todo) {
    this.router.navigate(['/todo/edit', todo.id]);
  }

  deleteTodo(todo: Todo) {
    if (!confirm('Are you sure you want to delete this todo?')) return;
    this.todoService.deleteTodo(todo.id).subscribe({
      next: () => this.fetchTodos(),
      error: () => alert('Delete failed')
    });
  }

  clickOnCreate(){
    this.router.navigate(['/todo/create'])
  }
}