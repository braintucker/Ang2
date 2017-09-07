import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimalService } from './animal.service';
import { RandomAnimalComponent } from './random-animal.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, RandomAnimalComponent],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
