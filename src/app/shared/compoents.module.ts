import { NgModule } from '@angular/core';
import { Header } from './components/header/header';

const ComponentsModules = [Header];

@NgModule({
  imports: ComponentsModules,
  exports: ComponentsModules,
})

export class ComponentsModule {}
