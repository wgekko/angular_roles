import { createSuccesfulResponse } from '../helpers';
import { FakeHandler } from './fake-handler.interface';

const comprasDb = [
  {
    id: '1187745',
    orderDate: '2025-02-12',
    clientName: 'Franco',
    itemsCount: 5,
    total: 250.45,
    status: 'entregado',
  },
  {
    id: '1187746',
    orderDate: '2025-02-12',
    clientName: 'Claudia',
    itemsCount: 1,
    total: 19.99,
    status: 'por entregar',
  },
  {
    id: '1187747',
    orderDate: '2025-02-14',
    clientName: 'Javier',
    itemsCount: 3,
    total: 150,
    status: 'cancelado',
  },
  {
    id: '1187748',
    orderDate: '2025-02-15',
    clientName: 'Marisa',
    itemsCount: 10,
    total: 650.87,
    status: 'preparado',
  },
  {
    id: '1187749',
    orderDate: '2025-02-20',
    clientName: 'Julian',
    itemsCount: 1,
    total: 99.99,
    status: 'por entregar',
  },
  {
    id: '1187750',
    orderDate: '2025-02-21',
    clientName: 'Beatriz',
    itemsCount: 3,
    total: 176.95,
    status: 'pendiente',
  },
  {
    id: '1187751',
    orderDate: '2025-02-21',
    clientName: 'Ana',
    itemsCount: 8,
    total: 578.55,
    status: 'pendiente',
  },
  {
    id: '1187752',
    orderDate: '2025-02-23',
    clientName: 'Catalina',
    itemsCount: 2,
    total: 120.5,
    status: 'pendiente',
  },
];

export const comprasHandlers: FakeHandler[] = [
  {
    match: (req) => req.url === 'compras' && req.method === 'GET',
    handle: () => {
      return createSuccesfulResponse(
        comprasDb.sort((a, b) => (a.id > b.id ? -1 : 1))
      );
    },
  },
];
