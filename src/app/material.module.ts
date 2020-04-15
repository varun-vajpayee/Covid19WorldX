import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

    @NgModule({
    imports: [
         MatAutocompleteModule,
         MatButtonModule,
         MatCheckboxModule,
         MatDatepickerModule,
         MatFormFieldModule,
         MatInputModule,
         MatRadioModule,
         MatSelectModule,
         MatTableModule,
         MatIconModule,
         MatCardModule
     ]})

     export class MaterialModule {}
