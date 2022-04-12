import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AmericanComponent } from './american/american.component';
import { AsianComponent } from './asian/asian.component';
import { BritishComponent } from './british/british.component';
import { ChineseComponent } from './chinese/chinese.component';
import { FrenchComponent } from './french/french.component';
import { IndianComponent } from './indian/indian.component';
import { ItalianComponent } from './italian/italian.component';
import { JapaneseComponent } from './japanese/japanese.component';
import { MexicanComponent } from './mexican/mexican.component';
import { NordicComponent } from './nordic/nordic.component';

import { ApiService } from './Service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { DessertComponent } from './dessert/dessert.component';
import { SnackComponent } from './snack/snack.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    AmericanComponent,
    AsianComponent,
    BritishComponent,
    ChineseComponent,
    FrenchComponent,
    IndianComponent,
    ItalianComponent,
    JapaneseComponent,
    MexicanComponent,
    NordicComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    DessertComponent,
    SnackComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
