import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ShortLinkRedirectComponent } from './short-link-redirect/short-link-redirect.component';
import { ShortLinkComponent } from './short-link/short-link.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: 'shortlink',
    component: ShortLinkComponent
  },
  {
    path: 'r',
    children: [
      { path: '**', component: ShortLinkRedirectComponent}
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
