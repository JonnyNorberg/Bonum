import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 

  }

  americanApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=american&app_id=8e6656fc&app_key=e4799d4131fd043eee979da96ad3dc87&cuisineType=American'

  topAmerican():Observable<any> {

    return this.http.get(this.americanApiUrl);
  }

  asianApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=asian&app_id=8e6656fc&app_key=e4799d4131fd043eee979da96ad3dc87&cuisineType=Asian'

  topAsian():Observable<any> {

    return this.http.get(this.asianApiUrl);
  }


  britishApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=british&app_id=8e6656fc&app_key=e4799d4131fd043eee979da96ad3dc87&cuisineType=British'

  topBritish():Observable<any> {

    return this.http.get(this.britishApiUrl);
  }

  chineseApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=chinese&app_id=8e6656fc&app_key=e4799d4131fd043eee979da96ad3dc87&cuisineType=Chinese'

  topChinese():Observable<any> {

    return this.http.get(this.chineseApiUrl);
  }

  frenchApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=french&app_id=8e6656fc&app_key=e4799d4131fd043eee979da96ad3dc87&cuisineType=French'

  topFrench():Observable<any> {

    return this.http.get(this.frenchApiUrl);
  }

  indianApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=indian&app_id=8e6656fc&app_key=e4799d4131fd043eee979da96ad3dc87&cuisineType=Indian'

  topIndian():Observable<any> {

    return this.http.get(this.indianApiUrl);
  }

  breakfastApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=breakfast&app_id=8e6656fc&app_key=e4799d4131fd043eee979da96ad3dc87&mealType=Breakfast'

  topBreakfast():Observable<any> {

    return this.http.get(this.breakfastApiUrl);
  }

  lunchApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=lunch&app_id=8e6656fc&app_key=e4799d4131fd043eee979da96ad3dc87&mealType=Lunch'

  topLunch():Observable<any> {

    return this.http.get(this.lunchApiUrl);
  }

  dinnerApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=8e6656fc&app_key=e4799d4131fd043eee979da96ad3dc87&mealType=Dinner'

  topDinner():Observable<any> {

    return this.http.get(this.dinnerApiUrl);
  }

  dessertApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=dessert&app_id=8e6656fc&app_key=e4799d4131fd043eee979da96ad3dc87&mealType=Teatime'

  topDessert():Observable<any> {

    return this.http.get(this.dessertApiUrl);
  }

  snackApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=snack&app_id=8e6656fc&app_key=e4799d4131fd043eee979da96ad3dc87&mealType=Snack'

  topSnack():Observable<any> {

    return this.http.get(this.snackApiUrl);
  }

  
}
