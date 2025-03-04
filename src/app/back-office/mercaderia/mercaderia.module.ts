import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { mercaderiaComponent } from './mercaderia.component';

const routes = [{ path: '', component: mercaderiaComponent }];

@NgModule({
  declarations: [mercaderiaComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class mercaderiaModule {}
