import { HttpBackend, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  contadorHandlers,
  authHandlers,
  mercaderiaHandlers,
  comprasHandlers,
} from './handlers';
import {
  forbiddenErrorResponse,
  notFoundErrorResponse,
} from './helpers/error-responses';

@Injectable({
  providedIn: 'root',
})
export class FakeBackendService extends HttpBackend {
  handlers = [
    ...contadorHandlers,
    ...authHandlers,
    ...comprasHandlers,
    ...mercaderiaHandlers,
  ];

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    if (req.url !== 'login' && req.headers.has('Authorization') === false) {
      return forbiddenErrorResponse(req);
    }

    for (let handler of this.handlers) {
      if (handler.match(req)) {
        return handler.handle(req);
      }
    }

    return notFoundErrorResponse(req);
  }
}
