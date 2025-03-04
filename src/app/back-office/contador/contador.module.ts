import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { contadorComponent } from './contador.component';

const routes = [{ path: '', component: contadorComponent }];

@NgModule({
  declarations: [contadorComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class contadorModule {}
