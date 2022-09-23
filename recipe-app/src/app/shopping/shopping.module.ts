import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShoppingComponent } from './shopping.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [SharedModule, FormsModule, RouterModule, ShoppingRoutingModule],
  declarations: [
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
})
export class ShoppingModule {}
