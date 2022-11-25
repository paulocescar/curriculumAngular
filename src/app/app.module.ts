import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { AppHeaderComponent } from './ui/app-header/app-header.component';
import { AppFooterComponent } from './ui/app-footer/app-footer.component';
import { AppMenuComponent } from './ui/app-menu/app-menu.component';
import { ConfirmDlgComponent } from './ui/confirm-dlg/confirm-dlg.component';

@NgModule({
  declarations: [
    AppComponent,
    CurriculoComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppMenuComponent,
    ConfirmDlgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
