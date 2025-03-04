import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TransactionsService } from './transactions';

@Component({
  selector: 'ako-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class contadorComponent {
  transactions$ = this.transactionsService.getAll();

  constructor(private transactionsService: TransactionsService) {}
}
