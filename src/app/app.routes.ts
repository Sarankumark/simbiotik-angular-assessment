import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './features/auth/login/login.component';
import { LayoutComponent } from './features/layout/layout/layout.component';
import { TodoListComponent } from './features/todo/todo-list/todo-list.component';
import { TodoFormComponent } from './features/todo/todo-form/todo-form.component';
import { TodoDetailComponent } from './features/todo/todo-detail/todo-detail.component';
import { WeatherComponent } from './features/weather/weather/weather.component';
import { RoutingMapComponent } from './features/routing-map/routing-map/routing-map.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: 'todo', component: TodoListComponent },
            { path: 'todo/create', component: TodoFormComponent },
            { path: 'todo/edit/:id', component: TodoFormComponent },
            { path: 'todo/:id', component: TodoDetailComponent },
            { path: 'weather', component: WeatherComponent },
            { path: 'map', component: RoutingMapComponent },
        ]
    },
    { 
        path: '**', 
        redirectTo: 'login' 
    }
];