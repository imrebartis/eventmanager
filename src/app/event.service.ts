/*jshint esversion: 6 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; //helps us transform our result from the api into json data

@Injectable()
export class EventService {

  result: any;

  constructor(private _http: Http) { }

  getEvents() {
   return this._http.get("/api/events")
     .map(result => this.result = result.json());
 }

}
