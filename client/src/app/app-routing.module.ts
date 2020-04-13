import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'comp1',
		loadChildren: () => import('./modules/comp1/comp1.module').then(mod => mod.Comp1Module)
	},
	{
		path: 'comp2',
		loadChildren: () => import('./modules/comp2/comp2.module').then(mod => mod.Comp2Module)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
