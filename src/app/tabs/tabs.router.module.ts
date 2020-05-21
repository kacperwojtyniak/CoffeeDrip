import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'coffees',
        children: [
          {
            path: '',
            loadChildren: '../coffees/coffees.module#CoffeesPageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [{
          path: '',
          loadChildren: '../about/about.module#AboutPageModule'
        }]

      },
      {
        path: 'coffeeDetails',
        loadChildren: '../coffee-details/coffee-details.module#CoffeeDetailsPageModule'
      },
      {
        path: '',
        redirectTo: '/tabs/coffees',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/coffees',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/tabs/coffees'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
