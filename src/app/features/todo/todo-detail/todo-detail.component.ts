import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TodoService, Todo } from '../todo.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit {
  todo$!: Observable<Todo>;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {}

  ngOnInit(): void {
    this.todo$ = this.route.params.pipe(
      switchMap(params => this.todoService.getTodoById(params['id']))
    );
  }
}