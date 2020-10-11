import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  apiBaseUrl = 'https://backend-invoicemngt.herokuapp.com';
  
  constructor(private http: HttpClient) { }

  usergraph(value) {
    return this.http.post(`${this.apiBaseUrl}/usergraph`,value).pipe(
      catchError(this.handleError)
    );
  }

  admingraph() {
    return this.http.get(`${this.apiBaseUrl}/admingraph`).pipe(
      catchError(this.handleError)
    );
  }

  admingraph1() {
    return this.http.get(`${this.apiBaseUrl}/admingraph1`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }

}