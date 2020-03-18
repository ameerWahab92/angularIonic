import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [{ path: '**', component: EmptyRouteComponent }];

@NgModule({
  providers: [{ provide: APP_BASE_HREF, useValue: '/my/app' }],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
