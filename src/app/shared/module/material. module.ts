import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


let Arr = [MatCardModule, MatIconModule, MatButtonModule, MatDialogModule, MatSnackBarModule]

@NgModule({
    exports: [...Arr],
    imports: [...Arr]
})
export class MaterialModule {

}

