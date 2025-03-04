import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hasRole, HasRoleGuard } from '../auth/guards/has-role.guard';
import { BackOfficeLayoutComponent } from './back-office-layout/back-office-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BackOfficeLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'compras',
        canActivate: [hasRole(['compras', 'gerente'])],
        canLoad: [hasRole(['compras', 'gerente'])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['compras', 'gerente'],
        // },
        loadChildren: () =>
          import('./compras/compras.module').then((m) => m.comprasModule),
      },
      {
        path: 'mercaderia',
        canActivate: [hasRole(['mercaderia', 'gerente'])],
        canLoad: [hasRole(['mercaderia', 'gerente'])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['mercaderia', 'gerente'],
        // },
        loadChildren: () =>
          import('./mercaderia/mercaderia.module').then((m) => m.mercaderiaModule),
      },
      {
        path: 'contador',
        canActivate: [hasRole(['contador', 'gerente'])],
        canLoad: [hasRole(['contador', 'gerente'])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['contador', 'gerente'],
        // },
        loadChildren: () =>
          import('./contador/contador.module').then(
            (m) => m.contadorModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeRoutingModule {}
