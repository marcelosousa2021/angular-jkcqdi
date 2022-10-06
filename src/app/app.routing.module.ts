import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'one', component: OneComponent, outlet: 'aux2' },
      { path: 'two', component: TwoComponent, outlet: 'aux2' },
    ],
  },
  { path: 'one', component: OneComponent, outlet: 'aux2' },
  { path: 'two', component: TwoComponent, outlet: 'aux2' },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
