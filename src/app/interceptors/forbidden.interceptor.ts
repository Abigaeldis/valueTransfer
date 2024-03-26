import { HttpInterceptorFn } from '@angular/common/http';

export const forbiddenInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
