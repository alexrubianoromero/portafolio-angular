import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
// components
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

//components

const appRoutes: Routes = [
	{ path:'',component: PortafolioComponent},
	{ path:'about',component: AboutComponent},
	{ path:'item',component: ItemComponent},
	{ path:'**',component: PortafolioComponent}
];
export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);