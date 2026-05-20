import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/std';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {
  getEditObj !: Istd
   stdArr: Array<Istd> = [
    {
      fname: 'Jhon',
      lname: 'Doe',
      email: 'jhon@gmail.com',
      contact: 1234567890,
      stdId: '123',
      isActive: true
    },
    {
      fname: 'Michael',
      lname: 'Johnson',
      email: 'michael@gmail.com',
      contact: 9876543210,
      stdId: '124',
      isActive: false
    },
    {
      fname: 'Emily',
      lname: 'Davis',
      email: 'emily@gmail.com',
      contact: 9123456780,
      stdId: '125',
      isActive: true
    },
    {
      fname: 'Chris',
      lname: 'Wilson',
      email: 'chris@gmail.com',
      contact: 8765432190,
      stdId: '126',
      isActive: false
    }
  ]


  
  constructor(
    private _matsnackBar : SnackbarService
  ) { }
  ngOnInit(): void {
  }

  getnewstd(obj:Istd){
    this.stdArr.unshift(obj)
    this._matsnackBar.snackBaropen(`The new student ${obj.fname} is added successfully !!!`)
  }

  getremoveid(id: string){
    let getindex = this.stdArr.findIndex(s => s.stdId === id)
    this.stdArr.splice(getindex,1)
    this._matsnackBar.snackBaropen(`The student with id ${id} is removed successfully !!!`)

  }

  geteditobj(obj: Istd){
    this.getEditObj = obj
  }

  getupdatestd(obj: Istd){
    let getIndex = this.stdArr.findIndex( s => s.stdId === obj.stdId)
    this.stdArr[getIndex] = obj
    this._matsnackBar.snackBaropen(`The student with id ${obj.stdId} is updated successfully !!!`)

  }

}
