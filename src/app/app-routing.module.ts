import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { DashboardComponent } from './weather/dashboard/dashboard.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { SearchComponent } from './weather/search/search.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    pathMatch: 'full' 
  },
  { 
    path: 'dashboard/:param', 
    component: DashboardComponent
  },
  { 
    path: 'search', 
    component: SearchComponent 
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
