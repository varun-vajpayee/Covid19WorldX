import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
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
         MatSelectModule
     ]})

     export class MaterialModule {}
