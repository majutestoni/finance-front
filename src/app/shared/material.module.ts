import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

const MaterialModules = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  imports: MaterialModules,
  exports: MaterialModules
})
export class MaterialModule {}