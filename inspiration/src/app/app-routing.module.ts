import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { AllComponent } from './all/all.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  {
    path: 'inspiration', component: MainComponent, children : [
      {path: 'spotlight', component: SpotlightComponent},
      {path: 'all', component: AllComponent}
    ]
  },
  {
    path: '**', component: EmptyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
