/*jshint esversion: 6 */

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'; //helps us transform our result from the api into json data
import { Event } from './event';

@Injectable()
export class EventService {

  result: any;

  constructor(private _http: Http) { }

  getEvents() {
   return this._http.get("/api/events")
     .map(result => this.result = result.json());
 }

 getEvent(id) {
    return this._http.get("/api/details/"+id)
      .map(result => this.result = result.json());
  }

  insertEvent(event: Event) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/events', JSON.stringify(event), options) 
      .map(result => this.result = result.json());
  }


}
