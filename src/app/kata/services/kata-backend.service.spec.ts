import { TestBed } from '@angular/core/testing';

import { KataBackendService } from './kata-backend.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('KataBackendService', () => {
  let service: KataBackendService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.apiURL;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(KataBackendService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach((): void => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#convertInputToOutPut() should GET and return success message', (done) => {
    service.convertInputToOutPut(1).subscribe((res) => {
      expect(res).toEqual('1');
    });

    const req = httpMock.expectOne(apiUrl + '/convertInputToOutput?input=1');
    expect(req.request.method).toBe('GET');
    req.flush(1);
    done();
  });



  it('should throw error with response body when server returns error', (done) => {
    let body!: string;

    service.convertInputToOutPut(42).subscribe(
      () => {},
      (error) => {
        body = error;
      }
    );
    const expected = 'error';

    const testRequest = httpMock.expectOne(
      'http://localhost:8081/api/convertInputToOutput?input=42'
    );
    testRequest.flush(expected, { status: 400, statusText: 'Bad Request' });

    expect(body).toEqual(expected);
    done();
  });
});
