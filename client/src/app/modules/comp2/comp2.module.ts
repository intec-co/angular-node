import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Comp2Component } from './comp2.component';
import { SelectorModule } from 'src/app/core/coponents/selector/selector.module';

@NgModule({
	declarations: [
		Comp2Component
	],
	imports: [
		CommonModule,
		SelectorModule,
		RouterModule.forChild([{
			path: '',
			component: Comp2Component
		}])
	],
	exports: [],
	providers: [],
})
export class Comp2Module { }
