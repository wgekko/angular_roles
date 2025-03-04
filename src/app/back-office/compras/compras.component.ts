import { ChangeDetectionStrategy, Component } from '@angular/core';
import { comprasService } from './compras.service';

@Component({
  selector: 'ako-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class comprasComponent {
  compras$ = this.comprasService.getAll();

  constructor(private comprasService: comprasService) {}
}
