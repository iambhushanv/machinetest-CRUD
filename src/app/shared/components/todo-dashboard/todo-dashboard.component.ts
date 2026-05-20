import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todo';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  editObj !: Itodo

  todosArr: Array<Itodo> = [
    {
      todoItem: 'JS',
      todoId: '123'
    },
    {
      todoItem: 'TS',
      todoId: '124',
    },
    {
      todoItem: 'Angular',
      todoId: '125'
    }
  ]

  constructor(
    private _matsnackbar: SnackbarService
  ) { }
  ngOnInit(): void {
  }

  getnewTodo(todo: Itodo) {
    this.todosArr.unshift(todo)
    this._matsnackbar.snackBaropen(`The new todo with id ${todo.todoId} added successfully !!!`)
  }

  getremoveId(id: string) {
    let getIndex = this.todosArr.findIndex(t => t.todoId === id)
    this.todosArr.splice(getIndex, 1)
    this._matsnackbar.snackBaropen(`The todo item with id ${id} removed successfully !!!`)
  }
  geteditObj(obj: Itodo) {
    this.editObj = obj

  }

  getupdatetodo(obj: Itodo) {
    let getIndex = this.todosArr.findIndex(t => t.todoId === obj.todoId)
    this.todosArr[getIndex] = obj
    this._matsnackbar.snackBaropen(`The todo item with id ${obj.todoId} updated successfully !!!`)

  }

}
