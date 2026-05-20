import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  isInEditMode : boolean = false
  @ViewChild('todoItem') todoItem !: ElementRef 
  @Output() emitnewTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Output() emitupdateTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() getEditObj !: Itodo
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let val = changes['getEditObj'].currentValue
    if(val){
      this.isInEditMode = true
      this.todoItem.nativeElement.value = this.getEditObj.todoItem
    }
  }

  onAdd(){
    let todoItemVal = this.todoItem.nativeElement.value
    if(todoItemVal.length > 0){
      let newTodo : Itodo = {
        todoItem: todoItemVal,
        todoId : Date.now().toString()
      }
      console.log(newTodo);
      this.emitnewTodo.emit(newTodo)
      this.todoItem.nativeElement.value = ''
    }

  }

  onUpdate(){
    let updateObj : Itodo = {
      todoItem : this.todoItem.nativeElement.value,
      todoId : this.getEditObj.todoId
    }
    this.emitupdateTodo.emit(updateObj)
    this.todoItem.nativeElement.value = ''
    this.isInEditMode = false
  }

 

}
