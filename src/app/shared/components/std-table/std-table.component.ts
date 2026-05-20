import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../models/std';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../todo-list/get-confirm/get-confirm.component';
import { config } from 'rxjs';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  @Input()  getstdArr !: Array<Istd>
  @Output() emitremoveid : EventEmitter<string> = new EventEmitter<string>()
  @Output() emitobj : EventEmitter<Istd> = new EventEmitter<Istd>()
  constructor(
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  trackByFun(index:number, std : Istd){
    return std.stdId
  }

  onRemove(id: string){
    console.log(id);
    let config = new MatDialogConfig()
    config.width = '350px',
    config.disableClose = true
    config.data = `Are you sure, you want to remove todo with id ${id} ? `
    let matD = this._matDialog.open(GetConfirmComponent, config)
    matD.afterClosed().subscribe(confirm => {
      if(confirm){
        this.emitremoveid.emit(id)
      }
    })
  }

  onEdit(obj: Istd){
    this.emitobj.emit(obj)
  }

}
