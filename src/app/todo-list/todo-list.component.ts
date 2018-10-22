import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @select() todos;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  addTodo(input) {
    if (!input.value) {
      return;
    }
    this.ngRedux.dispatch({type: ADD_TODO, title: input.value});
    input.value = '';
  }

  toggleTodo(task) {
    this.ngRedux.dispatch({type: TOGGLE_TODO, id: task.id});
  }

  removeTodo(task) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: task.id});
  }
}
