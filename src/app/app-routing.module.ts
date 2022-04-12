import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start/start.component';

import { AmericanComponent } from './american/american.component';
import { AsianComponent } from './asian/asian.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { DessertComponent } from './dessert/dessert.component';
import { SnackComponent } from './snack/snack.component';

import { BritishComponent } from './british/british.component';
import { ChineseComponent } from './chinese/chinese.component';
import { FrenchComponent } from './french/french.component';
import { IndianComponent } from './indian/indian.component';
import { ItalianComponent } from './italian/italian.component';
import { JapaneseComponent } from './japanese/japanese.component';
import { MexicanComponent } from './mexican/mexican.component';
import { NordicComponent } from './nordic/nordic.component';

const routes: Routes = [

  {path:'start', component:StartComponent},
  {path:'american', component:AmericanComponent},
  {path:'asian', component:AsianComponent},
  {path:'british', component:BritishComponent},
  {path:'chinese', component:ChineseComponent},
  {path:'french', component:FrenchComponent},
  {path:'indian', component:IndianComponent},
  {path:'italian', component:ItalianComponent},
  {path:'japanese', component:JapaneseComponent},
  {path:'mexican', component:MexicanComponent},
  {path:'nordic', component:NordicComponent},
  {path:'breakfast', component:BreakfastComponent},
  {path:'lunch', component:LunchComponent},
  {path:'dinner', component:DinnerComponent},
  {path:'snack', component:SnackComponent},
  {path:'dessert', component:DessertComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
