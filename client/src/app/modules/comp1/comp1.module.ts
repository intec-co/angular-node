import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material.module';
import { Comp1Component } from './comp1.component';
import { Routes, RouterModule } from '@angular/router';
import { SelectorModule } from 'src/app/core/coponents/selector/selector.module';

const routes: Routes = [
	{
		path: '',
		component: Comp1Component
	}
];

@NgModule({
	declarations: [
		Comp1Component
	],
	imports: [
		CommonModule,
		MaterialModule,
		SelectorModule,
		RouterModule.forChild(routes)
	],
	exports: [],
	providers: [],
})
export class Comp1Module { }
