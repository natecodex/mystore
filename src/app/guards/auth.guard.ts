import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem("auth_token");
  if (token !== undefined && token !== null && token !== ''){
    return true;
  }
  window.location.href = '/login';
  return false;
};
