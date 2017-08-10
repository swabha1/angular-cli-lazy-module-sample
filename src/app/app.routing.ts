import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'lazy_modules', loadChildren: './lazy/lazy.module#LazyModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {}