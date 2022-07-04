import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {  MatButtonModule} from '@angular/material/button';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
 
    imports: [
   
      MatFormFieldModule,
      MatTabsModule,
      MatSelectModule,
      MatSliderModule,
      MatIconModule,
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      MatGridListModule
    ],
    exports: [ MatFormFieldModule,
        MatTabsModule,
        MatSelectModule,
        MatSliderModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatGridListModule
    ] 
  })
  export class MaterialModule { }
  