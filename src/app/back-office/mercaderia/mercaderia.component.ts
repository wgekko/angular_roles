import { ChangeDetectionStrategy, Component } from '@angular/core';
import { mercaderiaService } from './mercaderia.service';

@Component({
  selector: 'ako-mercaderia',
  templateUrl: './mercaderia.component.html',
  styleUrls: ['./mercaderia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class mercaderiaComponent {
  items$ = this.mercaderiaService.getAll();

  constructor(private mercaderiaService: mercaderiaService) {}
}
