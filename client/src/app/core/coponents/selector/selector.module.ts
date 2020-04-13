import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sel1Component } from './selector1/selector1.component';
import { Sel2Component } from './selector2/selector2.component';

@NgModule({
	declarations: [
		Sel1Component,
		Sel2Component
	],
	imports: [CommonModule],
	exports: [
		Sel2Component,
		Sel1Component
	],
	providers: [],
})
export class SelectorModule { }
