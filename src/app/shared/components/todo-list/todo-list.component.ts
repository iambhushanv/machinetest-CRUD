import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../models/todo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import { config } from 'rxjs';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() gettoodArr !: Array<Itodo>
  @Output() emitremoveId : EventEmitter<string> = new EventEmitter<string>()
  @Output() emiteditOBj : EventEmitter<Itodo> = new EventEmitter<Itodo>()
   constructor(
    private _matDialog : MatDialog
   ){}
  ngOnInit(): void {
  }

  trackByFun(index: number, todo : Itodo){
    return todo.todoId
  }

  onRemove(id: string){
    console.log(id);
    let config = new MatDialogConfig()
    config.width = '300px'
    config.disableClose = true
    config.data = `Are you sure, you want to delete todo with id ${id} ?`
    let dialogC = this._matDialog.open(GetConfirmComponent, config)
    dialogC.afterClosed().subscribe(getconfirm => {
      if(getconfirm){
        this.emitremoveId.emit(id)
      }
    })
  }

  onEdit(todoObj : Itodo){
   this.emiteditOBj.emit(todoObj)
  }

}
