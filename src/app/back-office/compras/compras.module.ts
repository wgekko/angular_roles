import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { comprasComponent } from './compras.component';
import { TranslatecomprastatusPipe } from './translate-status.pipe';

const routes = [{ path: '', component: comprasComponent }];
@NgModule({
  declarations: [comprasComponent, TranslatecomprastatusPipe],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class comprasModule {}
