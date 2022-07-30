import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './components/buttons/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './components/buttons/button-secondary/button-secondary.component';

@NgModule({
  declarations: [ButtonPrimaryComponent, ButtonSecondaryComponent],
  imports: [CommonModule],
  exports: [ButtonPrimaryComponent, ButtonSecondaryComponent],
})
export class SharedModule {} // importa at module that need it.
