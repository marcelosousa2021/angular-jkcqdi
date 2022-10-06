import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OneComponent,
    TwoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
