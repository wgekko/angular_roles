import { Pipe, PipeTransform } from '@angular/core';
import { comprastatus } from './compras.interface';

@Pipe({
  name: 'translatecomprastatus',
})
export class TranslatecomprastatusPipe implements PipeTransform {
  transform(status: comprastatus): any {
    switch (status) {
      case 'Cancelado':
        return 'Cancelado';
      case 'Entregado':
        return 'Entregado';
      case 'enCamino':
        return 'enCamino';
      case 'porEntregar':
        return 'porEntregar'; 
      case 'Pendiente':
        return 'Pendiente';
      case 'enPreparación':
        return 'enPreparación';  
      case 'Preparado':
        return 'Preparado';
    }

    return status;
  }
}
