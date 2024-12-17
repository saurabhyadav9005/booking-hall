import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowsehallsComponent } from './components/browsehalls/browsehalls.component';
import { BookhallComponent } from './components/bookhall/bookhall.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const clientRoutes: Routes = [
  { path: '', component: BrowsehallsComponent },
  { path: 'book/:id', component: BookhallComponent },
];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(clientRoutes)
  ]
})
export class ClientModule { }
