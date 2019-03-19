import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';

const notFoundRoutes: Routes = [
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(notFoundRoutes)],
    exports: [RouterModule]
})
export class NotFoundRoutingModule {}
