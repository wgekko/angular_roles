import { createSuccesfulResponse } from '../helpers';
import { FakeHandler } from './fake-handler.interface';

const transactionsDb = [
  {
    id: '87GTH875',
    date: '2025-02-24',
    fromTo: 'Catalina Perez',
    description: 'Orden-1187752',
    amount: 120.5,
  },
  {
    id: '76TGC899',
    date: '2025-02-23',
    fromTo: 'Eduado Apiolaza',
    description: 'SH263645 Reingreso',
    amount: -3200,
  },
  {
    id: '66PTO374',
    date: '2025-02-22',
    fromTo: 'Ana Andrade',
    description: 'Orden-1187751',
    amount: 578.55,
  },
  {
    id: '09UYT652',
    date: '2025-02-22',
    fromTo: 'Roberto Gimenez',
    description: 'Orden-1187750',
    amount: 176.95,
  },
  {
    id: '66YNC435',
    date: '2025-02-21',
    fromTo: 'Julian Tarditi',
    description: 'Orden-1187749',
    amount: 99.99,
  },
];

export const contadorHandlers: FakeHandler[] = [
  {
    match: (req) =>
      req.url === 'contador/transactions' && req.method === 'GET',
    handle: () => {
      return createSuccesfulResponse(transactionsDb);
    },
  },
];
