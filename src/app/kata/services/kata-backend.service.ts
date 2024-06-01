import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KataBackendService {
  private readonly API_URL: string = environment.apiURL;
  constructor(private http: HttpClient) {}

  convertInputToOutPut(input: number): Observable<string> {
    const convertInputToOutPutUrl = this.API_URL + '/convertInputToOutput';

    let queryParams = new HttpParams();
    queryParams = queryParams.append('input', input);

    return this.http
      .get(`${convertInputToOutPutUrl}`, {
        params: queryParams,
        responseType: 'text',
      })
      .pipe(
        map((output: string) => output),
        catchError((error: HttpErrorResponse) => {
            return throwError(() =>error.error);
        })
      );
  }
}
