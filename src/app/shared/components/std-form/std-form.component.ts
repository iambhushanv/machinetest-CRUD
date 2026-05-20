import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit, OnChanges {
  isInEditMode: boolean = false
  @ViewChild('fname') fname !: ElementRef
  @ViewChild('lname') lname !: ElementRef
  @ViewChild('email') email !: ElementRef
  @ViewChild('contact') contact !: ElementRef
  @ViewChild('isActive') isActive !: ElementRef
  @Output() emitnewstd: EventEmitter<Istd> = new EventEmitter<Istd>()
  @Output() emitupdatestd: EventEmitter<Istd> = new EventEmitter<Istd>()
  @Input() editobj !: Istd
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let val = changes['editobj'].currentValue
    if (val) {
      this.isInEditMode = true

      this.fname.nativeElement.value = this.editobj.fname
      this.lname.nativeElement.value = this.editobj.lname
      this.email.nativeElement.value = this.editobj.email
      this.contact.nativeElement.value = this.editobj.contact
      this.isActive.nativeElement.value = this.editobj.isActive
    }
  }

  onAdd() {
    let fnameVal = this.fname.nativeElement.value
    let lnameVal = this.lname.nativeElement.value
    let emailVal = this.email.nativeElement.value
    let contactVal = this.contact.nativeElement.value
    let isActiveVal = this.isActive.nativeElement.value === 'true' ? true : false

    if (fnameVal.length > 0 && lnameVal.length > 0 && emailVal.length > 0 && contactVal.length > 0) {
      let newstd: Istd = {
        fname: fnameVal,
        lname: lnameVal,
        email: emailVal,
        contact: contactVal,
        isActive: isActiveVal,
        stdId: Date.now().toString()
      }
      console.log(newstd);
      this.emitnewstd.emit(newstd)
      this.fname.nativeElement.value = ''
      this.lname.nativeElement.value = ''
      this.contact.nativeElement.value = ''
      this.email.nativeElement.value = ''
      this.isActive.nativeElement.value = true
      this.isInEditMode = false

    }
  }

  onUpdate() {
     let fnameVal = this.fname.nativeElement.value
    let lnameVal = this.lname.nativeElement.value
    let emailVal = this.email.nativeElement.value
    let contactVal = this.contact.nativeElement.value
    let isActiveVal = this.isActive.nativeElement.value === 'true' ? true : false

    if (fnameVal.length > 0 && lnameVal.length > 0 && emailVal.length > 0 && contactVal.length > 0) {
       let updatedOBj: Istd = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      isActive: this.fname.nativeElement.value === 'true' ? true : false,
      stdId: this.editobj.stdId
    }
    this.emitupdatestd.emit(updatedOBj)

    this.fname.nativeElement.value = ''
    this.lname.nativeElement.value = ''
    this.contact.nativeElement.value = ''
    this.email.nativeElement.value = ''
    this.isActive.nativeElement.value = true
    this.isInEditMode = false
    }
   

  }


}

