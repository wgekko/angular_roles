export type comprastatus =
  | 'Pendiente'
  | 'enPreparación'
  | 'Preparado'
  | 'porEntregar'
  | 'enCamino'
  | 'Entregado'
  | 'Cancelado';

export interface Order {
  id: string;
  orderDate: string;
  clientName: string;
  itemsCount: number;
  total: number;
  status: comprastatus;
}
