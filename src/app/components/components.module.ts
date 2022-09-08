import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import { DonaComponent } from './dona/dona.component';




@NgModule({
  declarations: [
    IncrementComponent,
    DonaComponent
  ],
  exports:[
    IncrementComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
