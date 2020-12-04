import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsHomeComponent } from './plants-home/plants-home.component';
import { PlantsAboutComponent } from './plants-about/plants-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: PlantsHomeComponent,
  },
  {
    path: 'about',
    component: PlantsAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
